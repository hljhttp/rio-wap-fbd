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
      "label": "Heading3",
      "tag": "h3",
      "className": "",
      "attrs": [],
      "content": "Select Boxes",
      "refreshOnChange": false,
      "mask": false,
      "tableView": true,
      "alwaysEnabled": false,
      "type": "htmlelement",
      "input": false,
      "key": "heading4"
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Select Boxes",
              "optionsLabelPosition": "right",
              "values": [
                {
                  "label": "",
                  "value": "",
                  "shortcut": ""
                }
              ],
              "type": "selectboxes",
              "key": "selectBoxes",
              "inputType": "checkbox",
              "input": true,
              "tableView": true
            }
          ],
          "width": 4,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true,
          "hideOnChildrenHidden": false
        },
        {
          "components": [
            {
              "label": "Heading4",
              "tag": "h4",
              "className": "",
              "attrs": [],
              "content": "Default Select Boxes Component",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "htmlelement",
              "input": false,
              "key": "heading5"
            },
            {
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "The default <strong>Select boxes</strong> component that display as check boxes allows the user to check multiple values from the provided options.\r\n<br>\r\n<br>\r\nThe minimal Select Boxes definition is:\r\n<xmp>\r\n{\r\n  \"label\": \"Select Boxes\",\r\n  \"optionsLabelPosition\": \"right\",\r\n  \"values\": [\r\n\t{\r\n\t  \"label\": \"\",\r\n\t  \"value\": \"\"\r\n\t}\r\n  ],\r\n  \"type\": \"selectboxes\",\r\n  \"key\": \"selectBoxes\",\r\n  \"inputType\": \"checkbox\"\r\n}\r\n</xmp>",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph"
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
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);"
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
          "tableView": true,
          "hideOnChildrenHidden": false
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
              "label": "Gender",
              "optionsLabelPosition": "right",
              "values": [
                {
                  "label": "Male",
                  "value": "male"
                },
                {
                  "label": "Female",
                  "value": "female"
                }
              ],
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "selectboxes",
              "input": true,
              "key": "gender",
              "defaultValue": {
                "": false
              },
              "inputType": "checkbox",
              "encrypted": false
            }
          ],
          "width": 4,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true,
          "hideOnChildrenHidden": false
        },
        {
          "components": [
            {
              "label": "Heading4",
              "tag": "h4",
              "className": "",
              "attrs": [],
              "content": "Label",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "htmlelement",
              "input": false,
              "key": "heading6"
            },
            {
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "To naming the title of <strong>Select Boxes</strong> field, use <strong>label</strong> property and specify the label value in it.\r\n<br>\r\nFor example, to naming the <strong>Select Boxes</strong> as <strong>Gender</strong>, use <strong>\"label\": \"Gender\"</strong>.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Gender\",\r\n  \"optionsLabelPosition\": \"right\",\r\n  \"values\": [\r\n\t{\r\n\t  \"label\": \"Male\",\r\n\t  \"value\": \"male\"\r\n\t},\r\n\t{\r\n\t  \"label\": \"Female\",\r\n\t  \"value\": \"female\"\r\n\t}\r\n  ],\r\n  \"type\": \"selectboxes\",\r\n  \"key\": \"gender\",\r\n  \"inputType\": \"checkbox\"\r\n}\r\n</xmp>",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph9"
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
              "key": "submit2",
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
          "label": "",
          "tableView": true,
          "hideOnChildrenHidden": false
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
              "label": "Gender",
              "optionsLabelPosition": "right",
              "values": [
                {
                  "label": "Male",
                  "value": "male",
                  "shortcut": ""
                },
                {
                  "label": "Female",
                  "value": "female",
                  "shortcut": ""
                }
              ],
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "selectboxes",
              "input": true,
              "key": "gender2",
              "defaultValue": {
                "": false
              },
              "inputType": "checkbox",
              "encrypted": false
            }
          ],
          "width": 4,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true,
          "hideOnChildrenHidden": false
        },
        {
          "components": [
            {
              "label": "Heading4",
              "tag": "h4",
              "className": "",
              "attrs": [],
              "content": "Values",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "htmlelement",
              "input": false,
              "key": "heading7"
            },
            {
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "To populate <strong>Select Boxes</strong> values, defines <strong>label</strong> and <strong>value</strong> properties within <strong>values</strong> entry.\r\n<br>\r\n<br>\r\nFor example, to populate <strong>Gender</strong> field with <strong>Male</strong> and <strong>Female</strong> options, <strong>values</strong> entry will look like <strong>\"values\": [ { \"label\": \"Male\", \"value\": \"male\" }, { \"label\": \"Female\", \"value\": \"female\" } ]</strong>.\r\n<br>\r\n<br>\r\nThe full definition of <strong>Gender</strong> field will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Gender\",\r\n  \"optionsLabelPosition\": \"right\",\r\n  \"values\": [\r\n\t{\r\n\t  \"label\": \"Male\",\r\n\t  \"value\": \"male\"\r\n\t},\r\n\t{\r\n\t  \"label\": \"Female\",\r\n\t  \"value\": \"female\"\r\n\t}\r\n  ],\r\n  \"type\": \"selectboxes\",\r\n  \"key\": \"gender\",\r\n  \"inputType\": \"checkbox\"\r\n}\r\n</xmp>",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph12"
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
              "key": "submit3",
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
          "label": "",
          "tableView": true,
          "hideOnChildrenHidden": false
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
              "label": "Gender",
              "optionsLabelPosition": "right",
              "values": [
                {
                  "label": "Male",
                  "value": "male"
                },
                {
                  "label": "Female",
                  "value": "female"
                }
              ],
              "type": "selectboxes",
              "key": "gender4",
              "inputType": "checkbox",
              "description": "Please select your Gender from the option above.",
              "input": true,
              "tableView": true
            }
          ],
          "width": 4,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true,
          "hideOnChildrenHidden": false
        },
        {
          "components": [
            {
              "label": "Heading4",
              "tag": "h4",
              "className": "",
              "attrs": [],
              "content": "Description",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "htmlelement",
              "input": false,
              "key": "heading9"
            },
            {
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "To display short description below <strong>Select Boxes</strong> component to describes to the user about it, use <strong>description</strong> property and specifies the message value in it.\r\n<br>\r\n<br>\r\nFor example, to describes to the user about <strong>Gender</strong> field, use <strong>\"description\": \"Please select your Gender from the option above.\"</strong>.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Gender\",\r\n  \"optionsLabelPosition\": \"right\",\r\n  \"values\": [\r\n\t{\r\n\t  \"label\": \"Male\",\r\n\t  \"value\": \"male\"\r\n\t},\r\n\t{\r\n\t  \"label\": \"Female\",\r\n\t  \"value\": \"female\"\r\n\t}\r\n  ],\r\n  \"type\": \"selectboxes\",\r\n  \"key\": \"gender\",\r\n  \"inputType\": \"checkbox\",\r\n  \"description\": \"Please select your Gender from the option above.\"\r\n}\r\n</xmp>",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph5"
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
              "key": "submit6"
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
          "tableView": true,
          "hideOnChildrenHidden": false
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
              "label": "Gender",
              "optionsLabelPosition": "right",
              "values": [
                {
                  "label": "Male",
                  "value": "male",
                  "shortcut": ""
                },
                {
                  "label": "Female",
                  "value": "female",
                  "shortcut": ""
                }
              ],
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "tooltip": "Please select your Gender from the option below.",
              "type": "selectboxes",
              "input": true,
              "key": "gender5",
              "defaultValue": {
                "": false
              },
              "inputType": "checkbox",
              "encrypted": false
            }
          ],
          "width": 4,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "tableView": true,
          "hideOnChildrenHidden": false
        },
        {
          "components": [
            {
              "label": "Heading4",
              "tag": "h4",
              "className": "",
              "attrs": [],
              "content": "Tooltip",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "htmlelement",
              "input": false,
              "key": "heading10"
            },
            {
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "To display <strong>tooltip</strong> of <strong>Select Boxes</strong> component when mouse over on question mark, use <strong>tooltip</strong> property and specifies tooltip message value in it.\r\n<br>\r\n<br>\r\nFor example, to display tooltip message of <strong>Gender</strong> field, use <strong>\"tooltip\": \"Please select your Gender from the option below.\"</strong>.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Gender\",\r\n  \"optionsLabelPosition\": \"right\",\r\n  \"values\": [\r\n\t{\r\n\t  \"label\": \"Male\",\r\n\t  \"value\": \"male\"\r\n\t},\r\n\t{\r\n\t  \"label\": \"Female\",\r\n\t  \"value\": \"female\"\r\n\t}\r\n  ],\r\n  \"type\": \"selectboxes\",\r\n  \"key\": \"gender\",\r\n  \"inputType\": \"checkbox\",\r\n  \"tooltip\": \"Please select your Gender from the option below.\"\r\n}\r\n</xmp>",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph6"
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
              "key": "submit7"
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
          "tableView": true,
          "hideOnChildrenHidden": false
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
  "title": "Select Boxes",
  "name": "selectboxesComponent"
};