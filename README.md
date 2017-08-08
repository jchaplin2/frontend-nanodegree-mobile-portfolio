Running this project

How to Run this project

	Using git

	Click "Clone in Desktop" 
	Open git bash
	git clone the url from git bash.
	Open the folder.
	Open index.html on your preferred browser.

	Using a zip file

	Click "Download ZIP" and unzip the file.
	Open the folder.
	Open index.html on your preferred browser.

Optimizations

	index.html
		-inlined css
		-usage of async for js that does not modify dom
		-minify css/js/html assets
		-usage of imagemin grunt plugin for images

	pizza.html
		-minify css/js/html assets
		-usage of imagemin grunt plugin for images

	main.js
		-factored out loop variables for offsetWidth in changePizzaSizes and size that were being calc'd over and over.
		-changed document.querySelectorAll to document.getElementsByClassName in the function changePizzaSizes.
		-in updatePosotions function, factored out for loop for phase calculation.
		-reduced number of pizzas created on init.