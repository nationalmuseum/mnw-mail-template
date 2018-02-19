# Mail template generator
This package generates e-mail HTML based on src files (HTML template and SASS files).

It's using [Cerberus](https://github.com/TedGoas/Cerberus) for standarization.

Ease cration of your e-mail templates! Because it's a hell on earth...

## Features
- HTML compression
- SCSS compilation for different targets
- automatic inline css inclusion
- only one file is generated (ideal solution for e-mail)
- you can put HTML comments into template (they'll be removed)
- send yourself a test mail with template instantly

## Usage
Git clone and Install dependencies:

```js
npm install
```
**Please remember to change the name of config-example.json to config.json!**

Edit *src* files (scss and mail.html), *config.json* and run grunt in root directory. Check *pub* directory for generated template.

```
grunt
```

Or if you want to generate local preview version:

```
grunt preview
```
It will use local image paths relative to *mail.html* file.

## Send test mail with your template
After filling *config.json* and generating of a template, you can send yourself a test mail with it. Please use *testmail.php* using PHP. It will output all debug data to the browser.

**Warning!** Do not use preview files for production. SPAM filters may recognize your mailing as unwanted. 

That's all! Enjoy.

## Todo
- create a template with example content
- create template sections for different types of content
- ~~add subtemplate support~~