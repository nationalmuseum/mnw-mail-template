# Mail template generator
This package generates HTML markup for e-mail based on src files (HTML template and SASS files).

It's using [Cerberus](https://github.com/TedGoas/Cerberus) for standarization.

You can ease cration of your e-mail templates this way because it's a hell on earth...

## Features
- HTML compression
- SCSS compilation for different targets
- automatic inline css inclusion
- only one file is generated (ideal solution for e-mail)
- you can put HTML comments into template (they'll be removed)
- send yourself a test mail with template instantly (PHP nedded)
- configurable width, fonts and colors

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

Or if you want to generate a local preview version:

```
grunt preview
```

It will generate *mail.html* in pub directory. 

Paths to images will be relative to *mail.html* file.

### How to edit?

Use include in *mail.html* to add different views to your mail. Edit views if nedded.

## Send test mail with your template
After filling *config.json* and generating a template, you can send yourself a test mail with it. Please use *testmail.php* using PHP. It will output all debug data to the browser or console.

**Warning!** Do not use preview files for production. SPAM filters may recognize your mailing as unwanted! 

That's all! Enjoy.

## Todo
- ~~create a template with example content~~
- ~~create template sections for different types of content~~
- ~~add subtemplate support~~