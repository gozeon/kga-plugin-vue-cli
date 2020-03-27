# kga-plugin-vue-cli

## config templates

see `templates` folder

## init plugin

see `my-plugin.js`

## config plugin in package.json

```
"kga": {
    "plugin": "./my-plugin.js",
    "url": "http://localhost:3000",
    "model": {
      "name": "post",
      "data": [
        "title",
        "author"
      ]
    }
  }
  
...
```