startpoint
==========

web app build with angular using gulp.js

Install
-------

You have to have node, bower and brew installed

Run
---

Go to the unpacked directory and run:

```
brew install libpng
npm install
bower install
gulp
```

Directory
---------

After running gulp, directory with build files are made. It minify and concat the js and css files from **app/css/** and **app/js/** to **build/** directory.

All the **app/libs** files are moved to build.

All images from **app/img** are minified and stored to **build/** directory.

All the html files in **app/** directory are minified and copied to **build/** directory.
