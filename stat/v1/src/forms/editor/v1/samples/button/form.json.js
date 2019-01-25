var formObj = {
  "display": "form",
  "components": [
    {
      "label": "Startpage",
      "action": "custom",
      "shortcut": "",
      "mask": false,
      "tableView": true,
      "type": "button",
      "input": true,
      "key": "start",
      "properties": {},
      "tags": [],
      "showValidations": false,
      "custom": "TogFormViewer.loadForm('../forms/editor/v1/samples/start');"
    },
    {
      "attrs": [],
      "content": "Basic Components",
      "label": "Heading1",
      "tag": "h1",
      "className": "",
      "refreshOnChange": false,
      "mask": false,
      "type": "htmlelement",
      "input": false,
      "key": "heading2",
      "tableView": true
    },
    {
      "attrs": [],
      "content": "Button",
      "label": "Heading3",
      "tag": "h3",
      "className": "",
      "refreshOnChange": false,
      "mask": false,
      "type": "htmlelement",
      "input": false,
      "key": "heading4",
      "tableView": true
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Submit",
              "theme": "primary",
              "type": "button",
              "key": "submit",
              "input": true,
              "tableView": true
            }
          ],
          "width": 3,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "The default button of form.io and the FormBuilder is a Submit button.\n<br>\n<br>\nThe minimal button definition is:\n<xmp>\n{\n  \"type\": \"button\",\n  \"label\": \"Submit\",\n  \"key\": \"submit\"\n}\n</xmp>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph",
              "tableView": true
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        }
      ],
      "label": "Columns",
      "mask": false,
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Download",
              "leftIcon": "glyphicon glyphicon-download",
              "type": "button",
              "key": "submit",
              "input": true,
              "tableView": true
            }
          ],
          "width": 3,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "Button can include an icon to the left of the button label by adding the icon class.\n<br>\n<xmp>\n{\n  \"label\": \"Download\",\n  \"leftIcon\": \"glyphicon glyphicon-download\",\n  \"type\": \"button\",\n  \"key\": \"submit\"\n}\n</xmp>\nFor more sample about icons, click the icon below:\n<div>\n<a href=\"../header/index.html?form=../forms/editor/v1/samples/icons/font-awesome/\" target=\"_blank\"><i class=\"fab fa-font-awesome fa-2x\" rel=\"tooltip\" title=\"Font Awesome\"></i></a><br>\n<a href=\"../header/index.html?form=../forms/editor/v1/samples/icons/office-ui-fabric/\" target=\"_blank\"><i class=\"fab fa-microsoft fa-2x\" rel=\"tooltip\" title=\"Fabric\"></i></a><br>\n<a href=\"../header/index.html?form=../forms/editor/v1/samples/icons/glyphicons/\" target=\"_blank\"><img src=\"../forms/editor/v1/ress/css/icons/aside-box-logo.svg\" rel=\"tooltip\" title=\"GLYPHICONS\"></img></a>\n</div>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph2",
              "tableView": true
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode2"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        }
      ],
      "label": "Columns",
      "mask": false,
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Upload",
              "rightIcon": "glyphicon glyphicon-upload",
              "type": "button",
              "key": "submit",
              "input": true,
              "tableView": true
            }
          ],
          "width": 3,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "Button can include an icon to the right of the button label by adding the icon class.\n<br>\n<xmp>\n{\n  \"label\": \"Upload\",\n  \"rightIcon\": \"glyphicon glyphicon-upload\",\n  \"type\": \"button\",\n  \"key\": \"submit\"\n}\n</xmp>\nFor more sample about icons, click the icon below:\n<div>\n<a href=\"../header/index.html?form=../forms/editor/v1/samples/icons/font-awesome/\" target=\"_blank\"><i class=\"fab fa-font-awesome fa-2x\" rel=\"tooltip\" title=\"Font Awesome\"></i></a><br>\n<a href=\"../header/index.html?form=../forms/editor/v1/samples/icons/office-ui-fabric/\" target=\"_blank\"><i class=\"fab fa-microsoft fa-2x\" rel=\"tooltip\" title=\"Fabric\"></i></a><br>\n<a href=\"../header/index.html?form=../forms/editor/v1/samples/icons/glyphicons/\" target=\"_blank\"><img src=\"../forms/editor/v1/ress/css/icons/aside-box-logo.svg\" rel=\"tooltip\" title=\"GLYPHICONS\"></img></a>\n</div>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph3",
              "tableView": true
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode3"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        }
      ],
      "label": "Columns",
      "mask": false,
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "First Name",
              "allowMultipleMasks": false,
              "showWordCount": false,
              "showCharCount": false,
              "type": "textfield",
              "input": true,
              "key": "firstName",
              "validate": {
                "required": true,
                "customMessage": "",
                "json": ""
              },
              "tableView": true
            },
            {
              "label": "Submit",
              "disableOnInvalid": true,
              "type": "button",
              "key": "submit",
              "input": true,
              "tableView": true
            }
          ],
          "width": 3,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "Button could be disable if the form is invalid.\n<br>\n<br>\nFor example, button will be disable if user do not enter their first name.\n<br>\nTo disable the button if the form is invalid, include \"disableOnInvalid\": true in the button definition:\n<xmp>\n{\n  \"label\": \"Submit\",\n  \"disableOnInvalid\": true,\n  \"type\": \"button\",\n  \"input\": true,\n  \"key\": \"submit\"\n}\n</xmp>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph4",
              "tableView": true
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode4"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        }
      ],
      "label": "Columns",
      "mask": false,
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Submit",
              "shortcut": "S",
              "type": "button",
              "key": "submit",
              "input": true,
              "tableView": true
            }
          ],
          "width": 3,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "Button can have a keyboard shortcut.\r\n<br>\r\n<br>\r\nTo define a keyboard shortcut for a button, the definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Submit\",\r\n  \"shortcut\": \"S\",\r\n  \"type\": \"button\",\r\n  \"key\": \"submit\"\r\n}\r\n</xmp>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph5",
              "tableView": true
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode5"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        }
      ],
      "label": "Columns",
      "mask": false,
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Submit",
              "size": "xs",
              "type": "button",
              "key": "submit",
              "input": true,
              "tableView": true
            },
            {
              "label": "Submit",
              "size": "sm",
              "type": "button",
              "key": "submit2",
              "input": true,
              "tableView": true
            },
            {
              "label": "Submit",
              "type": "button",
              "key": "submit3",
              "input": true,
              "tableView": true
            },
            {
              "label": "Submit",
              "size": "lg",
              "shortcut": "",
              "mask": false,
              "type": "button",
              "key": "submit4",
              "input": true,
              "tableView": true
            }
          ],
          "width": 3,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "Buttons have 4 sizes. The default size of a button is medium.\r\n<br>\r\n<br>\r\nTo define a size of the button the button definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Submit\",\r\n  \"size\": \"sm\",\r\n  \"type\": \"button\",\r\n  \"key\": \"submit2\"\r\n}\r\n</xmp>\r\n* Define \"size\" value by select one of the value from \r\n  \"xs, sm, md and lg\".\r\n\r\n",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph6"
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode6"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        }
      ],
      "label": "Columns",
      "mask": false,
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Submit",
              "tooltip": "Click this button to submit the form",
              "type": "button",
              "key": "submit",
              "input": true,
              "tableView": true
            }
          ],
          "width": 3,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "Button can display a tooltip when mouse over on question mark.\r\n<br>\r\n<br>\r\nTo display the tooltip of a button, the definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Submit\",\r\n  \"tooltip\": \"Click this button to submit the form\",\r\n  \"type\": \"button\",\r\n  \"key\": \"submit\"\r\n}\r\n</xmp>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph7",
              "tableView": true
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode7"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        }
      ],
      "label": "Columns",
      "mask": false,
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Type \"CONFIRM\" to submit the form",
              "allowMultipleMasks": false,
              "showWordCount": false,
              "showCharCount": false,
              "type": "textfield",
              "input": true,
              "key": "confirmTextField",
              "conditional": {
                "show": true,
                "when": "",
                "json": ""
              },
              "customConditional": "",
              "properties": {},
              "tags": [],
              "tableView": true
            },
            {
              "label": "Submit",
              "type": "button",
              "key": "submit",
              "conditional": {
                "show": true,
                "when": "confirmTextField",
                "eq": "CONFIRM"
              },
              "input": true,
              "tableView": true
            }
          ],
          "width": 3,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "Button have the option to display or not display when the form component has a value same as the specific value.\r\n<br>\r\n<br>\r\nTo display the button following the conditional, the button definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Submit\",\r\n  \"type\": \"button\",\r\n  \"key\": \"submit\",\r\n  \"conditional\": {\r\n    \"show\": true,\r\n    \"when\": \"confirmTextField\",\r\n    \"eq\": \"CONFIRM\"\r\n  }\r\n}\r\n</xmp>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph9",
              "tableView": true
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode8"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        }
      ],
      "label": "Columns",
      "mask": false,
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Type \"CONFIRM\" to submit the form",
              "showWordCount": false,
              "showCharCount": false,
              "type": "textfield",
              "input": true,
              "key": "confirmSubmitText",
              "properties": {},
              "tags": [],
              "tableView": true
            },
            {
              "label": "Submit",
              "shortcut": "",
              "mask": false,
              "type": "button",
              "input": true,
              "key": "submit6",
              "customConditional": "show = (data['confirmSubmitText'] === 'CONFIRM') ? true : false;",
              "tableView": true
            }
          ],
          "width": 3,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "From above sample, button can define simple conditional to display or not display the button.\r\n<br>\r\n<br>\r\nBy the way, button can define custom conditional by enter custom conditional code in JavaScript language.\r\n<br>\r\n<br>\r\nYou must assign the \"show\" variable as either true or false in the button definition with custom code like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Submit\",\r\n  \"type\": \"button\",\r\n  \"key\": \"submit\",\r\n  \"customConditional\": \"show = \r\n                        (data['confirmSubmitText'] === \r\n                        'CONFIRM') ? true : false;\"\r\n}\r\n</xmp>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph14",
              "tableView": true
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode9"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        }
      ],
      "label": "Columns",
      "mask": false,
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    },
    {
      "columns": [
        {
          "components": [
            {
              "columns": [
                {
                  "components": [
                    {
                      "label": "Submit",
                      "type": "button",
                      "key": "submit",
                      "input": true,
                      "tableView": true
                    }
                  ],
                  "width": 6,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "label": "",
                  "tableView": true
                },
                {
                  "components": [
                    {
                      "label": "Submit",
                      "theme": "success",
                      "type": "button",
                      "key": "submit",
                      "input": true,
                      "tableView": true
                    }
                  ],
                  "width": 6,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "label": "",
                  "tableView": true
                }
              ],
              "label": "Columns",
              "mask": false,
              "type": "columns",
              "input": false,
              "key": "columns",
              "tableView": false
            },
            {
              "input": false,
              "key": "columns",
              "label": "Columns",
              "type": "columns",
              "columns": [
                {
                  "components": [
                    {
                      "label": "Submit",
                      "theme": "primary",
                      "type": "button",
                      "key": "submit",
                      "input": true,
                      "tableView": true
                    }
                  ],
                  "width": 6,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "label": "",
                  "tableView": true
                },
                {
                  "components": [
                    {
                      "label": "Submit",
                      "theme": "danger",
                      "type": "button",
                      "key": "submit",
                      "input": true,
                      "tableView": true
                    }
                  ],
                  "width": 6,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "label": "",
                  "tableView": true
                }
              ],
              "tableView": false
            },
            {
              "input": false,
              "key": "columns",
              "label": "Columns",
              "type": "columns",
              "columns": [
                {
                  "components": [
                    {
                      "label": "Submit",
                      "theme": "info",
                      "type": "button",
                      "key": "submit",
                      "input": true,
                      "tableView": true
                    }
                  ],
                  "width": 6,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "label": "",
                  "tableView": true
                },
                {
                  "components": [
                    {
                      "label": "Submit",
                      "theme": "warning",
                      "type": "button",
                      "key": "submit",
                      "input": true,
                      "tableView": true
                    }
                  ],
                  "width": 6,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "label": "",
                  "tableView": true
                }
              ],
              "tableView": false
            }
          ],
          "width": 3,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "Button can custom the theme. The default theme is \"default\"\r\n<br>\r\n<br>\r\nTo customize a theme of a button, the definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Submit\",\r\n  \"theme\": \"success\",\r\n  \"type\": \"button\",\r\n  \"key\": \"submit\"\r\n}\r\n</xmp>\r\n* Define a \"theme\" value by select one of the following from \"default\", \"success\", \"primary\", \"danger\", \"info\" and \"warning\".",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph8"
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode10"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        }
      ],
      "label": "Columns",
      "mask": false,
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Submit",
              "shortcut": "",
              "mask": false,
              "type": "button",
              "key": "sampleSubmitAPI",
              "input": true,
              "tableView": true
            }
          ],
          "width": 3,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "To define a property name of a button, specify property name value in \"key\" property\r\n<xmp>\r\n{\r\n  \"label\": \"Submit\",\r\n  \"type\": \"button\",\r\n  \"key\": \"sampleSubmitAPI\"\r\n}\r\n</xmp>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph10",
              "tableView": true
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode11"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        }
      ],
      "label": "Columns",
      "mask": false,
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Submit",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "type": "button",
              "input": true,
              "key": "submit5",
              "tableView": true
            }
          ],
          "width": 3,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "Button can custom CSS Class.\r\n<br>\r\n<br>\r\nTo custom CSS Class for a button, specify custom CSS Class value in \"customClass\" property:\r\n<xmp>\r\n{\r\n  \"label\": \"Submit\",\r\n  \"customClass\": \"btn btn-link\",\r\n  \"type\": \"button\",\r\n  \"key\": \"submit\"\r\n}\r\n</xmp>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph11",
              "tableView": true
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode12"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        }
      ],
      "label": "Columns",
      "mask": false,
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "First Name",
              "allowMultipleMasks": false,
              "showWordCount": false,
              "showCharCount": false,
              "type": "textfield",
              "input": true,
              "key": "firstNameInput",
              "properties": {},
              "tags": [],
              "tableView": true
            },
            {
              "label": "Submit",
              "shortcut": "",
              "mask": false,
              "type": "button",
              "key": "submit",
              "validate": {
                "custom": "valid = (data['firstNameInput'] != '') ? true : 'You must enter your First Name';",
                "unique": false,
                "customMessage": "",
                "json": ""
              },
              "input": true,
              "tableView": true
            }
          ],
          "width": 3,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "Button can do form validation before submit the form by enter custom validation code in JavaScript language.\n<br>\n<br>\nFor example, to validate First Name value before submit the form, enter the custom validation code by assign \"valid\" variables as either true or an error message if validation fails.\n<br>\n<br>\nSo, the validation code for a button definition will be like this:\n<xmp>\n{\n  \"label\": \"Submit\",\n  \"type\": \"button\",\n  \"key\": \"submit\",\n  \"validate\": {\n    \"custom\": \"valid = (data['firstNameInput'] != '') \n              ? true : 'You must enter your \n              First Name';\",\n    \"unique\": false,\n    \"customMessage\": \"\",\n    \"json\": \"\"\n  },\n  \"input\": true\n}\n</xmp>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph12",
              "tableView": true
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode13"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        }
      ],
      "label": "Columns",
      "mask": false,
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Submit",
              "action": "custom",
              "showValidations": false,
              "custom": "alert(\"Submit button clicked\");",
              "shortcut": "",
              "mask": false,
              "type": "button",
              "input": true,
              "key": "submit",
              "properties": {},
              "tags": [],
              "tableView": true
            }
          ],
          "width": 3,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "The default action for a button is Submit but it can do custom action code in JavaScript language also.\r\n<br>\r\n<br>\r\nFor example, to show a popup message when a button clicked, enter custom action code in the button definition like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Submit\",\r\n  \"action\": \"custom\",\r\n  \"type\": \"button\",\r\n  \"key\": \"submit\",\r\n  \"showValidations\": false,\r\n  \"custom\": \"alert(\\\"Submit button clicked\\\");\"\r\n}\r\n</xmp>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph13",
              "tableView": true
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode14"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true
        }
      ],
      "label": "Columns",
      "mask": false,
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    }
  ],
  "properties": {
    "formtitle": "Button Samples"
  },
  "title": "Together Form Components - Button Samples",
  "name": "start"
};