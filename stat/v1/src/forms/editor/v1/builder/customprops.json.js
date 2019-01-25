var customPropsObj = {
  "display": "form",
  "components": [
    {
      "label": "",
      "type": "table",
      "key": "table",
      "numRows": 1,
      "numCols": 3,
      "rows": [
        [
          {
            "components": [
              {
                "type": "content",
                "key": "tableContent",
                "html": "<p><strong>Key</strong></p>\n",
                "persistent": true,
                "clearOnHide": true,
                "tableView": true,
                "labelPosition": "top",
                "labelWidth": 30,
                "labelMargin": 3,
                "id": "en2bwhs"
              }
            ]
          },
          {
            "components": [
              {
                "type": "content",
                "key": "tableContent2",
                "html": "<p><strong>Value</strong></p>\n",
                "persistent": true,
                "clearOnHide": true,
                "tableView": true,
                "labelPosition": "top",
                "labelWidth": 30,
                "labelMargin": 3,
                "id": "exguxek"
              }
            ]
          },
          {
            "components": []
          }
        ]
      ],
      "hideLabel": true,
      "labelPosition": "top",
      "labelWidth": 30,
      "labelMargin": 3,
      "validateOn": "change",
      "id": "CustomPropertiesTable"
    },
    {
      "input": true,
      "label": "Add Value",
      "tableView": false,
      "key": "addCustomProperties",
      "size": "md",
      "action": "custom",
      "theme": "primary",
      "type": "button",
      "custom": "addEmptyValue()"
    }
  ],
  "type": "form",
  "title": "hairgrid",
  "name": "hairgrid"
}