var tpl_md = require('./')
var fs = require('fs')

tpl_md(__dirname + '/README.md', 'dest_file_name.html', __dirname + '/tpl2.html')