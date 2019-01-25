var graphScopes=[MICROSOFT_GRAPH_RESOURCE_URL+"/MailboxSettings.ReadWrite",MICROSOFT_GRAPH_RESOURCE_URL+"/User.ReadWrite"];
var aadGraphScopes=[AZURE_GRAPH_RESOURCE_URL+"/User.ReadWrite"];
var oicScopes=["openid","email","profile"];
var scopes = [];
var msal_aad_b2c_authInfo={};

(function () {
    // parsing the query string into JSON 
    var adal_tenant = null;
    var adal_clientId = null;
    var msal_policyId = null;
    var msal_pwdreset_policyId = null;
    var msal_editprofile_policyId = null;
    var use_msal_for_aad = null;
    var msal_ui_locales=null;
    var use_hello_js_for_b2c=null;
    var query = window.location.search.substring(1);
    var qs = '{}';
    var offline = false;
    var isCallback = isADALOrMSALCallback();
    var isIfrm = isIframe();    
    console.log('isIframe: '+isIfrm+', isADALInitialized: '+isSignedInUser()+', isCallback='+isCallback+', offline='+offline+', query string: '+query);
    if (!isCallback) {
        if (query!=null && query!='') {
            qs = parse_query_string(query);        
            if (qs['offline'] && qs['offline']=='true') {
                offline = true;
            }
            adal_clientId = qs['client'];
            if (adal_clientId==null && !offline) {
               var token = qs['token'];
               if (token) {
                   try {
                      var parsedToken = parseJwt(token);
                      adal_clientId = parsedToken.aud;
                      adal_tenant = parsedToken.tid;
                      var newq = query.replace('token='+token,'client='+adal_clientId+'&tenant='+adal_tenant);
                      var firstredir=[window.location.protocol, '//', window.location.host, window.location.pathname].join('')+'?'+newq;
                      window.location.href=firstredir;
                      return;
                   } catch(e) {
                      console.log('Invalid token parameter: '+token);
                   }
               }
            } else {
                adal_tenant = qs['tenant'];
            }
            msal_policyId = qs['aad_b2c_auth_policy_id'];
            msal_pwdreset_policyId = qs['aad_b2c_auth_pwdreset_policy_id'];
            msal_editprofile_policyId = qs['aad_b2c_auth_editprofile_policy_id'];
            use_msal_for_aad = qs['use_msal_for_aad'];
            msal_ui_locales = qs['aad_b2c_auth_lang'];
            use_hello_js_for_b2c = qs['use_hello_js_for_b2c'];
        }
        if (typeof staticAuthenticationConfiguration!== 'undefined') {
            if (!adal_clientId && staticAuthenticationConfiguration.client && staticAuthenticationConfiguration.client!=='') {
                adal_clientId = staticAuthenticationConfiguration.client;
            }
            if (!adal_tenant && staticAuthenticationConfiguration.tenant && staticAuthenticationConfiguration.tenant!=='') {
                adal_tenant = staticAuthenticationConfiguration.tenant;
            }
            
            var regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
            var isGUID=regexGuid.test(adal_tenant);
            if (!isGUID) {    
                if (!msal_policyId && staticAuthenticationConfiguration.aad_b2c_auth_policy_id && staticAuthenticationConfiguration.aad_b2c_auth_policy_id!=='') {
                    msal_policyId = staticAuthenticationConfiguration.aad_b2c_auth_policy_id;
                }
                if (!msal_pwdreset_policyId && staticAuthenticationConfiguration.aad_b2c_auth_pwdreset_policy_id && staticAuthenticationConfiguration.aad_b2c_auth_pwdreset_policy_id!=='') {
                    msal_pwdreset_policyId = staticAuthenticationConfiguration.aad_b2c_auth_pwdreset_policy_id;
                }
                if (!msal_editprofile_policyId && staticAuthenticationConfiguration.aad_b2c_auth_editprofile_policy_id && staticAuthenticationConfiguration.aad_b2c_auth_editprofile_policy_id!=='') {
                    msal_editprofile_policyId = staticAuthenticationConfiguration.aad_b2c_auth_editprofile_policy_id;
                }
                if (!use_msal_for_aad && staticAuthenticationConfiguration.use_msal_for_aad && staticAuthenticationConfiguration.use_msal_for_aad!=='') {
                    use_msal_for_aad = staticAuthenticationConfiguration.use_msal_for_aad;
                }
                if (!msal_ui_locales && staticAuthenticationConfiguration.aad_b2c_auth_lang && staticAuthenticationConfiguration.aad_b2c_auth_lang!=='') {
                    msal_ui_locales = staticAuthenticationConfiguration.aad_b2c_auth_lang;
                }
                if (!use_hello_js_for_b2c && staticAuthenticationConfiguration.use_hello_js_for_b2c && staticAuthenticationConfiguration.use_hello_js_for_b2c!=='') {
                    use_hello_js_for_b2c = staticAuthenticationConfiguration.use_hello_js_for_b2c;
                }
            }

        }
        // put the authentication information to the local storage - this is necessary when we initialize ADAL/MSAL via query parameters
        _setupAuthStorage(adal_clientId,adal_tenant,msal_policyId,msal_pwdreset_policyId,msal_editprofile_policyId,use_msal_for_aad,msal_ui_locales,use_hello_js_for_b2c);        
    } else {
       // must check if the storageObj is defined (in Edge when opening file locally it won't be defined)
       if (storageObj) {
           adal_tenant = storageObj.getItem('adal_tenant');
           adal_clientId = storageObj.getItem('adal_clientId');
           msal_policyId = storageObj.getItem('msal_aad_b2c_auth_policy_id');
           msal_pwdreset_policyId = storageObj.getItem('msal_aad_b2c_auth_pwdreset_policy_id');
           msal_editprofile_policyId = storageObj.getItem('msal_aad_b2c_auth_editprofile_policy_id');
           use_msal_for_aad = storageObj.getItem('use_msal_for_aad');
           msal_ui_locales = storageObj.getItem('msal_aad_b2c_auth_lang');
           use_hello_js_for_b2c = storageObj.getItem('use_hello_js_for_b2c');
       }           
    }
    if (adal_tenant==null) {
       adal_tenant = 'common';
    }
    
    if (!offline && msal_policyId!=null && msal_policyId!=='' && (use_hello_js_for_b2c  && use_hello_js_for_b2c=='true' || window.cordova)) {
        msal_aad_b2c_authInfo = {
            "tenant":adal_tenant,
            "clientId":adal_clientId,
            "policyId":msal_policyId,
            "pwdresetPolicyId":msal_pwdreset_policyId,
            "editprofilePolicyId":msal_editprofile_policyId,
            "redirectUri": window.cordova ? FORMVIEWER_FOR_MOBILE_REDIRECT_URL : [window.location.protocol, '//', window.location.host, window.location.pathname].join('')
        };

        if (window.cordova) {
            document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

            function onDeviceReady() {
                // InAppBrowser plug-in is required for cordova
                window.open = cordova.InAppBrowser.open;                
                hello_js_support.init(adal_clientId,adal_tenant,msal_policyId,msal_editprofile_policyId,msal_pwdreset_policyId,msal_ui_locales);
            };
        } else {
            hello_js_support.init(adal_clientId,adal_tenant,msal_policyId,msal_editprofile_policyId,msal_pwdreset_policyId,msal_ui_locales);
        }
        return;
    }
    
    // check and use ADAL if we have signed in user or we need to initialize it
    // NOTE: ADAL should be used if this is running inside iFrame and it is a callback (it means it is refreshing the ID token), or it is not an iFrame and we already have signed-in user, 
    // or we are in process of initialization (callback), or if we have the query parameter 'client'
    var shouldUseADALOrMSAL = !offline && (isIfrm&&isCallback || !isIfrm &&(isSignedInUser() || isCallback || adal_clientId!=null));
    console.log('should use ADAL or MSAL: '+shouldUseADALOrMSAL);
    if (shouldUseADALOrMSAL) {
         var isMSAL = false;
         if (msal_policyId!=null && msal_policyId!=='') {
             isMSAL = true;
         }
         if (ADAL==null && MSAL==null) {
            if (isMSAL){
                console.log('init msal');
                //MSAL = new Msal.UserAgentApplication(adal_clientId, "https://login.microsoftonline.com/tfp/"+adal_tenant+".onmicrosoft.com/"+msal_policyId+"/v2.0/", function (errorDesc, token, error, tokenType) {
                //MSAL = new Msal.UserAgentApplication(adal_clientId, "https://"+msal_tenantName+".b2clogin.com/tfp/"+adal_tenant+"/"+msal_policyId+"/v2.0/", function (errorDesc, token, error, tokenType) {
                scopes = [adal_clientId];
                msal_aad_b2c_authInfo = {
                    "tenant":adal_tenant,
                    "clientId":adal_clientId,
                    "policyId":msal_policyId,
                    "pwdresetPolicyId":msal_pwdreset_policyId,
                    "editprofilePolicyId":msal_editprofile_policyId,
                    "redirectUri":[window.location.protocol, '//', window.location.host, window.location.pathname].join('')
                };
                MSAL = new Msal.UserAgentApplication(adal_clientId, "https://"+adal_tenant+".b2clogin.com/"+adal_tenant+".onmicrosoft.com/"+msal_policyId+"/", function (errorDesc, token, error, tokenType) {
                    //console.log('AUTH CALLBACK, errorDesc='+errorDesc+',error='+error+', tokentype='+tokenType+', token='+token);
                    if (error){
                        if (error.toLowerCase()==='access_denied' && errorDesc.indexOf('AADB2C90118')==0) {
                            // We will enter here in the case user clicked "Forgot your password" link when using sign-up/sign-in policy
                            // User will be redirected to the page for reseting the password
                            console.log('now password reset');
                            this.authority = "https://"+adal_tenant+".b2clogin.com/"+adal_tenant+".onmicrosoft.com/"+msal_pwdreset_policyId+"/";
                            // setting custom language for B2C sign-in/sign-up if passed in the parameter
                            if (msal_ui_locales!=null) {
                                this.loginRedirect(scopes,"ui_locales="+msal_ui_locales);
                            } else {
                                this.loginRedirect(scopes);
                            }
                        } else if (error.toLowerCase()==='invalid_state' && token) {
                            // We will enter here in the case we edited user profile or changed the password using the links from the FormViewer
                            var idt = TogFormViewer.Utils._extractIdToken(token);
                            // If idtoken comes from edit policy, we will put idtoken into MSAL cache so we always see updated information in the GUI
                            var idt_policy = idt.tfp ? idt.tfp : idt.acr;
                            if (msal_editprofile_policyId && idt_policy.toLowerCase()===msal_editprofile_policyId.toLowerCase() && idt.name && (idt.emails || idt.email)) {
                                console.log("Storing idtoken for edit profile policy into the MSAL cache");
                                storageObj.setItem("msal.idtoken",token);
                                storageObj.setItem("msal.nonce.idtoken",idt.nonce);
                            }
                        }                        
                    } else {
                        var idt = this.getUser().idToken;
                        var idt_policy = idt.tfp ? idt.tfp : idt.acr;
                        //console.log('NO PWD RESET, auth='+idt_policy+", pn="+msal_policyId+", cnt="+idt_policy.toLowerCase().indexOf(msal_policyId.toLowerCase()));
                        if (idt_policy.toLowerCase().indexOf(msal_policyId.toLowerCase())==-1) {
                            // We will enter here in the case user clicked "Forgot your password" link when using sign-up/sign-in policy
                            // It will hapen after reseting of password is finished - user will be redirected to the login-page
                            console.log("Setting the right authority (policy) and redirecting");
                            this.authority = "https://"+adal_tenant+".b2clogin.com/"+adal_tenant+".onmicrosoft.com/"+msal_policyId+"/";
                            // setting custom language for B2C sign-in/sign-up if passed in the parameter
                            if (msal_ui_locales!=null) {
                                this.loginRedirect(scopes,"ui_locales="+msal_ui_locales);
                            } else {
                                this.loginRedirect(scopes);
                            }
                        }
                    }
                },{storeAuthStateInCookie: true, cacheLocation: isIEBrowser() ? 'localStorage' : 'sessionStorage',validateAuthority: false,postLogoutRedirectUri:window.location.href});
                MSAL._logger = new Msal.Logger(function (logLevel, message, piiEnabled) {console.log(message);}, { level: Msal.LogLevel.Verbose, correlationId: '12345' });
            } else {
                // This is a feature flag to use MSAL instead of ADAL for AAD (after MS fixes the bug in MSAL, we will remove the flag and will always use the code in that block)
                if (use_msal_for_aad && use_msal_for_aad=='true') {
                    MSAL = new Msal.UserAgentApplication(adal_clientId, "https://login.microsoftonline.com/"+adal_tenant, function (errorDesc, token, error, tokenType) {
                    },{storeAuthStateInCookie: true, cacheLocation: isIEBrowser() ? 'localStorage' : 'sessionStorage',postLogoutRedirectUri:window.location.href});                
                    MSAL._logger = new Msal.Logger(function (logLevel, message, piiEnabled) {console.log(message);}, { level: Msal.LogLevel.Verbose, correlationId: '12345' });
                    scopes = [adal_clientId+"/.default"]; // this is how the scopes must be defined in order to generate v1 access token for Azure functions
                } else {
                    ADAL = new AuthenticationContext({
                        instance: 'https://login.microsoftonline.com/',
                        tenant: adal_tenant,//'b4a7cf6c-8876-456a-b97f-1e2bbeb7579a', //COMMON OR YOUR TENANT ID
                        clientId: adal_clientId,//'0b2d8b43-929e-412c-b6d4-2d536ffc1e92', //REPLACE WITH YOUR CLIENT ID
                        redirectUri: [window.location.protocol, '//', window.location.host, window.location.pathname].join(''), // THE CDN URI
                        cacheLocation: isIEBrowser() ? 'localStorage' : 'sessionStorage', // enable this for IE, as sessionStorage does not work for localhost.
                        //endpoints: endpoints,
                        postLogoutRedirectUri: window.location.href, 
                        popUp: false
                    });
                }
            }
         }
       
        // doing ADAL logic
        console.log('iscallback='+isCallback);
        if (isCallback) {
            if (ADAL!=null) {
                ADAL.handleWindowCallback();
            } else {
                return;
            }
        }
        
        if (ADAL!=null && isCallback && !ADAL.getLoginError()) {
            console.log('Now redirecting to original URL');
            window.location = ADAL._getItem(ADAL.CONSTANTS.STORAGE.LOGIN_REQUEST);
            return;
        }    

        if (ADAL!=null && !ADAL.getCachedUser()) {
            console.log('Redirect to login-page...');
            ADAL.login();
            return;
        } else if (MSAL!=null && !MSAL.getUser()) {
            console.log('MSAL Redirect to login-page...');
            var fncOrGraphScopes = graphScopes;
            if (!isAAD()) {
               fncOrGraphScopes = scopes;
            }
            // setting custom language for B2C sign-in/sign-up if passed in the parameter
            if (msal_ui_locales!=null) {
                MSAL.loginRedirect(fncOrGraphScopes,"ui_locales="+msal_ui_locales);
            } else {
                MSAL.loginRedirect(fncOrGraphScopes);
            }
            return;
        } else {
           if (!isIfrm) {
               writeADALInitTime();
               initAfterADALSetup();
           }
        }
    } else {
        initAfterADALSetup();
    }        
})();


function _setupAuthStorage(clientId,tenant,msal_policyId,msal_pwdreset_policyId,msal_editprofile_policyId,use_msal_for_aad,msal_ui_locales,use_hello_js_for_b2c) {
    // must check if the storageObj is defined (in Edge when opening file locally it won't be defined)
    if (storageObj) {
        if (clientId) {
            storageObj.setItem('adal_clientId',clientId);
        } else {
            storageObj.removeItem('adal_clientId');
        }
        if (tenant) {
            storageObj.setItem('adal_tenant',tenant);
        } else {
            storageObj.removeItem('adal_tenant');
        }
        if (msal_policyId) {
            storageObj.setItem('msal_aad_b2c_auth_policy_id',msal_policyId);
        } else {
            storageObj.removeItem('msal_aad_b2c_auth_policy_id');
        }
        if (msal_pwdreset_policyId) {
            storageObj.setItem('msal_aad_b2c_auth_pwdreset_policy_id',msal_pwdreset_policyId);
        } else {
            storageObj.removeItem('msal_aad_b2c_auth_pwdreset_policy_id');
        }
        if (msal_editprofile_policyId) {
            storageObj.setItem('msal_aad_b2c_auth_editprofile_policy_id',msal_editprofile_policyId);
        } else {
            storageObj.removeItem('msal_aad_b2c_auth_editprofile_policy_id');
        }
        if (use_msal_for_aad) {
            storageObj.setItem('use_msal_for_aad',use_msal_for_aad);
        } else {
            storageObj.removeItem('use_msal_for_aad');
        }
        if (msal_ui_locales) {
            storageObj.setItem('msal_aad_b2c_auth_lang',msal_ui_locales);
        } else {
            storageObj.removeItem('msal_aad_b2c_auth_lang');
        }
        if (use_hello_js_for_b2c) {
            storageObj.setItem('use_hello_js_for_b2c',use_hello_js_for_b2c);
        } else {
            storageObj.removeItem('use_hello_js_for_b2c');
        }
    }
}


function isAAD(){
    if (ADAL!=null || MSAL!=null && MSAL.clientId!=scopes[0]) {
        return true;
    }
    return false;
}

function isSignedInUser () {
    return ADAL!=null && ADAL.getCachedUser()!=null || MSAL!=null && MSAL.getUser()!=null || hello_js_support!=null && hello_js_support.isInitialized();
}

function fillUserInfo(updateOnlyLinks) {
    if (ADAL!=null || MSAL!=null || hello_js_support.isInitialized()) {
        var signeduser = ADAL!=null ? ADAL.getCachedUser() : MSAL!=null ? MSAL.getUser() : hello_js_support.getSession();
        if (signeduser) {
            if (ADAL==null && MSAL==null) {
                signeduser.id_token
                idt = TogFormViewer.Utils._extractIdToken(signeduser.id_token);
                signeduser.idToken = idt;
            }
            // empty elements in order to avoid repeating the list of user settings links
            $('#usersettingslinklist').empty();
            $('#myProfileSmallWrapper').empty();
            $('#myAccountSmallWrapper').empty();
            $('#signOutSmallWrapper').empty();

            var loCommand = 'hello_js_support.logout();';
            if (ADAL) {
                loCommand = 'ADAL.logOut();';
            } else if (MSAL) {
                loCommand = 'MSAL.logout();';
            }

            var myProfileLink = "https://delve.office.com/";
            var myAccountLink = "https://portal.office.com/account/";
            if (isAAD()) {
                // Default links for work or school accounts (tenant members) and for work or school accounts which are guests
                if (currentUser.personal) {
                    // Default links for personal accounts
                    myProfileLink = "https://account.microsoft.com/profile/";
                    myAccountLink = "https://account.microsoft.com/";
                }
                $('#usersettingslinklist').append('<div><div class="user-settings-link-wrapper"><a id="myProfileLink" class="user-settings-link" role="link" href="'+myProfileLink+'" target="_blank"><span class="user-settings-link-label" lang-tran="My profile">My profile</span></a></div><div class="user-settings-link-wrapper"><a id="myAccountLink" class="user-settings-link" role="link" href="'+myAccountLink+'" target="_blank"><span class="user-settings-link-label" lang-tran="My account">My account</span></a></div><div class="user-settings-link-wrapper"><a id="signOutLink" class="user-settings-link" role="link" href="javascript:void(0);" onclick="'+loCommand+'"><span class="user-settings-link-label" lang-tran="Sign out">Sign out</span></a></div></div>');
                $('#myProfileSmallWrapper').append('<div class="user-settings-small-menu-item"><a href="'+myProfileLink+'" class="header-common user-settings-small-menu-item-wrapper user-settings-small-menu-link" lang-tran="My profile" target="_blank">My profile</a></div>');
                $('#myAccountSmallWrapper').append('<div class="user-settings-small-menu-item"><a href="'+myAccountLink+'" class="header-common user-settings-small-menu-item-wrapper user-settings-small-menu-link" lang-tran="My account" target="_blank">My account</a></div>');
                $('#signOutSmallWrapper').append('<div class="user-settings-small-menu-item"><a href="javascript:void(0);" onclick="'+loCommand+'" class="header-common user-settings-small-menu-item-wrapper user-settings-small-menu-link" lang-tran="Sign out">Sign out</a></div>');
                if (currentUser.personal) {
                    $("#officeHomeLink").attr("href", "https://www.office.com/login?IdentityProvider=live.com&login_hint=" + currentUser.uid.replace("@", "%40"));
                }
                $("#allAppsLink").attr("href", "https://account.activedirectory.windowsazure.com/r?tenantId=" + (ADAL!=null ? ADAL.config.tenant : signeduser.idToken.tid)+ "#/applications");
            } else {
                var selLang = "en";
                try {
                    selLang = languageSelector.selectedLanguage.substring(0,2);
                } catch (e) {
                    console.log("Couldn't read selected language");
                }
                // the profile and account links are language specific (parameter ui_locales at the end of URL)
                myProfileLink = "https://"+msal_aad_b2c_authInfo.tenant+".b2clogin.com/"+msal_aad_b2c_authInfo.tenant+".onmicrosoft.com/oauth2/v2.0/authorize?p="+msal_aad_b2c_authInfo.editprofilePolicyId+"&client_id="+msal_aad_b2c_authInfo.clientId+"&nonce=defaultNonce&redirect_uri="+encodeURIComponent(msal_aad_b2c_authInfo.redirectUri)+"&scope=openid&response_type=id_token&ui_locales="+selLang;
                myAccountLink = "https://"+msal_aad_b2c_authInfo.tenant+".b2clogin.com/"+msal_aad_b2c_authInfo.tenant+".onmicrosoft.com/oauth2/v2.0/authorize?p="+msal_aad_b2c_authInfo.pwdresetPolicyId+"&client_id="+msal_aad_b2c_authInfo.clientId+"&nonce=defaultNonce&redirect_uri="+encodeURIComponent(msal_aad_b2c_authInfo.redirectUri)+"&scope=openid&response_type=id_token&ui_locales="+selLang;
                
                var myProfileMSALOrHelloJs = null;
                var myAccountMSALOrHelloJs = null;
                
                if (MSAL) {
                    myProfileMSALOrHelloJs = 'href="'+myProfileLink+'"';
                    myAccountMSALOrHelloJs = 'href="'+myAccountLink+'"';
                    MSAL._postLogoutredirectUri = _updatePostLogoutRedirectUri(MSAL._postLogoutredirectUri,selLang);
                } else { // hello.js
                    myProfileMSALOrHelloJs = 'onclick="hello_js_support.editProfile()"';
                    myAccountMSALOrHelloJs = 'onclick="hello_js_support.resetPassword()"';
                    hello_js_support.updateLanguage(selLang);                    
                }
                
                var myProfile = '<div class="user-settings-link-wrapper"><a id="myProfileLink" class="user-settings-link" role="link" '+myProfileMSALOrHelloJs+'"><span class="user-settings-link-label" lang-tran="My profile">My profile</span></a></div>';
                var myAccount = '<div class="user-settings-link-wrapper"><a id="myAccountLink" class="user-settings-link" role="link" '+myAccountMSALOrHelloJs+'"><span class="user-settings-link-label" lang-tran="Reset password">Reset password</span></a></div>';

                if (!msal_aad_b2c_authInfo.editprofilePolicyId) {
                    myProfile = '';
                }                
                if (!msal_aad_b2c_authInfo.pwdresetPolicyId || !currentUser.member) {
                    myAccount = '';
                }
                
                var signOut = '<div class="user-settings-link-wrapper"><a id="signOutLink" class="user-settings-link" role="link" href="javascript:void(0);" onclick="'+loCommand+'"><span class="user-settings-link-label" lang-tran="Sign out">Sign out</span></a></div>';                
                $('#usersettingslinklist').append('<div>'+myProfile+myAccount+signOut+'</div>');
                if (myProfile!=='') {
                    $('#myProfileSmallWrapper').append('<div class="user-settings-small-menu-item"><a '+myProfileMSALOrHelloJs+' class="header-common user-settings-small-menu-item-wrapper user-settings-small-menu-link" lang-tran="My profile">My profile</a></div>');
                }
                if (myAccount!=='') {
                    $('#myAccountSmallWrapper').append('<div class="user-settings-small-menu-item"><a '+myAccountMSALOrHelloJs+' class="header-common user-settings-small-menu-item-wrapper user-settings-small-menu-link" lang-tran="Reset password">Reset password</a></div>');
                }
                $('#signOutSmallWrapper').append('<div class="user-settings-small-menu-item"><a href="javascript:void(0);" onclick="'+loCommand+'" class="header-common user-settings-small-menu-item-wrapper user-settings-small-menu-link" lang-tran="Sign out">Sign out</a></div>');
            }            
            if (!updateOnlyLinks) {
                $('.useremail').html(currentUser.uid);
                $('.username').html(currentUser.name);
                if (appConfiguration.mailboxPhoto) {
                    getuserphotometadata();
                } else {
                    getUserThumbnailPhoto();
                }
            }
        }
    }
}

// updating MSAL postLogoutRedirectUri according to the selected language
function _updatePostLogoutRedirectUri(postLogoutRedirectUri,selLang) {
    try {
        var startInd = postLogoutRedirectUri.indexOf("&aad_b2c_auth_lang=");
        if (startInd==-1) {
            startInd = postLogoutRedirectUri.indexOf("?aad_b2c_auth_lang=");
        }
        if (startInd>0) {
            var endInd = postLogoutRedirectUri.indexOf("&",startInd+1);
            if (endInd==-1) {
                endInd = postLogoutRedirectUri.length;
            }
            postLogoutRedirectUri = postLogoutRedirectUri.substring(0,startInd+1)+"aad_b2c_auth_lang="+selLang+postLogoutRedirectUri.substring(endInd);
        } else {
            postLogoutRedirectUri = postLogoutRedirectUri+(postLogoutRedirectUri.indexOf("?")==-1 ? "?":"&")+"aad_b2c_auth_lang="+selLang;
        }
    } catch (e) {
        console.log("Problem while changing MSAL's postLogoutRedirectUri");
    }
    return postLogoutRedirectUri;
}

function executeAjaxRequestWithAdalLogic(resource, callbackfunc, ajaxurl, ajaxjsondata, additionalConfiguration, callbackfunc_oncsuccessfnc, callbackfunc_onfailurefnc, adalerrorcallback) {
    if (ADAL!=null) {
        ADAL.acquireToken(resource, function (error, token, errcode) {
            // Handle ADAL Error
            if (error || errcode || !token) {
                var msg = '';
                if (error || errcode) {
                   msg+='Error '+(errcode!=null ? '"'+errcode+'"' : '')+' occurred when acquiring token for the resource "'+resource+'" for calling function "'+getFunctionName(callbackfunc)+'" with ajax url "'+ajaxurl+'".';
                   msg+='\n\nError details:\n'+error;
                }
                var dologin = false;
                var aelc = null;
                // ADAL login attempt will happen only in the case of the following error codes/errors
                if (errcode=='login_required' || errcode=='account_selection_required' || errcode=='consent_required' || errcode=='access_denied' || (errcode=='interaction_required' && error && error.indexOf('AADSTS16000')>-1)) {
                   dologin = true;
                }
                
                if (dologin) {
                   aelc = readRecursionInfo(resource,errcode);
                }
                // ADAL login attempt will not happen if the recursion is detected
                if (dologin && aelc==0) {
                   var msgpart = '';
                   if (errcode=='interaction_required') {
                      msgpart ='Multiple user identities are available for the current context. Please sign-out from non-desired account(s) and sign-in into the wanted one.\n';
                   } else if (error && error.indexOf('AADSTS50058')>-1) {
                      msgpart ='It might be that session cookie has expired (or deleted due to the log-out from another browser window) or some unexpected error happened.\n';
                   } else {
                      msgpart ='Some unexpected error happened.\n';
                   }
                   msgpart+='You will be redirected to the login page in order to try to solve this issue.\n\n';
                   msg = msgpart + msg;
                } else if (errcode=='Token Renewal Failed') {               
                   var msgpart = 'Please try again latter.\n'
                   msgpart+='If it occures many times in a row, you may try to close the browser and open the page again (maybe the session data is missing for some reason).\n\n';
                   msg=msgpart+msg;
                } else {
                   var msgpart = '';
                   var specmsg = '\nYou may try to close the browser and open the page again.\n';
                   if (error && error.indexOf('AADSTS50058')>-1) {
                      specmsg+='It seems either the session cookie has expired (or deleted due to the log-out from another browser window) or some unexpected error happened';
                   } else {               
                      specmsg+='The token can\'t be acquired until the user consents, or if not possible, until administrator fixes the problem with App registration';
                   }
                   if (errcode=='resource is required') {
                      msgpart='The application is not providing resource to ADAL call. The application developers should fix the code';
                   } else if (errcode=='invalid_resource') {
                      msgpart='The application is trying to use invalid resource "'+resource+'". The resource, if it exists, has not been configured in the tenant';
                   } else if (errcode=='unsupported_response_type') {
                      msgpart='The application authentication setting must be adjusted to support implicit flow';
                   } else if (errcode=='interaction_required') {
                      if (dologin) {
                         msgpart='Detected possible ADAL login recursion after redirecting you to the login-page in order to sign-out from non-desired account(s) and sign-in into the wanted one. Wait for 1 minute or close the browser and then try to access the page again. If you don\'t know how to sign-out\n';
                      } else {
                         msgpart='It might be that App registration settings are incorrect - administrative action is required.';
                         msgpart+=specmsg;
                      }
                   } else if (dologin) {
                      msgpart='Detected possible ADAL login recursion after redirecting you to the login-page in order to try to solve the problem.\n';
                      msgpart+=specmsg;
                   } else if (errcode=='invalid_request' || errcode=='unsupported_response_type') {
                      msgpart='This is a development error';
                   } else if (errcode=='server_error' || errcode=='temporarily_unavailable') {
                      var msgpart = 'Please try again latter.\n'
                      msgpart+='A server-side error happened. If it occures many times in a row';
                   } else {
                      msgpart = 'Unknown error happened';
                   }
                   msgpart+=' - please contact the support and send the screenshot(s) of the full content of this dialog.\n\n'
                   msg=msgpart+msg;
                }
                if (!token) {
                   msg = 'Token is not acquired!\n\n'+msg;
                }

                console.log(msg);
                if (dologin) {
                   // Only if ADAL login is not in progress we will handle login attempt
                   if (!ADAL.loginInProgress()) {
                      if (aelc==0) {
                         // here we check if adal error is reported...in the case it is we don't want to do another login because this means there were several requests failing and                     
                         if (!adalErrorReported) {
                            // user is being notified about ADAL error
                            aelc = aelc+1;
                            alert(msg);
                            writeRecursionInfo(resource,errcode,aelc);
                            ADAL.login();
                         }
                      } else {
                         if (!adalErrorReported) {
                            // user is being notified about ADAL error
                            alert(msg);
                            adalErrorReported=true;
                         }
                         // we wait for some time before resetting adal error, otherwise if this happens during initial application startup we would get several MSG alerts in a row
                         window.setTimeout(function() {
                            console.log('reseting error reported indicator (resource='+resource+', errcode='+errcode+')');
                            adalErrorReported = false;
                         }, 1500);
                         // also, adal recursion info is reseted because user already has warned
                         window.setTimeout(function() {
                            resetRecursionInfo(resource,errcode);
                         }, 15000);
                      }
                   } else {
                      console.log('Doing nothing since ADAL login operation is in progress');
                   }
                } else {
                   if (!adalErrorReported) {
                      // user is being notified about ADAL error
                      alert(msg);
                      adalErrorReported=true;
                   }
                   // we wait for some time before resetting adal error, otherwise if this happens during initial application startup we would get several MSG alerts in a row
                   window.setTimeout(function() {
                      console.log('reseting error reported indicator (resource='+resource+', errcode='+errcode+')');
                      adalErrorReported = false;
                   }, 1500);
                }
                if (typeof adalerrorcallback !== 'undefined') {
                    adalerrorcallback();
                }
                return;
            } else {
                console.log('Token for the resource "'+resource+'" is valid. Now executing function "'+getFunctionName(callbackfunc)+'" with ajax url "'+ajaxurl+'"'+(ajaxjsondata!=null ? ' and JSON data '+JSON.stringify(ajaxjsondata) : '')+'.');
            }
            if (ajaxurl==null) {
               var noaurlmsg = 'The function "'+getFunctionName(callbackfunc)+'" will not be called because URL is not provided!';
               console.log(noaurlmsg);
            } else {
               callbackfunc(token, ajaxurl, ajaxjsondata, additionalConfiguration, callbackfunc_oncsuccessfnc, callbackfunc_onfailurefnc);
            }
        });
    } else if (MSAL!=null) {
        // This logic with scopes is necessary when we use MSAL instead of ADAL for AAD (when feature flag use_msal_for_aad is set to true), so that 
        // we define proper scopes when using MS graph or Azure graph APIs or function APIs
        // If MSAL is only used for B2C scenario, it will always result in fncOrGraphScopes = scopes
        var fncOrGraphScopes = graphScopes;
        if (resource.indexOf(MICROSOFT_GRAPH_RESOURCE_URL)==-1 || !isAAD()) {
           if (!isAAD() || resource==MSAL.clientId) {
              fncOrGraphScopes = scopes;
           } else if (resource.indexOf(AZURE_GRAPH_RESOURCE_URL)!=-1) {
              fncOrGraphScopes = aadGraphScopes;
           } else {
              fncOrGraphScopes = oicScopes;
           }
        }
        console.log('acquiring token for the resource '+resource+', scopes='+fncOrGraphScopes); 
        MSAL.acquireTokenSilent(fncOrGraphScopes).then(function (accessToken) {
                console.log('Token for the resource "'+resource+'" is valid. Now executing function "'+getFunctionName(callbackfunc)+'" with ajax url "'+ajaxurl+'"'+(ajaxjsondata!=null ? ' and JSON data '+JSON.stringify(ajaxjsondata) : '')+'.');
                if (ajaxurl==null) {
                   var noaurlmsg = 'The function "'+getFunctionName(callbackfunc)+'" will not be called because URL is not provided!';
                   console.log(noaurlmsg);
                } else {
                   callbackfunc(accessToken, ajaxurl, ajaxjsondata, additionalConfiguration, callbackfunc_oncsuccessfnc, callbackfunc_onfailurefnc);
                }
            }, function (error) {
                if (error.indexOf("consent_required") !== -1 || error.indexOf("interaction_required") !== -1 || error.indexOf("login_required") !== -1) {
                    console.log('failed to call api, acquire redirect...');
                    MSAL.acquireTokenRedirect(fncOrGraphScopes).then(function (accessToken) {
                        console.log('now calling api 2nd time with access token...');
                        console.log('Token for the resource "'+resource+'" is valid. Now executing function "'+getFunctionName(callbackfunc)+'" with ajax url "'+ajaxurl+'"'+(ajaxjsondata!=null ? ' and JSON data '+JSON.stringify(ajaxjsondata) : '')+'.');
                        if (ajaxurl==null) {
                           var noaurlmsg = 'The function "'+getFunctionName(callbackfunc)+'" will not be called because URL is not provided!';
                           console.log(noaurlmsg);
                        } else {
                           callbackfunc(accessToken, ajaxurl, ajaxjsondata, additionalConfiguration, callbackfunc_oncsuccessfnc, callbackfunc_onfailurefnc);
                        }
                    }, function (error) {                    
                        var msg='Error occurred when acquiring token for the resource "'+resource+'", for scopes "'+fncOrGraphScopes+'" for calling function "'+getFunctionName(callbackfunc)+'" with ajax url "'+ajaxurl+'". Error:\n'+error;
                        console.log(msg);                        
                        alert(msg);
                        if (typeof adalerrorcallback !== 'undefined') {
                           adalerrorcallback();
                        }
                    });
                } else {
                    var msg='Error 2 occurred when acquiring token for the resource "'+resource+'", for scopes "'+fncOrGraphScopes+'" for calling function "'+getFunctionName(callbackfunc)+'" with ajax url "'+ajaxurl+'". Error:\n'+error;
                    console.log(msg);                        
                    alert(msg);
                    if (typeof adalerrorcallback !== 'undefined') {
                       adalerrorcallback();
                    }
                }
            });
    } else {
        hello_js_support.executeCallbackWithAccessToken(function(accessToken){callbackfunc(accessToken, ajaxurl, ajaxjsondata, additionalConfiguration, callbackfunc_oncsuccessfnc, callbackfunc_onfailurefnc);});
        //var accessToken = hello_js_support.getAccessToken();
        //callbackfunc(accessToken, ajaxurl, ajaxjsondata, additionalConfiguration, callbackfunc_oncsuccessfnc, callbackfunc_onfailurefnc);
    }
}

