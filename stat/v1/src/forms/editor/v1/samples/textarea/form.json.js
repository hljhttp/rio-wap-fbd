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
      "content": "Text Area",
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
              "label": "Text Area",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "textarea",
              "input": true,
              "key": "textArea"
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
              "content": "Default Text Area Component",
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
              "content": "The default <strong>text area</strong> component for the user to input the data, it has the same options with text field and the different thing from text field is that it's avalible to input multi-line and longer text.\r\n<br>\r\n<br>\r\nThe minimal text area definition is:\r\n<xmp>\r\n{\r\n  \"label\": \"Text Area\",\r\n  \"type\": \"textarea\",\r\n  \"key\": \"textArea\"\r\n}\r\n</xmp>",
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
              "label": "Suggestion",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "textarea",
              "input": true,
              "key": "textArea2"
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
              "content": "To naming the title of <strong>text area</strong> field, specify name value in <strong>label</strong> property.\r\n<br>\r\nFor example, to naming <strong>text area</strong> as <strong>Suggestion</strong>, use <strong>\"label\": \"Suggestion\"</strong>.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Suggestion\",\r\n  \"type\": \"textarea\",\r\n  \"key\": \"textArea\"\r\n}\r\n</xmp>",
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
              "label": "Suggestion",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "rows": 5,
              "type": "textarea",
              "input": true,
              "key": "textArea3"
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
              "content": "Rows",
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
              "content": "To control the <strong>row</strong> of <strong>text area</strong> that will be display in the <strong>text area</strong>, use <strong>rows</strong> property and specify the number of row in it.\r\n<br>\r\nFor example, to display the row of <strong>text area</strong> as <strong>5 rows</strong>, use <strong>\"rows\": 5</strong>.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Suggestion\",\r\n  \"rows\": 5,\r\n  \"type\": \"textarea\",\r\n  \"key\": \"textArea\"\r\n}\r\n</xmp>",
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
              "key": "submit11",
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
              "label": "Label: top",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "textarea",
              "input": true,
              "key": "textArea4"
            },
            {
              "label": "Label: left-left",
              "labelPosition": "left-left",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "textarea",
              "input": true,
              "key": "textArea5"
            },
            {
              "label": "Label: left-right",
              "labelPosition": "left-right",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "textarea",
              "input": true,
              "key": "textArea6"
            },
            {
              "label": "Label: right-left",
              "labelPosition": "right-left",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "textarea",
              "input": true,
              "key": "textArea7"
            },
            {
              "label": "Label: right-right",
              "labelPosition": "right-right",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "textarea",
              "input": true,
              "key": "textArea8"
            },
            {
              "label": "Label: bottom",
              "labelPosition": "bottom",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "textarea",
              "input": true,
              "key": "textArea9"
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
              "key": "heading8"
            },
            {
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "To align label of text area, specify label position within <strong>labelPosition</strong> property.\r\n<br>\r\nFor example, to align label to bottom of text area, use <strong>\"labelPosition\": \"bottom\"</strong>.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Label: bottom\",\r\n  \"labelPosition\": \"bottom\",\r\n  \"type\": \"textarea\",\r\n  \"key\": \"textArea\"\r\n}\r\n</xmp><i><strong>Note:</strong> Choose position value from <strong>top, left-left, left-right, right-left, right-right</strong> and <strong>bottom</strong>.</i>",
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
              "label": "Suggestion",
              "placeholder": "Please leave your suggestion here.",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "textarea",
              "input": true,
              "key": "textArea10"
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
              "key": "heading9"
            },
            {
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "To display short describes to user about expected value of <strong>text area</strong>, use <strong>placeholder</strong> property and specifies the message value in it.\r\n<br>\r\nFor example, to describes <strong>Suggestion</strong> field to the user, use <strong>\"placeholder\": \"Please leave your suggestion here.\"</strong>.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Suggestion\",\r\n  \"placeholder\": \"Please leave your suggestion here.\",\r\n  \"type\": \"textarea\",\r\n  \"key\": \"textArea\"\r\n}\r\n</xmp>",
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
              "label": "Suggestion",
              "description": "Please leave your suggestion above.",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "textarea",
              "input": true,
              "key": "textArea11"
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
              "key": "heading10"
            },
            {
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "To display <strong>description</strong> below text area about it to the user, use <strong>description</strong> property and specifies the message value in it.\r\n<br>\r\nFor example, to describes <strong>Suggestion</strong> field, use <strong>\"description\": \"Please leave your suggestion above.\"</strong>.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Suggestion\",\r\n  \"description\": \"Please leave your suggestion above.\",\r\n  \"type\": \"textarea\",\r\n  \"key\": \"textArea\"\r\n}\r\n</xmp>",
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
              "label": "Suggestion",
              "showWordCount": false,
              "showCharCount": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "textarea",
              "input": true,
              "key": "textArea12",
              "tooltip": "Please leave your suggestion below."
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
              "key": "heading11"
            },
            {
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "To display <strong>tooltip</strong> of text area when mouse over on question mark, use <strong>tooltip</strong> property and specifies tooltip message value in it.\r\n<br>\r\nFor example, to display tooltip message of <strong>Suggestion</strong> field, use <strong>\"tooltip\": \"Please leave your suggestion below.\"</strong>.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Suggestion\",\r\n  \"tooltip\": \"Please leave your suggestion below.\",\r\n  \"type\": \"textarea\",\r\n  \"key\": \"textArea\"\r\n}\r\n</xmp>",
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
  "title": "Text Area",
  "name": "textareaComponent"
};