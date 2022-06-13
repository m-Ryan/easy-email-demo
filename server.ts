import './windowMock';
import  mjml2html from 'mjml';

import { JsonToMjml } from 'easy-email-core'

const content = {
  "type": "page",
  "data": {
    "value": {
      "breakpoint": "480px",
      "headAttributes": "",
      "font-size": "14px",
      "font-weight": "400",
      "line-height": "1.7",
      "headStyles": [],
      "fonts": [],
      "responsive": true,
      "font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif",
      "text-color": "#000000"
    }
  },
  "attributes": {
    "background-color": "#efeeea",
    "width": "600px"
  },
  "children": [
    {
      "type": "wrapper",
      "data": {
        "value": {}
      },
      "attributes": {
        "padding": "20px 0px 20px 0px",
        "border": "none",
        "direction": "ltr",
        "text-align": "center"
      },
      "children": [
        {
          "type": "advanced_button",
          "data": {
            "value": {
              "content": "Button"
            }
          },
          "attributes": {
            "align": "center",
            "background-color": "#414141",
            "color": "#ffffff",
            "font-weight": "normal",
            "border-radius": "3px",
            "padding": "10px 25px 10px 25px",
            "inner-padding": "10px 25px 10px 25px",
            "line-height": "120%",
            "target": "_blank",
            "vertical-align": "middle",
            "border": "none",
            "text-align": "center",
            "href": "#"
          },
          "children": []
        }
      ]
    }
  ]
};

const parseHtml = mjml2html(
  JsonToMjml({
    data: content,
    mode: 'production',
    context: content,
  })
).html;

console.log(parseHtml);
