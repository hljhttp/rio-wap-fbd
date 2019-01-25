controlsObj = {
  "builder": {
    "user": {
      "title": "User Fields",
      "weight": 98,
      "components": {
        "firstName": {
          "title": "First Name",
          "key": "firstName",
          "icon": "fa fa-terminal",
          "schema": {
            "label": "First Name",
            "type": "textfield",
            "key": "firstName",
            "input": true
          }
        },
        "lastName": {
          "title": "Last Name",
          "key": "lastName",
          "icon": "fa fa-terminal",
          "schema": {
            "label": "Last Name",
            "type": "textfield",
            "key": "lastName",
            "input": true
          }
        },
        "email": {
          "title": "Email",
          "key": "email",
          "icon": "fa fa-at",
          "schema": {
            "label": "Email",
            "type": "email",
            "key": "email",
            "input": true
          }
        },
        "phoneNumber": {
          "title": "Mobile Phone",
          "key": "mobilePhone",
          "icon": "fa fa-phone-square",
          "schema": {
            "label": "Mobile Phone",
            "type": "phoneNumber",
            "key": "mobilePhone",
            "input": true
          }
        }
      }
    },
    "html": {
      "title": "HTML",
      "weight": 99,
      "components": {
        "image": {
          "title": "Image",
          "key": "image",
          "icon": "fa fa-image",
          "schema": {
            "attrs": [
              {
                "attr": "src",
                "value": "https://i.stack.imgur.com/MjNuE.gif"
              },
              {
                "attr": "alt",
                "value": "alt text goes here"
              },
              {
                "attr": "height",
                "value": "48"
              },
              {
                "attr": "width",
                "value": "48"
              }
            ],
            "tag": "img",
            "type": "htmlelement",
            "input": false,
            "key": "image"
          }
        },
        "Paragraph": {
          "title": "Paragraph",
          "weight": 99,
          "key": "paragraph",
          "icon": "fa fa-paragraph",
          "schema": {
            "content": "This is sample paragraph",
            "label": "Paragraph",
            "tag": "p",
            "type": "htmlelement",
            "input": false,
            "key": "paragraph"
          }
        },
        "Break": {
          "title": "Break",
          "weight": 99,
          "key": "Break",
          "icon": "fa fa-square",
          "schema": {
            "label": "Break",
            "tag": "br",
            "type": "htmlelement",
            "input": false,
            "key": "break"
          }
        },
        "Line": {
          "title": "Line",
          "weight": 99,
          "key": "line",
          "icon": "fa fa-window-minimize",
          "schema": {
            "label": "Line",
            "tag": "hr",
            "type": "htmlelement",
            "input": false,
            "key": "line"
          }
        },
        "Div": {
          "title": "Div",
          "weight": 99,
          "key": "div",
          "icon": "\tfa fa-code",
          "schema": {
            "attrs": [
              {
                "attr": "align",
                "value": "center"
              },
              {
                "attr": "style",
                "value": "background-color:lightblue"
              }
            ],
            "content": "  <p><b>The content Division element</b></p>\r\n  <p>Here's a sample text in paragraph element.</p>\r\n",
            "label": "Div",
            "tag": "div",
            "type": "htmlelement",
            "input": false,
            "key": "div"
          }
        },
        "Link": {
          "title": "Link",
          "weight": 99,
          "key": "link",
          "icon": "fa fa-link",
          "schema": {
            "attrs": [
              {
                "attr": "href",
                "value": "https://www.google.com"
              },
              {
                "attr": "target",
                "value": "_blank"
              }
            ],
            "content": "Visit google.com!!",
            "label": "Link",
            "tag": "a",
            "type": "htmlelement",
            "input": false,
            "key": "link"
          }
        },
        "Heading1": {
          "title": "Heading1",
          "weight": 99,
          "key": "heading1",
          "icon": "fa fa-header",
          "schema": {
            "content": "Heading1",
            "label": "Heading1",
            "tag": "h1",
            "type": "htmlelement",
            "input": false,
            "key": "heading1"
          }
        },
        "Heading2": {
          "title": "Heading2",
          "weight": 99,
          "key": "heading2",
          "icon": "fa fa-header",
          "schema": {
            "content": "Heading2",
            "label": "Heading2",
            "tag": "h2",
            "type": "htmlelement",
            "input": false,
            "key": "heading2"
          }
        },
        "Heading3": {
          "title": "Heading3",
          "weight": 99,
          "key": "heading3",
          "icon": "fa fa-header",
          "schema": {
            "content": "Heading3",
            "label": "Heading3",
            "tag": "h3",
            "type": "htmlelement",
            "input": false,
            "key": "heading3"
          }
        },
        "Heading4": {
          "title": "Heading4",
          "weight": 99,
          "key": "heading4",
          "icon": "fa fa-header",
          "schema": {
            "content": "Heading4",
            "label": "Heading4",
            "tag": "h4",
            "type": "htmlelement",
            "input": false,
            "key": "heading4"
          }
        },
        "Heading5": {
          "title": "Heading5",
          "weight": 99,
          "key": "heading5",
          "icon": "fa fa-header",
          "schema": {
            "content": "Heading5",
            "label": "Heading5",
            "tag": "h5",
            "type": "htmlelement",
            "input": false,
            "key": "heading5"
          }
        },
        "UnorderedList": {
          "title": "Unordered list",
          "weight": 99,
          "key": "unorderedlist",
          "icon": "fa fa-list-ul",
          "schema": {
            "attrs": [
              {
                "attr": "type",
                "value": "circle"
              }
            ],
            "content": "<li>Unordered list1</li><li>Unordered list2</li><li>Unordered list3</li>",
            "label": "Unordered list",
            "tag": "ul",
            "type": "htmlelement",
            "input": false,
            "key": "unorderedlist"
          }
        },
        "OrderedList": {
          "title": "Ordered list",
          "weight": 99,
          "key": "orderedlist",
          "icon": "fa fa-list-ol",
          "schema": {
            "attrs": [
              {
                "attr": "type",
                "value": "A"
              },
              {
                "attr": "reversed",
                "value": "reversed"
              }
            ],
            "content": "<li>Ordered list1</li><li>Ordered list2</li><li>Ordered list3</li>",
            "label": "Ordered list",
            "tag": "ol",
            "type": "htmlelement",
            "input": false,
            "key": "orderedlist"
          }
        },
        "DescriptionList": {
          "title": "Description list",
          "weight": 99,
          "key": "descriptionlist",
          "icon": "fa fa-bars",
          "schema": {
            "content": "<dt>Issue1</dt><dd>Detail of issue1</dd><dt>Issue2</dt><dd>Detail of issue2</dd>",
            "label": "Description list",
            "tag": "dl",
            "type": "htmlelement",
            "input": false,
            "key": "descriptionlist"
          }
        },
        "tablelist": {
          "title": "Table",
          "weight": 99,
          "key": "table",
          "icon": "fa fa-th",
          "schema": {
            "attrs": [
              {
                "attr": "border",
                "value": "1"
              },
              {
                "attr": "width",
                "value": "250"
              }
            ],
            "content": "<tr><th  colspan='2' style='text-align:center;'>Simple table with header</th></tr><tr><th>First name</th><th>Last name</th></tr><tr><td>Britney</td><td>Spears</td></tr><tr><td>Jessie</td><td>Ellen Cornish</td></tr>",
            "label": "Table",
            "tag": "table",
            "type": "htmlelement",
            "input": false,
            "key": "table"
          }
        },
        "italic": {
          "title": "Italic",
          "weight": 99,
          "key": "italic",
          "icon": "far fa-italic",
          "schema": {
            "attrs": [],
            "content": "\n<i>This is sample italic text with icon.<i><br>",
            "label": "Italic",
            "hideLabel": true,
            "tag": "i",
            "className": "glyphicon glyphicon-sunglasses",
            "refreshOnChange": false,
            "mask": false,
            "type": "htmlelement",
            "input": false,
            "key": "italic"
          }
        },
        "emphasized": {
          "title": "Emphasized",
          "weight": 99,
          "key": "emphasized",
          "icon": "far fa-code",
          "schema": {
            "attrs": [],
            "content": "Renders as emphasized text.<br>",
            "label": "Emphasized",
            "hideLabel": true,
            "tag": "em",
            "className": "",
            "refreshOnChange": false,
            "mask": false,
            "type": "htmlelement",
            "input": false,
            "key": "emphasized"
          }
        },
        "strong": {
          "title": "Strong",
          "weight": 99,
          "key": "strong",
          "icon": "far fa-code",
          "schema": {
            "attrs": [],
            "content": "Defines important text.<br>",
            "label": "Strong",
            "hideLabel": true,
            "tag": "strong",
            "className": "",
            "refreshOnChange": false,
            "mask": false,
            "type": "htmlelement",
            "input": false,
            "key": "code"
          }
        },
        "mark": {
          "title": "Mark",
          "weight": 99,
          "key": "mark",
          "icon": "far fa-code",
          "schema": {
            "attrs": [],
            "content": "Defines marked/highlighted text.<br>",
            "label": "Mark",
            "hideLabel": true,
            "tag": "mark",
            "className": "",
            "refreshOnChange": false,
            "mask": false,
            "type": "htmlelement",
            "input": false,
            "key": "mark"
          }
        },
        "cite": {
          "title": "Cite",
          "weight": 99,
          "key": "cite",
          "icon": "far fa-code",
          "schema": {
            "attrs": [],
            "content": "Defines the title of a work<br>",
            "label": "cite",
            "hideLabel": true,
            "tag": "cite",
            "className": "",
            "refreshOnChange": false,
            "mask": false,
            "type": "htmlelement",
            "input": false,
            "key": "cite"
          }
        },
        "dfn": {
          "title": "Dfn",
          "weight": 99,
          "key": "dfn",
          "icon": "far fa-code",
          "schema": {
            "attrs": [],
            "content": "Defines a definition terme<br>",
            "label": "Dfn",
            "hideLabel": true,
            "tag": "dfn",
            "className": "",
            "refreshOnChange": false,
            "mask": false,
            "type": "htmlelement",
            "input": false,
            "key": "dfn"
          }
        }
      }
    },
    "customComponent": {
      "title": 'Special Components',
      "weight": 99,
      "components": {
        "rating": true
      }
    }
    
  
  
  }
};