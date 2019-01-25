    // define show and set data button
    var viewButtonsObj = {
      "columns": [
          {
              "components": [
                  {
                      "label": "Show Data",
                      "mask": false,
                      "action": "custom",
                      "theme": "primary",
                      "type": "button",
                      "input": false,
                      "key": "showData",
                      "showValidations": false,
                      "custom": "setTimeout(function(){editorData.set(form.submission.data);}, 500);"
                  }
              ],
              "width": 1,
              "offset": 0,
              "push": 0,
              "pull": 0,
              "type": "column",
              "input": true,
              "key": "",
              "label": ""
          },
          {
              "components": [
                  {
                      "label": "Set Data",
                      "mask": false,
                      "action": "custom",
                      "theme": "primary",
                      "type": "button",
                      "input": false,
                      "key": "setData",
                      "showValidations": false,
                      "custom": "\r\nsetTimeout(function(){  \r\nvar getJsonFromEditor = JSON.parse(editorData.getText());\r\nvar getDataKeys = Object.keys(getJsonFromEditor);\r\nvar getDataLength = Object.keys(getJsonFromEditor).length;\r\nfor(var i = 0 ; i< getDataLength; i++){    \r\n \r\n  keyTemp = getDataKeys[i];\r\n  data[keyTemp] = getJsonFromEditor[keyTemp];\r\n}\r\n form.submission=form.submission; \r\n}, 500);"
                  }
              ],
              "width": 1,
              "offset": 0,
              "push": 0,
              "pull": 0,
              "type": "column",
              "input": true,
              "key": "",
              "label": ""
          },
        {
          "components": [
            {
                "label": "Test",
                "action": "custom",
                "theme": "primary",
                "shortcut": "",
                "mask": false,
                "tableView": true,
                "type": "button",
                "input": false,
                "key": "testform",
                "showValidations": false,
                "custom": "window.testform();"
              }
          ],
          "width": 1,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": ""
      },  
      {
        "components": [
            {
                "label": "Translate",
                "action": "custom",
                "theme": "primary",
                "shortcut": "",
                "mask": false,
                "tableView": true,
                "type": "button",
                "input": true,
                "key": "translateform",
                "showValidations": false,
                "custom": "window.translateform();"
              }
        ],
        "width": 1,
        "offset": 0,
        "push": 0,
        "pull": 0,
        "type": "column",
        "input": true,
        "key": "",
        "label": ""
    }           
      ],
      "label": "Columns",
      "mask": false,
      "type": "columns",
      "input": false,
      "key": "outerColumns",
      "properties": [
          {
              "key": "",
              "value": ""
          }
      ],
      "tags": []
  };