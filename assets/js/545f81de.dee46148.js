"use strict";(self.webpackChunkawesome_notes=self.webpackChunkawesome_notes||[]).push([[989],{451:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Web/CSS/SassBasicNotes","title":"Sass Basic Notes","description":"Sass Basis","source":"@site/notes/Web/CSS/SassBasicNotes.md","sourceDirName":"Web/CSS","slug":"/Web/CSS/SassBasicNotes","permalink":"/awesome-notes/Web/CSS/SassBasicNotes","draft":false,"unlisted":false,"editUrl":"https://github.com/sabertazimi/awesome-notes/edit/main/notes/Web/CSS/SassBasicNotes.md","tags":[{"inline":true,"label":"Web","permalink":"/awesome-notes/tags/web"},{"inline":true,"label":"CSS","permalink":"/awesome-notes/tags/css"},{"inline":true,"label":"Sass","permalink":"/awesome-notes/tags/sass"}],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1721553986000,"frontMatter":{"author":"Sabertazimi","authorTitle":"Web Developer","authorURL":"https://github.com/sabertazimi","authorImageURL":"https://github.com/sabertazimi.png","tags":["Web","CSS","Sass"]},"sidebar":"tutorialSidebar","previous":{"title":"CSS Layout Notes","permalink":"/awesome-notes/Web/CSS/CSSLayoutNotes"},"next":{"title":"Electron Basic Notes","permalink":"/awesome-notes/Web/Frameworks/ElectronBasicNotes"}}');var l=s(5105),r=s(842);const a={author:"Sabertazimi",authorTitle:"Web Developer",authorURL:"https://github.com/sabertazimi",authorImageURL:"https://github.com/sabertazimi.png",tags:["Web","CSS","Sass"]},c="Sass Basic Notes",t={},d=[{value:"Sass Basis",id:"sass-basis",level:2},{value:"Variable",id:"variable",level:3},{value:"Normal Variable",id:"normal-variable",level:4},{value:"String Variable",id:"string-variable",level:4},{value:"Nesting Variable",id:"nesting-variable",level:4},{value:"List",id:"list",level:4},{value:"Map",id:"map",level:4},{value:"arguments list",id:"arguments-list",level:4},{value:"<code>!default</code> flag",id:"default-flag",level:4},{value:"Directive",id:"directive",level:3},{value:"Mixin and Include Directive",id:"mixin-and-include-directive",level:4},{value:"If Else Directive",id:"if-else-directive",level:4},{value:"for loop",id:"for-loop",level:4},{value:"while loop",id:"while-loop",level:4},{value:"each",id:"each",level:4},{value:"import",id:"import",level:4},{value:"extend",id:"extend",level:4},{value:"Media Queries with extend",id:"media-queries-with-extend",level:5},{value:"Built-in Functions",id:"built-in-functions",level:3},{value:"Color",id:"color",level:4},{value:"Math",id:"math",level:4},{value:"type and unit",id:"type-and-unit",level:4},{value:"Error Handle",id:"error-handle",level:2},{value:"function error handle",id:"function-error-handle",level:3},{value:"mixin error handle",id:"mixin-error-handle",level:3},{value:"Lists Check",id:"lists-check",level:3},{value:"Project Structure",id:"project-structure",level:2},{value:"Best Practice",id:"best-practice",level:2},{value:"Performance",id:"performance",level:3},{value:"Children Selector",id:"children-selector",level:3},{value:"Tools",id:"tools",level:2},{value:"Framework",id:"framework",level:3},{value:"Sprite Builder",id:"sprite-builder",level:3},{value:"Grid System",id:"grid-system",level:3},{value:"Media Query",id:"media-query",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"sass-basic-notes",children:"Sass Basic Notes"})}),"\n",(0,l.jsx)(n.h2,{id:"sass-basis",children:"Sass Basis"}),"\n",(0,l.jsx)(n.h3,{id:"variable",children:"Variable"}),"\n",(0,l.jsx)(n.h4,{id:"normal-variable",children:"Normal Variable"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["start with ",(0,l.jsx)(n.code,{children:"$"})]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"$heading-color: green;\n\nh1 {\n  color: $heading-color;\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"string-variable",children:"String Variable"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"#{$var}"}),": combine with string"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"nesting-variable",children:"Nesting Variable"}),"\n",(0,l.jsx)(n.p,{children:"refer to parent-selector, only use it on:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"pseudo selectors and pseudo elements"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:".button {\n  &:hover,\n  &:focus {\n    color: $color-button-hover;\n  }\n\n  &::after {\n    color: $color-after;\n  }\n}\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"relationship selectors"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:".button {\n  .sidebar & {\n    font-size: 0.9rem;\n  }\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"list",children:"List"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"length($list)"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"nth($list, $n)"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"set-nth($list, $n, $value)"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"index($list, $value)"}),"."]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"list-separator($list)"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"append($list, $value, [$separator])"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"map",children:"Map"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"map-get($map, $key)"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"map-merge($map, $map)"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"map-remove($map, $keys)"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"map-keys($map)"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"map-values($map)"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"map-has-key($map, $key)"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"$colors: (\n  color1: blue,\n  color2: red,\n  color3: green,\n);\n\n@each $key, $color in $colors {\n  .#{$color}-text {\n    color: $color;\n  }\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments-list",children:"arguments list"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"@mixin dummy($a, $b, $c) {\n  // \u2026\n}\n\n// Yep\n@include dummy(true, 42, 'kittens');\n\n// Yep but nope\n$params: (true, 42, 'kittens');\n// stylelint-disable-next-line function-no-unknown\n$value: dummy(nth($params, 1), nth($params, 2), nth($params, 3));\n\n// Yep\n$params: (true, 42, 'kittens');\n\n@include dummy($params...);\n\n// Yep\n$params: (\n  'c': 'kittens',\n  'a': true,\n  'b': 42,\n);\n\n@include dummy($params...);\n"})}),"\n",(0,l.jsxs)(n.h4,{id:"default-flag",children:[(0,l.jsx)(n.code,{children:"!default"})," flag"]}),"\n",(0,l.jsx)(n.p,{children:"only assign when variables hadn't been assigned"}),"\n",(0,l.jsx)(n.h3,{id:"directive",children:"Directive"}),"\n",(0,l.jsx)(n.h4,{id:"mixin-and-include-directive",children:"Mixin and Include Directive"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"@mixin box-shadow($x, $y, $blur, $c) {\n  // stylelint-disable-next-line declaration-block-no-duplicate-properties\n  box-shadow: $x, $y, $blur, $c;\n  // stylelint-disable-next-line declaration-block-no-duplicate-properties\n  box-shadow: $x, $y, $blur, $c;\n  // stylelint-disable-next-line declaration-block-no-duplicate-properties\n  box-shadow: $x, $y, $blur, $c;\n  // stylelint-disable-next-line declaration-block-no-duplicate-properties\n  box-shadow: $x, $y, $blur, $c;\n}\n\ndiv {\n  @include box-shadow(0, 0, 4px, #fff);\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"if-else-directive",children:"If Else Directive"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"@mixin border-stroke($val) {\n  /* stylelint-disable at-rule-empty-line-before */\n  @if $val == light {\n    border: 1px solid black;\n  } @else if $val == medium {\n    border: 3px solid black;\n  } @else if $val == heavy {\n    border: 6px solid black;\n  } @else {\n    border: none;\n  }\n  /* stylelint-enable at-rule-empty-line-before */\n}\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"// Good\n@if not index($list, $item) {\n  // \u2026\n}\n\n// Bad\n@if index($list, $item) == null {\n  // \u2026\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"for-loop",children:"for loop"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"@for $i from 1 through 12 {\n  .col-#{$i} {\n    width: 100% / 12 * $i;\n  }\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"while-loop",children:"while loop"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"$x: 1;\n\n@while $x < 13 {\n  .col-#{$x} {\n    width: 100% / 12 * $x;\n  }\n  $x: $x + 1;\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"each",children:"each"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"@each $color in blue, red, green {\n  .#{$color}-text {\n    color: $color;\n  }\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"import",children:"import"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"// import _variables.scss in main.scss\n@import url('variables');\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"~"})," to import scss from ",(0,l.jsx)(n.code,{children:"node_modules"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"@import url('~bootstrap/scss/bootstrap');\n"})}),"\n",(0,l.jsx)(n.h4,{id:"extend",children:"extend"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"@extend"})," is basically about moving selectors around:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"can't extend complex selector"}),"\n",(0,l.jsx)(n.li,{children:"can't extend cross media query"}),"\n",(0,l.jsx)(n.li,{children:"avoid extending from nested selectors"}),"\n",(0,l.jsxs)(n.li,{children:["avoid chaining ",(0,l.jsx)(n.code,{children:"@extend"})," directives"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"// This CSS won't print because %equal-heights is never extended.\n%equal-heights {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n// This CSS will print because %message-shared is extended.\n%message-shared {\n  padding: 10px;\n  color: #333;\n  border: 1px solid #ccc;\n}\n\n.message {\n  @extend %message-shared;\n}\n\n.success {\n  @extend %message-shared;\n\n  border-color: green;\n}\n\n.error {\n  @extend %message-shared;\n\n  border-color: red;\n}\n\n.warning {\n  @extend %message-shared;\n\n  border-color: yellow;\n}\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:".panel {\n  height: 70px;\n  background-color: red;\n  border: 2px solid green;\n}\n\n.big-panel {\n  @extend .panel;\n\n  width: 150px;\n  font-size: 2em;\n}\n"})}),"\n",(0,l.jsx)(n.h5,{id:"media-queries-with-extend",children:"Media Queries with extend"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"%foo {\n  content: 'foo';\n}\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"// Wrong\n@media print {\n  .bar {\n    // This doesn't work. Worse: it crashes.\n    @extend %foo;\n  }\n}\n\n// Right\n@media print {\n  .bar {\n    @at-root (without: media) {\n      @extend %foo;\n    }\n  }\n}\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"// Right\n%foo {\n  content: 'foo';\n\n  &-print {\n    @media print {\n      content: 'foo print';\n    }\n  }\n}\n\n@media print {\n  .bar {\n    @extend %foo-print;\n  }\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"built-in-functions",children:"Built-in Functions"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://sass-lang.com/documentation/Sass/Script/Functions.html",children:"Official Documentation"})}),"\n",(0,l.jsx)(n.h4,{id:"color",children:"Color"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"mix"})," is better than ",(0,l.jsx)(n.code,{children:"lighten"}),"/",(0,l.jsx)(n.code,{children:"darken"})]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"@function tint($color, $percentage) {\n  @return mix(white, $color, $percentage);\n}\n\n@function shade($color, $percentage) {\n  @return mix(black, $color, $percentage);\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"math",children:"Math"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"round($number)"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"ceil($number)"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"floor($number)"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"abs($number)"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"max"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"min"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"$value: 13.37;\n$length: $value * 1em;\n\n.whatever {\n  padding-top: round($length); // 13em\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"type-and-unit",children:"type and unit"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"unit($length)"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"unitless($length)"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"type-of($var)"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"is-type-of($var, $type)"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"error-handle",children:"Error Handle"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"type-of"}),"\n",(0,l.jsx)(n.li,{children:"is-type-of"}),"\n",(0,l.jsx)(n.li,{children:"unit"}),"\n",(0,l.jsx)(n.li,{children:"unitless"}),"\n",(0,l.jsx)(n.li,{children:"@warn/@error"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"function-error-handle",children:"function error handle"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"@function add-10($number) {\n  @if type-of($number) != 'number' {\n    @warn \"`#{$number}` is not a number of `add-10`.\";\n\n    @return false;\n  }\n\n  @return $number + 10;\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"mixin-error-handle",children:"mixin error handle"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"@mixin module($name) {\n  // Initialize a validity checker boolean\n  $everything-okay: true;\n\n  // Check for argument validity\n  @if type-of($name) != 'string' {\n    @warn '\"#{$name}\" is not a string for \"module\".';\n    $everything-okay: false;\n  }\n\n  // If everything's still okay, dump mixin content\n  @if $everything-okay {\n    @content;\n  }\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"lists-check",children:"Lists Check"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"@if length($value) > 1 and type-of($value) != map {\n  // It is a list of multiple values\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://vanseodesign.com/css/sass-directory-structures",children:"Complete Guide for Sass Directory Structure"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.sitepoint.com/look-different-sass-architectures",children:"Difference between Sass Directory Architectures"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"sass/\n|\u2013 abstracts/\n|   |\u2013 _variables.scss   # Sass Variables\n|   |\u2013 _functions.scss   # Sass Functions\n|   |\u2013 _mixins.scss      # Sass Mixins\n|   |\u2013 _helpers.scss     # Class & placeholders helpers\n|   ...                  # Etc\u2026\n|\n|\u2013 vendors/\n|   |\u2013 _bootstrap.scss   # Bootstrap\n|   |\u2013 _jquery-ui.scss   # jQuery UI\n|   ...                  # Etc\u2026\n|\n|\u2013 base/\n|   |\u2013 _reset.scss       # Reset/normalize\n|   |\u2013 _typography.scss  # Typography rules\n|   ...                  # Etc\u2026\n|\n|\u2013 components/\n|   |\u2013 _buttons.scss     # Buttons\n|   |\u2013 _carousel.scss    # Carousel\n|   |\u2013 _cover.scss       # Cover\n|   |\u2013 _dropdown.scss    # Dropdown\n|   |\u2013 _navigation.scss  # Navigation\n|   ...                  # Etc\u2026\n|\n|\u2013 layout/\n|   |\u2013 _grid.scss        # Grid system\n|   |\u2013 _header.scss      # Header\n|   |\u2013 _footer.scss      # Footer\n|   |\u2013 _sidebar.scss     # Sidebar\n|   |\u2013 _forms.scss       # Forms\n|   ...                  # Etc\u2026\n|\n|\u2013 pages/\n|   |\u2013 _home.scss        # Home specific styles\n|   |\u2013 _contact.scss     # Contact specific styles\n|   ...                  # Etc\u2026\n|\n|\u2013 themes/\n|   |\u2013 _theme.scss       # Default theme\n|   |\u2013 _admin.scss       # Admin theme\n|   ...                  # Etc\u2026\n|\n|\u2013 main.scss             # primary Sass file\n"})}),"\n",(0,l.jsxs)(n.p,{children:["in ",(0,l.jsx)(n.code,{children:"main.scss"})," file:"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"@charset 'utf-8';"})}),"\n",(0,l.jsxs)(n.li,{children:["import ",(0,l.jsx)(n.code,{children:"abstracts"})]}),"\n",(0,l.jsxs)(n.li,{children:["import ",(0,l.jsx)(n.code,{children:"vendors"})]}),"\n",(0,l.jsxs)(n.li,{children:["import ",(0,l.jsx)(n.code,{children:"base"})]}),"\n",(0,l.jsxs)(n.li,{children:["import ",(0,l.jsx)(n.code,{children:"layout"})]}),"\n",(0,l.jsxs)(n.li,{children:["import ",(0,l.jsx)(n.code,{children:"components"})]}),"\n",(0,l.jsxs)(n.li,{children:["import ",(0,l.jsx)(n.code,{children:"themes"})," (or ",(0,l.jsx)(n.code,{children:"pages"})," when it's not ",(0,l.jsx)(n.code,{children:"partial"})," directory)"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["When working on a very large project with a lot of abstract utilities,\nit might be interesting to group them by topic rather than type,\nfor instance typography (",(0,l.jsx)(n.code,{children:"_typography.scss"}),"), theming (",(0,l.jsx)(n.code,{children:"_theming.scss"}),"), etc.\nEach file contains all the related helpers: variables, functions, mixins and placeholders."]}),"\n",(0,l.jsx)(n.h2,{id:"best-practice",children:"Best Practice"}),"\n",(0,l.jsx)(n.h3,{id:"performance",children:"Performance"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"mixin better than extend"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"children-selector",children:"Children Selector"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scss",children:"// Good\n%button {\n  display: inline-block;\n  // \u2026 button styles\n\n  // Relationship: a %button that is a child of a %modal\n  %modal > & {\n    display: block;\n  }\n}\n\n.button {\n  @extend %button;\n}\n\n// Bad Style\n.modal {\n  @extend %modal;\n\n  > .button {\n    @extend %button;\n  }\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"tools",children:"Tools"}),"\n",(0,l.jsx)(n.h3,{id:"framework",children:"Framework"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"http://compass-style.org",children:"Compass"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.bourbon.io",children:"Bourbon"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"sprite-builder",children:"Sprite Builder"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/filamentgroup/grunticon",children:"GruntIcon"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"http://grumpicon.com",children:"GrumpIcon"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"grid-system",children:"Grid System"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"http://susy.oddbird.net",children:"Susy"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/at-import/Singularity",children:"Singularity"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/csswizardry/csswizardry-grids",children:"CSSWizardry Grids"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"media-query",children:"Media Query"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/sass-mq/sass-mq",children:"Sass MQ"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"http://breakpoint-sass.com",children:"Breakpoint Sass"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/eduardoboucas/include-media",children:"Include Media"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},842:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var i=s(8101);const l={},r=i.createContext(l);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);