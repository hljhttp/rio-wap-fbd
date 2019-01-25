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
      "content": "Radio",
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
              "label": "Radio",
              "optionsLabelPosition": "right",
              "values": [
                {
                  "label": "Value 1",
                  "value": "value1"
                },
                {
                  "label": "Value 2",
                  "value": "value2"
                }
              ],
              "type": "radio",
              "key": "radio",
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
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "A minimum radio button of form.io for user to select only one option from a set of choices.\n<br>\nThe minimal radio button definition is:\n<xmp>\n  {\n    \"label\": \"Radio\",\n    \"optionsLabelPosition\": \"right\",\n    \"values\": [\n      {\n        \"label\": \"Value 1\",\n        \"value\": \"value1\"\n      },\n      {\n        \"label\": \"Value 2\",\n        \"value\": \"value2\"\n      }\n    ],\n    \"type\": \"radio\",\n    \"key\": \"radio\"\n  }\n</xmp>",
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
              "inline": false,
              "mask": false,
              "tableView": true,
              "type": "radio",
              "input": true,
              "key": "gender2"
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
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "It is possible to change the label of radio button, options label and define the value for the option.\n<br>\n<br>\nFor example, to make the radio button for user to select their gender with <b>Male</b> and <b>Female</b> options, just change a <b>label</b> of radio button to <b>Gender</b> and specify <b>values</b> entry for radio button with the properties below:\n<ul>\n\t<li><b>Male:</b> { \"label\": \"Male\", \"value\": \"male\" }</li>\n\t<li><b>Female:</b> { \"label\": \"Female\", \"value\": \"female\" }</li>\n</ul>\nThe definition will be like this:\n<xmp>\n  {\n    \"label\": \"Gender\",\n    \"optionsLabelPosition\": \"right\",\n    \"values\": [\n      {\n        \"label\": \"Male\",\n        \"value\": \"male\"\n      },\n      {\n        \"label\": \"Female\",\n        \"value\": \"female\"\n      }\n    ],\n    \"type\": \"radio\",\n    \"key\": \"gender\"\n  }\n</xmp>",
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
              "description": "Select your gender from radio option  above.",
              "inline": false,
              "mask": false,
              "tableView": true,
              "type": "radio",
              "input": true,
              "key": "gender3"
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
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "To add more description to describes the user about the radio button, use <b>description</b> property and specifies the message value in it.\r\n<br>\r\n<br>\r\nFor example, to describes the user to select their gender from radio button, use <b>\"description\": \"Select your gender from radio option above.\"</b>\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n  {\r\n    \"label\": \"Gender\",\r\n    \"optionsLabelPosition\": \"right\",\r\n    \"values\": [\r\n      {\r\n        \"label\": \"Male\",\r\n        \"value\": \"male\"\r\n      },\r\n      {\r\n        \"label\": \"Female\",\r\n        \"value\": \"female\"\r\n      }\r\n    ],\r\n    \"description\": \"Select your gender from radio option above.\",\r\n    \"type\": \"radio\",\r\n    \"key\": \"gender\"\r\n  }\r\n</xmp>",
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
              "inline": false,
              "mask": false,
              "tableView": true,
              "type": "radio",
              "input": true,
              "key": "gender4",
              "tooltip": "Select your gender from radio option below."
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
              "label": "Paragraph",
              "className": "",
              "attrs": [],
              "content": "To display tooltip for radio button to describes radio button to user when mouse over on question mark, use <b>tooltip</b> property and specifies tooltip message value in it.\r\n<br>\r\n<br>\r\nFor example, to describes the user to select their gender from radio button within tooltip, use <b>\"tooltip\": \"Select your gender from radio option below.\"</b>\r\n<br>\r\n<br>\r\nThe definition will be like this:\r\n<xmp>\r\n  {\r\n    \"label\": \"Gender\",\r\n    \"optionsLabelPosition\": \"right\",\r\n    \"values\": [\r\n      {\r\n        \"label\": \"Male\",\r\n        \"value\": \"male\"\r\n      },\r\n      {\r\n        \"label\": \"Female\",\r\n        \"value\": \"female\"\r\n      }\r\n    ],\r\n    \"tooltip\": \"Select your gender from radio option below.\",\r\n    \"type\": \"radio\",\r\n    \"key\": \"gender\"\r\n  }\r\n</xmp>",
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
  "title": "Radio",
  "name": "radioComponent"
};