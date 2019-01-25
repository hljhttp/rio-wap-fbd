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
      "content": "Checkbox",
      "label": "Heading3",
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
              "label": "Checkbox",
              "type": "checkbox",
              "key": "checkbox",
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
              "content": "The default checkbox of form.io for user to select one or more options from limited choices.\n<br>\nThe minimal checkbox definition is:\n<xmp>\n  {\n    \"label\": \"Checkbox\",\n    \"type\": \"checkbox\",\n    \"key\": \"checkbox\"\n  }\n</xmp>",
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
              "labelPosition": "left-left",
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "<p><b>Gender:<b></p>",
              "label": "Div",
              "tag": "div",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "div2"
            },
            {
              "label": "Male",
              "shortcut": "",
              "mask": false,
              "tableView": true,
              "type": "checkbox",
              "input": true,
              "key": "male2"
            },
            {
              "label": "Female",
              "shortcut": "",
              "mask": false,
              "tableView": true,
              "type": "checkbox",
              "input": true,
              "key": "female2"
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
              "content": "To naming the label of checkbox, specify label value in <strong>label</strong> property.\n<br>\nFor example, to naming checkbox label as <strong>Male</strong>, specify <strong>\"label\": \"Male\"</strong>.\n<br>\n<br>\nThe definition will be like this:\n<xmp>\n  {\n    \"label\": \"Male\",\n    \"type\": \"checkbox\",\n    \"key\": \"maleOption\"\n  }\n</xmp>",
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
              "labelPosition": "left-left",
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "<p><b>Gender:</b></p>",
              "label": "Div",
              "tag": "div",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "div"
            },
            {
              "label": "Male",
              "description": "Select Male option if you are a man.",
              "shortcut": "",
              "mask": false,
              "tableView": true,
              "type": "checkbox",
              "input": true,
              "key": "male"
            },
            {
              "label": "Female",
              "description": "Select Female option if you are a woman.",
              "shortcut": "",
              "mask": false,
              "tableView": true,
              "type": "checkbox",
              "input": true,
              "key": "female"
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
              "content": "It's possible to display description below checkbox to describes about it for the user.\r\n<br>\r\nUse <strong>description</strong> property and specifies the message value in it.\r\n<br>\r\n<br>\r\nFor example, to describes Male checkbox, use <strong>\"description\": \"Please select Male option if you are a man.\"</strong>.\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n  {\r\n    \"description\": \"Please select Male option if you are a man.\",\r\n    \"label\": \"Male\",\r\n    \"type\": \"checkbox\",\r\n    \"key\": \"maleOption\"\r\n  }\r\n</xmp>",
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
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\r\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\r\n// Create new element\r\nvar el = document.createElement('textarea');\r\n// Set value (string to be copied)\r\nel.value = codeBlockValue;\r\n// Set non-editable to avoid focus and move outside of view\r\nel.setAttribute('readonly', '');\r\nel.style = {position: 'absolute', left: '-9999px'};\r\ndocument.body.appendChild(el);\r\n// Select text inside element\r\nel.select();\r\n// Copy text to clipboard\r\ndocument.execCommand('copy');\r\n// Remove temporary element\r\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "submit2"
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
              "labelPosition": "left-left",
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "<p><b>Gender:</b></p>",
              "label": "Div",
              "tag": "div",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "div3"
            },
            {
              "label": "Male",
              "description": "Select Male option if you are a man.",
              "shortcut": "",
              "mask": false,
              "tableView": true,
              "type": "checkbox",
              "input": true,
              "key": "male3",
              "tooltip": "Check the box to select your sex."
            },
            {
              "label": "Female",
              "description": "Select Female option if you are a woman.",
              "shortcut": "",
              "mask": false,
              "tableView": true,
              "type": "checkbox",
              "input": true,
              "key": "female3",
              "tooltip": "Check the box to select your sex."
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
              "content": "It's possible to display tooltip for checkbox option when mouse over on question mark.\r\n<br>\r\nTo display tooltip, use <strong>tooltip</strong> property and specifies tooltip message value in it.\r\n<br>\r\n<br>\r\nFor example, to display tooltip message for Male checkbox, use <strong>\"tooltip\": \"Check the box to select your sex.\"</strong>.\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n  {\r\n    \"tooltip\": \"Check the box to select your sex.\",\r\n    \"label\": \"Male\",\r\n    \"type\": \"checkbox\",\r\n    \"key\": \"maleOption\"\r\n  }\r\n</xmp>",
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
              "labelPosition": "left-left",
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "<p><b>Gender:</b></p>",
              "label": "Div",
              "tag": "div",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "div4"
            },
            {
              "label": "Male",
              "description": "Select Male option if you are a man.",
              "shortcut": "",
              "inputType": "radio",
              "name": "gender",
              "value": "male",
              "mask": false,
              "tableView": true,
              "tooltip": "Check the box to select your sex.",
              "type": "checkbox",
              "input": true,
              "key": "male4"
            },
            {
              "label": "Female",
              "description": "Select Female option if you are a woman.",
              "shortcut": "",
              "inputType": "radio",
              "name": "gender",
              "value": "female",
              "mask": false,
              "tableView": true,
              "tooltip": "Check the box to select your sex.",
              "type": "checkbox",
              "input": true,
              "key": "female4"
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
              "content": "It's possible to change type of checkbox from <strong>Checkbox</strong> to <strong>Radio</strong>.\r\n<br>\r\nTo change type of checkbox to <strong>Radio</strong>, use <strong>inputType</strong> property and specify <strong>inputType</strong> value as <strong>radio</strong>.\r\n<br>\r\n<br>\r\nAfter changed <strong>inputType</strong> to <strong>radio</strong>, there are two more property that possible to setting:\r\n<ul>\r\n\t<li><strong>name:</strong> This is the key of radio button, to toggle the radio button selection, <strong>name</strong> propery of each radio button should be the same.</li>\r\n\t<li><strong>value:</strong> Use this property to define the radio button value.</li>\r\n</ul>\r\n<br>\r\nFor example, to do the radio button for the user to select their gender, do the following step:\r\n<ul>\r\n\t<li>Use <strong>\"inputType\": \"radio\"</strong> to change checkbox to radio button.</li>\r\n\t<li>Use <strong>\"name\": \"gender\"</strong> in each radio button to specify <strong>radio key</strong> as <strong>gender</strong> to toggle radio selection.</li>\r\n\t<li>Use <strong>\"value\": \"male\"</strong> for specify the value of <strong>Male</strong> option as <strong>male</strong> and use <strong>\"value\": \"female\"</strong> for specify the value of <strong>Female</strong> option as <strong>female</strong>.</li>\r\n</ul>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n\t{\r\n\t  \"label\": \"Male\",\r\n\t  \"description\": \"Select Male option if you are a man.\",\r\n\t  \"inputType\": \"radio\",\r\n\t  \"name\": \"gender\",\r\n\t  \"value\": \"male\",\r\n\t  \"tooltip\": \"Check the box to select your sex.\",\r\n\t  \"type\": \"checkbox\",\r\n\t  \"key\": \"maleOption\"\r\n\t},\r\n\t{\r\n\t  \"label\": \"Female\",\r\n\t  \"description\": \"Select Female option if you are a woman.\",\r\n\t  \"inputType\": \"radio\",\r\n\t  \"name\": \"gender\",\r\n\t  \"value\": \"female\",\r\n\t  \"tooltip\": \"Check the box to select your sex.\",\r\n\t  \"type\": \"checkbox\",\r\n\t  \"key\": \"femaleOption\"\r\n\t}\r\n</xmp>",
              "label": "Paragraph",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "paragraph12"
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
  "title": "Checkbox",
  "name": "checkboxComponent"
};