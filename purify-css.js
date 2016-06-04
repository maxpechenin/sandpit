'use strict';

var purify = require('purify-css');
var content = ['Suggest/workspace_static.html', 'Suggest/js/global.js'];
var css = ['Suggest/js/main.css'];
var options = {
    output: 'Suggest/css/cleaned-main.css'
};

purify(content, css, options);