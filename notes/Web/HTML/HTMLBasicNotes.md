---
author: Sabertazimi
authorTitle: Web Developer
authorURL: https://github.com/sabertazimi
authorImageURL: https://github.com/sabertazimi.png
tags: [Web, HTML]
---

# HTML Basic Notes

## Emmet

### 嵌套操作

孩子 : `>`.

```html
<!-- div>ul>li -->
<div>
  <ul>
    <li></li>
  </ul>
</div>
```

兄弟 : `+`.

```html
<!-- div+ul>li -->
<div></div>
<ul>
  <li></li>
</ul>
```

上级：`^`.

```html
<!-- ul>li^div -->
<ul>
  <li></li>
</ul>
<div></div>

ul>li>a^^div
<ul>
  <li><a href=""></a></li>
</ul>
<div></div>
```

重复: `*`.

```html
<!-- ul>li*3 -->
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

分组：`()`.

```html
<!-- div>(p>span)*2 -->
<div>
  <p><span></span></p>
  <p><span></span></p>
</div>
```

### 属性操作

- id: `#`.
- class: `.`.

```html
<!-- div#header+div.main+div#footer -->
<div id="header"></div>
<div class="main"></div>
<div id="footer"></div>
```

属性值: `[]`.

```html
<!-- a[title=test target=_self] -->
<a title="test" target="_self" href=""></a>
```

数列值：`$`.

```html
<!-- p.item$*3 -->
<p class="item1"></p>
<p class="item2"></p>
<p class="item3"></p>

<!-- p.item$$*3 -->
<p class="item01"></p>
<p class="item02"></p>
<p class="item03"></p>
```

数列操作符：`@`

```html
<!-- p.item$@-*3 @- = -1 -->
<p class="item3"></p>
<p class="item2"></p>
<p class="item1"></p>

<!-- p.item$@3*3 @3 = 从3开始3次 -->
<p class="item3"></p>
<p class="item4"></p>
<p class="item5"></p>

<!-- p.item$@-3*3 @-3 = 3次后到3结束 -->
<p class="item5"></p>
<p class="item4"></p>
<p class="item3"></p>
```

### 字符操作

字符操作：`{}`.

```html
<!-- a{click} -->
<a href="">click</a>

<!-- a>{click}+span{me} -->
<a href="">click<span>me</span></a>
```

### 缺省元素

- `.header+.footer` -> `div.header+div.footer`.
- `ul>.item*3` -> `ul>li.item*3`.
- `table>.row*4>.cell*3` -> `table>tr.row*4>td.cell*3`.

## Structure

- [Semantics Section Reference](http://www.html5jscss.com/html5-semantics-section.html)

### Section

必须含有**hx**标题子标签.

### Header

Not only can the page `<body>` contain a header,
but also can every `<article>` and `<section>` element.

### Footer

Not only can the page `<body>` contain a footer,
but also can every `<article>` and `<section>` element.

### hgroup

### nav

- 传统导航条
- 侧边栏导航
- 页内跳转
- 翻页操作

### main

- 每个网页只有 1 个`main`元素
- `main`不可为`article`、`aside`、`header`、`footer`、`nav`孩子

### address

联系信息 - QQ、住址、电子邮箱、主页链接

### aside

名词解释的附属部分/友情链接/广告

### blockquote

长文本引用

### pre

代码段

## Head

`meta` data list in
[HEAD](https://github.com/joshbuchea/HEAD).

### Favicon

```html
<head>
  <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
</head>
```

Generating favicons in [all necessary sizes](https://github.com/pixel-point/favpie):

```html
<head>
  <link rel="icon" type="image/png" href="/favicon-32x32.png" />
  <link rel="apple-touch-icon" sizes="48x48" href="/favicon-48x48.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72x72.png" />
  <link rel="apple-touch-icon" sizes="96x96" href="/favicon-96x96.png" />
  <link rel="apple-touch-icon" sizes="256x256" href="/favicon-256x256.png" />
  <link rel="apple-touch-icon" sizes="384x384" href="/favicon-384x384.png" />
  <link rel="apple-touch-icon" sizes="512x512" href="/favicon-512x512.png" />
  <link rel="manifest" href="/manifest.webmanifest" crossorigin="anonymous" />
</head>
```

### Theme Color

- [MDN Introduction](https://developer.mozilla.org/docs/Web/HTML/Element/meta/name/theme-color)
- [HTML Specification](https://html.spec.whatwg.org/multipage/semantics.html#meta-theme-color)

```html
<meta name="theme-color" content="#319197" media="(prefers-color-scheme: light)" />
<meta name="theme-color" content="#872e4e" media="(prefers-color-scheme: dark)" />
```

## Form

[Form](https://adamsilver.io/articles/form-design-from-zero-to-hero-all-in-one-blog-post):

```html
<form action="表单提交的后台地址接口" method="post" 提交方式，一般为post>
  <fieldset 若内容比较多，用来分区>
    <legend>这是分区的标题</legend>
    <label for="file">选择照片按钮</label>
    <input type="file" id="file" />
  </fieldset>

  <fieldset>
    <legend>这是分区的标题</legend>
    <div>选择尺寸：</div>
    <input
      type="checkbox"
      多选框
      name="size"
      数据名称，交给后台
      value="5"
      值
      id="cb_0"
      checked
      disabled
      默认勾选，无法更改
    />
    <label for="cb_0">5寸</label>
    <!-- 一个input一个label，一一对应，同类name相同 -->
    <input type="radio" 单选框 name="material" value="fs" id="rd_0" />
    <label for="rd_0">富士，单选第一个</label>

    <input
      type="text"
      单行文本框，默认
      id="description"
      placeholder="里面是提示"
      value="这里是默认内容"
      readonly只读
      hidden隐藏
    />
    <input type="submit" 提交按钮 /> == <button type="submit">提交</button> <input type="reset" 重置按钮 /> ==
    <button type="reset">重置</button>

    <div>
      <label for="delivery" 功能提示信息，通过for与标签对应>配送方式</label>
      <select id="delivery" 下拉选择>
        <optgroup label="group1" 给选项分组>
          <option value="0">快递</option>
          <option value="1">EMS</option>
        </optgroup>
        <option value="2" selected>平邮</option>
      </select>
    </div>

    <div>
      <label for="feedback">意见反馈,多行文本框</label>
      <textarea name="feedback" rows="4" 4行 id="feedback"></textarea>
    </div>
  </fieldset>
</form>
```

### Form Validation

- Form validation complete [guide](https://developer.mozilla.org/docs/Learn/Forms/Form_validation).
- Constraint validation complete [guide](https://developer.mozilla.org/docs/Web/Guide/HTML/Constraint_validation).

```ts
const usernameInput = document.querySelector('[name="name"]')

usernameInput.addEventListener('invalid', () => {
  usernameInput.setCustomValidity('Please enter your name.')
})
```

### Form Element Attributes

#### Form Attribute

`form=form_name`:
使表单元素可放置于表单之外

#### Form Action Attribute

`formaction=target_name`:
使表单元素可提交到不同页面

#### Form Method Attribute

`formmethod=post/get`:
使表单元素以不同的方式提交

#### Form Enctype Attribute

`enctype` (HTTP `Content-Type` header):

- 默认值: `application/x-www-form-urlencoded`, 提交前编码所有字符.
- `multipart/form-data` 不编码字符, **上传控件表单元素**必须使用改值.
- `text/plain`: 表单元素数据中的空格编码为 `+`.

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="file">Choose file to upload</label>
    <input type="file" id="file" name="file" multiple />
  </div>
  <div>
    <button>Upload image</button>
  </div>
</form>
```

#### Form Target Attribute

`target` 定义表单提交后加载页面打开方式:

- `self` (default): 在相同的框架中打开被链接文档.
- `blank`: 在新窗口中打开被链接文档.
- `parent`: 在父框架集中打开被链接文档.
- `top`: 在整个窗口中打开被链接文档.
- `frameName`: 在指定的框架中打开被链接文档.

#### Form Novalidate Attribute

取消表单元素的提交验证 (`novalidate`):

将 `submit` 元素的 `formnovalidate` 属性值为 `true`,
使整个表单提交验证失效, 实现假提交,
进而弹出再次确认按钮 (真提交).

#### AutoFocus Attribute

```html
<div class="form-control">
  <label for="search">Search the site...</label>
  <input id="search" name="search" type="search" placeholder="Search here ..." autofocus />
</div>
```

#### Required Attribute

```html
<div class="form-control">
  <label for="film">The film in question?</label>
  <input id="film" name="film" type="text" placeholder="e.g. King Kong" required aria-required="true" />
</div>
```

#### Disabled and Hidden Attribute

- `disabled` 表单元素的数据不会被提交.
- `hidden` 表单元素的数据仍会被提交.

#### AutoComplete Attribute

[`autocomplete`](https://developer.mozilla.org/docs/Web/HTML/Attributes/autocomplete):

- `email`.
- `new-password`.
- `current-password`.
- `street-address`.
- `address-line1`.
- `address-line2`.
- `address-line3`.
- `city`.
- `state`.
- `country`.
- `tel`.
- `zip`.
- `one-time-code`.
- `cc-name`.
- `cc-number`.
- `cc-exp`.
- `off`.

```html
<form>
  <div>
    <label for="email">Email</label>
    <input autocomplete="email" required type="email" id="email" name="email" />
  </div>
  <div>
    <label for="password">Password</label>
    <input autocomplete="new-password" type="password" id="password" name="password" />
  </div>
  <button>Sign up</button>
</form>

<form>
  <div>
    <label for="email">Email</label>
    <input autocomplete="email" required type="email" id="email" name="email" />
  </div>
  <div>
    <label for="password">Password</label>
    <input autocomplete="current-password" type="password" id="password" name="password" />
  </div>
  <button>Sign in</button>
</form>
```

### Form Labels

指定表单元素的标签

```html
<label for="input_id">OS : </label>
```

#### 隐式 Control 属性

javascript tips：通过 control 属性改变标签对应表单元素的值

```ts
const textbox = $('#label_id').control
textbox.value = '666666' //  等同于 input.value = '666666';
```

### Form Input

#### Input Types

```html
<!-- default -->
<input type="text" />
<!-- numeric keyboard -->
<input type="tel" />
<!-- numeric keyboard -->
<input type="number" />
<!-- displays @ key -->
<input type="email" />
<!-- displays .com key -->
<input type="url" />
<!-- displays search button -->
<input type="search" />
<!-- displays date picker or wheel controls -->
<input type="date" />
<input type="date picker(data,month,week,time,datetime,datetime-local)" />

<input type="range" />
<input type="color" />
```

#### Text Input

```html
<input type="text" spellcheck="true" lang="en" />
```

#### Radio Input

`name` 相同时, 多个 radio 组成一个 radio group.

#### Checkbox Input

#### Search Input

搜索条:

```html
<div class="form-control">
  <label for="search">Search the site...</label>
  <input id="search" name="search" type="search" placeholder="Search here ..." />
</div>
```

#### Tel Input

电话号码无输入检查:

```html
<div class="form-control">
  <label for="tel">Telephone (so we can berate you if you're wrong)</label>
  <input id="tel" name="tel" type="tel" placeholder="1-234-546758" autocomplete="off" required />
</div>
```

#### Url Input

```html
<div class="form-control">
  <label for="web">Your Web address</label>
  <input id="web" name="web" type="url" placeholder="https://www.mysite.com" />
</div>
```

#### Email Input

```html
<div class="form-control">
  <label for="email">Your Email address</label>
  <input type="email" id="email" name="email" placeholder="dwight.schultz@gmail.com" required />
</div>
```

#### Number Input

```html
<div class="form-control">
  <label for="yearOfCrime">Year Of Crime</label>
  <input id="yearOfCrime" name="yearOfCrime" type="number" min="1929" max="2015" step="1" required />
</div>
```

#### Range Input

```html
<div class="form-control">
  <input
    id="howYouRateIt"
    name="howYouRateIt"
    type="range"
    min="1"
    max="10"
    value="5"
    onchange="showValue(this.value)"
  />
  <span id="range">5</span>
</div>
```

#### DateTime Input

`[type]`:

- `date`.
- `month`.
- `week`.
- `time`.
- `datetime-local`.

```html
<input id="date" name="date" type="date" />
<input id="month" name="month" type="month" />
<input id="week" name="week" type="week" />
<input id="time" name="time" type="time" />
```

#### Color Input

```html
<div class="form-control">
  <label for="color">Your favorite color</label>
  <input id="color" name="color" type="color" />
</div>
```

#### List Input

`autocomplete`, 为输入框指定智能提示数据:

```html
<div class="form-control">
  <label for="awardWon">Award Won</label>
  <input id="awardWon" name="awardWon" type="text" list="awards" />
  <datalist id="awards">
    <select>
      <option value="Best Picture"></option>
      <option value="Best Director"></option>
      <option value="Best Adapted Screenplay"></option>
      <option value="Best Original Screenplay"></option>
    </select>
  </datalist>
</div>
```

#### File Input

File type:

```html
<input type="file" accept=".jpeg,.png" />
```

Multiple files:

```html
<input type="file" multiple />
```

Capture device camera:

```html
<!-- Front camera -->
<input type="file" capture="user" accept="image/*" />
<!-- Back camera -->
<input type="file" capture="environment" accept="image/*" />
```

#### Indeterminate

检查 `[type=checkbox]` 的状态:

```ts
if (checkbox.indeterminate) {
  doSomething()
} else {
  if (checkbox.checked)
    doSomething()
  else
    doSomething()
}
```

#### Pattern

通过正则表达式指定输入格式:

```html
<input pattern="[0-9][A-Z]{3}" />
```

#### Validity

返回 `ValidityState` 对象, 拥有 `ValidityState.valid` 属性.

### Output

`<input>` 元素的镜像元素.

### Textarea

#### Maxlength

#### Cols

每行可显示字符最大数

#### Wrap

- hard:换行时加入换行标志，**此时必须指定**`cols`属性
- soft:不加入换行标志

### Menu

### Dialog

Native [`dialog`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog):

```html
<dialog open>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

```html
<button class="btn" data-toggle="#dialog">Open modal</button>

<button class="btn" data-toggle="#dialog-tall">Open tall modal</button>

<dialog id="dialog">
  <header>
    Example modal
    <button class="btn btn-close" data-close>
      <svg width="16" height="16"><use xlink:href="#x" /></svg>
    </button>
  </header>
  Some basic text inside the modal to demonstrate how it all looks and works.
</dialog>

<dialog id="dialog-tall">
  <header>
    Super tall modal
    <button class="btn btn-close" data-close>
      <svg width="16" height="16"><use xlink:href="#x" /></svg>
    </button>
  </header>
  <p>Line breaks to push the height out.</p>
  <button type="button" class="btn" data-close>Close</button>
</dialog>
```

```ts
const togglers = document.querySelectorAll('[data-toggle]')
const closers = document.querySelectorAll('[data-close]')

togglers?.forEach((toggler) => {
  const target = toggler.getAttribute('data-toggle')
  const dialogs = document.querySelectorAll(target)

  toggler.addEventListener('click', (_event) => {
    dialogs.forEach((dialog) => {
      dialog.showModal()
    })
  })
})

closers?.forEach((closer) => {
  closer.addEventListener('click', (_event) => {
    const dialog = closer.closest('dialog')
    dialog.close()
  })
})
```

### Datalist

```html
<datalist id="register-prompt" style="display: none">
  <option value="Windows">Windows</option>
  <option value="Mac OS">Mac OS</option>
  <option value="Linux">Linux</option>
</datalist>
```

```html
<label for="myBrowser">Choose a browser from this list:</label>
<input list="browsers" id="myBrowser" name="myBrowser" />
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Internet Explorer"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
  <option value="Microsoft Edge"></option>
</datalist>
```

### Form Demo

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign Up Form</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet" />
    <link rel="stylesheet" href="css/main.css" />
  </head>
  <body>
    <form action="index.html" method="post">
      <h2>Your basic info</h2>

      <label for="name">Name</label>
      <input type="text" id="name" name="student_name" />

      <label for="mail">Email</label>
      <input type="email" id="mail" name="student_email" />

      <label for="password">Password</label>
      <input type="password" id="password" name="student_password" />

      <label>Age:</label>
      <input type="radio" id="under_16" value="under_16" name="user_age" /><label for="under_16" class="light"
        >Under 16</label
      ><br />
      <input type="radio" id="over_16" value="over_16" name="user_age" /><label for="over_16" class="light"
        >16 or Older</label
      >

      <h2>Your profile</h2>

      <label for="bio">Biography</label>
      <textarea id="bio" name="student_bio"></textarea>

      <label for="courses">Select Courses</label>
      <select id="courses" name="student_courses">
        <optgroup label="Engineering">
          <option value="computer_engineering">Computer Science Engineering</option>
          <option value="electrical_engineering">Electrical Engineering</option>
          <option value="mechanical_engineering">Mechanical Engineering</option>
          <option value="civil_engineering">Civil Engineering</option>
          <option value="chemical_engineering">Chemical Engineering</option>
        </optgroup>
        <optgroup label="Management">
          <option value="finance_management">Finance Management</option>
          <option value="technology_management">Technology Management</option>
          <option value="marketing_management">Marketing Management</option>
          <option value="business_administration">Business Administration</option>
        </optgroup>
      </select>

      <label>Interests:</label>
      <input type="checkbox" id="engineering" value="interest_engineering" name="user_interest" /><label
        class="light"
        for="engineering"
        >Engineering</label
      ><br />
      <input type="checkbox" id="business" value="interest_business" name="user_interest" /><label
        class="light"
        for="business"
        >Business</label
      ><br />
      <input type="checkbox" id="law" value="interest_law" name="user_interest" /><label class="light" for="law"
        >Law</label
      >

      <button type="submit">Submit</button>
    </form>
  </body>
</html>
```

## Content

### Details

Accordion list:

```html
<div class="container">
  <h3>FAQ</h3>

  <details open>
    <summary>Why is it called an accordion menu?</summary>
    <hr />
    <p>
      Because each part of it can expand and contract, like in an accordion. If you don't know what an accordion is,
      just imagine a cute fluffy cat. You still won't know what it is, but at least you'll feel better about not
      knowing.
    </p>
  </details>

  <details>
    <summary>Huh?</summary>
    <hr />
    <p>Huh.</p>
  </details>

  <details>
    <summary>If I use an accordion menu will it make me cool?</summary>
    <hr />
    <p>
      No, not unless you're designing a MySpace profile. The
      <code>{"details"}</code> element is cool though, and you can use that for a lot of things. I'm using it on this
      page right below here, to show the code for each example!
    </p>
  </details>
</div>

<style>
  .container {
    padding: 1em 2em;
    border: 0.2em solid black;
    border-radius: 2em;
  }

  details {
    padding: 1em;
    margin-bottom: 1em;
    border: 0.1em solid black;
    border-radius: 1em;
  }

  summary {
    font-size: 1.2em;
    cursor: pointer;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  details[open] summary {
    font-size: 1.3em;
  }
</style>
```

#### Details Summary

展开与收缩时触发 `toggle` 事件:

```html
<details>
  <summary>Details</summary>
  Something small enough to escape casual notice.
</details>
```

#### Details Data Grid

#### Details AutoComplete

#### Details Open

默认 `open=false`.

### Description List

- `<dl>`: description list.
- `<dt>`: description Term.
- `<dd>`: description details.

```html
<h1>Review your data</h1>
<p>Please review the data you entered in the previous step to ensure it is correct:</p>
<dl>
  <dt>First name</dt>
  <dd>Marc</dd>

  <dt>Last name</dt>
  <dd>Simmons</dd>

  <dt>Date of Birth</dt>
  <dd><time datetime="1990-05-15">May 15 1990</time></dd>
</dl>
```

### Table

```html
<table>
  <thead>
    <tr>
      <th scope="col">Col Header 1</th>
      <th scope="col">Col Header 2</th>
      <th scope="col">Col Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Row Header 1</th>
      <td>Row 1 Col 2</td>
      <td>Row 1 Col 3</td>
    </tr>
    <tr>
      <th scope="row">Row Header 2</th>
      <td>Row 2 Col 2</td>
      <td>Row 2 Col 3</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Summary</th>
      <td>Col 2 summary</td>
      <td>Col 3 summary</td>
    </tr>
  </tfoot>
</table>
```

### Mark

突出/高亮显示，无关原文作者

### Ins

Insert text

```html
<ins cite="https://bugzilla.mozilla.org/show_bug.cgi?id=1620467" datetime="2020-07-23">
  The <code>appearance</code> property, previously only available prefixed in Firefox, can now be used in all modern
  browsers un-prefixed.
</ins>
```

### Del

Delete text

```html
<del cite="https://bugzilla.mozilla.org/show_bug.cgi?id=1620467" datetime="2020-07-23">
  Firefox doesn't support CSS's standard <code>appearance</code> property, so you can only use it prefixed.
</del>
```

### U

underline text

### Em

文章重点

### Strong

段落强调

### Small

- 免责声明、注意事项、法律规定、版权声明
- 不改变文字样式

### Hr

下划线

### Progress

value/max 百分比

```html
<label for="file">File progress:</label>

<progress id="file" max="100" value="70">70%</progress>
```

### Meter

#### Value

#### Min

#### Max

#### Low

#### High

#### Optimum

### Wbr

软换行

## Media

### Figure

流内容: 如代码、文件、图片、音频、视频.

### Figcaption

`<figure>` 可拥有唯一的 `0`/`1` 个 `<figcaption>`:

```html
<figure aria-labelledby="image-alt">
  <img src="/media/cc0-images/elephant-660-480.jpg" alt="Elephant at sunset" />
  <figcaption id="image-alt">An elephant at sunset</figcaption>
</figure>
```

### Image

#### Src

#### Alt

(图片崩溃时文本)、title(提示信息)、class(CSS 类选择器)

#### Loading

```html
<img src="picture.jpg" loading="lazy" />
```

#### Responsive Images

```html
<!-- `img` element -->
<img src="foo" alt="bar" />

<!-- `img` element, `srcset` attribute -->
<img
  srcset="foo-320w.jpg 320w, foo-480w.jpg 480w, foo-800w.jpg 800w"
  sizes="(max-width: 480px) 440px, 320px"
  src="foo-320w.jpg"
  alt="bar"
/>
```

### Picture

- Multiple `<source>` and only one `<img>`

```html
<!-- `picture` and `source` elements, `srcset` attributes -->
<picture>
  <source media="(max-width: 799px)" srcset="foo-480w.jpg" />
  <source media="(min-width: 800px)" srcset="foo-800w.jpg" />
  <img src="foo-800w.jpg" alt="bar" />
</picture>
```

- Multiple width images

```html
<picture>
  <source srcset="128px.jpg, 256px.jpg 2x, 512px.jpg 3x" />
  <img src="foo.jpg" alt="bar" />
</picture>
```

- Multiple type images

```html
<picture>
  <source srcset="foo.avif" type="image/avif" />
  <source srcset="foo.webp" type="image/webp" />
  <img src="foo.jpg" />
</picture>
```

### SVG

```ts
const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
const svgRectElement = document.createElementNS(
  'http://www.w3.org/2000/svg',
  'rect'
)
```

### Embed

Embed [best practice](https://web.dev/embed-best-practices):

```html
<script src="lazySizes.min.js" async></script>

<iframe
  data-src="https://www.youtube.com/embed/aKydtOXW8mI"
  width="560"
  height="315"
  class="lazyload"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
>
</iframe>
```

### Video

```html
<video src="myVideo.mp4" width="640" height="480" controls autoplay preload="auto" loop poster="myVideoPoster.png">
  If you're reading this either video didn't load or your browser is legacy!
</video>
```

```html
<video width="640" height="480" controls preload="auto" loop poster="myVideoPoster.png">
  <source src="myVideo.sp8" type="video/super8" />
  <source src="myVideo.mp4" type="video/mp4" />
  <p><b>Download Video:</b> MP4 Format:<a href="myVideo.mp4">"MP4"</a></p>
</video>
```

### Anchor

#### Anchor Href

`[href]` 超链接指向`超链接`/`#id`/`#name`:

```html
<a href="https://github.com">Link</a> <a href="#title">Link</a>
```

#### Anchor ID

当前锚点标识.

#### Anchor Name

当前锚点名字.

#### Anchor Target

定义被链接文档出现方式:

- `self`: **默认**方式, 在相同的框架中打开被链接文档.
- `blank`: 在新窗口中打开被链接文档.
- `parent`: 在父框架集中打开被链接文档.
- `top`: 在整个窗口中打开被链接文档.
- `framename`: 在指定的框架中打开被链接文档.

### Command

## Information

### Popover

[Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API):

```html
<button popovertarget="my-popover">Toggle Popover</button>
<div id="my-popover" popover>Popover Content</div>
```

```html
<button popovertarget="my-popover" class="toggle-btn">Toggle Popover</button>

<div id="my-popover" popover="manual">
  <p>I am a popover with more information.</p>
  <p>
    <button popovertarget="my-popover" popovertargetaction="hide" class="close-btn">
      <span aria-hidden="true">❌</span>
      <span class="sr-only">Close</span>
    </button>
  </p>
</div>
```

### Time

#### Pub Date

`pubdate`:
boolean 代表当前`<time>`表示整个网页的时间

#### DateTime

```html
<time datetime="2010-11-13T20:00Z"></time>
<time datetime="2010-11-13T20:00+09:00"></time>
```

- `T` 分隔日期与时间
- `Z` 使用 UTC 标准时间
- `+` 时差

## Attributes

### Dataset

```html
<td data-row="1" data-column="1"></td>
```

```ts
function onChange(event) {
  const {
    currentTarget: {
      dataset: { row, column },
    },
  } = event
}
```

### Global Attributes

[Global attributes](https://html.spec.whatwg.org/multipage/dom.html#global-attributes)
are attributes common to all HTML elements,
they can be used on all elements,
though they may have no effect on some elements:

- `accesskey`.
- `autocapitalize`.
- `autofocus`.
- `contenteditable`: boolean.
- `dir`.
- `draggable`.
- `enterkeyhint`.
- `hidden`: boolean.
- `inert`.
- `inputmode`.
- `is`.
- `itemid`.
- `itemprop`.
- `itemref`.
- `itemscope`.
- `itemtype`.
- `lang`.
- `nonce`.
- `popover`.
- `spellcheck`: boolean.
- `style`.
- `tabindex`.
- `title`.
- `translate`.
- `on*` [event handler content attributes](https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes).

:::tip

DOM defines the user agent requirements
for the `class`, `id`, and `slot` attributes for any element in any namespace.
The `class`, `id`, and `slot` attributes may be specified on all HTML elements.

:::

#### Tabindex

**-1**: 编程可获得焦点，tab 键不可获得焦点

### HTML Attributes and DOM Properties

#### DOM Properties Differences

HTML attributes vs DOM properties [differs in](https://jakearchibald.com/2024/attributes-vs-properties):

- HTML serialization:
  attributes serialize to HTML, whereas properties don't.
- Value types:
  attribute values are always strings, whereas properties can be any type.
- Case sensitivity:
  attribute names are case-insensitive, whereas property names are case-sensitive.

```ts
// 1. HTML serialization:
const div = document.createElement('div')

div.setAttribute('foo', 'bar')
div.hello = 'world'

console.log(div.outerHTML) // '<div foo="bar"></div>'

// 2. Value types:
const div = document.createElement('div')
const obj = { foo: 'bar' }

div.setAttribute('foo', obj)
console.log(typeof div.getAttribute('foo')) // 'string'
console.log(div.getAttribute('foo')) // '[object Object]'

div.hello = obj
console.log(typeof div.hello) // 'object'
console.log(div.hello) // { foo: 'bar' }

// 3. Case sensitivity:
// <div id="test" HeLlO="world"></div>
const div = document.querySelector('#test')

console.log(div.getAttributeNames()) // ['id', 'hello']

div.setAttribute('FOO', 'bar')
console.log(div.getAttributeNames()) // ['id', 'hello', 'foo']

div.TeSt = 'value'
console.log(div.TeSt) // 'value'
console.log(div.test) // undefined
```

DOM properties come with validation and defaults, whereas HTML attributes don't:

- Omit invalid value: `input.type`.
- Normalize boolean value: `details.open`.
- Convert incoming value to number and coerce negative values to 0: `img.height`.

```ts
// Omit invalid type:
const input = document.createElement('input')

console.log(input.getAttribute('type')) // null
console.log(input.type) // 'text'

input.type = 'number'

console.log(input.getAttribute('type')) // 'number'
console.log(input.type) // 'number'

input.type = 'foo'

console.log(input.getAttribute('type')) // 'foo'
console.log(input.type) // 'text'

// Normalize non-empty string to true value:
const details = document.querySelector('details')

console.log(details.getAttribute('open')) // ''
console.log(details.open) // true

details.open = false

console.log(details.getAttribute('open')) // null
console.log(details.open) // false

details.open = 'hello'

console.log(details.getAttribute('open')) // ''
console.log(details.open) // true
```

#### DOM Properties Reflection

For convenience, most specs will create a property equivalent for every defined attribute.
Here's the spec for [`<ol>`](https://html.spec.whatwg.org/multipage/grouping-content.html#the-ol-element).
The `Content attributes` section defines the HTML attributes
(`reversed`, `start`, `type`),
and the `DOM interface` defines the DOM properties:

```ts
interface OListElement extends HTMLElement {
  reversed: boolean
  start: long
  type: DOMString
};
```

If attribute (e.g `foo=bar`) isn't a spec-defined attribute,
then there isn't a spec-defined `foo` property that reflects it:

```ts
const div = document.querySelector('div[foo=bar]')

console.log(div.getAttribute('foo')) // 'bar'
console.log(div.foo) // undefined

div.foo = 'hello world'

console.log(div.getAttribute('foo')) // 'bar'
console.log(div.foo) // 'hello world'
```

:::caution `input.defaultValue` and `input.value` property

[`input.defaultValue` property](https://html.spec.whatwg.org/multipage/input.html#dom-input-defaultvalue)
reflects HTML `value` attribute,
[`input.value` property](https://html.spec.whatwg.org/multipage/input.html#dom-input-value)
doesn't reflect any attribute:

```ts
class HTMLInputElement extends HTMLElement {
  get defaultValue() {
    return this.getAttribute('value') ?? ''
  }

  set defaultValue(newValue) {
    this.setAttribute('value', String(newValue))
  }

  #value = undefined

  get value() {
    return this.#value ?? this.defaultValue
  }

  set value(newValue) {
    this.#value = String(newValue)
  }

  // This happens when the associated form resets
  formResetCallback() {
    this.#value = undefined
  }
}

// <input type="text" value="default" />
const input = document.querySelector('input')

console.log(input.getAttribute('value')) // 'default'
console.log(input.value) // 'default'
console.log(input.defaultValue) // 'default'

input.defaultValue = 'new default'

console.log(input.getAttribute('value')) // 'new default'
console.log(input.value) // 'new default'
console.log(input.defaultValue) // 'new default'

// Here comes the mode switch:
input.value = 'hello!'

console.log(input.getAttribute('value')) // 'new default'
console.log(input.value) // 'hello!'
console.log(input.defaultValue) // 'new default'

input.setAttribute('value', 'another new default')

console.log(input.getAttribute('value')) // 'another new default'
console.log(input.value) // 'hello!'
console.log(input.defaultValue) // 'another new default'
```

:::

## Accessibility

### Semantic HTML

- Semantical HTML section [guide](https://css-tricks.com/how-to-section-your-html).
- Semantic HTML [presentation](http://justineo.github.io/slideshows/semantic-html/#/).
- Semantic [search element](https://www.sarasoueidan.com/blog/in-quest-of-search).

### Structure Accessibility

- Semantics section [reference](http://www.html5jscss.com/html5-semantics-section.html).
- `<header>`: `role="banner"`
- `<nav>`: `role="navigation"`
- `<main>`: `role="main"`
- `<aside>`: `role="complementary"`
- `<section>`: `role="region"`
- `<article>`: `role="article"`
- `<footer>`: `role="contentinfo"`

```html
<header>
  <nav>
    <ul>
      <li><a></a></li>
    </ul>
  </nav>
</header>

<main>
  <section></section>
</main>

<footer></footer>
```

### Heading Accessibility

- 7 heading levels: `<div role="heading" aria-level="7"></div>`
- One `<h1>` per page

### Navigation Accessibility

- Have a HTML sitemap.
- Support keyboard navigation (Key and Tab Index).
- Breadcrumbs a11y:
  - `aria-label="breadcrumbs"`
  - `aria-label="page"`

```html
<nav aria-label="breadcrumbs">
  <ol>
    <li>
      <a href="https://example.com/"> Home </a>
    </li>
    <li>
      <a href="https://example.com/products"> Products </a>
    </li>
    <li>
      <a href="https://example.com/products/childrens-clothing"> Children's clothing </a>
    </li>
    <li>
      <a href="https://example.com/products/childrens-clothing/shoes" aria-current="page"> Shoes </a>
    </li>
  </ol>
</nav>
```

### Section Accessibility

```html
<section aria-labelledby="sectionHeader1">
  <h2 id="sectionHeader1">A great section</h2>
</section>
<section aria-labelledby="sectionHeader2">
  <h2 id="sectionHeader2">An even better section</h2>
</section>
```

### Article Accessibility

The `<article>` element is used to represent a fully self-contained region of content

```html
<article>
  <header>
    <h1>Why you should buy more cheeses than you currently do</h1>
  </header>
  <section>
    <header>
      <h2>Part 1: Variety is spicy</h2>
    </header>
    <!-- cheesy content -->
  </section>
  <section>
    <header>
      <h2>Part 2: Cows are great</h2>
    </header>
    <!-- more cheesy content -->
  </section>
</article>
```

### Reference Accessibility

- `<cite>`
- `<q>`
- `<blockquote>`
- `<code>`

```html
<p>
  Every time Kenny is killed, Stan will announce
  <q cite="http://en.wikipedia.org/wiki/Kenny_McCormick#Cultural_impact"> Oh my God, you/they killed Kenny! </q>.
</p>
```

```html
<blockquote cite="https://www.huxley.net/bnw/four.html">
  <p>Words can be like X-rays, if you use them properly – they'll go through anything. You read and you're pierced.</p>
</blockquote>

<cite>– Ados Huxley, Brave New World</cite>
```

### Link Accessibility

```html
<article>
  <h2 id="article1-title">My article</h2>
  <p>Article brief description with truncation...</p>
  <a href="article1-url" aria-labelledby="article1-title">Read more</a>
</article>
```

### Text Accessibility

- `<b>`
- `<strong>`
- `<mark>`
- `<ins>`
- `<del>`
- `<abbr>`: 专有名词解释 `<abbr title="HyperText Markup Language">HTML</abbr>`

不要将 `<b>` 元素与 `<strong>`、`<em>` 或 `<mark>` 元素混淆:

- `<strong>` 元素表示某些重要性的文本
- `<em>` 强调文本
- `<mark>` 元素表示某些相关性的文本

#### Text Color A11Y

- Devtool inspect elements A11Y for color contrast ratio.
- Don't forget `::selection`.

#### Text Spacing A11Y

- `line-height` of blocks of text should be **1.5**.
- space between paragraphs should be **1.5 times** the `line-height`
  (so a minimum of `2.25 rem`).
- Line height (line spacing) to at least **1.5 times** the font size.
- Spacing following paragraphs to at least **2 times** the font size.
- Letter spacing (tracking) to at least **0.12** times the font size.
- Word spacing to at least **0.16** times the font size.

### Button Accessibility

Use `<button>` for clickable elements

### Image Accessibility

- `alt=""`

### SVG Accessibility

- `<title>`
- `<desc>`

```html
<svg width="100" height="75">
  <title>Dark rectangle</title>
  <desc>A grey rectangle with rounded corners and a dark green border</desc>
  <rect width="75" height="50" rx="20" ry="20" fill="#666" stroke="#229b23" stroke-fill="1" />
</svg>
```

### Figure Accessibility

```html
<figure aria-labelledby="image-alt">
  <img src="" alt="" />
  <br />
  <figcaption id="image-alt"></figcaption>
</figure>
```

### Audio Source Accessibility

- `src=""`
- `type=""`

### Form Accessibility

#### Group Related Fields

With `fieldset` and `legend`:

```html
<form role="form">
  <fieldset>
    <legend>Choose one of these three items:</legend>
    <input id="one" type="radio" name="items" value="one" />
    <label for="one">Choice One</label><br />
    <input id="two" type="radio" name="items" value="two" />
    <label for="two">Choice Two</label><br />
    <input id="three" type="radio" name="items" value="three" />
    <label for="three">Choice Three</label>
  </fieldset>
</form>
```

#### Input Accessibility

- `label[for]` input.
- `aria-label` and `aria-describedby` for input hint.
- `aria-invalid` for error input.
- `aria-hidden` for hidden input.

```html
<form role="form">
  <label for="name">Name:</label>
  <input id="name" name="name" type="text" />
</form>
```

```html
<form role="form">
  <label for="name">Name:</label>
  <span class="prefix-input">
    <span class="prefix-icon" id="name-icon" aria-label="Input Prefix Icon">
      <icon />
    </span>
    <input id="name" name="name" type="text" aria-describedby="name-icon" />
  </span>
</form>
```

```html
<form role="form">
  <label for="email-address"> Your Email Address </label>
  <span id="email-error"> Error: Your email address must contain an @ symbol </span>
  <input id="email-address" name="email-address" type="email" aria-describedby="email-error" aria-invalid="true" />
</form>
```

```tsx
export default function Field() {
  return (
    <>
      <div className="user-code-field">
        <input
          id="userCode"
          aria-describedby={
            errors.userCode ? 'user-code-error' : 'user-code-help'
          }
        />
        <span id="user-code-help" className="user-code-help">
          Enter your 4 digit user code
        </span>
      </div>
      {errors.userCode && (
        <div id="user-code-error" role="alert" className="error">
          You must enter your 4 character user code
        </div>
      )}
    </>
  )
}
```

### Time Accessibility

```html
<time datetime="2016-09-15">Thursday, September 15<sup>th</sup></time>
```

### Address Accessibility

```html
<footer>
  <section class="contact" vocab="http://schema.org/" typeof="LocalBusiness">
    <h2>Contact us!</h2>
    <address property="email">
      <a href="mailto:us@example.com">us@example.com</a>
    </address>
    <address property="address" typeof="PostalAddress">
      <p property="streetAddress">123 Main St., Suite 404</p>
      <p>
        <span property="addressLocality">Your Town</span>, <span property="addressRegion">AK</span>,
        <span property="postalCode">12345</span>
      </p>
      <p property="addressCountry">United States of America</p>
    </address>
  </section>
</footer>
```

### Color Contrast

- more than 4.5:1 ratio

### Keys and Tabindex Accessibility

```html
<a id="second" href="" accesskey="c"></a>
```

```ts
document.addEventListener('keyup', (event) => {
  switch (event.keyCode) {
    // escape
    case 27:
      // exit
      break
    // enter || space bar
    case 13 || 32:
      // submit or something
      break
    // left arrow
    case 37:
      // move back / previous
      break
    // right arrow
    case 39:
      // move forward
      break
    // up arrow
    case 38:
      // move up
      break
    // down arrow
    case 40:
      // move down
      break
    default:
      throw new Error('Unsupported key!')
  }
})
```

```ts
/**
 * Traps the tab key inside of the context, so the user can't accidentally get
 * stuck behind it.
 *
 * Note that this does not work for VoiceOver users who are navigating with
 * the VoiceOver commands, only for default tab actions. We would need to
 * implement something like the inert attribute for that (see https://github.com/WICG/inert)
 * @param  {object} e the Event object
 */
export function trapTabKey(e, context) {
  if (e.key !== 'Tab')
    return

  const focusableItems = getFocusable(context)
  const focusedItem = document.activeElement

  const focusedItemIndex = focusableItems.indexOf(focusedItem)

  if (e.shiftKey) {
    if (focusedItemIndex === 0) {
      focusableItems[focusableItems.length - 1].focus()
      e.preventDefault()
    }
  } else {
    if (focusedItemIndex === focusableItems.length - 1) {
      focusableItems[0].focus()
      e.preventDefault()
    }
  }
}
```

### Self-Closing Tags

Self-closing tags (`<tag />`) **do not exist** in HTML.
If a trailing / (slash) character is present in the start tag of an HTML element,
HTML parsers ignore that slash character:

```xml
<div>This text is inside the div.</div>
<div />This text is inside the div.

<input />This text is outside the input.
<input>This text is outside the input.</input>
```

Further reading:

- Void elements in [HTML](https://developer.mozilla.org/en-US/docs/Glossary/Void_element).
- Self-closing tags in [JSX](https://jakearchibald.com/2023/against-self-closing-tags-in-html).
- Self-closing tags in [Svelte](https://github.com/sveltejs/svelte/issues/11052).

### ARIA

[Web Accessibility Initiative - Accessible Rich Internet Applications](https://www.w3.org/WAI/intro/aria):

- `aria-label`.
- `aria-labelledby="dropdownMenuButton"`: dropdown/form>.
- `aria-describedBy`: input + small.

```html
<label id="l1" for="f3">label text</label>
<input type="text" id="f3" aria-labelledby="l1 l2" />
<p>other content</p>
<span tabindex="-1" id="l2">more label text</span>

<div aria-describedby="test">text</div>
<div id="test" role="tooltip">tooltip text</div>

<div role="dialog" aria-label="login" aria-describedby="log1">
  <div id="log1" tabindex="-1">Provide user name and password to login.</div>
</div>
```

- `aria-disabled="true"`: disable element.
- `aria-hidden="true"`.
- `aria-controls="navbarSupportedContent"`: navigation/select.
- `aria-expanded="false"`: dropdown.
- `aria-haspopup="true"`: dropdown/popup.
- `aria-current="pages`: breadcrumb.
- `aria-valuenow`/`aria-valuemin`/`aria-valuemax`: progress.
- [role](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/Roles).
  - `<header>`: `role="banner"`.
  - `<nav>`: `role="navigation"`.
  - `<main>`: `role="main"`.
  - `<section>`: `role="region"`.
  - `<article>`: `role="article"`.
  - `<aside>`: `role="complementary"`.
  - `<footer>`: `role="contentinfo"`.
  - `<form>`: `role="form"`.
  - 7th heading level: `<div role="heading" aria-level="7"></div>`.
  - `role="button"`.
  - `role="checkbox"`.
  - `role="gridcell"`.
  - `role="link"`.
  - `role="menuitem"`.
  - `role="menuitemcheckbox"`.
  - `role="menuitemradio"`.
  - `role="option"`.
  - `role="progressbar"`.
  - `role="radio"`.
  - `role="scrollbar"`.
  - `role="searchbox"`.
  - `role="separator (when focusable)"`.
  - `role="slider"`.
  - `role="spinbutton"`.
  - `role="switch"`.
  - `role="tab"`.
  - `role="tabpanel"`.
  - `role="textbox"`.
  - `role="tooltip"`.
  - `role="treeitem"`.
  - `role="presentation"`: removes the semantics of an element.
    If set an interactive or focusable element to `role="presentation"`,
    assistive technology user will not know what it is or how to use it.
  - `role="application"`.

```html
<button class="list-expander" aria-expanded="false" aria-controls="expandable-list-1">Expand List</button>
<ul id="expandable-list-1">
  <li><a href="http://example.com">Sample Link</a></li>
  <li><a href="http://example.com">Sample Link 2</a></li>
  <li><a href="http://example.com">Sample Link 3</a></li>
</ul>
```

```ts
const listExpander = document.querySelector('.list-expander')
const list = document.querySelector('#expandable-list-1')

listExpander.addEventListener('click', (e) => {
  if (list.getAttribute('aria-expanded') === 'true')
    list.setAttribute('aria-expanded', 'false')
  else
    list.setAttribute('aria-expanded', 'true')
})
```

#### Dialog ARIA Role

```html
<div id="dialog_layer" class="dialogs">
  <div
    id="dialog1"
    role="dialog"
    aria-labelledby="dialog1_label"
    aria-describedby="dialog1_desc"
    aria-modal="true"
    class="hidden"
  >
    <h2 id="dialog1_label" class="dialog_label">Address Added</h2>
    <p id="dialog1_desc" class="dialog_desc">
      The address you provided has been added to your list of delivery addresses. It is ready for immediate use. If you
      wish to remove it, you can do so from
      <a href="#" onclick="openDialog('dialog2', this)"> your profile. </a>
    </p>
    <div class="dialog_form_actions">
      <button type="button" id="dialog1_close_btn" onclick="closeDialog(this)">OK</button>
    </div>
  </div>
  <div
    id="dialog2"
    role="dialog"
    aria-labelledby="dialog2_label"
    aria-describedby="dialog2_desc"
    aria-modal="true"
    class="hidden"
  >
    <h2 id="dialog2_label" class="dialog_label">End of the Road!</h2>
    <p id="dialog2_desc" class="dialog_desc">
      You activated a fake link or button that goes nowhere! The link or button is present for demonstration purposes
      only.
    </p>
    <div class="dialog_form_actions">
      <button type="button" id="dialog2_close_btn" onclick="closeDialog(this)">Close</button>
    </div>
  </div>
</div>
```

### HTML First over ARIA

```html
<!--div role="banner"-->
<header></header>

<!--div role="navigation"-->
<nav></nav>

<!--div role="main"-->
<main></main>

<!--div role="region"-->
<section [accessible name]></section>

<!--div role="complementary"-->
<aside></aside>

<!--div role="contentinfo"-->
<footer></footer>

<!--div role="form"-->
<form></form>

<div role="search"></div>
```

### Accessibility Best Practice

A11y audit [list](https://web.dev/lighthouse-accessibility):

- Keyboard-only navigation.
- Voice control.
- Screen reader.
- High contrast mode.
- Dark mode.
- Browser zoom.
- Don't use `aria-hidden` on the `<body>` element.
- Complete meta header:
  - Add missing languages.
  - Make sure `document` has a `title` element.
  - Tool: `react-helmet`.
- Fix low text contrast:
  确保文本与其背景保持足够的对比.
- 不要将颜色作为传达信息的唯一手段 (色盲/弱).
- Add missing alternative text.
- Remove empty links and buttons.
- 注意表单:
  - Add missing labels.
  - 提供输入焦点的视觉提示.
- 避免组件识别障碍.
- Make sure `IDs` and `Keys` of elements are unique.
- Required [context role](https://web.dev/aria-required-parent).
- Required [aria attribute](https://web.dev/aria-required-attr).
- Valid [aria attribute](https://web.dev/aria-valid-attr-value).

### Accessibility Checklist

- [W3C ARIA Usage Rule](https://www.w3.org/TR/aria-in-html)
- [WebAIM WCAG (Web Content Accessibility Guidelines) 2 Checklist](https://webaim.org/standards/wcag/checklist)
- [A11Y Project](https://github.com/a11yproject/a11yproject.com)
- [A11Y 101](https://dev.to/inhuofficial/101-digital-accessibility-tips-and-tricks-4728)

### Accessibility Tools

- [LightHouse](https://github.com/GoogleChrome/lighthouse)
- [AXE DevTools](https://github.com/dequelabs/axe-core)
- [ESLint JSX A11Y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [React A11Y](https://github.com/reactjs/react-a11y)

### Accessibility Reference

- `WAI-ARIA`: improve website’s accessibility with [`WAI-ARIA`](https://www.sitepoint.com/wai-aria).
- `ARIA`: W3C [official examples](https://github.com/w3c/aria-practices).
- `WebAIM`: Million [project](https://webaim.org/projects/million).
- A11y community: learn about [a11y](https://www.ta11y.org/learning).
- Cognitive a11y [resources](https://stephaniewalter.design/blog/neurodiversity-and-ux-essential-resources-for-cognitive-accessibility).
- A11y for [PDF](https://blog.pope.tech/2024/04/25/how-to-check-and-fix-pdf-accessibility-issues).
- A11y for [design system](https://cerovac.com/a11y/2024/04/make-sure-that-your-design-system-is-accessible).
- Assistive technology for [readers](https://veroniiiica.com/a-to-z-of-assistive-technology-for-reading).
