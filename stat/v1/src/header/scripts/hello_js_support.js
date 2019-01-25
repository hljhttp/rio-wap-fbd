var hello_js_support = (function(g) {

    const logoutDelay = 1500;
    const overlayDelay = 10000;

    var loginDisplayType = {
        PopUp: 'popup',
        None: 'none',
        Page: 'page' // in cordova you can not use Page Display Type
    };

    var responseType = 'token id_token';
    var postLogoutRedirectURI = null;

    var helloNetwork = {
        adB2CSignInSignUp: 'adB2CSignInSignUp',
        adB2CEditProfile: 'adB2CEditProfile',
        adB2CResetPassword: 'adB2CResetPassword'
    };

    var online = function (network) {
        var session = hello(network).getAuthResponse(network);
        var currentTime = (new Date()).getTime() / 1000;
        var onl = session && session.access_token && session.expires > currentTime;
        if (session) {
            if (!onl && network===helloNetwork.adB2CSignInSignUp) {
                // clearing local storage session
                // we can't rely on auth callback on iOS when we have session which is not valid, so if we have session we must clean it
                hello.utils.store(helloNetwork.adB2CSignInSignUp, null);
            }
        }
        return onl;
    };

    var isInitializedFlag = false;
    var isInitStarted = false;

    var clientId = null;
    var tenantName = null;
    var signInSignUpPolicyName = null;
    var editProfilePolicyName = null;
    var resetPasswordPolicyName = null;
    var selLang = null;
    
    var init = function(cId, tName, signInSignUpPN, editProfilePN, resetPasswordPN, sLang) {
        clientId = cId;
        tenantName = tName;
        signInSignUpPolicyName = signInSignUpPN;
        editProfilePolicyName = editProfilePN;
        resetPasswordPolicyName = resetPasswordPN;
        selLang = sLang;

        isInitStarted = false;

        var redirectURI = window.cordova ? FORMVIEWER_FOR_MOBILE_REDIRECT_URL : [window.location.protocol, '//', window.location.host, window.location.pathname].join('');
        postLogoutRedirectURI = window.cordova ? FORMVIEWER_FOR_MOBILE_REDIRECT_URL : isADALOrMSALCallback() ? window.location.href.substring(0,window.location.href.indexOf('#')): window.location.href;
    
        var helloJsonInit = {};
        
        hello.init({
            adB2CSignInSignUp: {
                name: 'Azure Active Directory B2C',
                oauth: {
                    version: 2,
                    auth: "https://"+tenantName+".b2clogin.com/" + tenantName +".onmicrosoft.com/" + signInSignUpPolicyName + "/oauth2/v2.0/authorize"+(selLang!=null ? "?ui_locales="+selLang : ""),
                    grant: "https://"+tenantName+".b2clogin.com/" + tenantName +".onmicrosoft.com/" + signInSignUpPolicyName + "/oauth2/v2.0/token"
                },
                refresh: true,
                scope_delim: ' ',
                logout: function (callback) {
                    //clearing local storage session
                    hello.utils.store(helloNetwork.adB2CSignInSignUp, null);

                    if (window.cordova) {
                        showSpinner();
                        var popup = hello.utils.popup("https://"+tenantName+".b2clogin.com/" + tenantName + ".onmicrosoft.com/" + signInSignUpPolicyName + "/oauth2/v2.0/logout?p=" + signInSignUpPolicyName + //"&id_token_hint=" +
                            //id_token +
                            "&post_logout_redirect_uri=" + encodeURIComponent(postLogoutRedirectURI), "_blank", { hidden: 'yes' });
                        popup.addEventListener('loadstart', function(e) {
                            if (e.url.indexOf(redirectURI) > -1) {
                                setTimeout(function() {
                                    popup.close();
                                    callback();
                                }, logoutDelay);
                            }
                        });
                    } else {
                        window.location = "https://"+tenantName+".b2clogin.com/" + tenantName + ".onmicrosoft.com/"+signInSignUpPolicyName+"/oauth2/v2.0/logout?post_logout_redirect_uri=" + encodeURIComponent(postLogoutRedirectURI);
                    }
                },
                xhr: function (p) {
                    var token = p.query.access_token;
                    delete p.query.access_token;
                    if (token) {
                        p.headers = {
                            "Authorization": "Bearer " + token,
                        };
                    }

                    if (p.method === 'post' || p.method === 'put') {
                        //toJSON(p);
                        if (typeof (p.data) === 'object') {
                            // Convert the POST into a javascript object
                            try {
                                p.data = JSON.stringify(p.data);
                                p.headers['content-type'] = 'application/json';
                            } catch (e) { }
                        }
                    } else if (p.method === 'patch') {
                        hello.utils.extend(p.query, p.data);
                        p.data = null;
                    }
                    return true;
                },
                // Don't even try submitting via form.
                // This means no POST operations in <=IE9
                form: false
            }
        });        
        helloJsonInit.adB2CSignInSignUp = clientId;
        
        if (editProfilePolicyName) {
            hello.init({
                adB2CEditProfile: {
                    name: 'Azure Active Directory B2C',
                    oauth: {
                        version: 2,
                        auth: "https://"+tenantName+".b2clogin.com/"+tenantName+".onmicrosoft.com/"+editProfilePolicyName+"/oauth2/v2.0/authorize"+(selLang!=null ? "?ui_locales="+selLang : ""),
                        grant: "https://"+tenantName+".b2clogin.com/"+tenantName+".onmicrosoft.com/"+editProfilePolicyName+"/oauth2/v2.0/token"                     
                    },
                    refresh: false,
                    scope_delim: ' ',
                    logout: function (p) {
                        //get id_token from auth response
                        var id_token = hello(helloNetwork.adB2CEditProfile).getAuthResponse().id_token;
                        //clearing local storage session
                        hello.utils.store(helloNetwork.adB2CEditProfile, null);
                    }
                }
            });
            
            helloJsonInit.adB2CEditProfile = clientId;
        }

        if (resetPasswordPolicyName) {
            hello.init({
                adB2CResetPassword: {
                    name: 'Azure Active Directory B2C',
                    oauth: {
                        version: 2,
                        auth: "https://"+tenantName+".b2clogin.com/"+tenantName+".onmicrosoft.com/"+resetPasswordPolicyName+"/oauth2/v2.0/authorize"+(selLang!=null ? "?ui_locales="+selLang : ""),
                        grant: "https://"+tenantName+".b2clogin.com/"+tenantName+".onmicrosoft.com/"+resetPasswordPolicyName+"/oauth2/v2.0/token"                     
                    },
                    refresh: false,
                    scope_delim: ' ',
                    logout: function (p) {
                        //get id_token from auth response
                        var id_token = hello(helloNetwork.adB2CResetPassword).getAuthResponse().id_token;
                        //clearing local storage session
                        hello.utils.store(helloNetwork.adB2CResetPassword, null);
                    }
                }
            });
            
            helloJsonInit.adB2CResetPassword = clientId;
        }
        
        hello.init(helloJsonInit,
            {
                redirect_uri: redirectURI,
                scope: 'openid ' + clientId,
                response_type: responseType,
                popup: {
                    location:'no',
                    closebuttoncaption:' ',
                    hidenavigationbuttons:'yes',
                    zoom: 'no',
		    toolbar: 'no'
                }
            });

        isInitializedFlag = true; 
        hello.on('auth', function (auth) {
            if (auth) {
                if (auth.error && auth.error.code==="cancelled") {
                    login(helloNetwork.adB2CSignInSignUp, loginDisplayType.None);
                } else if (auth.network===helloNetwork.adB2CEditProfile) {
                    // workaround to be able to update user info
                    var idt = TogFormViewer.Utils._extractIdToken(auth.authResponse.id_token);
                    currentUser.name = idt.name;
                    $('.username').html(currentUser.name);
                }
            }
        });         
        
        if (!online(helloNetwork.adB2CSignInSignUp)) {
            setTimeout(function() {
                setOverlay();
            }, overlayDelay);
            login(helloNetwork.adB2CSignInSignUp, loginDisplayType.None);
        } else {
            // we can't rely on auth callback on iOS when we have session which is not valid, so if we are online (have session) we directly execute initAfterADALSetup
            initAfterADALSetup();
            $('#loginLinkOverlay').remove();//Remove overlay added on logout
        }
    };

    var afterLogout = function () {
        // destroy form viewer so it is properly initialized again
        destroyFormViewer();
        // we need this short delay so that the previous (hidden logout) popup is closed and the new one is shown for authenticating user
        setTimeout(function() {
            init(clientId,tenantName,signInSignUpPolicyName,editProfilePolicyName,resetPasswordPolicyName,selLang);
        }, 100);
        setTimeout(function() {
            hideSpinner();
            setOverlay();
        }, overlayDelay);
    };

    var login = function (network, displayType) {
        if (!network) {
            network = helloNetwork.adB2CSignInSignUp;
        }

        if (!displayType) {
            displayType = window.cordova ? loginDisplayType.PopUp : loginDisplayType.Page;
        }

        //in case of silent renew, check if the session is still active otherwise ask the user to login again
        if (!online(network) && displayType === loginDisplayType.None) {
            login(network, window.cordova ? loginDisplayType.PopUp : loginDisplayType.Page);
            return;
        }

        // in cordova you can not use Page Display Type
        hello(network).login({ display: displayType }).then(function (auth) {
            if (network===helloNetwork.adB2CSignInSignUp) {
                isInitStarted = true;
                $('#loginLinkOverlay').remove();//Remove overlay added on logout
                initAfterADALSetup();
                $('#loginLinkOverlay').remove();//Remove overlay added on logout
            }
        }, function (e) {
            if ('Iframe was blocked' in e.error.message) {
                login(network, window.cordova ? loginDisplayType.PopUp : loginDisplayType.Page);
                return;
            }
            alert('Signin error: ' + e.error.message);
        });

    };

    var logout = function () {
        policyLogout(helloNetwork.adB2CEditProfile);
        policyLogout(helloNetwork.adB2CResetPassword);
        policyLogout(helloNetwork.adB2CSignInSignUp);
        return false;
    };

    var setOverlay = function() {
        if (window.cordova && !isInitStarted) {
            $('#loginLinkOverlay').remove();//Remove overlay added on logout
            $loginLinkDiv = $('<div id="loginLinkOverlay" style="margin:0; padding:0; position: absolute; top:0; left:0; right:0; bottom:0; height:100%; width:100%; z-index:9999; background: #fff;"><div style="margin:150px 0; text-align:center;" id="loginLinkWrapper"><a name="loginlink" class="loginLink" onclick="hello_js_support.login()">Login</a></div></div>');
            $("body").append($loginLinkDiv);
        }
    };

    var policyLogout = function (network) {
        if (!network) {
            network = helloNetwork.adB2CSignInSignUp;
        }

        if (online(network)) {
            hello.logout(network, { force: true }).then(function (auth) {
                if (network===helloNetwork.adB2CSignInSignUp) {
                    afterLogout();
                }
            }, function (e) {
                alert('Logout error: ' + e.error.message);
            });
        }
        isInitializedFlag = false;
        isInitStarted = false;
    };

    var editProfile = function () {
        login(helloNetwork.adB2CEditProfile);
    };
    
    var resetPassword = function () {
        login(helloNetwork.adB2CResetPassword);
    };

    var getAccessToken = function () {
        var authResponse = hello(helloNetwork.adB2CSignInSignUp).getAuthResponse();
        return authResponse.access_token;
    };
    
    var executeCallbackWithAccessToken = function (callbackfnc) {
        var session = hello(helloNetwork.adB2CSignInSignUp).getAuthResponse();
        var currentTime = (new Date()).getTime() / 1000;
        var onl = session && session.access_token && session.expires > currentTime;
        if (!onl) {
            console.log('hello.js - acquiring new token'); 
            // clearing local storage session
            // we can't rely on auth callback on iOS when we have session which is not valid, so if we have session we must clean it
            hello.utils.store(helloNetwork.adB2CSignInSignUp, null);
            hello(helloNetwork.adB2CSignInSignUp).login({ display: loginDisplayType.PopUp, force: true }).then(function (auth) {
                console.log('now callback');
                callbackfnc(auth.authResponse.access_token);
            }, function (e) {
                logout();
            });    
        } else {
            console.log('hello.js - using existing token'); 
            callbackfnc(session.access_token);
        }
    };

    var isInitialized = function () {
        return isInitializedFlag;
    };
    
    var getSession = function() {
        return hello(helloNetwork.adB2CSignInSignUp).getAuthResponse(helloNetwork.adB2CSignInSignUp);
    };
    
    var getClientId = function() {
        return clientId;
    };
    
    var getTenantName = function() {
        return tenantName;
    };

    var setOffline = function() {
        isInitializedFlag = false;
    };
    
    var updateLanguage = function(sLang) {
        if (sLang===selLang) {
            return;
        }
        selLang = sLang;
        postLogoutRedirectURI = _updatePostLogoutRedirectUri(postLogoutRedirectURI,selLang);

        hello.init({
            adB2CSignInSignUp: {
                oauth: {
                    auth: "https://"+tenantName+".b2clogin.com/" + tenantName +".onmicrosoft.com/" + signInSignUpPolicyName + "/oauth2/v2.0/authorize",
                },
                logout: function (callback) {
                    //clearing local storage session
                    hello.utils.store(helloNetwork.adB2CSignInSignUp, null);

                    if (window.cordova) {
                        var popup = hello.utils.popup("https://"+tenantName+".b2clogin.com/" + tenantName + ".onmicrosoft.com/" + signInSignUpPolicyName + "/oauth2/v2.0/logout?p=" + signInSignUpPolicyName + //"&id_token_hint=" +
                            //id_token +
                            "&post_logout_redirect_uri=" + encodeURIComponent(postLogoutRedirectURI), "_blank", { hidden: 'yes' });
                        popup.addEventListener('loadstart', function(e) {
                            if (e.url.indexOf(redirectURI) > -1) {
                                setTimeout(function() {
                                    popup.close();
                                    callback();
                                }, logoutDelay);
                            }
                        });
                    } else {
                        window.location = "https://"+tenantName+".b2clogin.com/" + tenantName + ".onmicrosoft.com/"+signInSignUpPolicyName+"/oauth2/v2.0/logout?post_logout_redirect_uri=" + encodeURIComponent(postLogoutRedirectURI);
                    }
                }
            }
        });

        hello.init({
            adB2CEditProfile: {
                oauth: {
                    auth: "https://"+tenantName+".b2clogin.com/"+tenantName+".onmicrosoft.com/"+editProfilePolicyName+"/oauth2/v2.0/authorize?ui_locales="+selLang
                }
            }
        });

        hello.init({
            adB2CResetPassword: {
                oauth: {
                    auth: "https://"+tenantName+".b2clogin.com/"+tenantName+".onmicrosoft.com/"+resetPasswordPolicyName+"/oauth2/v2.0/authorize?ui_locales="+selLang
                }
            }
        });
    };

    return {
        login: login,
        logout: logout,
        editProfile: editProfile,
        resetPassword: resetPassword,
        init: init,
        getAccessToken: getAccessToken,
        isInitialized: isInitialized,
        getSession: getSession,
        getClientId: getClientId,
        getTenantName: getTenantName,
        setOffline: setOffline,
        updateLanguage: updateLanguage,
        executeCallbackWithAccessToken: executeCallbackWithAccessToken
    };
})(hello_js_support || {});