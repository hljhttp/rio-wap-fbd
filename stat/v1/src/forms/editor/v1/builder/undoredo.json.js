var undoRedoObj ={
  "type": "form",
  "tags": [],
  "owner": "59b0e45d6d85560007c28194",
  "components": [
    {
      "label": "Columns",
      "input": false,
      "key": "columns",
      "columns": [
        {
          "components": [
            {
              "label": "Columns",
              "input": false,
              "key": "columnsColumns",
              "columns": [
                {
                  "components": [
                    {
                      "label": "Columns",
                      "input": false,
                      "key": "columnsColumnsColumns",
                      "columns": [
                        {
                          "components": [
                            {
                              "input": false,
                              "key": "columns",
                              "label": "Columns",
                              "type": "columns",
                              "columns": [
                                {
                                  "components": [
                                    {
                                      "label": "Undo",
                                      "action": "custom",
                                      "showValidations": false,
                                      "theme": "primary",
                                      "leftIcon": "fa fa-undo",
                                      "shortcut": "",
                                      "mask": false,
                                      "tableView": false,
                                      "alwaysEnabled": false,
                                      "custom": " undoFormVersion();",
                                      "type": "button",
                                      "input": true,
                                      "key": "undo",
                                      "tags": [],
                                      "conditional": {
                                        "json": ""
                                      },
                                      "properties": [
                                        {
                                          "key": "",
                                          "value": ""
                                        }
                                      ],
                                      "lockKey": true,
                                      "validate": {
                                        "unique": false,
                                        "customMessage": "",
                                        "json": ""
                                      },
                                      "customConditional": ""
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
                                  "hideOnChildrenHidden": false,
                                  "tableView": true
                                },
                                {
                                  "components": [
                                    {
                                      "label": "Redo",
                                      "action": "custom",
                                      "showValidations": false,
                                      "theme": "primary",
                                      "leftIcon": "fa fa-repeat",
                                      "shortcut": "",
                                      "mask": false,
                                      "tableView": false,
                                      "alwaysEnabled": false,
                                      "custom": "   redoFormVersion();",
                                      "type": "button",
                                      "input": true,
                                      "key": "redo",
                                      "tags": [],
                                      "conditional": {
                                        "show": ""
                                      },
                                      "properties": {},
                                      "isNew": false
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
                                  "hideOnChildrenHidden": false,
                                  "tableView": true
                                }
                              ],
                              "tableView": false
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
                          "hideOnChildrenHidden": false,
                          "tableView": true
                        },
                        {
                          "components": [],
                          "width": 6,
                          "offset": 0,
                          "push": 0,
                          "pull": 0,
                          "type": "column",
                          "input": true,
                          "key": "",
                          "label": "",
                          "hideOnChildrenHidden": false,
                          "tableView": true
                        }
                      ],
                      "type": "columns",
                      "hideLabel": true,
                      "tags": [],
                      "conditional": {
                        "show": ""
                      },
                      "properties": {},
                      "tableView": false
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
                  "hideOnChildrenHidden": false,
                  "tableView": true
                },
                {
                  "components": [],
                  "width": 6,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "label": "",
                  "hideOnChildrenHidden": false,
                  "tableView": true
                }
              ],
              "type": "columns",
              "hideLabel": true,
              "tags": [],
              "conditional": {
                "show": ""
              },
              "properties": {},
              "tableView": false
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
          "hideOnChildrenHidden": false,
          "tableView": true
        },
        {
          "components": [],
          "width": 6,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": "",
          "hideOnChildrenHidden": false,
          "tableView": true
        }
      ],
      "type": "columns",
      "hideLabel": true,
      "tags": [],
      "conditional": {
        "show": ""
      },
      "properties": {},
      "isNew": false,
      "tableView": false
    }
  ],
  "revisions": "",
  "_vid": 0,
  "_id": "5b67ae3674bf65467552eafb",
  "title": "undo/redo",
  "display": "form",
  "access": [
    {
      "roles": [
        "59b10acc5d0f40000722eea6",
        "59b10acc5d0f40000722eea7",
        "59b10acc5d0f40000722eea8"
      ],
      "type": "read_all"
    }
  ],
  "submissionAccess": [],
  "settings": {},
  "name": "undoRedo",
  "path": "undoredo",
  "project": "59b10acc5d0f40000722eea5",
  "created": "2018-08-06T02:11:02.727Z",
  "modified": "2018-08-06T07:27:03.476Z",
  "machineName": "szzlvtfijjjcpvw:undoRedo",
  "properties": {}
}