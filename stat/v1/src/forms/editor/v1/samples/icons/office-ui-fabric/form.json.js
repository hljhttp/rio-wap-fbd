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
      "attrs": [
        {
          "attr": "",
          "value": ""
        }
      ],
      "content": "Office UI Fabric",
      "label": "Heading1",
      "tag": "h1",
      "className": "",
      "refreshOnChange": false,
      "mask": false,
      "tableView": true,
      "type": "htmlelement",
      "input": false,
      "key": "heading2"
    },
    {
      "attrs": [
        {
          "attr": "",
          "value": ""
        }
      ],
      "content": "<strong>Fabric</strong> include with set of icons, product icons and document icons.\n<br>\nYou can adjust the style of an icon such as size, color, etc.\n<br>\n<br>\nTo reference an icon, these three things are needed.\n<ol>\n  <li>Base class, <strong>ms-Icon</strong>.</li>\n  <li>Corresponding prefix for the icon type that you want to use, <strong>ms-Icon</strong> for set of icons and <strong>ms-BrandIcon</strong> for product's icon and document's icon.</li>\n  <li>Icon name.</li>\n</ol>\nFor more implementation details, go to <a href=\"https://developer.microsoft.com/en-us/fabric#/styles/icons#implementation\" target=\"_blank\">https://developer.microsoft.com/en-us/fabric#/styles/icons#implementation</a>",
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
      "columns": [
        {
          "components": [
            {
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "Fabric's icon set",
              "label": "Heading3",
              "tag": "h3",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "heading3"
            },
            {
              "columns": [
                {
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-Icon--WordDocument",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic",
                      "input": false
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-Icon--ExcelDocument",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic8",
                      "input": false
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-Icon--PowerPointDocument",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic9",
                      "input": false
                    }
                  ]
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "pull": 0,
                  "push": 0,
                  "offset": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-Icon--VisioDocument",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic10",
                      "input": false
                    }
                  ]
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
                      "attrs": [
                        {
                          "attr": "",
                          "value": ""
                        },
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-Icon--Mail",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic2",
                      "input": false
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "",
                          "value": ""
                        },
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-Icon--ContactCard",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic11",
                      "input": false
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-Icon--TaskManager",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic11",
                      "input": false
                    }
                  ]
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "pull": 0,
                  "push": 0,
                  "offset": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-Icon--WorkItem",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic11",
                      "input": false
                    }
                  ]
                }
              ],
              "label": "Columns",
              "mask": false,
              "tableView": false,
              "type": "columns",
              "input": false,
              "key": "columns"
            }
          ],
          "width": 3,
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
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "To embed an icon to an HTML element, specify the base <strong>ms-Icon</strong> class follow with <strong>ms-Icon--*</strong> prefix and combine it with specific icon class name within CSS class value.\n<br>\n<br>\nFor example, to embed Microsoft Word document icon to <strong>&lti&gt</strong> element.\n<br>\nSpecify <strong>ms-Icon ms-Icon--WordDocument</strong> in CSS class value, <strong>ms-Icon</strong> is base calss, <strong>ms-Icon--</strong> is prefix and <strong>WordDocument</strong> is an icon name.\n<br>\nThe definition will look like this:\n<xmp>\n{\n  \"label\": \"Italic\",\n  \"tag\": \"i\",\n  \"className\": \"ms-Icon ms-Icon--WordDocument\",\n  \"type\": \"htmlelement\",\n  \"key\": \"italic\"\n}\n</xmp>",
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
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
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
              "attrs": [
                {
                  "attr": "href",
                  "value": "https://developer.microsoft.com/en-us/fabric#/styles/icons"
                },
                {
                  "attr": "target",
                  "value": "_blank"
                }
              ],
              "content": "Click for more icon",
              "label": "Link",
              "tag": "a",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "link"
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode2"
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
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    },
    {
      "columns": [
        {
          "components": [
            {
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "Product Icons",
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
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--office ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic7",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>office<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div6"
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--word ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic12",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>word<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div8"
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--excel ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic12",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>excel<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div9"
                    }
                  ]
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "pull": 0,
                  "push": 0,
                  "offset": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--powerpoint ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic12",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>powerpoint<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div10"
                    }
                  ]
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
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--visio ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic15",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>visio<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div12"
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--access ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic15",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>access<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div12"
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--onenote ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic15",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>onenote<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div12"
                    }
                  ]
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "pull": 0,
                  "push": 0,
                  "offset": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--project ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic15",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>project<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div12"
                    }
                  ]
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
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--infopath ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic14",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>infopath<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div11"
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--outlook ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic14",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>outlook<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div11"
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--sharepoint ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic14",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>sharepoint<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div11"
                    }
                  ]
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "pull": 0,
                  "push": 0,
                  "offset": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--onedrive ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic14",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>onedrive<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div11"
                    }
                  ]
                }
              ],
              "label": "Columns",
              "mask": false,
              "tableView": false,
              "type": "columns",
              "input": false,
              "key": "columns"
            }
          ],
          "width": 3,
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
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "To embed a product icon to an HTML element, specify the base <strong>ms-Icon</strong> class follow with <strong>ms-BrandIcon--*</strong> prefix then combine it with product's icon name and follow with icon dimensions class <strong>ms-BrandIcon--icon*</strong> within CSS class value.\n<br>\n<br>\nFor example, to embed Microsoft Word product icon to <strong>&lti&gt</strong> element.\n<br>\nSpecify <strong>ms-Icon ms-BrandIcon--word ms-BrandIcon--icon48</strong> in CSS class value, <strong>ms-Icon</strong> is base calss, <strong>ms-BrandIcon--</strong> is prefix, <strong>word</strong> is product's icon name and <strong>ms-BrandIcon-icon48</strong> is icon dimensions.\n<br>\nThe definition will look like this:\n<xmp>\n{\n  \"label\": \"Italic\",\n  \"tag\": \"i\",\n  \"className\": \"ms-Icon ms-BrandIcon--word ms-BrandIcon--icon48\",\n  \"type\": \"htmlelement\",\n  \"key\": \"italic\"\n}\n</xmp>\n\n<i><strong>Note:</strong> Office brand icon contain with predefined size at 16px <strong>(icon16)</strong>, 48px <strong>(icon48)</strong>, and 96px <strong>(icon96)</strong></i>",
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
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "label": "Div",
              "tag": "div",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "div5"
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode6"
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
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    },
    {
      "columns": [
        {
          "components": [
            {
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "Document Icons",
              "label": "Heading3",
              "tag": "h3",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "heading5"
            },
            {
              "columns": [
                {
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--accdb ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic13",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>accdb<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div7"
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--docx ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic13",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>docx<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div13"
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--dotx ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic13",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>dotx<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div13"
                    }
                  ]
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "pull": 0,
                  "push": 0,
                  "offset": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--xlsx ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic13",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>xlsx<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div13"
                    }
                  ]
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
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--xltx ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic16",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>xltx<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div13"
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--csv ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic16",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>csv<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div13"
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--pptx ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic16",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>pptx<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div13"
                    }
                  ]
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "pull": 0,
                  "push": 0,
                  "offset": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--ppsx ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic16",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>ppxs<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div13"
                    }
                  ]
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
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--potx ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic16",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>potx<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div13"
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--odt ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic16",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>odt<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div13"
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--ods ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic16",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>ods<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div13"
                    }
                  ]
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "pull": 0,
                  "push": 0,
                  "offset": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--odp ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic16",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>odp<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div13"
                    }
                  ]
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
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--vsdx ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic17",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>vsdx<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div14"
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--vssx ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic17",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>vssx<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div14"
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--vstx ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic17",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>vstx<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div14"
                    }
                  ]
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "pull": 0,
                  "push": 0,
                  "offset": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--one ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic17",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>one<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div14"
                    }
                  ]
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
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--onetoc ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic18",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>onetoc<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div15"
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--mpp ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic18",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>mpp<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div15"
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--mpt ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic18",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>mpt<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div15"
                    }
                  ]
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "pull": 0,
                  "push": 0,
                  "offset": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--pub ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic18",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>pub<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div15"
                    }
                  ]
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
                  "attr": "",
                  "value": ""
                }
              ],
              "label": "Div",
              "tag": "div",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "div17"
            },
            {
              "columns": [
                {
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "style",
                          "value": "font-size: 36px"
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-BrandIcon--xsn ms-BrandIcon--icon48",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic19",
                      "input": false
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p>xsn<p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div16"
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "components": [],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                }
              ],
              "label": "Columns",
              "mask": false,
              "tableView": false,
              "type": "columns",
              "input": false,
              "key": "columns"
            }
          ],
          "width": 3,
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
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "To embed a document icon to an HTML element, specify the base <strong>ms-Icon</strong> class follow with <strong>ms-BrandIcon--*</strong> prefix then combine it with document's icon name and follow with icon dimensions class <strong>ms-BrandIcon--icon*</strong> within CSS class value.\n<br>\n<br>\nFor example, to embed Microsoft Word document icon to <strong>&lti&gt</strong> element.\n<br>\nSpecify <strong>ms-Icon ms-BrandIcon--docx ms-BrandIcon--icon48</strong> in CSS class value, <strong>ms-Icon</strong> is base calss, <strong>ms-BrandIcon--</strong> is prefix, <strong>docx</strong> is document's icon name and <strong>ms-BrandIcon-icon48</strong> is icon dimensions.\n<br>\nThe definition will look like this:\n<xmp>\n{\n  \"label\": \"Italic\",\n  \"tag\": \"i\",\n  \"className\": \"ms-Icon ms-BrandIcon--docx ms-BrandIcon--icon48\",\n  \"type\": \"htmlelement\",\n  \"key\": \"italic\"\n}\n</xmp>\n<i><strong>Note:</strong> Office brand icon contain with predefined size at 16px <strong>(icon16)</strong>, 48px <strong>(icon48)</strong>, and 96px <strong>(icon96)</strong></i>",
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
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "label": "Div",
              "tag": "div",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "div7"
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode7"
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
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    },
    {
      "columns": [
        {
          "components": [
            {
              "columns": [
                {
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "",
                          "value": ""
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-Icon--Contact ms-Icon--xs",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic3",
                      "input": false
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "",
                          "value": ""
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-Icon--Contact ms-Icon--s",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic4",
                      "input": false
                    }
                  ],
                  "width": 3,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "",
                          "value": ""
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-Icon--Contact ms-Icon--m",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic5",
                      "input": false
                    }
                  ]
                },
                {
                  "width": 3,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": "",
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "",
                          "value": ""
                        }
                      ],
                      "label": "Italic",
                      "tag": "i",
                      "className": "ms-Icon ms-Icon--Contact ms-Icon--l",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "key": "italic6",
                      "input": false
                    }
                  ]
                }
              ],
              "label": "Columns",
              "mask": false,
              "tableView": false,
              "type": "columns",
              "input": false,
              "key": "columns"
            }
          ],
          "width": 3,
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
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "To define the size of icons specify <strong>ms-Icon--</strong> follow with size prefix within CSS class value.\n<br>\n<br>\nFor example, to make an icon larger, use <strong>ms-Icon--l</strong> after an icon class.\n<br>\nThe definition will look like this:\n<xmp>\n{\n  \"label\": \"Italic\",\n  \"tag\": \"i\",\n  \"className\": \"ms-Icon ms-Icon--Contact ms-Icon--l\",\n  \"type\": \"htmlelement\",\n  \"key\": \"italic\"\n}\n</xmp>\n<i><strong>Note:</strong> Choose size from xs, s, m and l.</i>",
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
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode3"
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
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    },
    {
      "columns": [
        {
          "components": [
            {
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "<i class=\"ms-Icon ms-Icon--Contact ms-font-mi\"></i>\n<i class=\"ms-Icon ms-Icon--Contact ms-font-xs\"></i>\n<i class=\"ms-Icon ms-Icon--Contact ms-font-s\"></i>\n<i class=\"ms-Icon ms-Icon--Contact ms-font-s-plus\"></i>\n<i class=\"ms-Icon ms-Icon--Contact ms-font-m\"></i>\n<i class=\"ms-Icon ms-Icon--Contact ms-font-m-plus\"></i>\n<i class=\"ms-Icon ms-Icon--Contact ms-font-l\"></i>\n<i class=\"ms-Icon ms-Icon--Contact ms-font-xl\"></i>\n<i class=\"ms-Icon ms-Icon--Contact ms-font-xxl\"></i>\n<i class=\"ms-Icon ms-Icon--Contact ms-font-su\"></i>",
              "label": "Italic",
              "hideLabel": true,
              "tag": "i",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "italic20"
            }
          ],
          "width": 3,
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
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "It's possible to increase size of an icon by using 10 base font classes, each class sets the text size along with a default weight.\n<br>\n<br>\nTo define size of an icon with base font classes, specify <strong>ms-font-*</strong> prefix follow with size class name after an icon class.\n<br>\n<br>\nFor example, to make an icon larger, use <strong>ms-font-su</strong> after an icon class, <strong>ms-font-</strong> is prefix and <strong>su</strong> is icon size class.\n<br>\nThe definition will look like this:\n<xmp>\n{\n  \"label\": \"Italic\",\n  \"tag\": \"i\",\n  \"className\": \"ms-Icon ms-Icon--Contact ms-font-su\",\n  \"type\": \"htmlelement\",\n  \"key\": \"italic\"\n}\n</xmp>\n<i><strong>Note:</strong> Choose size from mi, xs, s, s-plus, m, m-plus, l, xl, xxl and su.</i>",
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
              "attrs": [
                {
                  "attr": "href",
                  "value": "https://developer.microsoft.com/en-us/fabric#/styles/typography"
                },
                {
                  "attr": "target",
                  "value": "_blank"
                }
              ],
              "content": "Click for more information about size.",
              "label": "Link",
              "tag": "a",
              "className": "",
              "refreshOnChange": false,
              "mask": false,
              "tableView": true,
              "type": "htmlelement",
              "input": false,
              "key": "link2"
            },
            {
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode4"
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
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    },
    {
      "columns": [
        {
          "components": [
            {
              "input": false,
              "key": "columns",
              "tableView": false,
              "label": "Columns",
              "type": "columns",
              "columns": [
                {
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "",
                          "value": ""
                        }
                      ],
                      "label": "Italic",
                      "hideLabel": true,
                      "tag": "i",
                      "className": "ms-Icon ms-Icon--WindowsLogo ms-font-su ms-fontColor-blue",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "italic21"
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p><strong>Foreground/text</strong></p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div"
                    }
                  ],
                  "width": 6,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                },
                {
                  "components": [
                    {
                      "attrs": [
                        {
                          "attr": "",
                          "value": ""
                        }
                      ],
                      "label": "Italic",
                      "hideLabel": true,
                      "tag": "i",
                      "className": "ms-Icon ms-Icon--WindowsLogo ms-font-su ms-fontColor-blue--hover",
                      "refreshOnChange": false,
                      "customClass": "text-center",
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "italic22"
                    },
                    {
                      "attrs": [
                        {
                          "attr": "align",
                          "value": "center"
                        }
                      ],
                      "content": "<p><strong>Foreground/text (hover)</strong></p>\r\n",
                      "label": "Div",
                      "tag": "div",
                      "className": "",
                      "refreshOnChange": false,
                      "mask": false,
                      "tableView": true,
                      "type": "htmlelement",
                      "input": false,
                      "key": "div2"
                    }
                  ],
                  "width": 6,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "tableView": true,
                  "label": ""
                }
              ]
            }
          ],
          "width": 3,
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
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "To change the color of an icon, specify <strong>ms-fontColor-*</strong> prefix follow with a color class.\n<br>\n<br>\nFor example, to change the color of an icon from monochrom to blue color, use <strong>ms-fontColor-blue</strong> after an icon class, <strong>ms-fontColor</strong> is prefix and <strong>blue</strong> is a color class..\n<br>\nThe definition will look like this:\n<xmp>\n{\n  \"label\": \"Italic\",\n  \"tag\": \"i\",\n  \"className\": \"ms-Icon ms-Icon-WindowsLogo ms-fontColor-blue\",\n  \"type\": \"htmlelement\",\n  \"key\": \"italic\"\n}\n</xmp>\n<i><strong>Note:</strong> To display the icon color when mouse over on it, fill <strong>--hover</strong> after an icon color class such as <strong>ms-fontColor-blue--hover</strong>.</i>",
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
              "attrs": [
                {
                  "attr": "",
                  "value": ""
                }
              ],
              "content": "For more information about the color, go to <a href=\"https://developer.microsoft.com/en-us/fabric#/styles/colors\" target=\"_blank\">https://developer.microsoft.com/en-us/fabric#/styles/colors</a>",
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
              "label": "Copy sample code",
              "action": "custom",
              "showValidations": false,
              "custom": "var elem = this.event.srcElement.parentNode.parentElement.id;\nvar codeBlockValue = document.getElementById(elem).getElementsByTagName(\"xmp\")[0].innerHTML;\n// Create new element\nvar el = document.createElement('textarea');\n// Set value (string to be copied)\nel.value = codeBlockValue;\n// Set non-editable to avoid focus and move outside of view\nel.setAttribute('readonly', '');\nel.style = {position: 'absolute', left: '-9999px'};\ndocument.body.appendChild(el);\n// Select text inside element\nel.select();\n// Copy text to clipboard\ndocument.execCommand('copy');\n// Remove temporary element\ndocument.body.removeChild(el);",
              "shortcut": "",
              "customClass": "btn btn-link",
              "mask": false,
              "tableView": true,
              "type": "button",
              "input": true,
              "key": "copySampleCode5"
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
      "type": "columns",
      "input": false,
      "key": "columns",
      "tableView": false
    }
  ],
  "properties": {},
  "title": "Office UI Fabric",
  "name": "fabricIcons"
};