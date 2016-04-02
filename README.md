# tpl_md

compile markdown(using marked) with tpl

## Install

```
npm i -S tpl_md
```

## Usages

```
var tpl_md = require('tpl_md')


// way 0
tpl_md('markdown_file_name')

// way 1
tpl_md( 'markdown_file_name','theme—github')

// way 2
tpl_md( 'markdown_file_name', 'theme—github', 'dest_file_name')

// way 3
tpl_md('markdown_file_name' ,'theme—github', 'dest_file_name',  'template_file_name')

// way 4
tpl_md('markdown_file_name' ,'theme—github', 'dest_file_name', 'template_file_name', {
  gfm: true,
   tables: true,
   breaks: false,
   pedantic: false,
   sanitize: true,
   smartLists: true,
   smartypants: false
})
```

## 主题

- bootstrap3
- github
- jasonm23-dark
- jasonm23-foghorn
- jasonm23-markdown
- jasonm23-swiss
- markedapp-byword
- mixu-book
- mixu-bootstrap
- mixu-bootstrap-2col
- mixu-gray
- mixu-page
- mixu-radar
- roryg-ghostwriter
- thomasf-solarizedcssdark
- thomasf-solarizedcsslight
- witex


## Mac键盘key说明

大部分人都记不住这些按键，下面给出说明

| Symbol    | Key         | 
|:---------:|:-----------:|
|  &#8984;  | Command Key |
|  &#8963;  | Control Key |
|  &#8997;  | Option Key  |
|  &#8679;  | Shift Key   |

