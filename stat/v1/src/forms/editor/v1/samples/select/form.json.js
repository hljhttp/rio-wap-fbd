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
      "content": "Select - Display",
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
              "label": "Select",
              "type": "select",
              "key": "select",
              "data": {
                "values": []
              },
              "valueProperty": "value",
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
              "content": "Default Select Component",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "htmlelement",
              "input": false,
              "key": "heading4",
              "properties": {},
              "tags": []
            },
            {
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "The default select field display a list of values in a drop down lists for user to select one of the values.\n<br>\n<br>\nThe minimal select field definition is:\n<xmp>\n  {\n    \"label\": \"Select\",\n    \"type\": \"select\",\n    \"key\": \"select\",\n    \"data\": {\n      \"values\": []\n    },\n    \"valueProperty\": \"value\"\n  }\n</xmp>",
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
              "label": "Select label",
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "select",
              "key": "select2",
              "data": {
                "values": []
              },
              "valueProperty": "value",
              "input": true
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
              "key": "heading5"
            },
            {
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "To naming the title of select component, specify name value in <strong>label</strong> property.\n<br>\nFor example, to naming select component as <strong>Select label</strong>, specify <strong>\"label\": \"Select label\"</strong>.\n<br>\n<br>\nThe definition will be like this:\n<xmp>\n{\n  \"label\": \"Select label\",\n  \"type\": \"select\",\n  \"key\": \"selectLabel\",\n  \"data\": {\n\t\"values\": []\n  },\n  \"valueProperty\": \"value\"\n}\n</xmp>",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph8"
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
              "key": "copySampleCode2",
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
              "label": "Top",
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "select",
              "key": "select3",
              "data": {
                "values": []
              },
              "valueProperty": "value",
              "input": true
            },
            {
              "label": "Left (Left-aligned)",
              "labelPosition": "left-left",
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "select",
              "key": "select4",
              "data": {
                "values": []
              },
              "valueProperty": "value",
              "input": true
            },
            {
              "label": "Left (Right-aligned)",
              "labelPosition": "left-right",
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "select",
              "key": "select5",
              "data": {
                "values": []
              },
              "valueProperty": "value",
              "input": true
            },
            {
              "label": "Right (Left-aligned)",
              "labelPosition": "right-left",
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "select",
              "key": "select6",
              "data": {
                "values": []
              },
              "valueProperty": "value",
              "input": true
            },
            {
              "label": "Right (Right-aligned)",
              "labelPosition": "right-right",
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "select",
              "key": "select7",
              "data": {
                "values": []
              },
              "valueProperty": "value",
              "input": true
            },
            {
              "label": "Bottom",
              "labelPosition": "bottom",
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "select",
              "key": "select8",
              "data": {
                "values": []
              },
              "valueProperty": "value",
              "input": true
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
              "content": "Label Position",
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
              "content": "To change label position of <strong>Select</strong> component, specify label position within <strong>labelPosition</strong> property.\n<br>\nFor example, to change label position to the left side of <strong>Select</strong> component with left alignment, use <strong>\"labelPosition\": \"left-left\"</strong>.\n<br>\n<br>\nThe definition will be like this:\n<xmp>\n{\n  \"label\": \"Select label\",\n  \"labelPosition\": \"left-left\",\n  \"type\": \"select\",\n  \"key\": \"selectLabel\",\n  \"data\": {\n\t\"values\": []\n  },\n  \"valueProperty\": \"value\"\n}\n</xmp>",
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
              "label": "Select",
              "placeholder": "Please select value from drop down list",
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "select",
              "key": "select9",
              "data": {
                "values": []
              },
              "valueProperty": "value",
              "input": true
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
              "content": "Placeholder",
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
              "content": "To specifies short describes for Select component, use <strong>placeholder</strong> property and specifies the message value in it.\n<br>\nFor example, to describes to the user to select the value from Select component, use <strong>\"placeholder\": \"Please select value from drop down list\"</strong>.\n<br>\n<br>\nThe definition will be like this:\n<xmp>\n{\n  \"label\": \"Select\",\n  \"placeholder\": \"Please select value from drop down list\",\n  \"type\": \"select\",\n  \"key\": \"select\",\n  \"data\": {\n\t\"values\": []\n  },\n  \"valueProperty\": \"value\"\n}\n</xmp>",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph2"
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
              "key": "submit3"
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
              "label": "Select",
              "description": "Please select value from above drop down list.",
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "select",
              "key": "select10",
              "data": {
                "values": []
              },
              "valueProperty": "value",
              "input": true
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
              "key": "heading8"
            },
            {
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "To display description below Select component to describes about it for the user, use <strong>description</strong> property and specifies the message value in it.\r\n<br>\r\nFor example, to describes Select component field, use <strong>\"description\": \"Please select value from above drop down list\"</strong>.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Select\",\r\n  \"description\": \"Please select value from above drop down list\",\r\n  \"type\": \"select\",\r\n  \"key\": \"select\",\r\n  \"data\": {\r\n\t\"values\": []\r\n  },\r\n  \"valueProperty\": \"value\"\r\n}\r\n</xmp>",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph3"
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
              "key": "submit4"
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
              "label": "Select",
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "tooltip": "Please select value from drop down list.",
              "type": "select",
              "key": "select12",
              "data": {
                "values": []
              },
              "valueProperty": "value",
              "input": true
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
              "key": "heading9"
            },
            {
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "To display tooltip of Select component field when mouse over on question mark, use <strong>tooltip</strong> property and specifies tooltip message value in it.\r\n<br>\r\nFor example, to display tooltip message of Select component field, use <strong>\"tooltip\": \"Please select value from drop down list.\"</strong>.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Select\",\r\n  \"tooltip\": \"Please select value from drop down list\",\r\n  \"type\": \"select\",\r\n  \"key\": \"select\",\r\n  \"data\": {\r\n\t\"values\": []\r\n  },\r\n  \"valueProperty\": \"value\"\r\n}\r\n</xmp>",
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
      "label": "Heading3",
      "tag": "h3",
      "className": "",
      "attrs": [],
      "content": "Select - Data Source Type",
      "refreshOnChange": false,
      "mask": false,
      "tableView": true,
      "alwaysEnabled": false,
      "type": "htmlelement",
      "input": false,
      "key": "heading10"
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "Gender",
              "type": "select",
              "key": "select13",
              "data": {
                "values": [
                  {
                    "label": "Male",
                    "value": "male"
                  },
                  {
                    "label": "Female",
                    "value": "female"
                  }
                ]
              },
              "valueProperty": "value",
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
              "content": "Data Source Type - Values",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "htmlelement",
              "input": false,
              "key": "heading11"
            },
            {
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "There are many ways to provide the data for Select component, one of the simple way is provide your own values and labels via <strong>Values</strong> property.\r\n<br>\r\n<br>\r\nFor example, to populate <strong>Gender</strong> field in Select component with <strong>Male</strong> and <strong>Female</strong> values, in <strong>data</strong> entry use <strong>values</strong> property and specifies the following attributes in it:\r\n<ul>\r\n<li><strong>label</strong>: This is the label of select data to display in drop down list.</li>\r\n<li><strong>value</strong>: This is the value of selected data when user select it from drop down list.</li>\r\n</ul>\r\n\r\nThe definition of select component when using <strong>Values</strong> as datasource will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Gender\",\r\n  \"type\": \"select\",\r\n  \"key\": \"gender\",\r\n  \"data\": {\r\n\t\"values\": [\r\n\t  {\r\n\t\t\"label\": \"Male\",\r\n\t\t\"value\": \"male\"\r\n\t  },\r\n\t  {\r\n\t\t\"label\": \"Female\",\r\n\t\t\"value\": \"female\"\r\n\t  }\r\n\t]\r\n  },\r\n  \"valueProperty\": \"value\"\r\n}\r\n</xmp>",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph7"
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
              "key": "submit8"
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
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "select",
              "key": "select14",
              "data": {
                "json": [
                  {
                    "label": "Male",
                    "value": "male"
                  },
                  {
                    "label": "Female",
                    "value": "female"
                  }
                ],
                "values": []
              },
              "dataSrc": "json",
              "template": "<span> {{ item.label }} </span>",
              "input": true,
              "defaultValue": "",
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
              "content": "Data Source Type - RAW JSON",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "htmlelement",
              "input": false,
              "key": "heading12"
            },
            {
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "To use <strong>RAW JSON</strong> as data source for Select component, use <strong>dataSrc</strong> property and specify the value for it as <strong>\"json\"</strong> like <strong>\"dataSrc\": \"json\"</strong> then specifies <strong>RAW JSON</strong> array in <strong>data</strong> entry and under <strong>json</strong> property.\r\n<br>\r\n<br>\r\nFor example, to populate <strong>Gender</strong> field in Select component with <strong>Male</strong> and <strong>Female</strong> values, the <strong>RAW JSON</strong> should be like this:\r\n<br>\r\n<strong>\"data\": { \"json\": [ { \"label\": \"Male\", \"value\": \"male\" }, { \"label\": \"Female\", \"value\": \"female\" } ] }</strong>\r\n<br>\r\n<br>\r\nOne more required attribute when using <strong>RAW JSON</strong> as data source is <strong>\"template\"</strong>, <strong>template</strong> is use to specify which attribute will be show in drop down list.\r\n<br>\r\nTo use <strong>template</strong> property, specify <strong>&lcub;&lcub; item.xxx &rcub;&rcub;</strong> inside HTML element such as &lt;span&gt;...&lt;/span&gt;, &lt;div&gt;...&lt;/div&gt;, e.g.\r\n<br>\r\nFrom above <strong>RAW JSON</strong>, to display the label in drop down list, <strong>template</strong> property will be like this <strong>\"template\": \"&lt;span&gt; &lcub;&lcub; item.label &rcub;&rcub; &lt;/span&gt;\"</strong>\r\n<br>\r\n<br>\r\nThe full definition of <strong>Gender</strong> field with using <strong>RAW JSON</strong> as data source will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Gender\",\r\n  \"type\": \"select\",\r\n  \"key\": \"gender\",\r\n  \"data\": {\r\n\t\"json\": [\r\n\t  {\r\n\t\t\"label\": \"Male\",\r\n\t\t\"value\": \"male\"\r\n\t  },\r\n\t  {\r\n\t\t\"label\": \"Female\",\r\n\t\t\"value\": \"female\"\r\n\t  }\r\n\t],\r\n\t\"values\": []\r\n  },\r\n  \"dataSrc\": \"json\",\r\n  \"template\": \"<span> &lcub;&lcub; item.label &rcub;&rcub; </span>\"\r\n}\r\n</xmp>",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph10"
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
              "key": "submit9"
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
  "title": "Select",
  "name": "selectComponent"
};