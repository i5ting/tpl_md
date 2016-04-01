var tpl_md = require('./')
var fs = require('fs')

tpl_md(__dirname + '/README.md', 'dest_file_name.html', __dirname + '/tpl2.html',{
  gfm: true,
   tables: true,
   breaks: false,
   pedantic: false,
   sanitize: true,
   smartLists: true,
   smartypants: false
})