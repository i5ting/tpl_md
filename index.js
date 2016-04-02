var fs = require('fs')
var tpl = require('tpl_apply')
var marked = require('marked')

var config = require('./default.json')

config.tpl_path = __dirname + "/tpl.html";

var _log = console.log;

console.log = function (str) {
  _log(str);
}

module.exports = function(markdown, dest_file_name, template, marked_option) {
  if (!dest_file_name) {
    setMarkdown(markdown)
  } else {
    setMarkdown(markdown, dest_file_name)
  }
  
  if (marked_option) {
    marked.setOptions(marked_option)
  }
  
  if (template) {
    config.tpl_path = template
  }
  
  console.log(config)

  generate()
  
  require('./copy')(config);
}


/**
 * 生成
 */ 
function generate () {
  var md = getMarkdown()
  
  tpl.tpl_apply(config.tpl_path, {
    title:"i5ting",
    asset: config.theme + "/assets",
    markdown_compiled: md
  }, config.markdown_output);
  
  //copy from "./layouts/" + config.theme 到当前目录
}

/**
 * 获取编译后的md
 */ 
function getMarkdown () {
  var md_content = fs.readFileSync(config.markdown_input).toString()
  console.log(md_content)
  
  var md = marked(md_content)
  console.log(md)
  
  return md
}

/**
 * 设置md信息
 */ 
function setMarkdown(markdown_input, markdown_output){
  config.markdown_input = markdown_input
  
  if (markdown_input && markdown_output) {
    config.markdown_output = markdown_output
  } else {
    var a = markdown_input.split('.md')
    config.markdown_output = a[0] + '.html'
    _log( a[0])
  }
}