var formiojsObj = {
  "name": "formiojs",
  "version": "3.12.3",
  "description": "Common js library for client side interaction with <form.io>",
  "main": "index.js",
  "files": [
    "dist",
    "lib",
    "utils.js",
    "wizard.js",
    "form.js",
    "embed.js",
    "full.js"
  ],
  "pre-commit": [
    "lint"
  ],
  "scripts": {
    "build": "esdoc;gulp build",
    "watch": "babel -w ./src/ --out-dir ./lib/",
    "rebuild": "rm -rf node_modules;npm install;gulp build",
    "tag": "VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]');git add -A; git commit -m \"Build $Version\";git push origin master;git tag v$VERSION;git push origin --tags;",
    "publish": "npm test;gulp build;npm run tag;npm publish lib;",
    "lint": "gulp eslint",
    "serve": "jekyll serve --config _config.yml,_config.dev.yml",
    "test": "NODE_OPTIONS=\"--max-old-space-size=4096\" karma start --verbose --single-run",
    "test:watch": "NODE_OPTIONS=\"--max-old-space-size=4096\" karma start --no-single-run --auto-watch"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/formio/formio.js.git"
  },
  "contributors": [
    {
      "name": "Travis Tidwell",
      "github": "https://github.com/travist",
      "email": "travis@form.io"
    },
    {
      "name": "Randall Knutson",
      "github": "https://github.com/randallknutson",
      "email": "randall@form.io"
    },
    {
      "name": "Doug Lee",
      "github": "https://github.com/douglaselee",
      "email": "douglaselee@comcast.net"
    },
    {
      "name": "Eric Alter",
      "email": "neolanders@hotmail.com"
    },
    {
      "name": "Guillaume SMAHA",
      "email": "guillaume.smaha@gmail.com"
    }
  ],
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/formio/formio.js/issues"
  },
  "homepage": "https://github.com/formio/formio.js#readme",
  "dependencies": {
    "browser-cookies": "^1.2.0",
    "choices.js": "^3.0.4",
    "dialog-polyfill": "^0.4.10",
    "downloadjs": "^1.4.7",
    "dragula": "^3.7.2",
    "eventemitter2": "^5.0.1",
    "fast-json-patch": "^2.0.7",
    "flatpickr": "^4.5.2",
    "i18next": "^13.1.5",
    "json-logic-js": "^1.2.2",
    "jstimezonedetect": "^1.0.6",
    "lodash": "^4.17.11",
    "moment": "^2.24.0",
    "moment-timezone": "^0.5.23",
    "native-promise-only": "^0.8.1",
    "shallow-copy": "0.0.1",
    "signature_pad": "^2.3.2",
    "string-hash": "^1.1.3",
    "text-mask-addons": "^3.8.0",
    "tooltip.js": "^1.3.1",
    "vanilla-text-mask": "^5.1.1",
    "whatwg-fetch": "2.0.4"
  },
  "devDependencies": {
    "@babel/cli": "^7.2.3",
    "@babel/core": "^7.2.2",
    "@babel/plugin-proposal-export-default-from": "^7.2.0",
    "@babel/plugin-proposal-optional-chaining": "^7.2.0",
    "@babel/polyfill": "^7.2.5",
    "@babel/preset-env": "^7.3.1",
    "babel-eslint": "^10.0.1",
    "babel-loader": "^8.0.5",
    "bootstrap": "^4.2.1",
    "bootswatch": "^4.2.1",
    "chai": "^4.2.0",
    "chance": "^1.0.18",
    "del": "^3.0.0",
    "escape-string-regexp": "^1.0.5",
    "esdoc": "^1.1.0",
    "esdoc-ecmascript-proposal-plugin": "^1.0.0",
    "esdoc-standard-plugin": "^1.0.0",
    "eslint": "^5.12.1",
    "eslint-config-formio": "^1.1.4",
    "fetch-mock": "^6.5.2",
    "font-awesome": "^4.7.0",
    "gulp": "^4.0.0",
    "gulp-babel": "^8.0.0",
    "gulp-clean-css": "^4.0.0",
    "gulp-concat": "^2.6.1",
    "gulp-eslint": "^5.0.0",
    "gulp-filter": "^5.1.0",
    "gulp-rename": "^1.4.0",
    "gulp-replace": "^1.0.0",
    "gulp-sass": "^4.0.2",
    "gulp-watch": "^5.0.1",
    "hoek": "^6.1.2",
    "jquery": "^3.3.1",
    "karma": "^3.1.4",
    "karma-chrome-launcher": "^2.2.0",
    "karma-mocha": "^1.3.0",
    "karma-mocha-reporter": "^2.2.5",
    "karma-phantomjs-launcher": "^1.0.4",
    "karma-webpack": "^3.0.5",
    "marked": "^0.6.0",
    "mocha": "^5.2.0",
    "power-assert": "^1.6.1",
    "pre-commit": "^1.2.2",
    "pygments-css": "^1.0.0",
    "sinon": "^7.2.3",
    "webpack": "^4.29.0",
    "webpack-stream": "^5.2.1",
    "written-number": "^0.8.1"
  }
}
