startpoint
==========

web app build with angular using gulp.js


##Install

You have to have node and brew installed

##Run

Go to the unpacked directory and run:

	brew install libpng
	sudo npm install
	bower install
	gulp


##Directory

After running gulp, directory with build files are made.
It minify and concat the js and css files from **app/style/** and **app/script/** to **build/** directory.
It ignores any ***.min.css** and ***min.js** files from **app/** directory.

If there is any **app.scss** (sass file) then it makes css files in **app/style/compiled-sass/app.css** and include them in the main css file on **build/** directory.

All the **app/lib** files are moved to build.

All images from **app/img** are minified and stored to **build/** directory.

All the html files in **app/** directory are minified and copied to **build/** directory.

##gulp watch

Use **gulp watch** to watch for changes in app directory

