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
      "content": "Password",
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
              "label": "Password",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "password",
              "input": true,
              "key": "password"
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
              "content": "Default Password Component",
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
              "content": "The default <strong>password</strong> field for the user to enter their password.\r\n<br>\r\nIt has the same options as a <strong>text field</strong> component but the display of password field will be displayed as asterisks instead of the input value from the user.\r\n<br>\r\n<br>\r\nThe minimal password field definition is:\r\n<xmp>\r\n{\r\n  \"label\": \"Password\",\r\n  \"type\": \"password\",\r\n  \"key\": \"password\"\r\n}\r\n</xmp>",
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
              "label": "Administrator Password",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "password",
              "input": true,
              "key": "administratorPassword"
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
              "content": "To naming the <strong>title</strong> of <strong>password</strong> field, specify name value in label property.\r\n<br>\r\nFor example, to naming <strong>password</strong> field as <strong>Administrator Password</strong>, use <strong>\"label\": \"Administrator Password\"</strong>.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Administrator Password\",\r\n  \"type\": \"password\",\r\n  \"key\": \"password\"\r\n}\r\n</xmp>",
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
              "label": "Password",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "password",
              "input": true,
              "key": "password2"
            },
            {
              "label": "Password",
              "labelPosition": "left-left",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "password",
              "input": true,
              "key": "password3"
            },
            {
              "label": "Password",
              "labelPosition": "left-right",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "password",
              "input": true,
              "key": "password4"
            },
            {
              "label": "Password",
              "labelPosition": "right-left",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "password",
              "input": true,
              "key": "password5"
            },
            {
              "label": "Password",
              "labelPosition": "right-right",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "password",
              "input": true,
              "key": "password6"
            },
            {
              "label": "Password",
              "labelPosition": "bottom",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "password",
              "input": true,
              "key": "password7"
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
              "key": "heading7"
            },
            {
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "To align label of <strong>password</strong> field, specify label position within <strong>labelPosition</strong> property.\r\n<br>\r\nFor example, to align label to <strong>bottom</strong> of <strong>password</strong> field, use <strong>\"labelPosition\": \"bottom\"</strong>.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Password\",\r\n  \"labelPosition\": \"bottom\",\r\n  \"type\": \"password\",\r\n  \"key\": \"password\"\r\n}\r\n</xmp>",
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
              "label": "Password",
              "placeholder": "Enter password with at least 1 number and 1 letter.",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "password",
              "input": true,
              "key": "password8",
              "validate": {
                "pattern": "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,10}$",
                "unique": false,
                "customMessage": "",
                "json": ""
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
              "key": "heading8"
            },
            {
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "To display short describes for expected value of <strong>password</strong> field to the user, use <strong>placeholder</strong> property and specifies the message value in it.\r\n<br>\r\nFor example, to describes to the user that <strong>password</strong> field need to input at least 1 letter and 1 number, use <strong>\"placeholder\": \"Enter password with at least 1 number and 1 letter.\"</strong>.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Password\",\r\n  \"placeholder\": \"Enter password with at least 1 number and 1 letter.\",\r\n  \"type\": \"password\",\r\n  \"key\": \"password\"\r\n}\r\n</xmp>",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
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
              "label": "Password",
              "description": "Enter password with at least 1 number and 1 letter.",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "password",
              "input": true,
              "key": "password9",
              "validate": {
                "pattern": "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,10}$",
                "unique": false,
                "customMessage": "",
                "json": ""
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
              "content": "To display the <strong>description</strong> below <strong>password</strong> field to describes to the user about it, use <strong>description</strong> property and specifies the message value in it.\r\n<br>\r\nFor example, to describes <strong>password</strong> field, use <strong>\"description\": \"Enter password with at least 1 number and 1 letter.\"</strong>.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Password\",\r\n  \"description\": \"Enter password with at least 1 number and 1 letter.\",\r\n  \"type\": \"password\",\r\n  \"key\": \"password\"\r\n}\r\n</xmp>",
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
              "label": "Password",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "password",
              "input": true,
              "key": "password10",
              "tooltip": "Enter password with at least 1 number and 1 letter.",
              "validate": {
                "pattern": "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,10}$",
                "unique": false,
                "customMessage": "",
                "json": ""
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
              "content": "To display <strong>tooltip</strong> message for <strong>password</strong> field when mouse over on question mark, use <strong>tooltip</strong> property and specifies tooltip message value in it.\r\n<br>\r\nFor example, to display <strong>tooltip</strong> message of <strong>password</strong> field, use <strong>\"tooltip\": \"Enter password with at least 1 number and 1 letter.\"</strong>.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Password\",\r\n  \"tooltip\": \"Enter password with at least 1 number and 1 letter.\",\r\n  \"type\": \"password\",\r\n  \"key\": \"password\"\r\n}\r\n</xmp>",
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
  "title": "Password",
  "name": "passwordComponent"
};