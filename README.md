# Mail template generator
This package generates e-mail HTML based on src files (HTML template and SASS files).

It simply eases cration of e-mail templates.

## Features
- HTML compression
- SCSS compilation for different targets
- automatic inline css inclusion
- only one file is generated (ideal solution for e-mail)
- you can put HTML comments into template (they'll be removed)

## Usage
Git clone and Install dependencies:

```js
npm install
```
Edit *src* files (scss and mail.html), *config.json* and run grunt in root directory. Check *pub* directory for generated template.

```
grunt
```

Or if you want to generate local preview version:

```
grunt preview
```
It will use local image paths relative to *mail.html* file.

**Warning!** Do not use preview files for production. SPAM filters may recognize your mailing as unwanted. 

That's all! Enjoy.

## Todo
- create template with example content
- create template sections for different types of content
- add subtemplate support