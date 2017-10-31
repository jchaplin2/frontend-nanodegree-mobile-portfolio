#Portfolio Optimization Project

##Description
A pre-designed website that I optimized.

##Installation

	###Using git

		1. Click "Clone in Desktop" 
		2. Open git bash
		3. git clone the url from git bash.
		4. Open the folder.
		5. pen index.html on your preferred browser.

	###Using a zip file

		1. Click "Download ZIP" and unzip the file.
		2. Open the folder.
		3. Open index.html on your preferred browser.

##Demo
[Demo](https://jchaplin2.github.io/frontend-nanodegree-mobile-portfolio/)

##Optimizations

	###index.html
		1. inlined css
		2. usage of async for js that does not modify dom
		3. minify css/js/html assets
		4. usage of imagemin grunt plugin for images

	###pizza.html
		1. minify css/js/html assets
		2. usage of imagemin grunt plugin for images

	###main.js
		1. factored out loop variables for offsetWidth in changePizzaSizes and size that were being calc'd over and over.
		2. changed document.querySelectorAll to document.getElementsByClassName in the function changePizzaSizes.
		3. in updatePosotions function, factored out for loop for phase calculation.
		4. reduced number of pizzas created on init.

##Inspiration
	https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001