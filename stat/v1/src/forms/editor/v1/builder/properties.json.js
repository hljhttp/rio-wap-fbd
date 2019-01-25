var propertiesObj = {
  "display": "form",
  "components": [
    {
      "label": "",
      "type": "table",
      "key": "table",
      "numRows": 12,
      "numCols": 4,
      "rows": [
        [
          {
            "components": [
              {
                "label": "formtitle",
                "tooltip": "The name of the browser tab.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "formtitle",
                "custom": "addDefaultValue(event,'Browser tab name')\n\n"
              }
            ]
          },
          {
            "components": [
              {
                "label": "mainlogopath",
                "tooltip": "The relative path from the index.html of the header to the mainlogo.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "mainlogopath",
                "custom": "addDefaultValue(event,'../brands/mainlogo.png')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "app launcher",
                "tooltip": "Enable the app laucnher menu in the header bar.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "applauncher",
                "custom": "addDefaultValue(event,'true')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "feedback",
                "tooltip": "Show the Feedback tab in the footer.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "feedback",
                "custom": "addDefaultValue(event,'true')"
              }
            ]
          }
        ],
        [
          {
            "components": [
              {
                "label": "formhelp",
                "tooltip": "The help text of the form, can be overwritten by each field.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "formhelp",
                "custom": "addDefaultValue(event,'Here goes the form help text shown in the help menu...','quill')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "sidelogopath",
                "tooltip": "The relative path from the index.html of the header to the sidelogo.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "sidelogopath",
                "custom": "addDefaultValue(event,'../brands/sidelogo.png')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "environment",
                "tooltip": "Show the environment (tenant) menu in the header bar.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "environment",
                "custom": "addDefaultValue(event,'true')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "display",
                "tooltip": "Show as form or as wizard.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "display",
                "custom": "addDefaultValue(event, 'form')"
              }
            ]
          }
        ],
        [
          {
            "components": [
              {
                "label": "elearninglink",
                "tooltip": "The URL to the graphic/logo to be shown for the elearining course link, can be overwritten by each field.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "elearninglink",
                "custom": "addDefaultValue(event,'https://en.wikipedia.org/wiki/Operation_(mathematics)')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "faviconpath",
                "tooltip": "The relative path from the index.html of the header to the browser favcon.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "faviconpath",
                "custom": "addDefaultValue(event,'../brands/sidelogo.png')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "notifications",
                "tooltip": "Show the notifications icon in the header bar.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "notifications",
                "custom": "addDefaultValue(event,'true')"
              }
            ]
          },
          {
            "components": [
              {
                "label": " mailbox photo",
                "tooltip": "use the mailbox photo instead of the Azure profile photo.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "mailboxphoto",
                "custom": "addDefaultValue(event,'false')"
              }
            ]
          }
        ],
        [
          {
            "components": [
              {
                "label": "elearningimagelink",
                "headers": [
                  {
                    "header": "",
                    "value": ""
                  }
                ],
                "tooltip": "The URL to the graphic/logo to be shown for the elearning course link, can be overwritten by each field.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "elearningimagelink",
                "custom": "addDefaultValue(event,'http://www.sparklebox.co.uk/wp-content/uploads/1-1231.jpg')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "bootswatchtheme",
                "tooltip": "The bootswatch theme to load with this form.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "bootswatchtheme",
                "custom": "addDefaultValue(event,'bluemeanie')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "settings",
                "tooltip": "Show the settings icon in the header bar.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "settings",
                "custom": "addDefaultValue(event,'true')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "themes",
                "tooltip": "The relative path from the index.html to the themes list configuration.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "themes",
                "custom": "addDefaultValue(event,'../appcnfs/themes.json.js')"
              }
            ]
          }
        ],
        [
          {
            "components": [
              {
                "label": "processimagelink",
                "tooltip": "The URL to the graphic/logo to be shown for the elearining course link, can be overwritten by each field.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "processimagelink",
                "custom": "addDefaultValue(event,'https://i.stack.imgur.com/MjNuE.gif')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "customizationlogopath",
                "tooltip": "The relative path from the index.html of the header of the customization logo.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "customizationlogopath",
                "custom": "addDefaultValue(event,'../logos/pws_hdr.png')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "help",
                "tooltip": "Show the help icon in the header bar.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "help",
                "custom": "addDefaultValue(event,'true')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "branddefinition",
                "tooltip": "The relative path from the index.html of the header to the brand definition.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "branddefinition",
                "custom": "addDefaultValue(event,'../appcnfs/brand.json.js')"
              }
            ]
          }
        ],
        [
          {
            "components": [
              {
                "label": "processlink",
                "tooltip": "The URL to thebusiness process definition, can be overwritten by each field.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "processlink",
                "custom": "addDefaultValue(event,'https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers')"
              }
            ]
          },
          {
            "components": [
              {
                "label": " use outlook settings",
                "tooltip": "Store user language and timezone in the mailbox settings",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "useoutlooksettings",
                "custom": "addDefaultValue(event,'true')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "account",
                "tooltip": "Enable the account menu in the header bar",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "account",
                "custom": "addDefaultValue(event,'true')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "customizationdefinition",
                "tooltip": "The relative path from the index.html of the header of the customization logo.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "customizationdefinition",
                "custom": "addDefaultValue(event,'../cstmz/cstmz.json.js')"
              }
            ]
          }
        ],
        [
          {
            "components": [
              {
                "label": "maximize",
                "tooltip": "If the app should be maximized when opened with this form. Only works on IE and with special IE settings !.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "maximize",
                "custom": "addDefaultValue(event,'true')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "use user property extensions",
                "tooltip": "Store the theme (and language + timezone if not stored in the mailbox) in the user property extensions.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "useuserpropertyextensions",
                "custom": "addDefaultValue(event,'true')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "theme settings",
                "tooltip": "Allow the user to select a theme.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "themesettings",
                "custom": "addDefaultValue(event,'false')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "headerconfiguration",
                "tooltip": "The relative path from the index.html of the header to the header configuration.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "headerconfiguration",
                "custom": "addDefaultValue(event,'../appcnfs/header.json.js')"
              }
            ]
          }
        ],
        [
          {
            "components": [
              {
                "label": "phraseapp project id",
                "tooltip": "The id of the phrase app project that is used to translate this form, please paste it into this custom property.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "phraseappprojectid",
                "custom": "addDefaultValue(event,'Paste your PhraseApp project ID here !')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "formversion",
                "tooltip": "The version of this form, usually we start with v1.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "formversion",
                "custom": "addDefaultValue(event,'v1')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "multilanguage",
                "tooltip": "Is this form multilingual / translated ? Then insert this custom property with the value: true",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "multilanguage",
                "custom": "addDefaultValue(event,'true')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "language",
                "tooltip": "The language code of the language that this form is created / used in, e.g. en_GB or de_AT.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "language",
                "custom": "addDefaultValue(event,'en_GB')"
              }
            ]
          }
        ],
        [
          {
            "components": [
              {
                "label": "form width percent",
                "action": "custom",
                "theme": "primary",
                "custom": "addDefaultValue(event,'100')",
                "tooltip": "Its an attribute how wide the form.",
                "type": "button",
                "key": "formwidthpercent"
              }
            ]
          },
          {
            "components": [
              {
                "label": "elearningtext",
                "tooltip": "elearningtext",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "elearningtext",
                "custom": "addDefaultValue(event,'','quill')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "processtext",
                "tooltip": "processtext",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "processtext",
                "custom": "addDefaultValue(event,'','quill')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "autocalc",
                "tooltip": "Automatic calculation using SSC, value can be fieldchange or focuschange",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "autocalc",
                "custom": "addDefaultValue(event,'fieldchange')"
              }
            ]
          }
        ],
        [
          {
            "components": [
              {
                "label": "calc_js_path",
                "tooltip": "Path or URL to a calculation JS file, either calls locally (if offline or no api path is provided) or as body parameter.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "calc_js_path",
                "custom": "addDefaultValue(event,'../cals/calc1/v1/calc.js')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "calc_api_path",
                "tooltip": "The full URL to call, only gets used if app is online",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "calc_api_path",
                "custom": "addDefaultValue(event,'https://host.azurewebsites.net/prj/v1/Calculation(\\'calc1/v1\\')/Calculate')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "calc_js_setting",
                "tooltip": "The AppSetting name that holds the path / URL to the calculation calc.js file to be used",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "calc_js_setting",
                "custom": "addDefaultValue(event,'CALC_DEFAULT_calculation')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "calc_conf_path",
                "tooltip": "The path to a json file holding the configuration parameters for the calculation call",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "calc_conf_path",
                "custom": "addDefaultValue(event,'../cals/calc1/v1/conf.json')"
              }
            ]
          }
        ],
        [
          {
            "components": [
              {
                "label": "calc_conf_setting",
                "tooltip": "The AppSetting name that holds the path / URL to the configuration file to be used",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "calc_conf_setting",
                "custom": "addDefaultValue(event,'CALC_DEFAULT_conf')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "actionLoading",
                "tooltip": "The relative URL to call before a form is loaded",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "actionLoading",
                "custom": "addDefaultValue(event,'Form(\\'{formname}/{formversion}\\')/Loading')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "actionLoaded",
                "tooltip": "The relative URL to call after a form was loaded",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "actionLoaded",
                "custom": "addDefaultValue(event,'Form(\\'{formname}/{formversion}\\')/Loaded')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "loadingScript",
                "tooltip": "Path or URL to a JS file to execute before a form gets loaded",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "loadingScript",
                "custom": "addDefaultValue(event,'','ace')"
              }
            ]
          }
        ],
        [
          {
            "components": [
              {
                "label": "loadedScript",
                "tooltip": "Path or URL to a JS file to execute after a form gets loaded",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "loadedScript",
                "custom": "addDefaultValue(event,'','ace')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "calc_js_path_local",
                "tooltip": "Path or URL to a calculation JS file, either calls locally (if offline or no api path is provided) or as body parameter.",
                "type": "button",
                "action": "custom",
                "theme": "primary",
                "key": "calc_js_path_local",
                "custom": "addDefaultValue(event,'../calcs/calc1/v1/calc.js')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "customCss",
                "action": "custom",
                "theme": "primary",
                "tooltip": "Path or URL to css file ",
                "type": "button",
                "key": "customCss",
                "custom": "addDefaultValue(event,'')"
              }
            ]
          },
          {
            "components": [
              {
                "label": "customScript",
                "action": "custom",
                "theme": "primary",
                "tooltip": "Path or URL to a JS file",
                "type": "button",
                "key": "customScript",
                "custom": "addDefaultValue(event,'')"
              }
            ]
          }
        ]
      ],
      "hideLabel": true
    }
  ],
  "properties": {},
  "title": "",
  "name": ""
}