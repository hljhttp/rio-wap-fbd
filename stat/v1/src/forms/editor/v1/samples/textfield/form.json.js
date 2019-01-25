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
      "content": "Text Field",
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
              "label": "Text Field",
              "type": "textfield",
              "key": "textField",
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
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "The general text field for user to input the data.\n<br>\nThe minimal textfield definition is:\n<xmp>\n  {\n    \"key\": \"textField\",\n    \"label\": \"Text Field\",\n    \"type\": \"textfield\"\n  }\n</xmp>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
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
          "tableView": true
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
              "label": "First Name",
              "type": "textfield",
              "key": "firstname",
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
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "To naming the title of text field, specify name value in <strong>label</strong> property.\n<br>\nFor example, to naming text field as <strong>First Name</strong>, specify <strong>\"label\": \"First Name\"</strong>.\n<br>\n<br>\nThe definition will be like this:\n<xmp>\n  {\n    \"key\": \"textField\",\n    \"label\": \"First Name\",\n    \"type\": \"textfield\"\n  }\n</xmp>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
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
          "tableView": true
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
              "label": "Label: top",
              "type": "textfield",
              "key": "labeltop",
              "input": true,
              "tableView": true
            },
            {
              "labelPosition": "left-left",
              "label": "Label: left-left",
              "type": "textfield",
              "key": "labelleftleft",
              "input": true,
              "tableView": true
            },
            {
              "labelPosition": "left-right",
              "label": "Label: left-right",
              "type": "textfield",
              "key": "labelleftright",
              "input": true,
              "tableView": true
            },
            {
              "labelPosition": "right-left",
              "label": "Label: right-left",
              "type": "textfield",
              "key": "labelrightleft",
              "input": true,
              "tableView": true
            },
            {
              "labelPosition": "right-right",
              "label": "Label: right-right",
              "type": "textfield",
              "key": "labelrightright",
              "input": true,
              "tableView": true
            },
            {
              "labelPosition": "bottom",
              "label": "Label: bottom",
              "type": "textfield",
              "key": "labelbottom",
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
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "To align label of text field, specify label position within <strong>labelPosition</strong> property.\n<br>\nFor example, to align label to bottom of text field, use <strong>\"labelPosition\": \"bottom\"</strong>.\n<br>\n<br>\nThe definition will be like this:\n<xmp>\n  {\n    \"labelPosition\": \"top\",  \n    \"key\": \"textField\",\n    \"label\": \"Text Field\",\n    \"type\": \"textfield\"\n  }\n</xmp><i><strong>Note:</strong> Choose position value from <strong>top, left-left, left-right, right-left, right-right</strong> and <strong>bottom</strong>.</i>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
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
          "tableView": true
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
              "label": "Start date:",
              "widget": {
                "type": "calendar"
              },
              "type": "textfield",
              "key": "calendar",
              "input": true,
              "suffix": true,
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
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "Text field have a calendar widget to change the normal text field to calendar field.\r\n<br>\r\nTo use calendar widget in text field, add <strong>\"widget\": {\"type\": \"calendar\"\r\n}</strong> to text field definition.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Start date:\",\r\n  \"type\": \"textfield\",\r\n  \"key\": \"calendar\",\r\n  \"widget\": {\r\n\t\"type\": \"calendar\",\r\n\t\"format\": \"dd-MM-yyyy\"\r\n  }\r\n}\r\n</xmp>\r\nTo set the display date format for calendar widget, add <strong>format</strong> property to widget entry.\r\n<br>\r\nFor example, to display the date format as <strong>dd-MM-yyyy</strong>, use <strong>\"format\": \"dd-MM-yyyy\"</strong>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
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
          "tableView": true
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
              "label": "First Name",
              "placeholder": "Please input your name here",
              "type": "textfield",
              "key": "firstnamePlaceholder",
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
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "It's possible to specifies short describes for expected value of text field.\r\n<br>\r\nUse <strong>placeholder</strong> property and specifes the message value in it.\r\n<br>\r\n<br>\r\nFor example, to describes first name text field, use <strong>\"placeholder\": \"Please input your name here\"</strong>.\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n  {\r\n    \"placeholder\": \"Please input your name here\",  \r\n    \"key\": \"firstname\",\r\n    \"label\": \"First Name\",\r\n    \"type\": \"textfield\"\r\n  }\r\n</xmp>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph4"
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
              "key": "submit5"
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
              "label": "First Name",
              "description": "Enter your first name",
              "type": "textfield",
              "key": "firstnameDescription",
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
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "It's possible to display description below text field to describes about it for the user.\r\n<br>\r\nUse <strong>description</strong> property and specifes the message value in it.\r\n<br>\r\n<br>\r\nFor example, to describes first name text field, use <strong>\"description\": \"Enter your first name\"</strong>.\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n  {\r\n    \"description\": \"Enter your first name\",  \r\n    \"key\": \"firstname\",\r\n    \"label\": \"First Name\",\r\n    \"type\": \"textfield\"\r\n  }\r\n</xmp>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
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
          "tableView": true
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
              "label": "First Name",
              "tooltip": "Please enter your first name.",
              "type": "textfield",
              "key": "firstnameTooltip",
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
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "It's possible to display tooltip of text field when mouse over on question mark.\r\n<br>\r\nTo display tooltip, use <strong>tooltip</strong> property and specifies tooltip message value in it.\r\n<br>\r\n<br>\r\nFor example, to display tooltip message of first name text field, use <strong>\"tooltip\": \"Please enter your first name.\"</strong>.\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n  {\r\n    \"tooltip\": \"Please enter your first name.\",  \r\n    \"key\": \"firstname\",\r\n    \"label\": \"First Name\",\r\n    \"type\": \"textfield\"\r\n  }\r\n</xmp>",
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
          "tableView": true
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
              "label": "Telephone Number",
              "inputMask": "(999)999-9999",
              "allowMultipleMasks": false,
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "type": "textfield",
              "input": true,
              "key": "textField7",
              "widget": {
                "type": ""
              }
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
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "To specify input mask to help the user to input text field in correct format, use <strong>inputMask</strong> property and specifies format mask for it.\r\n<br>\r\nFor example, to make sure that the user will input telephone number in correct format, use <strong>\"inputMask\": \"(999)999-9999\"</strong>\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n  {\r\n    \"inputMask\": \"(999)999-9999\",  \r\n    \"key\": \"telephonenumber\",\r\n    \"label\": \"Telephone Number\",\r\n    \"type\": \"textfield\"\r\n  }\r\n</xmp>\r\n<i><strong>Note:</strong>There are 3 formats mask to use with <strong>inputMask</strong> property:</i>\r\n<br>\r\n<i>\r\n<ul>\r\n\t<li><strong>9:</strong> For numeric.</li>\r\n\t<li><strong>a:</strong> For alphabetical.</li>\r\n\t<li><strong>*:</strong> For alphanumeric.</li>\r\n</ul>\r\n</i>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
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
          "tableView": true
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
          "attr": "align",
          "value": "left"
        }
      ],
      "content": "<p><b>Text Field Validation</b></p>\r\n",
      "label": "Div",
      "tag": "div",
      "className": "h4",
      "refreshOnChange": false,
      "mask": false,
      "tableView": true,
      "type": "htmlelement",
      "input": false,
      "key": "div2"
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "First Name",
              "type": "textfield",
              "key": "firstnameRequire",
              "validate": {
                "required": true
              },
              "input": true,
              "tableView": true
            },
            {
              "label": "Submit",
              "shortcut": "",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "buttonRequire",
              "properties": {},
              "tags": []
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
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "<b>Required</b> validation is a simple validation for text field to make sure that text field must be filled in before user submit the form.\n<br>\n<br>\nFor example, to make <b>First Name</b> text field to be required field, add <b>validate</b> entry with <b>required</b> property in text field definition like this <b>\"validate\": { \"required\": true }</b>\n<br>\n  <br>\n  The definition will be like this:\n  <xmp>\n  {\n    \"label\": \"First Name\",\n    \"type\": \"textfield\",\n    \"key\": \"firstname\",\n    \"validate\": {\n      \"required\": true\n    }\n  }\n</xmp>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph10"
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
              "key": "submit9",
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
          "tableView": true
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
              "label": "Password",
              "allowMultipleMasks": false,
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "type": "textfield",
              "key": "passwordRegEx",
              "validate": {
                "pattern": "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,10}$",
                "customMessage": "Enter password with minimum 8 characters, maximum 10 characters and at least 1 letter and 1 number."
              },
              "input": true,
              "widget": {
                "type": ""
              }
            },
            {
              "label": "Submit",
              "shortcut": "",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "passwordButton",
              "properties": {},
              "tags": []
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
          "tableView": true
        },
        {
          "components": [
            {
              "attrs": [],
              "content": "It's possible to use <b>Regular Expression Pattern</b> to validate text field value before user submit the form.\r\n<br>\r\n<br>\r\nFor example, to use regular expression pattern to validate <b>Password</b> field, add <b>validate</b> entry to text field definition with the property below:\r\n<ul>\r\n\t<li><b>pattern:</b> Regular expression pattern for validate text field value.</li>\r\n\t<li><b>customMessage:</b> Custom error message to display when text field value does not match with regular expression pattern.</li>\r\n</ul>\r\nThe definition will be like this:\r\n<xmp>\r\n  {\r\n    \"label\": \"Password\",\r\n    \"type\": \"textfield\",\r\n    \"key\": \"password\",\r\n    \"validate\": {\r\n      \"pattern\": \"^(?=.*[A-Za-z])(?=.*\\\\d)[A-Za-z\\\\d]{8,10}$\",\r\n      \"customMessage\": \"Enter password with minimum 8 characters and maximum 10 characters \r\n      and at least 1 letter and 1 number.\"\r\n    }\r\n  }\r\n</xmp>\r\n\r\n<i><b>Note:</b> Go to <a href=\"https://www.w3schools.com/jsref/jsref_obj_regexp.asp\" target=\"_blank\">w3schools.com</a> to learn more about Regular Expression Pattern.</i>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph11"
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
              "key": "submit10"
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
  "title": "Text Field",
  "name": "textfieldComponent"
};