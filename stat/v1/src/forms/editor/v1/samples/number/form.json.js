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
      "content": "Basic Components : Number",
      "label": "Heading1",
      "tag": "h1",
      "className": "",
      "refreshOnChange": false,
      "mask": false,
      "tableView": true,
      "type": "htmlelement",
      "input": false,
      "key": "heading1"
    },
    {
      "attrs": [],
      "content": "<mark style = \"background-color:yellow\">\nThe Common Attributes within <b>Display Tab</b>\n</mark>",
      "label": "heading3",
      "tag": "h3",
      "className": "",
      "refreshOnChange": false,
      "mask": false,
      "tableView": true,
      "type": "htmlelement",
      "input": false,
      "key": "heading3"
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Number",
              "mask": false,
              "tableView": true,
              "type": "number",
              "input": true,
              "key": "number"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "tableView": true,
          "label": ""
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "<h3>Default Value</h3>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nA number component fits for using when a component is classified to a number type.\n\nThis following definition is set as default \nwhen you drop a number component on a form.</p>\n\n<xmp>\n{\n  \"label\": \"Number\",\n  \"type\": \"number\",\n  \"key\": \"number\"\n}\n</xmp>",
              "label": "default",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "default"
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\r\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\r\n// Create new element\r\nvar el = document.createElement('textarea');\r\n// Set value (string to be copied)\r\nel.value = codeBlockValue;\r\n// Set non-editable to avoid focus and move outside of view\r\nel.setAttribute('readonly', '');\r\nel.style = {position: 'absolute', left: '-9999px'};\r\ndocument.body.appendChild(el);\r\n// Select text inside element\r\nel.select();\r\n// Copy text to clipboard\r\ndocument.execCommand('copy');\r\n// Remove temporary element\r\ndocument.body.removeChild(el);"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "tableView": true,
          "label": ""
        }
      ],
      "label": "Columns",
      "mask": false,
      "tableView": false,
      "type": "columns",
      "input": false,
      "key": "columns"
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Label can be changed or hidden.",
              "mask": false,
              "tableView": true,
              "type": "number",
              "input": true,
              "key": "labelCanBeChangedOrHidden"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "tableView": true,
          "label": ""
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "<h3>Label</h3>\r\n<p style=\"text-align:justify; text-indent: 30px\">\r\nThe label for a number component appears above it. \r\nLabel can be rename or be hidden by \r\nticking the box \"Hide Label\" below the label textbox.</p>\r\n\r\n<p style=\"text-align:justify; text-indent: 30px\">\r\nThe hideLabel property is set as true when label is shown, and vice versa.</p>\r\n\r\n<xmp>\r\n{\r\n  \"label\": \"Label can be changed or hidden.\",\r\n  \"hideLabel\": true,\r\n  \"type\": \"number\",\r\n  \"input\": true,\r\n  \"key\": \"labelCanBeChangedOrHidden\"\r\n}\r\n</xmp>",
              "label": "label",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "label"
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\r\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\r\n// Create new element\r\nvar el = document.createElement('textarea');\r\n// Set value (string to be copied)\r\nel.value = codeBlockValue;\r\n// Set non-editable to avoid focus and move outside of view\r\nel.setAttribute('readonly', '');\r\nel.style = {position: 'absolute', left: '-9999px'};\r\ndocument.body.appendChild(el);\r\n// Select text inside element\r\nel.select();\r\n// Copy text to clipboard\r\ndocument.execCommand('copy');\r\n// Remove temporary element\r\ndocument.body.removeChild(el);",
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
          "tableView": true,
          "label": ""
        }
      ],
      "label": "Columns",
      "mask": false,
      "tableView": false,
      "type": "columns",
      "input": false,
      "key": "columns"
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
                      "label": "Label Position : Top",
                      "mask": false,
                      "tableView": true,
                      "type": "number",
                      "input": true,
                      "key": "number2"
                    }
                  ],
                  "width": 12,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "components": [
                    {
                      "labelPosition": "left-left",
                      "label": "Label Position : Left (Left-aligned)",
                      "mask": false,
                      "tableView": true,
                      "labelWidth": 60,
                      "type": "number",
                      "input": true,
                      "key": "number3"
                    }
                  ],
                  "width": 12,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "width": 12,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "components": [
                    {
                      "labelPosition": "left-right",
                      "label": "Label Position : Left (Right-aligned)",
                      "mask": false,
                      "tableView": true,
                      "labelWidth": 60,
                      "type": "number",
                      "input": true,
                      "key": "number4"
                    }
                  ]
                },
                {
                  "width": 12,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "components": [
                    {
                      "labelPosition": "right-left",
                      "label": "Label Position : Right (Left-aligned)",
                      "mask": false,
                      "tableView": true,
                      "labelWidth": 60,
                      "type": "number",
                      "input": true,
                      "key": "number5"
                    }
                  ]
                },
                {
                  "width": 12,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "components": [
                    {
                      "labelPosition": "right-right",
                      "label": "Label Position : Right (Right-aligned)",
                      "mask": false,
                      "tableView": true,
                      "labelWidth": 60,
                      "type": "number",
                      "input": true,
                      "key": "number6"
                    }
                  ]
                },
                {
                  "width": 12,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "components": [
                    {
                      "labelPosition": "bottom",
                      "label": "Label Position : Bottom",
                      "mask": false,
                      "tableView": true,
                      "type": "number",
                      "input": true,
                      "key": "number7"
                    }
                  ]
                }
              ],
              "label": "Columns",
              "mask": false,
              "tableView": false,
              "type": "columns",
              "input": false,
              "key": "columns"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "tableView": true,
          "label": ""
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "<h3>Label Position</h3>\n<p style=\"text-align:justify; text-indent: 30px\">\nLabel can be relocated to six different positions along with its number box as follows.\n</p>\n<ul>\n<li>Top</li>\n<li>Left (Left-aligned)</li>\n<li>Left (Right-aligned)</li>\n<li>Right (Left-aligned)</li>\n<li>Right (Right-aligned)</li>\n<li>Bottom</li>\n</ul>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nFor the top and the bottom position, \nthe label is aligned right above and below its number box respectively.\n</p>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nHowever, the four positioning left are slightly different \nin the way to place a label. \nThey indicate an inline-level position \nwhere a label will be situated beside its number box.</p>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nWhen an inline-level position is selected, \nthe properties \"Label Width\" and \"Label Margin\" are shown up \nto let you balance a label and its number box appropriately.\n</p>\n\n<br />\n\n<p style=\"text-align:justify; text-indent: 30px\">\nThe following example shows \nsetting the label position to \"Left (Right-aligned)\".</p>\n\n<xmp>\n{\n  \"labelPosition\": \"left-right\",\n  \"label\": \"Label Position : Left (Right-aligned)\",\n  \"labelWidth\": 60,\n  \"type\": \"number\",\n  \"key\": \"number\"\n}\n</xmp>\n",
              "label": "position",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "position"
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\r\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\r\n// Create new element\r\nvar el = document.createElement('textarea');\r\n// Set value (string to be copied)\r\nel.value = codeBlockValue;\r\n// Set non-editable to avoid focus and move outside of view\r\nel.setAttribute('readonly', '');\r\nel.style = {position: 'absolute', left: '-9999px'};\r\ndocument.body.appendChild(el);\r\n// Select text inside element\r\nel.select();\r\n// Copy text to clipboard\r\ndocument.execCommand('copy');\r\n// Remove temporary element\r\ndocument.body.removeChild(el);",
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
          "tableView": true,
          "label": ""
        }
      ],
      "label": "Columns",
      "mask": false,
      "tableView": false,
      "type": "columns",
      "input": false,
      "key": "columns"
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "OTP Code",
              "placeholder": "999999",
              "mask": false,
              "tableView": true,
              "type": "number",
              "input": true,
              "key": "number8"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "tableView": true,
          "label": ""
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "<h3>Placeholder</h3>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nPlaceholder appears before the user enters a value \nin the component to describe \nwhat this component needs or how format must be.</p>\n\n<br />\n<p style=\"text-align:justify; text-indent: 30px\">\nThis definition shows how to specify a placeholder text.\n</p>\n\n<xmp>\n{\n  \"label\": \"OTP Code\",\n  \"placeholder\": \"999999\",\n  \"type\": \"number\",\n  \"key\": \"number\"\n}\n</xmp>",
              "label": "placeholder",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "placeholder"
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\r\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\r\n// Create new element\r\nvar el = document.createElement('textarea');\r\n// Set value (string to be copied)\r\nel.value = codeBlockValue;\r\n// Set non-editable to avoid focus and move outside of view\r\nel.setAttribute('readonly', '');\r\nel.style = {position: 'absolute', left: '-9999px'};\r\ndocument.body.appendChild(el);\r\n// Select text inside element\r\nel.select();\r\n// Copy text to clipboard\r\ndocument.execCommand('copy');\r\n// Remove temporary element\r\ndocument.body.removeChild(el);",
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
          "tableView": true,
          "label": ""
        }
      ],
      "label": "Columns",
      "mask": false,
      "tableView": false,
      "type": "columns",
      "input": false,
      "key": "columns"
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "OTP Code",
              "placeholder": "999999",
              "description": "Please wait for few minutes to get the OTP code via SMS.",
              "mask": false,
              "tableView": true,
              "type": "number",
              "input": true,
              "key": "number9"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "tableView": true,
          "label": ""
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "<h3>Description</h3>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nDescription appears below the number field \nto tell the user additional information about components.\n</p>\n\n<br />\n\n<p style=\"text-align:justify; text-indent: 30px\">\nThe definition below demonstrates how to define description into a number component.</p>\n<xmp>\n{\n  \"label\": \"OTP Code\",\n  \"placeholder\": \"999999\",\n  \"description\": \"Please wait for few minutes to get the OTP code via SMS.\",\n  \"type\": \"number\",\n  \"key\": \"number\"\n}\n</xmp>",
              "label": "description",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "description"
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\r\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\r\n// Create new element\r\nvar el = document.createElement('textarea');\r\n// Set value (string to be copied)\r\nel.value = codeBlockValue;\r\n// Set non-editable to avoid focus and move outside of view\r\nel.setAttribute('readonly', '');\r\nel.style = {position: 'absolute', left: '-9999px'};\r\ndocument.body.appendChild(el);\r\n// Select text inside element\r\nel.select();\r\n// Copy text to clipboard\r\ndocument.execCommand('copy');\r\n// Remove temporary element\r\ndocument.body.removeChild(el);",
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
          "tableView": true,
          "label": ""
        }
      ],
      "label": "Columns",
      "mask": false,
      "tableView": false,
      "type": "columns",
      "input": false,
      "key": "columns"
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "OTP Code",
              "placeholder": "999999",
              "description": "Please wait for few minutes to get the OTP code via SMS.",
              "mask": false,
              "tableView": true,
              "tooltip": "The six-digit-number authentication which delivered to the user's mobile phones.\n",
              "type": "number",
              "input": true,
              "key": "number10"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "tableView": true,
          "label": ""
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "<h3>Tooltip</h3>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nTooltip tells the user what the component is. It shows up when the user hovers over the question mark icon next to label.\n</p>\n\n<xmp>\n{\n  \"label\": \"OTP Code\",\n  \"placeholder\": \"999999\",\n  \"description\": \"Please wait for few minutes to get the OTP code via SMS.\",\n  \"tooltip\": \"The six-digit-number authentication which delivered to the user's mobile phones.\",\n  \"type\": \"number\",\n  \"key\": \"number\"\n}\n</xmp>",
              "label": "description",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "description2"
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\r\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\r\n// Create new element\r\nvar el = document.createElement('textarea');\r\n// Set value (string to be copied)\r\nel.value = codeBlockValue;\r\n// Set non-editable to avoid focus and move outside of view\r\nel.setAttribute('readonly', '');\r\nel.style = {position: 'absolute', left: '-9999px'};\r\ndocument.body.appendChild(el);\r\n// Select text inside element\r\nel.select();\r\n// Copy text to clipboard\r\ndocument.execCommand('copy');\r\n// Remove temporary element\r\ndocument.body.removeChild(el);",
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
          "tableView": true,
          "label": ""
        }
      ],
      "label": "Columns",
      "mask": false,
      "tableView": false,
      "type": "columns",
      "input": false,
      "key": "columns"
    },
    {
      "columns": [
        {
          "components": [
            {
              "attrs": [],
              "content": "<br />\n<br />\n<br />\n<h3>An undefined-error-label component</h3>",
              "label": "undefined",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "undefined"
            },
            {
              "label": "Year of Birth (CE)",
              "placeholder": "Enter value apart from 1900 to 2018 to see how the default error message is.",
              "mask": false,
              "tableView": true,
              "type": "number",
              "input": true,
              "key": "number11",
              "validate": {
                "customMessage": "",
                "json": "",
                "min": 1900,
                "max": 2018
              },
              "delimiter": false,
              "requireDecimal": false
            },
            {
              "attrs": [],
              "content": "<br />\n<br />\n<br />\n<br />\n<br />\n<h3>A defined-error-label component</h3>",
              "label": "defined",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "defined"
            },
            {
              "label": "Year of Birth (CE)",
              "placeholder": "Enter value apart from 1900 to 2018 to see how the error label shows up.",
              "errorLabel": "The year of birth",
              "mask": false,
              "tableView": true,
              "type": "number",
              "input": true,
              "key": "yearOfBirthCe",
              "validate": {
                "customMessage": "",
                "json": "",
                "min": 1900,
                "max": 2018
              }
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "tableView": true,
          "label": ""
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "<h3>Error Label</h3>\n\n<p style=\"text-align:justify; text-indent: 30px\">\n\nAn error label message comes out when \nthe value in a field does not subject to constraints.\nThe error label refers to its own label name and it\nis used to combine with default error message.\n\n</p>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nIn case an error arise and \nthe error message attribute in validation tab is not set, \nthe default error message will be shown up \nbelow the number field in format of label name \nand unmet condition combined.\n</p>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nFor example, the label is set to \"Year of Birth (CE)\" \nand the value is limited between 1900 and 2018. \n\nIf a value 12 or 2561 is filled in this number component, the default \n\nerror message will be\n</p>\n<br />\n<p style=\"text-align:justify; text-indent: 60px\">\n<b style =\"color:red\">\nYear of Birth (CE) cannot be less than 1900.\n</b>\n</p>\nor \n<p style=\"text-align:justify; text-indent: 60px\">\n<b style =\"color:red\">\nYear of Birth (CE) cannot be greater than 2018.\n</b>\n</p>\n<br />\n\n<p style=\"text-align:justify; text-indent: 30px\">\nYou will see the error message is combination of the label with unmet condition.\n</p>\n\n<br />\n<p style=\"text-align:justify; text-indent: 30px\">\n\nOn the one hand, if the error label is set to \n<b>\"The year of birth\"</b>, \nthis phrase will be combined with unmet condition instead.\n\nRefer to the same example above, \nif a value besides the range of 1900 to 2018 \nis filled in the number component, the error message will become\n\n</p>\n\n\n\n<br />\n\n<p style=\"text-align:justify; text-indent: 60px\">\n<b style =\"color:red\">\nThe year of birth cannot be less than 1900.\n</b>\n</p>\nor \n<p style=\"text-align:justify; text-indent: 60px\">\n<b style =\"color:red\">\nThe year of birth cannot be greater than 2018.\n</b>\n</p>\n\n<br />\n\n\n<p style=\"text-align:justify; text-indent: 30px\">\nThe definition below shows how to set an error label.\n</p>\n\n<xmp>\n{\n  \"label\": \"Year of Birth (CE)\",\n  \"errorLabel\": \"The year of birth\",\n  \"type\": \"number\",\n  \"key\": \"yearOfBirthCe\",\n  \n  \"validate\": \n    {\n    \"customMessage\": \"\",\n    \"json\": \"\",\n    \"min\": 1900,\n    \"max\": 2018\n    }\n}\n</xmp>",
              "label": "description",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "description3"
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\r\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\r\n// Create new element\r\nvar el = document.createElement('textarea');\r\n// Set value (string to be copied)\r\nel.value = codeBlockValue;\r\n// Set non-editable to avoid focus and move outside of view\r\nel.setAttribute('readonly', '');\r\nel.style = {position: 'absolute', left: '-9999px'};\r\ndocument.body.appendChild(el);\r\n// Select text inside element\r\nel.select();\r\n// Copy text to clipboard\r\ndocument.execCommand('copy');\r\n// Remove temporary element\r\ndocument.body.removeChild(el);",
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
          "tableView": true,
          "label": ""
        }
      ],
      "label": "Columns",
      "mask": false,
      "tableView": false,
      "type": "columns",
      "input": false,
      "key": "columns"
    },
    {
      "attrs": [],
      "content": "<mark style = \"background-color:yellow\">\nThe Common Attributes within <b>Validation Tab</b>\n</mark>",
      "label": "heading3",
      "tag": "h3",
      "className": "",
      "refreshOnChange": false,
      "mask": false,
      "tableView": true,
      "type": "htmlelement",
      "input": false,
      "key": "heading4"
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Telephone Number",
              "mask": false,
              "tableView": true,
              "type": "number",
              "input": true,
              "key": "telephoneNumber",
              "validate": {
                "required": true,
                "customMessage": "",
                "json": ""
              },
              "delimiter": false,
              "requireDecimal": false
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "tableView": true,
          "label": ""
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "<h3>Required Tickbox</h3>\n<p style=\"text-align:justify; text-indent: 30px\">\nWhen this tickbox is ticked, a red asterisk appears next to the label \n(or tooltip, if any)\nin order to recognise the user this field must be filled in.\n</p>\n<br />\n<p style=\"text-align:justify; text-indent: 30px\">\nThis definition demonstrates ticking a required tickbox.\n</p>\n\n<xmp>\n{\n  \"label\": \"Telephone Number\",\n  \"type\": \"number\",\n  \"key\": \"telephoneNumber\",\n  \"validate\":\n    {\n      \"required\": true\n    }\n}\n</xmp>",
              "label": "required",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "re"
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\r\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\r\n// Create new element\r\nvar el = document.createElement('textarea');\r\n// Set value (string to be copied)\r\nel.value = codeBlockValue;\r\n// Set non-editable to avoid focus and move outside of view\r\nel.setAttribute('readonly', '');\r\nel.style = {position: 'absolute', left: '-9999px'};\r\ndocument.body.appendChild(el);\r\n// Select text inside element\r\nel.select();\r\n// Copy text to clipboard\r\ndocument.execCommand('copy');\r\n// Remove temporary element\r\ndocument.body.removeChild(el);",
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
          "tableView": true,
          "label": ""
        }
      ],
      "label": "Columns",
      "mask": false,
      "tableView": false,
      "type": "columns",
      "input": false,
      "key": "columns"
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Validate on Change",
              "placeholder": "State a number below 10 and observe when an error message occurs",
              "mask": false,
              "tableView": true,
              "type": "number",
              "input": true,
              "key": "change",
              "validate": {
                "customMessage": "This error message occurs immediately when a wrong number is filled in.",
                "json": "",
                "min": 10
              },
              "delimiter": false,
              "requireDecimal": false,
              "properties": {},
              "tags": []
            },
            {
              "label": "Validate on Blur",
              "placeholder": "State a number below 10 then leave this field.",
              "mask": false,
              "tableView": true,
              "type": "number",
              "input": true,
              "key": "change2",
              "validate": {
                "customMessage": "This error message occurs after the component loses focus.",
                "json": "",
                "min": 10
              },
              "delimiter": false,
              "requireDecimal": false,
              "properties": {},
              "tags": [],
              "validateOn": "blur"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "tableView": true,
          "label": ""
        },
        {
          "components": [
            {
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "<h3>Validate on</h3>\n<p style=\"text-align:justify; text-indent: 30px\">\nThere are two types of triggering action in number component as follows:\n</p>\n\n<ul>\n<li>Validate on Change</li>\n<p>This event is triggered when  the value in a component has changed.</p>\n<li>Validate on Blur</li>\n<p>If a component has been lost focus,  the onblur event is triggered.</p>\n</ul>\n\n\n<p style=\"text-align:justify; text-indent: 30px\">\nThe following definition demonstrates how validation onBlur works.\n</p>\n\n<xmp>\n{\n  \"label\": \"Validate on Blur\",\n  \"placeholder\": \"State a number below 10 then leave this field.\",\n  \"type\": \"number\",\n  \"key\": \"change\",\n  \"validate\":\n    {\n      \"customMessage\": \"This error message occurs after the component loses focus.\",\n      \"min\": 10\n    },\n  \"validateOn\": \"blur\"\n}\n</xmp>",
              "label": "validate",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "re2",
              "validate": {
                "unique": false,
                "customMessage": "",
                "json": ""
              }
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\r\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\r\n// Create new element\r\nvar el = document.createElement('textarea');\r\n// Set value (string to be copied)\r\nel.value = codeBlockValue;\r\n// Set non-editable to avoid focus and move outside of view\r\nel.setAttribute('readonly', '');\r\nel.style = {position: 'absolute', left: '-9999px'};\r\ndocument.body.appendChild(el);\r\n// Select text inside element\r\nel.select();\r\n// Copy text to clipboard\r\ndocument.execCommand('copy');\r\n// Remove temporary element\r\ndocument.body.removeChild(el);",
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
          "tableView": true,
          "label": ""
        }
      ],
      "label": "Columns",
      "mask": false,
      "tableView": false,
      "type": "columns",
      "input": false,
      "key": "columns"
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Minimum Value",
              "placeholder": "State a number below 20 to see an error message",
              "mask": false,
              "tableView": true,
              "tooltip": "Define minimum value to allow only number under 20.",
              "type": "number",
              "input": true,
              "key": "change3",
              "validate": {
                "customMessage": "",
                "json": "",
                "min": 20
              },
              "delimiter": false,
              "requireDecimal": false,
              "properties": {},
              "tags": []
            },
            {
              "label": "Maximum Value",
              "placeholder": "State a number above 30 to see an error message",
              "mask": false,
              "tableView": true,
              "type": "number",
              "input": true,
              "key": "change4",
              "validate": {
                "customMessage": "",
                "json": "",
                "max": 30
              },
              "delimiter": false,
              "requireDecimal": false,
              "properties": {},
              "tags": [],
              "tooltip": "Define minimum value to allow only number over 30."
            },
            {
              "label": "Number Range",
              "placeholder": "State a number between 10 and 20",
              "mask": false,
              "tableView": true,
              "tooltip": "Define number range to allow only value between 10 and 20.",
              "type": "number",
              "input": true,
              "key": "number12",
              "validate": {
                "customMessage": "",
                "json": "",
                "min": 10,
                "max": 20
              }
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "tableView": true,
          "label": ""
        },
        {
          "components": [
            {
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "<h3>Minimum and Maximum</h3>\n<p style=\"text-align:justify; text-indent: 30px\">\nValue within a number component can be limited \nby define value in an attribute \"Minimum Value\", \n\"Maximum Value\" or set both to determine a number range.\n</p>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nSet a number in a Minimum Value attribute \nin order to define the least value that can be filled in. \nOn the contary, the greatest value to be filled in \nis set in a Maximum Value attribute.\n</p>\n\n<p style=\"text-align:justify; text-indent: 30px\">\n\nThe default validation has the highest priority, one of three conditions above \nis a trigger for default validation.\n\nHowever, users can create their own validation in a section of Custom Validation or JSONLogic Validation.\n</p>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nThe following definition shows how to set a number range.\n</p>\n\n<xmp>\n{\n  \"label\": \"Number Range\",\n  \"placeholder\": \"State a number between 10 and 20\",\n  \"tooltip\": \"Define number range to allow only value between 10 and 20.\",\n  \"type\": \"number\",\n  \"key\": \"number\",\n  \"validate\":\n    {\n      \"min\": 10,\n      \"max\": 20\n    }\n}\n</xmp>",
              "label": "validate",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "re3",
              "validate": {
                "unique": false,
                "customMessage": "",
                "json": ""
              }
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\r\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\r\n// Create new element\r\nvar el = document.createElement('textarea');\r\n// Set value (string to be copied)\r\nel.value = codeBlockValue;\r\n// Set non-editable to avoid focus and move outside of view\r\nel.setAttribute('readonly', '');\r\nel.style = {position: 'absolute', left: '-9999px'};\r\ndocument.body.appendChild(el);\r\n// Select text inside element\r\nel.select();\r\n// Copy text to clipboard\r\ndocument.execCommand('copy');\r\n// Remove temporary element\r\ndocument.body.removeChild(el);",
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
          "tableView": true,
          "label": ""
        }
      ],
      "label": "Columns",
      "mask": false,
      "tableView": false,
      "type": "columns",
      "input": false,
      "key": "columns"
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Number",
              "placeholder": "State a number below 60 to see a default error message",
              "mask": false,
              "tableView": true,
              "type": "number",
              "input": true,
              "key": "noCustomErrorMessage",
              "validate": {
                "customMessage": "",
                "json": "",
                "min": 60
              }
            },
            {
              "label": "Number",
              "placeholder": "State a number below 60 to see a custom error message",
              "mask": false,
              "tableView": true,
              "type": "number",
              "input": true,
              "key": "customErrorMessage",
              "validate": {
                "customMessage": "Invalid number !!! Please try again.",
                "json": "",
                "min": 60
              }
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "tableView": true,
          "label": ""
        },
        {
          "components": [
            {
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "<h3>Custom Error Message</h3>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nIn case users prefer their own error message to the default one, \nthey can define it in a Custom Error Message attribute.\n</p>\n\n<p style=\"text-align:justify; text-indent: 30px\">\n\n</p>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nThis definition shows how to customize an error message.\n</p>\n\n<xmp>\n{\n  \"label\": \"Number\",\n  \"placeholder\": \"State a number below 60 to see a custom error message\",\n  \"type\": \"number\",\n  \"key\": \"customErrorMessage\",\n  \"validate\":\n    {\n      \"customMessage\": \"Invalid number !!! Please try again.\",\n      \"min\": 60\n    }\n}\n</xmp>",
              "label": "validate",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "re4",
              "validate": {
                "unique": false,
                "customMessage": "",
                "json": ""
              }
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\r\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\r\n// Create new element\r\nvar el = document.createElement('textarea');\r\n// Set value (string to be copied)\r\nel.value = codeBlockValue;\r\n// Set non-editable to avoid focus and move outside of view\r\nel.setAttribute('readonly', '');\r\nel.style = {position: 'absolute', left: '-9999px'};\r\ndocument.body.appendChild(el);\r\n// Select text inside element\r\nel.select();\r\n// Copy text to clipboard\r\ndocument.execCommand('copy');\r\n// Remove temporary element\r\ndocument.body.removeChild(el);",
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
          "tableView": true,
          "label": ""
        }
      ],
      "label": "Columns",
      "mask": false,
      "tableView": false,
      "type": "columns",
      "input": false,
      "key": "columns"
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Number",
              "placeholder": "Fill in 1000 in this field.",
              "mask": false,
              "tableView": true,
              "type": "number",
              "input": true,
              "key": "noCustomErrorMessage2",
              "validate": {
                "customMessage": "",
                "json": "",
                "custom": "valid = (input === 1000) ? true : 'Please fill in only 1000';"
              },
              "delimiter": false,
              "requireDecimal": false
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "tableView": true,
          "label": ""
        },
        {
          "components": [
            {
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "<h3>Custom Validation</h3>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nNumber components let you design your own validation code. \nHit the plus icon \nto expand a table of available variables.\nAll variables and an example of coding are described in this section.\n\n</p>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nCustom Validation has a higher priority than JSONLogic Validation. \nIf the Custom Validation is defined,\nthe JSONLogic Validation will be ignored even it is taken along.\n</p>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nThe following definition demonstrates how custom validation is conditioned.\n</p>\n\n<xmp>\n{\n  \"label\": \"Number\",\n  \"placeholder\": \"Fill in 1000 in this field.\",\n  \"type\": \"number\",\n  \"key\": \"noCustomErrorMessage\",\n  \"validate\":\n  {\n    \"custom\": \"valid = (input === 1000) ? true : 'Please fill in only 1000';\"\n  }\n}\n</xmp>",
              "label": "validate",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "re5",
              "validate": {
                "unique": false,
                "customMessage": "",
                "json": ""
              }
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\r\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\r\n// Create new element\r\nvar el = document.createElement('textarea');\r\n// Set value (string to be copied)\r\nel.value = codeBlockValue;\r\n// Set non-editable to avoid focus and move outside of view\r\nel.setAttribute('readonly', '');\r\nel.style = {position: 'absolute', left: '-9999px'};\r\ndocument.body.appendChild(el);\r\n// Select text inside element\r\nel.select();\r\n// Copy text to clipboard\r\ndocument.execCommand('copy');\r\n// Remove temporary element\r\ndocument.body.removeChild(el);",
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
          "tableView": true,
          "label": ""
        }
      ],
      "label": "Columns",
      "mask": false,
      "tableView": false,
      "type": "columns",
      "input": false,
      "key": "columns"
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Number Range",
              "placeholder": "State a number between 500 and 1000",
              "mask": false,
              "tableView": true,
              "type": "number",
              "input": true,
              "key": "noCustomErrorMessage3",
              "validate": {
                "customMessage": "",
                "json": {
                  "if": [
                    {
                      "and": [
                        {
                          ">=": [
                            {
                              "var": "input"
                            },
                            500
                          ]
                        },
                        {
                          "<=": [
                            {
                              "var": "input"
                            },
                            1000
                          ]
                        }
                      ]
                    },
                    true,
                    "Number must be between 500 and 1000"
                  ]
                }
              },
              "delimiter": false,
              "requireDecimal": false
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "tableView": true,
          "label": ""
        },
        {
          "components": [
            {
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "<h3>JSONLogic Validation</h3>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nBesides of customizing components by Custom Validation, \nthe component can also be complied with JSON logic.\n\n</p>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nEven thought there are three type of validation but \na component can carry only one. Thus choose either of them, \nthe default validation, Custom Validation or  JSONLogic Validation.\n</p>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nThis definition shows how to define a range of number in JSONLogic validation.\n</p>\n\n<xmp>\n{\n  \"label\": \"Number Range\",\n  \"placeholder\": \"State a number between 500 and 1000\",\n  \"type\": \"number\",\n  \"key\": \"noCustomErrorMessage\",\n  \"validate\":\n  {\n    \"json\":\n    {\n      \"if\":\n      [\n        { \"and\" :\n          [\n            { \">=\": [ { \"var\": \"input\"  }, 500 ]  },\n            { \"<=\": [ { \"var\": \"input\"  }, 1000 ] }\n          ]\n        }, \n        true, \n        \"Number must be between 500 and 1000\" \n      ]\n    }\n  }\n}\n</xmp>",
              "label": "validate",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "re6",
              "validate": {
                "unique": false,
                "customMessage": "",
                "json": ""
              }
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\r\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\r\n// Create new element\r\nvar el = document.createElement('textarea');\r\n// Set value (string to be copied)\r\nel.value = codeBlockValue;\r\n// Set non-editable to avoid focus and move outside of view\r\nel.setAttribute('readonly', '');\r\nel.style = {position: 'absolute', left: '-9999px'};\r\ndocument.body.appendChild(el);\r\n// Select text inside element\r\nel.select();\r\n// Copy text to clipboard\r\ndocument.execCommand('copy');\r\n// Remove temporary element\r\ndocument.body.removeChild(el);",
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
          "tableView": true,
          "label": ""
        }
      ],
      "label": "Columns",
      "mask": false,
      "tableView": false,
      "type": "columns",
      "input": false,
      "key": "columns"
    },
    {
      "attrs": [
        {
          "attr": "",
          "value": ""
        }
      ],
      "content": "<mark style = \"background-color:yellow\">\n<b>Conditional Tab</b>\n</mark>",
      "label": "heading3",
      "tag": "h3",
      "className": "",
      "refreshOnChange": false,
      "mask": false,
      "tableView": true,
      "type": "htmlelement",
      "input": false,
      "key": "heading5",
      "conditional": {
        "show": "",
        "when": "",
        "json": ""
      },
      "customConditional": ""
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Buddhist Era : BE",
              "placeholder": "The CE component will disappear when you enter 2561 in this field.",
              "mask": false,
              "tableView": true,
              "type": "number",
              "input": true,
              "key": "buddhistEra",
              "properties": {},
              "tags": [],
              "conditional": {
                "show": false,
                "when": "christianEra",
                "eq": "2018",
                "json": ""
              },
              "customConditional": ""
            },
            {
              "label": "Christian Era : CE",
              "placeholder": "The BE component will disappear when you enter 2018 in this field.",
              "mask": false,
              "tableView": true,
              "type": "number",
              "input": true,
              "key": "christianEra",
              "properties": {},
              "tags": [],
              "conditional": {
                "show": false,
                "when": "buddhistEra",
                "eq": "2561",
                "json": ""
              },
              "customConditional": ""
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "tableView": true,
          "label": ""
        },
        {
          "components": [
            {
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "<h3>Simple Section</h3>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nTo define a condition in this section is simple like its name.\nWhat users have to do is to build a relationship between two components \non the same form.\nOne component has an effect on another one.\nHow a component should display when another has been changed.\n\n</p>\n\n<p style=\"text-align:justify; text-indent: 30px\">\n\n</p>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nThis definition defines the BE component has an effect on the CE component, \nand vice versa.\n</p>\n\n<xmp>\n{\n  \"label\": \"Buddhist Era : BE\",\n  \"placeholder\": \"The CE component will disappear when you enter 2561 in this field.\",\n  \"type\": \"number\",\n  \"key\": \"buddhistEra\",\n  \n  \"conditional\":\n  {\n    \"show\": false,\n    \"when\": \"christianEra\",\n    \"eq\": \"2018\"\n  }\n},\n\n{\n  \"label\": \"Christian Era : CE\",\n  \"placeholder\": \"The BE component will disappear when you enter 2018 in this field.\",\n  \"type\": \"number\",\n  \"key\": \"christianEra\",\n  \n  \"conditional\":\n  {\n    \"show\": false,\n    \"when\": \"buddhistEra\",\n    \"eq\": \"2561\"\n  }\n}\n</xmp>",
              "label": "validate",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "re7",
              "validate": {
                "unique": false,
                "customMessage": "",
                "json": ""
              },
              "conditional": {
                "show": "",
                "when": "",
                "json": ""
              },
              "customConditional": ""
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\r\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\r\n// Create new element\r\nvar el = document.createElement('textarea');\r\n// Set value (string to be copied)\r\nel.value = codeBlockValue;\r\n// Set non-editable to avoid focus and move outside of view\r\nel.setAttribute('readonly', '');\r\nel.style = {position: 'absolute', left: '-9999px'};\r\ndocument.body.appendChild(el);\r\n// Select text inside element\r\nel.select();\r\n// Copy text to clipboard\r\ndocument.execCommand('copy');\r\n// Remove temporary element\r\ndocument.body.removeChild(el);",
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
          "tableView": true,
          "label": ""
        }
      ],
      "label": "Columns",
      "mask": false,
      "tableView": false,
      "type": "columns",
      "input": false,
      "key": "columns"
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Input Number",
              "placeholder": "State a number in this field",
              "mask": false,
              "tableView": true,
              "type": "number",
              "input": true,
              "key": "inputnumber",
              "properties": {},
              "tags": []
            },
            {
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "label": "Div",
              "tag": "div",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "div",
              "validate": {
                "custom": "Celsius = ((data.fah - 32) * 5 / 9).toFixed(2);\r\nConvert = data.fah + \" °F is equal to \" + Celsius + \"°C\";\r\nvalid = (input >=32 && input <=212) ? Convert : \r\n\"Fahrenheit degree must be between 32 and 212 !!!\\n\";",
                "unique": false,
                "customMessage": "",
                "json": ""
              }
            },
            {
              "attrs": [
                {
                  "attr": "align",
                  "value": "center"
                },
                {
                  "attr": "style",
                  "value": "background-color: green; color:white;"
                }
              ],
              "content": "<h1><b>An even number is filled in !!! </b></h1>",
              "label": "even",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "even",
              "validate": {
                "unique": false,
                "customMessage": "",
                "json": ""
              },
              "conditional": {
                "show": "",
                "when": "",
                "json": ""
              },
              "customConditional": "if (data.inputnumber != undefined){\n\nif (data.inputnumber % 2 == 0){\n  show = !data.showMe;\n}\n\nelse {show = !!data.showMe;}\n}\n\nelse {show = !!data.showMe;}",
              "properties": {},
              "tags": []
            },
            {
              "attrs": [
                {
                  "attr": "align",
                  "value": "center"
                },
                {
                  "attr": "style",
                  "value": "background-color: red;color:white"
                }
              ],
              "content": "<h1><b>An odd number is filled in !!! </b></h1>",
              "label": "Odd",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "odd",
              "validate": {
                "unique": false,
                "customMessage": "",
                "json": ""
              },
              "conditional": {
                "show": "",
                "when": "",
                "json": ""
              },
              "customConditional": "if (data.inputnumber != undefined){\n\nif (data.inputnumber % 2 != 0){\n  show = !data.showMe;\n}\n\nelse {show = !!data.showMe;}\n}\nelse {show = !!data.showMe;}\n",
              "properties": {},
              "tags": []
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "tableView": true,
          "label": ""
        },
        {
          "components": [
            {
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "<h3>Advanced Conditions</h3>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nIn this section, users have to put Javascript code \ninto the editor under the variables table.\nHit the plus icon to expand the table.\n</p>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nLike the simple section above, users can design their own conditions \nto control components's displaying. Link two components together\nand let one's visibility depends on another one.\n</p>\n\n<p style=\"text-align:justify; text-indent: 30px\">\nThis definition shows how to check whether a number is even or odd.\n</p>\n\n<xmp>\n{\n  \"label\": \"Input Number\",\n  \"placeholder\": \"State a number in this field\",\n  \"type\": \"number\",\n  \"key\": \"inputnumber\"\n},\n\n{\n  \"attrs\":\n    [\n      {\n        \"attr\": \"align\",\n        \"value\": \"center\"\n      },\n      {\n        \"attr\": \"style\",\n        \"value\": \"background-color: green; color: white;\"\n      }\n    ],\n  \"content\": \"<h1><b>An even number is filled in !!! </b></h1>\",\n  \"label\": \"even\",\n  \"type\": \"htmlelement\",\n  \"key\": \"even\",\n  \"customConditional\": \n    \"if (data.inputnumber != undefined){\\n\\n\n        if (data.inputnumber % 2 == 0){\\n\n          show = !data.showMe;\\n}\\n\\n\n        else\n          {show = !!data.showMe;}\\n\n      }\\n\\n\n      else\n        {show = !!data.showMe;}\"\n},\n\n{\n  \"attrs\":\n    [\n      {\n        \"attr\": \"align\",\n        \"value\": \"center\"\n      },\n      {\n        \"attr\": \"style\",\n        \"value\": \"background-color: red; color:white;\"\n      }\n    ],\n  \"content\": \"<h1><b>An odd number is filled in !!! </b></h1>\",\n  \"label\": \"Odd\",\n  \"type\": \"htmlelement\",\n  \"key\": \"odd\",\n  \"customConditional\": \n    \"if (data.inputnumber != undefined){\\n\\n\n      if (data.inputnumber % 2 != 0){\\n\n          show = !data.showMe;\\n}\\n\\n\n      else \n          {show = !!data.showMe;}\\n\n    }\\n\n    else\n      {show = !!data.showMe;}\\n\"\n}\n</xmp>",
              "label": "validate",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "re8",
              "validate": {
                "unique": false,
                "customMessage": "",
                "json": ""
              },
              "conditional": {
                "show": "",
                "when": "",
                "json": ""
              },
              "customConditional": ""
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\r\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\r\n// Create new element\r\nvar el = document.createElement('textarea');\r\n// Set value (string to be copied)\r\nel.value = codeBlockValue;\r\n// Set non-editable to avoid focus and move outside of view\r\nel.setAttribute('readonly', '');\r\nel.style = {position: 'absolute', left: '-9999px'};\r\ndocument.body.appendChild(el);\r\n// Select text inside element\r\nel.select();\r\n// Copy text to clipboard\r\ndocument.execCommand('copy');\r\n// Remove temporary element\r\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode15"
            }
          ],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "tableView": true,
          "label": ""
        }
      ],
      "label": "Columns",
      "mask": false,
      "tableView": false,
      "type": "columns",
      "input": false,
      "key": "columns"
    },
    {
      "type": "button",
      "label": "Submit",
      "key": "submit",
      "disableOnInvalid": true,
      "theme": "primary",
      "input": true,
      "tableView": true
    }
  ],
  "properties": {},
  "title": "",
  "name": ""
};