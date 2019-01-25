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
      "content": "Content",
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
              "label": "Content",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "content",
              "input": false,
              "key": "content",
              "html": "<p>Content Component</p>",
              "encrypted": false,
              "customConditional": ""
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
              "content": "Default Content Component",
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
              "content": "<strong>Content</strong> component is a <strong>non-field</strong> information to provided information for the user in the form.\r\n<br>\r\nThere are no setting available for this component and the value will not submit to the server.\r\n<br>\r\nThe minimal definition for <strong>content</strong> component is:\r\n<xmp>\r\n{\r\n  \"label\": \"Content\",\r\n  \"type\": \"content\",\r\n  \"key\": \"content\",\r\n  \"html\": \"<p>Content Component</p>\"\r\n}\r\n</xmp>",
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
              "label": "Content",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "content",
              "input": false,
              "key": "content2",
              "html": "<p>Hello World</p>",
              "encrypted": false,
              "customConditional": ""
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
              "content": "Content data",
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
              "content": "To specifies <strong>content</strong> data for <strong>content</strong> field, use <strong>html</strong> property and specifies <strong>html elements</strong> in it such as <strong>&lt;p&gt;</strong>, <strong>&lt;div&gt;</strong>, <strong>&lt;h1&gt;</strong> and etc.\r\n<br>\r\nUnsafe <strong>html tags</strong> and <strong>attributes</strong> will be remove automatically from <strong>content</strong> data before form rendering to prevent cross-site scripting exploits such as <strong>&lt;script&gt;</strong>, <strong>&lt;embed&gt;</strong>, <strong>&lt;style&gt;</strong>, <strong>onmouseover</strong> and <strong>onload</strong> attributes.\r\n<br>\r\n<br>\r\nFor example, to show <strong>content</strong> data as <strong>Hello World</strong> in <strong>paragraph</strong>, use <strong>\"html\": \"&lt;p&gt;Hello World&lt;/p&gt;\"</strong>.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Content\",\r\n  \"type\": \"content\",\r\n  \"key\": \"content\",\r\n  \"html\": \"<p>Hello World</p>\"\r\n}\r\n</xmp>",
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
              "label": "Content",
              "className": "alert-info",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "content",
              "input": false,
              "key": "content3",
              "html": "<p>Hello World</p>",
              "encrypted": false,
              "customConditional": ""
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
              "content": "CSS Class",
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
              "content": "It's possible to use <strong>CSS Class</strong> with <strong>content</strong> field, use <strong>className</strong> property and specify <strong>CSS Class</strong> in it.\r\n<br>\r\nFor example, to use <strong>alert-info</strong> class from <strong>Bootstarp CSS Class</strong> with <strong>content</strong> field, use <strong>\"className\": \"alert-info\"</strong>.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Content\",\r\n  \"type\": \"content\",\r\n  \"key\": \"content\",\r\n  \"html\": \"<p>Hello World</p>\",\r\n  \"className\": \"alert-info\"\r\n}\r\n</xmp>",
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
              "label": "Content",
              "customClass": "badge",
              "type": "content",
              "key": "content4",
              "html": "<p>Hello World</p>",
              "input": false,
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
              "content": "Custom CSS Class",
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
              "content": "It's possible to use <strong>Custom CSS Class</strong> with <strong>content</strong> field, use <strong>customClass</strong> property and specify <strong>CSS Class</strong> in it.\r\n<br>\r\nFor example, to use <strong>badge</strong> class from <strong>Bootstarp CSS Class</strong> with <strong>content</strong> field, use <strong>\"customClass\": \"badge\"</strong>.\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n{\r\n  \"label\": \"Content\",\r\n  \"type\": \"content\",\r\n  \"key\": \"content\",\r\n  \"html\": \"<p>Hello World</p>\",\r\n  \"customClass\": \"badge\"\r\n}\r\n</xmp>\r\n<i><strong>Note:</strong> <strong>CSS Class</strong> priority is higher than <strong>Custom CSS Class</strong>, in case we use <strong>CSS Class</strong> and <strong>Custom CSS Class</strong> together with the same class name, form render will be use the css class from <strong>className</strong> property first.</i>",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "alwaysEnabled": false,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph13"
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
              "key": "submit12",
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
  "title": "Content",
  "name": "contentComponent"
};