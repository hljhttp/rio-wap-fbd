var map = null;
var dm;
var clusterLayer;
var pinArray = [];

var resultRef;

var bingDefaultBounds;
var azureDefaultBounds = {};

var bingLoaded=false;
//This function is called when the bing map module has completely loaded
//It will attempt to recreate the geocodeCallback but will only succeed if the geocodeCallback had previously occoured prematurely
function bingCallback()
{
	bingLoaded=true;
	if (resultRef)
	{ 
		MapPlugIn.geocodeCallback(resultRef);
	}
}

var MapPlugIn = 
{
    azureDefaultDatasource: null,
	azureDefaultSymbolLayer: null,
	azureDefaultClusterLayer: {
		clusterBubbleLayer: null,
		clusterSymbolLayer: null
	},
	azureDefaultPopup: null,
	azureDefaultServiceClient: null,
    azureNoClusterDatasource: null,
    azureNoClusterSymbolLayer: null,
	azureSearchDatasource: null,
	azureSearchSymbolLayer: null,
	azureServiceReference: null,
	azureRouteDatasource: null,
	azureRouteSymbolLayer: null,
	azureRouteLineLayer:null,
    azureInfoShouldOpen: false,
    
    _performGeoCodeRequest: function (url)
    {
        var scriptElement = document.createElement("script");
        scriptElement.type = "text/javascript";
        scriptElement.src = url;
        
        document.getElementsByTagName('head')[0].appendChild(scriptElement);
    },
    
    /**
     * Embeds a map on the page using configuration parameters
     */
    embedMap: function ()
    {
        if ((appConfiguration.mapCountryName || (appConfiguration.mapCenterLatitude && !isNaN(appConfiguration.mapCenterLatitude)
            && appConfiguration.mapCenterLongitude && !isNaN(appConfiguration.mapCenterLongitude)))
        && appConfiguration.mapWrapperId && appConfiguration.mapZoom && !isNaN(appConfiguration.mapZoom))
        {
            // Check which maps provider we should use
            if (appConfiguration.bingMapsKey)
            {
                var scriptElement = document.createElement("script");
                scriptElement.type = "text/javascript";
                scriptElement.src = "https://www.bing.com/api/maps/mapcontrol?setLang=" + languageSelector.currentLanguage+"&callback=bingCallback";
                
                // Bind the event to the callback function.
                // There are several events for cross browser compatibility.
                scriptElement.onreadystatechange = this._loadBingMap;
                scriptElement.onload = this._loadBingMap;
                scriptElement.onerror = this._loadBingMap;
                
                document.getElementsByTagName('head')[0].appendChild(scriptElement);
            }
            else if (appConfiguration.azureMapsKey)
            {
				loadScriptWithGetParams("https://atlas.microsoft.com/sdk/js/atlas.min.js?api-version=1", MapPlugIn._loadAzureMap);
				loadScriptWithGetParams("https://atlas.microsoft.com/sdk/js/atlas-service.js?api-version=1", MapPlugIn._createAzureService);
                    
                var headerStyleDE = document.createElement("link");
                headerStyleDE.id = "azurestyle";
                headerStyleDE.rel = "stylesheet";
                headerStyleDE.href = "https://atlas.microsoft.com/sdk/css/atlas.min.css?api-version=1";
                document.getElementById("layoutstyle").parentNode.insertBefore(headerStyleDE, document.getElementById("layoutstyle").nextSibling);
            }
        }
    },

    /**
     * Updates the map. Updated configuration parameters will be applied.
     */
    updateMap: function ()
    {
        if (appConfiguration.mapCountryName && appConfiguration.mapWrapperId && appConfiguration.mapZoom && !isNaN(appConfiguration.mapZoom))
        {
            // Check which maps provider we should use
            if (appConfiguration.bingMapsKey)
            {
                _loadBingMap();
            }
            else if (appConfiguration.azureMapsKey)
            {
                map.remove();
                MapPlugIn._loadAzureMap();
            }
        }
    },

    _loadBingMap: function ()
    {
        // calling virtual earth api
        if (appConfiguration.mapCenterLatitude && !isNaN(appConfiguration.mapCenterLatitude)
            && appConfiguration.mapCenterLongitude && !isNaN(appConfiguration.mapCenterLongitude))
        {
            var geocodeRequest = "https://dev.virtualearth.net/REST/v1/Locations/" + Number(appConfiguration.mapCenterLatitude) + "," + Number(appConfiguration.mapCenterLongitude) + "?key=" + appConfiguration.bingMapsKey + "&jsonp=MapPlugIn.geocodeCallback";
        }
        else
        {
            var geocodeRequest = "https://dev.virtualearth.net/REST/v1/Locations?countryRegion=" + appConfiguration.mapCountryName + "&key=" + appConfiguration.bingMapsKey + "&jsonp=MapPlugIn.geocodeCallback";
        }
        
        MapPlugIn._performGeoCodeRequest(geocodeRequest);
    },
    
    _loadAzureMap: function ()
    {
		
        if (appConfiguration.mapCenterLatitude && !isNaN(appConfiguration.mapCenterLatitude)
            && appConfiguration.mapCenterLongitude && !isNaN(appConfiguration.mapCenterLongitude))
        {
			atlas.setSubscriptionKey(appConfiguration.azureMapsKey);

			map = new atlas.Map(appConfiguration.mapWrapperId, 
			{
				language: languageSelector.currentLanguage,
				center: [Number(appConfiguration.mapCenterLongitude), Number(appConfiguration.mapCenterLatitude)],
				zoom: Number(appConfiguration.mapZoom)
			});
			map.events.add('load', MapPlugIn._azureMapsLoadedCallback);
        }
    },

    /**
     * The reloadMap function is called in case when we change the language and have to relaod the map with another language.
     */
    reloadMap: function () 
    {
        if ((appConfiguration.mapCountryName || (appConfiguration.mapCenterLatitude && !isNaN(appConfiguration.mapCenterLatitude)
            && appConfiguration.mapCenterLongitude && !isNaN(appConfiguration.mapCenterLongitude)))
        && appConfiguration.mapWrapperId && appConfiguration.mapZoom && !isNaN(appConfiguration.mapZoom))
        {
            // Check which maps provider we should use
            if (appConfiguration.bingMapsKey)
            {
                if (document.querySelector('script[src^="https://www.bing.com/api/maps/mapcontrol?setLang="]')) 
                {
                    $('script[href^="https://www.bing.com/"], script[src^="https://www.bing.com/"], link[href^="https://www.bing.com/"], script[src^="https://www.bing.com/api/maps/mapcontrol?setLang="], script[src^="https://dev.virtualearth.net"]').each(function () 
                    {   
                        $(this).remove();
                    });
                }
                
                map = null;
                dm = null;
                Microsoft = null;
                
                this.embedMap();
            }
            else if (appConfiguration.azureMapsKey)
            {
                if (map)
                {
                    map.remove();
                }
                
                this.embedMap();
            }
        }
    },
    
    geocodeCallback: function (result)
    {
        if (result && result.resourceSets && result.resourceSets.length > 0 && result.resourceSets[0].resources && result.resourceSets[0].resources.length > 0)
        {
			if (!bingLoaded)
			{
				resultRef=JSON.parse(JSON.stringify(result));
				return;
			}
			else 
			{
				resultRef = null;
				bingLoaded = false;
			}
            
			if (appConfiguration.mapBeforeRenderCallback)
			{
				try
				{
					eval(appConfiguration.mapBeforeRenderCallback);
				}
				catch (err)
				{
					console.log(err);
				}
			}
			
			if (bingDefaultBounds)
			{
				map = new Microsoft.Maps.Map(document.getElementById(appConfiguration.mapWrapperId), {
					credentials: appConfiguration.bingMapsKey,
					bounds: bingDefaultBounds,
					mapTypeId: Microsoft.Maps.MapTypeId.road,
                    customMapStyle: themesMap[themeSelector.currentTheme].mapStyle
				});				
			}
			else
			{
				var coordinates = result.resourceSets[0].resources[0].point.coordinates;
				var centerPoint = new Microsoft.Maps.Location(coordinates[0], coordinates[1]);
					
				map = new Microsoft.Maps.Map(document.getElementById(appConfiguration.mapWrapperId),
				{
					credentials: appConfiguration.bingMapsKey,
					center: centerPoint,
					mapTypeId: Microsoft.Maps.MapTypeId.road,
					zoom: Number(appConfiguration.mapZoom),
                    customMapStyle: themesMap[themeSelector.currentTheme].mapStyle
				});
            }
			
			Microsoft.Maps.loadModule("Microsoft.Maps.Clustering", function ()
			{
				clusterLayer = new Microsoft.Maps.ClusterLayer(pinArray);
				clusterLayer.setOptions( {gridSize: Number(appConfiguration.mapGridSize)} );
				map.layers.insert(clusterLayer);
			});
			
            if (appConfiguration.mapShowInfoBox)
            {
                infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
                    visible: false
                });
                
                //Assign the infobox to a map instance.
                infobox.setMap(map);
            }
            
            if (appConfiguration.mapShowTraffic && appConfiguration.mapShowTraffic === "fromstart")
            {
                Microsoft.Maps.loadModule("Microsoft.Maps.Traffic", function ()
                {
                    //Create an instance of the traffic manager and bind to map.
                    trafficManager = new Microsoft.Maps.Traffic.TrafficManager(map);
                    
                    //Display the traffic data.
                    trafficManager.show();
                });
            }
            
            if (appConfiguration.mapCenterPushpin)
            {
                var pushpin;
                if (appConfiguration.mapCenterPushpinTitle)
                {
                    var pushpinSettings =
                    {
                        title: appConfiguration.mapCenterPushpinTitle
                    };
                    
                    if (appConfiguration.mapCenterPushpinSubTitle)
                    {
                        pushpinSettings.subTitle = appConfiguration.mapCenterPushpinSubTitle;
                    }
                    
                    pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), pushpinSettings);
                    
                    pushpin.metadata =
                    {
                        title: appConfiguration.mapCenterPushpinTitle
                    };
                    
                    if (appConfiguration.mapCenterPushpinDescription)
                    {
                        pushpin.metadata.description = appConfiguration.mapCenterPushpinDescription
                    }
                }
                else
                {
                    pushpin = new Microsoft.Maps.Pushpin(map.getCenter());
                }
                
                if (appConfiguration.mapShowInfoBox)
                {
                    //Add a click event handler to the pushpin.
                    Microsoft.Maps.Events.addHandler(pushpin, 'click', this._pushpinClicked);
                }
                
                map.entities.push(pushpin);
            }
        }
    },
    
    isLoaded: function ()
    {
        return (map) ? true : false;
    },
    
    calculateMapInitParams: function (latArray, lonArray)
    {
        if (appConfiguration.bingMapsKey)
        {
            var locationArray = [];
            
            for (var i = 0; i < latArray.length; i++)
            {
                locationArray.push(new Microsoft.Maps.Location(latArray[i], lonArray[i]));
            }
            
            bingDefaultBounds = new Microsoft.Maps.LocationRect.fromLocations(locationArray);
        }
        else if (appConfiguration.azureMapsKey)
        {
            azureDefaultBounds.maxLat = -180;
            azureDefaultBounds.minLat = 300;
            azureDefaultBounds.maxLon = -180;
            azureDefaultBounds.minLon = 300;
            
            for(var i in latArray)
            {
                if (i < azureDefaultBounds.minLat)
                {
                    azureDefaultBounds.minLat = i;
                }
                if (i > azureDefaultBounds.maxLat)
                {
                    azureDefaultBounds.maxLat = i;
                }
            }
            
            for(var i in lonArray)
            {
                if (i < azureDefaultBounds.minLon)
                {
                    azureDefaultBounds.minLon = i;
                }
                if (i > azureDefaultBounds.maxLon)
                {
                    azureDefaultBounds.maxLon = i;
                }
            }
            
        }
    },
    
    getPushpinLocations: function ()
    {
        var pinLocArray = [];
        if (MapPlugIn.isLoaded())
        {
            if (appConfiguration.bingMapsKey)
            {
                if (pinArray)
                {
                    for (var i in pinArray)
                    {
                        pinLocArray.push({x: pinArray[i].geometry.x, y: pinArray[i].geometry.y});
                    }
                }
                
                if (map.entities)
                {
                    for (var i = 0; i < map.entities.getLength(); i++)
                    {
                        pinLocArray.push({x: map.entities.get(i).geometry.x, y: map.entities.get(i).geometry.y});
                    }   
                }
            }
            else if (appConfiguration.azureMapsKey)
            {
                for (var i in MapPlugIn.azureDefaultDatasource.shapes)
                {
                   pinLocArray.push({y: Number(MapPlugIn.azureDefaultDatasource.shapes[i].data.geometry.coordinates[1]),x: Number(MapPlugIn.azureDefaultDatasource.shapes[i].data.geometry.coordinates[0])});
                }
                
                for (var i in MapPlugIn.azureNoClusterDatasource.shapes)
                {
                   pinLocArray.push({y: Number(MapPlugIn.azureNoClusterDatasource.shapes[i].data.geometry.coordinates[1]),x: Number(MapPlugIn.azureNoClusterDatasource.shapes[i].data.geometry.coordinates[0])});
                }
            }
        }
        
        return pinLocArray;
    },
    
    /**
     * Function checks if given longitude and latitude are in current map bounds.
     * Returns true if it is in current map bounds, otherwise returns false 
     */
    isInShownMapArea: function (cLat, cLong)
    {
        if (appConfiguration.bingMapsKey)
        {
            var mapBounds = map.getBounds();
            var mapBoundsCenterLatitude = mapBounds["center"]["latitude"];
            var mapBoundsCenterLongitude = mapBounds["center"]["longitude"];
            if (cLat > mapBoundsCenterLatitude - mapBounds["height"] / 2 && cLat < mapBoundsCenterLatitude + mapBounds["height"] / 2  
                && cLong > mapBoundsCenterLongitude - mapBounds["width"] / 2 && cLong < mapBoundsCenterLongitude + mapBounds["width"] / 2)
            {
                return true;
            }
            
            return false;
        }
        else if(appConfiguration.azureMapsKey)
        {
            var mapBounds = map.getCamera().bounds;
            if(cLat > (mapBounds[1]) && cLat < (mapBounds[3]) && cLong > (mapBounds[0]) && cLong < (mapBounds[2]))
            {
                return true;
            }
            
            return false;
        }
    },
    
    setMapViewToRect: function (rectLan, rectLon, rectWidth, rectHeight, maxZoomValue)
    {
        if (appConfiguration.bingMapsKey)
        {
            var boundsRect = new Microsoft.Maps.LocationRect(new Microsoft.Maps.Location(rectLan, rectLon), rectWidth, rectHeight);
            map.setView({bounds:boundsRect, padding: 100});
            
            if (maxZoomValue && map.getZoom() > maxZoomValue)
            {
                map.setView({zoom: maxZoomValue});
            }
        }
        else if(appConfiguration.azureMapsKey)
        {
            map.setCamera({
                bounds: [rectLon - (rectHeight / 2), rectLan - (rectWidth / 2), rectLon + (rectHeight / 2), rectLan + (rectWidth / 2)],
                padding: 10
            });
            if(map.getCamera().zoom > maxZoomValue)
            {
                map.setCamera({
                    zoom: maxZoomValue
                });
            }
        }
    },
    
    showInfobox: function()
    {
        if (appConfiguration.bingMapsKey)
        {
            $('.Infobox').show();            
        }
        else if(appConfiguration.azureMapsKey)
        {
            if (MapPlugIn.azureInfoShouldOpen)
            {
                MapPlugIn.azureInfoShouldOpen = false;
                MapPlugIn.azureDefaultPopup.open(map); 
            }
            else
            {
                MapPlugIn.azureInfoShouldOpen = true;
            }
            
        }
    },
    
    /**
     * Adds a pushpin to a given location on the map
     */
    addLocation: function (latitude, longitude, title, subtitle, description, options, pushpinClickedCallback, clusterPin)
    {
        var pushpin;
        
        // Check which maps provider we should use
        if (appConfiguration.bingMapsKey)
        {
            if (title)
            {
                var pushpinSettings =
                {
                    title: title
                };
            
                if (subtitle)
                {
                    pushpinSettings.subTitle = subtitle;
                }
                
                pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(latitude, longitude), pushpinSettings);
                
                pushpin.metadata =
                {
                    title: title
                };
                
                if (description)
                {
                    pushpin.metadata.description = description;
                }
            }
            else
            {
                pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(latitude, longitude));
            }
            
            if (options)
            {
                if (options.color)
                {
                    pushpin.setOptions({ color: options.color});
                }
            }
            
            if (pushpinClickedCallback)
            {
                //Add a click event handler to the pushpin.
                Microsoft.Maps.Events.addHandler(pushpin, 'click', pushpinClickedCallback);
            }
            else
            {
                if (appConfiguration.mapShowInfoBox)
                {
                    //Add a click event handler to the pushpin.
                    Microsoft.Maps.Events.addHandler(pushpin, 'click', this._pushpinClicked);
                }
            }

			if (appConfiguration.mapClusterPins && (typeof clusterPin === "undefined" || clusterPin === true))
			{
				pinArray.push(pushpin);
				clusterLayer.setPushpins(pinArray);
			}
			else 
			{
				map.entities.push(pushpin);
			}  
        }
        else if (appConfiguration.azureMapsKey)
		{
            var icon = 'pin-red';
            
            if(options)
            {
                if(options.color === "blue")
                {
                    icon = 'pin-blue';
                }
            }
            
            var info = {};
            
            if (pushpinClickedCallback)
            {
                info.callback = pushpinClickedCallback;
            }
            
            if (description)
            {
                info.description = description;
                info.title = title;
            }
            
			pushpin = new atlas.data.Feature(new atlas.data.Point([longitude, latitude]),{
                fontSize: 14,
                icon: icon,
                iconSize: 1,
                textFont: 'SegoeUi-Bold',
                textOffset: [0-20],
                title: title,
				subtitle: subtitle,
                info: info
            }, longitude + " " + latitude);
            pushpin.metadata = {title: title};
            if (description)
            {
                pushpin.metadata.description = description;
            }
            if(clusterPin === false)
            {
                MapPlugIn.azureNoClusterDatasource.add(pushpin);
            }
            else
            {
                MapPlugIn.azureDefaultDatasource.add(pushpin);
            }
            
            pushpin = {target: {metadata: pushpin.properties.info, getLocation: function (){ return 0; }}};
		}
        return pushpin;
    },
    
    /**
     * Removes a pushpin from a given location on the map if exists
     */
    removeLocation: function (latitude, longitude)
    {
        // Check which maps provider we should use
        if (appConfiguration.bingMapsKey)
        {
			var locationToRemove = new Microsoft.Maps.Location(latitude, longitude);
            if (map && map.entities)
            {
				var pushpin = null;
				if (map.entities.getLength())
				{
					
					for (var entInd = 0; entInd < map.entities.getLength(); entInd++)
					{
						if (Microsoft.Maps.Location.areEqual(map.entities.get(entInd).getLocation(), locationToRemove))
						{
							pushpin = map.entities.get(entInd);
                        
							break;
						}
					}
                
					if (pushpin)
					{
						map.entities.remove(pushpin);
					}
				}
				
				var indexer;
				if (pinArray.length)
				{
					for (indexer = 0; indexer < pinArray.length; indexer++)
					{
						if (Microsoft.Maps.Location.areEqual(pinArray[indexer].getLocation(), locationToRemove))
						{
							break;
						}
					}
					
					if (indexer != pinArray.length)
					{
						
						pinArray.splice(indexer, 1);
						clusterLayer.setPushpins(pinArray);
					}
				}
            }
        }
        else if (appConfiguration.azureMapsKey)
		{
            try {
              MapPlugIn.azureDefaultDatasource.remove(longitude + " " + latitude);
            }
            catch(err) {}
            try {
              MapPlugIn.azureNoClusterDatasource.remove(longitude + " " + latitude);
            }
            catch(err) {}
            
            
		}
    },
	
	/**
     * Clears the map of all pushpins
     */
	clearMap: function ()
	{
        if (appConfiguration.bingMapsKey)
        {
            pinArray.length = 0;
            clusterLayer.setPushpins([]);
            if (map && map.entities)
            {
                map.entities.clear();
            }
        }
        else if (appConfiguration.azureMapsKey)
        {
            MapPlugIn.azureDefaultDatasource.clear();
            MapPlugIn.azureNoClusterDatasource.clear();
        }
	},
    
    changeMapGridSize: function (param)
    {
        if (appConfiguration.bingMapsKey && clusterLayer)
        {
            clusterLayer.setOptions({gridSize: param});
        }
        else if (appConfiguration.azureMapsKey)
        {
            MapPlugIn.azureDefaultDatasource.setOptions({clusterRadius: param});
        }
    },
    
    _pushpinClicked: function (e)
    {
        if(appConfiguration.bingMapsKey)
        {
            //Make sure the infobox has metadata to display.
            if (e.target.metadata)
            {
                if (appConfiguration.mapShowInfoBox)
                {
                    //Set the infobox options with the metadata of the pushpin.
                    infoboxinfobox.setOptions
                    ({
                        location: e.target.getLocation(),
                        title: e.target.metadata.title,
                        description: e.target.metadata.description,
                        visible: true
                    });
                }
            }
            
            if (appConfiguration.mapShowTraffic && appConfiguration.mapShowTraffic === "pushpinclick")
            {
                Microsoft.Maps.loadModule("Microsoft.Maps.Traffic", function ()
                {
                    //Create an instance of the traffic manager and bind to map.
                    trafficManager = new Microsoft.Maps.Traffic.TrafficManager(map);
                    
                    //Display the traffic data.
                    trafficManager.show();
                });
            }
        }
        else if (appConfiguration.azureMapsKey)
		{
			MapPlugIn.azurePinClicked(e.shapes[0]);
		}
    },
    
    /**
     * Creates a driving route from one point on the map to another
     */
    showRoute: function (startla, endla, startlong, endlong, startTitle, endTitle)
    {
        // Check which maps provider we should use
        if (appConfiguration.bingMapsKey)
        {
            if (dm != null)
            {
                dm.clearAll();
            }
            
            Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function ()
            {
                dm = new Microsoft.Maps.Directions.DirectionsManager(map);
                dm.setRequestOptions
                ({
                    routeMode: Microsoft.Maps.Directions.RouteMode.driving,
                    distanceUnit: Microsoft.Maps.Directions.DistanceUnit.km
                });
                
                dm.setRenderOptions
                ({
                    autoUpdateMapView: false,
                    drivingPolylineOptions:
                    {
                        strokeColor: 'blue',
                        strokeThickness: 3
                    }
                });
                
                dm.addWaypoint(new Microsoft.Maps.Directions.Waypoint
                (startTitle ? {
                    address: startTitle,
                    location: new Microsoft.Maps.Location(startla, startlong)
                } : {                
                    location: new Microsoft.Maps.Location(startla, startlong)
                }));
                
                dm.addWaypoint(new Microsoft.Maps.Directions.Waypoint
                (endTitle ? {
                    address: endTitle,
                    location: new Microsoft.Maps.Location(endla, endlong)
                } : {
                    location: new Microsoft.Maps.Location(endla, endlong)
                }));
                
                dm.calculateDirections();
                
                if (appConfiguration.mapRouteInfoWrapperId && document.getElementById(appConfiguration.mapRouteInfoWrapperId))
                {
                    dm.setRenderOptions
                    ({
                        itineraryContainer: document.getElementById(appConfiguration.mapRouteInfoWrapperId)
                    });
                }
            });
        }
        else if (appConfiguration.azureMapsKey)
		{
          
            var start = new atlas.data.Feature(new atlas.data.Point([startlong, startla]), {
                title: 'Start',
                icon: 'pin-blue'
            }); 
            var end= new atlas.data.Feature(new atlas.data.Point([endlong, endla]), {
                title: 'Finish',
                icon: 'pin-blue'
            }); 
            
            MapPlugIn.azureRouteDatasource.add([start,end]);
            
			var routeQuery = start.geometry.coordinates[1] +
			',' +
			start.geometry.coordinates[0] +
			':' +
			end.geometry.coordinates[1] +
			',' +
			end.geometry.coordinates[0];
			
			MapPlugIn.azureDefaultServiceClient.route.getRouteDirections(routeQuery,{instructionsType: 'text'}).then(function (response) {
				var geoJsonResponse = new MapPlugIn.azureServiceReference.geojson.GeoJsonRouteDirectionsResponse(response);
				MapPlugIn.azureRouteDatasource.add(geoJsonResponse.getGeoJsonRoutes().features[0]);
			});
		}
    },
    
    /**
     * Calculates distances from an origin to destinations. Calls remote API function to perform calculation asynchronously.
     * Executes a callback function when calculation is performed and hands over distance matrix to the callback function as
     * a parameter array of the format:
     * [{"distance": <Distance to the first destination point>, "time": <Time needed to get to the first destination point>},...]
     * 
     * @param origla {number} Latitude of the origin
     * @param origlong {number} Longitude of the origin
     * @param destlas {array} Array of destionation latitudes
     * @param destlongs {array} Array of destination longitudes
     * @param travelMode {string} Travel mode type
     * @param callback {function} Function called when distances are calculated
     */
    getDistanceMatrix: function (origla, origlong, destlas, destlongs, travelMode, callback)
    {
        // Check which maps provider we should use
        if (appConfiguration.bingMapsKey)
        {
            var destinations = [];
            for (var destInd = 0; destInd < destlas.length && destInd < destlongs.length; destInd++)
            {
                destinations.push({"latitude": destlas[destInd], "longitude": destlongs[destInd]});
            }
            
            if (destinations.length)
            {
                var xhr = new XMLHttpRequest();
                var distance;
                var time;
                
                xhr.addEventListener("readystatechange", function ()
                {
                    if (this.readyState === 4)
                    {
                        var result = this.responseText;
                        var resultJSON = JSON.parse(result).resourceSets[0].resources[0].results;
                        var parsedResults = [];
                        for (var i = 0; i < resultJSON.length; i++)
                        {
                            parsedResults.push({"distance": resultJSON[i].travelDistance, "time": resultJSON[i].travelDuration});
                        }
                        
                        callback(parsedResults);
                    }
                });
                
                var url = "https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?key=" + appConfiguration.bingMapsKey;

                xhr.open("POST", url);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.send(JSON.stringify
                ({
                    "origins":
                    [{
                        "latitude": origla,
                        "longitude": origlong
                    }],
                    "destinations": destinations,
                    "travelMode": travelMode
                }));
            }
        }
        else if (appConfiguration.azureMapsKey)
		{
			var destinations = [];
            for (var destInd = 0; destInd < destlas.length && destInd < destlongs.length; destInd++)
            {
                destinations.push([destlongs[destInd], destlas[destInd]]);
            }
			if (destinations.length)
            {
				var org={
					type: "MultiPoint",
					coordinates: [[origlong, origla]]
				};
				var dst={
					type: "MultiPoint",
					coordinates: destinations
				};
                
				var xhr = new XMLHttpRequest();
				xhr.addEventListener("readystatechange", function ()
                {
                    if (this.readyState === 4)
                    {
                        var returnVal=JSON.parse( this.responseText).matrix[0];
                        for(var i = 0; i < returnVal.length; i++)
                        {
                            returnVal[i].distance = returnVal[i].response.routeSummary.lengthInMeters / 1000; 
                        }
                        callback(returnVal);
                    }
                });
				
				var url = "https://atlas.microsoft.com/route/matrix/json?api-version=1.0&subscription-key=" + appConfiguration.azureMapsKey;

                xhr.open("POST", url);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.send(JSON.stringify
                ({
                    "origins": org,
                    "destinations": dst
                }));
			}
		}
    },
    
    searchAddress: function (query, maxResults, callbackName, options)
    {
        // Check which maps provider we should use
        if (appConfiguration.bingMapsKey)
        {
            var geocodeRequest = "https://dev.virtualearth.net/REST/v1/Locations?query=" + encodeURIComponent(query) + "&maxResults=" + maxResults + "&key="
                + appConfiguration.bingMapsKey + (options && typeof options.culture == "string" ? "&culture=" + options.culture : "")
                + "&userMapView=" + map.getBounds().bounds[2] + "," + + map.getBounds().bounds[3] + "," + map.getBounds().bounds[0] + ","
                + map.getBounds().bounds[1] + (options && typeof options.userRegion == "string" ? "&userRegion=" + options.userRegion : "")
                + (options && typeof options.userLocation == "string" ? "&userLocation=" + options.userLocation : "")
                + "&jsonp=" + (callbackName ? callbackName : "MapPlugIn._geocodeSearchCallback");
            MapPlugIn._performGeoCodeRequest(geocodeRequest);
        }
        else if (appConfiguration.azureMapsKey)
		{
			MapPlugIn.azureDefaultServiceClient.search.getSearchAddress(addressLine + " " + district + " " + postalCode, { 
				limit: maxResults
				}).then(response => {
					MapPlugIn.azureSearchDatasource.clear();
					
					var geojsonResponse = new MapPlugIn.azureServiceReference.geojson.GeoJsonSearchResponse(response); 
					var geojsonResults = geojsonResponse.getGeoJsonResults();
					eval(callbackName+"( geojsonResponse._geoJsonResults.features);")
			});
		}
    },
    
    searchAutosuggestions: function (query, maxResults, callbackName, options)
    {
        // Check which maps provider we should use
        if (appConfiguration.bingMapsKey)
        {
            var geocodeRequest = "https://dev.virtualearth.net/REST/v1/Autosuggest?query=" + encodeURIComponent(query) + "&maxResults=" + maxResults + "&key="
                + appConfiguration.bingMapsKey + (options && typeof options.culture == "string" ? "&culture=" + options.culture : "")
                + "&userMapView=" + map.getBounds().bounds[2] + "," + + map.getBounds().bounds[3] + "," + map.getBounds().bounds[0] + ","
                + map.getBounds().bounds[1] + (options && typeof options.userRegion == "string" ? "&userRegion=" + options.userRegion : "")
                + (options && typeof options.userLocation == "string" ? "&userLocation=" + options.userLocation : "")
                + (options && typeof options.includeEntityTypes == "string" ? "&includeEntityTypes=" + options.includeEntityTypes : "")
                + "&jsonp=" + (callbackName ? callbackName : "MapPlugIn._geocodeSearchCallback");
            MapPlugIn._performGeoCodeRequest(geocodeRequest);
        }
        else if (appConfiguration.azureMapsKey)
		{   
			var Http = new XMLHttpRequest();
            var url='https://atlas.microsoft.com/search/address/json?';
            url += "query=" + query;
            url += "&subscription-key=" + appConfiguration.azureMapsKey;
            url += "&typeahead=true";
            url += "&api-version=1.0";
            url += "&limit=" + maxResults;
            
            if(options && options.userRegion)
            {
                url += "&countrySet=" + options.userRegion;
            }
            
            Http.open("GET", url);
            Http.send();
            Http.onreadystatechange=(e)=>{
                var response = JSON.parse(Http.responseText);
                response.resourceSets = [];
                response.resourceSets.push({resources:[]});
                response.resourceSets[0].resources.push({value: []});
                for(var i = 0; i <response.results.length; i++)
                {
                    response.results[i].address.formattedAddress = response.results[i].address.freeformAddress;
                    response.resourceSets[0].resources[0].value.push(response.results[i]);
                }
                
                eval(callbackName+"(response);");
            }
		}
    },
    
    findAddress: function (district, locality, postalCode, addressLine, maxResults, callbackName, options)
    {
        // Check which maps provider we should use
        if (appConfiguration.bingMapsKey)
        {
            var geocodeRequest = "https://dev.virtualearth.net/REST/v1/Locations?countryRegion=" + appConfiguration.mapCountryName + "&maxResults=" + maxResults
                + (options && typeof options.culture == "string" ? "&culture=" + options.culture : "")
                + "&userMapView=" + map.getBounds().bounds[2] + "," + + map.getBounds().bounds[3] + "," + map.getBounds().bounds[0] + ","
                + map.getBounds().bounds[1] + (options && typeof options.userRegion == "string" ? "&userRegion=" + options.userRegion : "")
                + (district ? "&adminDistrict=" + district : "") + (locality ? "&locality=" + locality : "")
                + (postalCode ? "&postalCode=" + postalCode : "") + (addressLine ? "&addressLine=" + addressLine : "") 
                + "&key=" + appConfiguration.bingMapsKey + "&jsonp=" + (callbackName ? callbackName : "MapPlugIn._geocodeSearchCallback");
            MapPlugIn._performGeoCodeRequest(geocodeRequest);
        }
        else if(appConfiguration.azureMapsKey)
		{
			MapPlugIn.azureDefaultServiceClient.search.getSearchAddress(addressLine + " " + district + " " + postalCode, { 
				limit: 1
				}).then(response => {
					MapPlugIn.azureSearchDatasource.clear();
					
					var geojsonResponse = new MapPlugIn.azureServiceReference.geojson.GeoJsonSearchResponse(response); 
					var geojsonResults = geojsonResponse.getGeoJsonResults();
					MapPlugIn.azureSearchCallback(geojsonResponse._geoJsonResults.features);
			});
		}
    },
    
    azureSearchCallback: function (result)
	{
		MapPlugIn.azureSearchDatasource.add(result);
	},
    
    clearDirections: function ()
    {
        if (appConfiguration.bingMapsKey && dm != null)
        {
            dm.clearAll();
        }
        else if(appConfiguration.azureMapsKey)
        {
            MapPlugIn.azureRouteDatasource.clear();
        }        
    },
    
	updateClustering: function ()
	{
        if(appConfiguration.bingMapsKey)
        {
            if (appConfiguration.mapClusterPins)
            {
                for (var entInd = 0; entInd < map.entities.getLength(); entInd++)
                {
                    pinArray.push(map.entities.get(entInd));			
                }
                map.entities.clear();
                clusterLayer.setPushpins(pinArray);
            }
            else 
            {
                map.entities.push(pinArray);
                pinArray=[];
                clusterLayer.setPushpins([]);
            }
        }
        else if(appConfiguration.azureMapsKey)
        {
            MapPlugIn.azureDefaultDatasource.setOptions({cluster: appConfiguration.mapClusterPins});
        }
	},
	
    _geocodeSearchCallback: function (result)
    {
        if (result && result.resourceSets && result.resourceSets.length > 0 && result.resourceSets[0].resources && result.resourceSets[0].resources.length > 0)
        {
            addLocation(result.resourceSets[0].resources[0].point.coordinates[0], result.resourceSets[0].resources[0].point.coordinates[1], 'Your Location', '', '');
        }
    },
    
    _createAzureService: function()
	{
		MapPlugIn.azureDefaultServiceClient = new atlas.service.Client(appConfiguration.azureMapsKey);
		MapPlugIn.azureServiceReference = atlas.service;
	},
    
    _azureMapsLoadedCallback: function (e) 
	{
		if (azureDefaultBounds.maxLat)
        {
            map.setCamera({
                bounds: [azureDefaultBounds.minLon, azureDefaultBounds.minLat, azureDefaultBounds.maxLon, azureDefaultBounds.maxLat],
                padding: 10
            });
        }
        
		//Data Sources
		MapPlugIn.azureSearchDatasource = new atlas.source.DataSource("searchDatasource", {});
		MapPlugIn.azureRouteDatasource = new atlas.source.DataSource("routeDatasource", {});
        MapPlugIn.azureNoClusterDatasource = new atlas.source.DataSource("noClusterDatasource", {});
		MapPlugIn.azureDefaultDatasource = new atlas.source.DataSource("defaultDatasource", {
			cluster: true,
			clusterRadius: 45,
			clusterMaxZoom: 15 
        });
		
		map.sources.add(MapPlugIn.azureDefaultDatasource); 
		map.sources.add(MapPlugIn.azureSearchDatasource);	
		map.sources.add(MapPlugIn.azureRouteDatasource);
        map.sources.add(MapPlugIn.azureNoClusterDatasource);
		
		//Symbol Layers
		MapPlugIn.azureDefaultSymbolLayer = new atlas.layer.SymbolLayer(MapPlugIn.azureDefaultDatasource, "defaultSymbol", {
            filter: ['!', ['has', 'point_count']], 
            allowOverlap: true,
			textOptions: {
                textField: '{title}',
                offset: [0, 0.9],
                allowOverlap: true
            },
			iconOptions: {
				image: ['get','icon'],
				allowOverlap: true
			}
        });
        
        MapPlugIn.azureNoClusterSymbolLayer = new atlas.layer.SymbolLayer(MapPlugIn.azureNoClusterDatasource, "noClusterSymbol", {
            allowOverlap: true,
			textOptions: {
                textField: '{title}',
                offset: [0, 0.9],
                allowOverlap: true
            },
			iconOptions: {
				image: ['get','icon'],
				allowOverlap: true
			}
        });
        
		MapPlugIn.azureDefaultClusterLayer.clusterSymbolLayer =  new atlas.layer.SymbolLayer(MapPlugIn.azureDefaultDatasource, "defaultBubbleNumber", {
            iconOptions: {
                image: 'none'
            },
            textOptions: {
                textField: '{point_count_abbreviated}',
                offset: [0, 0.4]
            }
        });
        
		MapPlugIn.azureSearchSymbolLayer = new atlas.layer.SymbolLayer(MapPlugIn.azureSearchDatasource, "searchSymbol", {
			iconOptions: {
				allowOverlap: true
			},
			textOptions: {
                textField: '{title}',
                offset: [0, 0.9]
            }
		});
        
		MapPlugIn.azureRouteSymbolLayer = new atlas.layer.SymbolLayer(MapPlugIn.azureRouteDatasource, "routeSymbol", {
			iconOptions: {
				image: ['get','icon'],
				allowOverlap: true
			}
		});
		
		//Bubble Layers
		MapPlugIn.azureDefaultClusterLayer.clusterBubbleLayer = new atlas.layer.BubbleLayer(MapPlugIn.azureDefaultDatasource, "defaultBubble", {
			radius: 20,
			color: 'rgba(30,30,250,0.8)',
			strokeWidth: 0,
			filter: ['has', 'point_count'] 
        });
		
		//Line Layers
		MapPlugIn.azureRouteLineLayer = new atlas.layer.LineLayer(MapPlugIn.azureRouteDatasource, null, {
			strokeColor: '#2272B9',
			strokeWidth: 5,
			lineJoin: 'round',
			lineCap: 'round',
			filter: ['==', '$type', 'LineString']
		});
		
		//Mouse Events
        map.events.add('click', MapPlugIn.azureDefaultClusterLayer.clusterBubbleLayer, MapPlugIn.azureClusterClicked);

        map.events.add('mouseenter', MapPlugIn.azureDefaultClusterLayer.clusterBubbleLayer, function () {
            map.getCanvas().style.cursor = 'pointer';
        });

        map.events.add('mouseleave', MapPlugIn.azureDefaultClusterLayer.clusterBubbleLayer, function () {
			map.getCanvas().style.cursor = '';
        });

		map.events.add('click', MapPlugIn.azureDefaultSymbolLayer, MapPlugIn._pushpinClicked);  
        map.events.add('click', MapPlugIn.azureNoClusterSymbolLayer, MapPlugIn._pushpinClicked);
        map.events.add('mouseenter', MapPlugIn.azureDefaultSymbolLayer, function () {
            map.getCanvas().style.cursor = 'pointer';
        });
        map.events.add('mouseleave', MapPlugIn.azureDefaultSymbolLayer, function () {
			map.getCanvas().style.cursor = '';
        });
		
		//Popups
		MapPlugIn.azureDefaultPopup = new atlas.Popup();
		
        map.layers.add([
			//Default Datasource
            MapPlugIn.azureDefaultClusterLayer.clusterBubbleLayer,
			MapPlugIn.azureDefaultClusterLayer.clusterSymbolLayer,
            MapPlugIn.azureDefaultSymbolLayer,
			
            //NoCluster Datasource
            MapPlugIn.azureNoClusterSymbolLayer,
            
			//Search Datasource
			MapPlugIn.azureSearchSymbolLayer,
			
			//Route Datasource
			MapPlugIn.azureRouteLineLayer,
			MapPlugIn.azureRouteSymbolLayer
        ]);
		
		if (appConfiguration.mapCenterPushpin)
        {
            var pin = new atlas.data.Feature(new atlas.data.Point([appConfiguration.mapCenterLongitude, appConfiguration.mapCenterLatitude]),{
                fontColor: '#000',
                fontSize: 14,
                icon: 'pin-red',
                iconSize: 1,
                name: 'default-pin-layer',
                textFont: 'SegoeUi-Bold',
                textOffset: [0-20],
                title: appConfiguration.mapCenterPushpinTitle,
				subtitle: appConfiguration.mapCenterPushpinSubTitle
            }, appConfiguration.mapCenterLongitude + " " + appConfiguration.mapCenterLatitude);
            MapPlugIn.azureDefaultDatasource.add(pin);
        }
    },

	azurePinClicked: function (shape)
	{
        
        if(shape.data.properties.info.callback)
        {
            var bingFormat = {target: {metadata: shape.data.properties.info, getLocation: function (){ return 0; }}};
            shape.data.properties.info.callback(bingFormat);
        }	
	},
	
	azureClusterClicked: function (e) 
	{
        if (e && e.shapes && e.shapes.length > 0 && e.shapes[0].properties.cluster) 
		{
            
            var cluster = e.shapes[0];
            
            MapPlugIn.azureDefaultDatasource.getClusterExpansionZoom(cluster.properties.cluster_id).then(function (zoom) {

				map.setCamera({
					center: cluster.geometry.coordinates,
					zoom: zoom,
					type: 'ease',
                    duration: 200
                });
            });
        }
    },
    
    setInfoboxOptions (options, shapeRef)
    {
        if (appConfiguration.bingMapsKey)
        {
            infobox.setOptions(options);
        }
        else if(appConfiguration.azureMapsKey)
        {
            var html = ['<div class="azurePopup">']; 
                html.push('<div class="azurePopupTitle">', 
                options['title'], 
                '</div><div class="azurePopupContent">',
                options.description
            ); 
            html.push('</div></div>');
            
            MapPlugIn.azureDefaultPopup.setOptions({ 

                //Create a table from the properties in the feature. 
                content:  html.join(''),
                position: [Number(shapeRef.metadata.description.Longitude), Number(shapeRef.metadata.description.Latitude)]
            }); 

            //Open the pop-up window. 
            if (MapPlugIn.azureInfoShouldOpen)
            {
                MapPlugIn.azureInfoShouldOpen = false;
                MapPlugIn.azureDefaultPopup.open(map); 
            }
            else
            {
                MapPlugIn.azureInfoShouldOpen = true;
            }
        }
    }

}