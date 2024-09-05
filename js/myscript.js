// jsReview-myscript.js

	// Function for loading elements when browser initially loads
function loadHeader() {

	//querySelector grab the first element found 
	const h3 = document.querySelector('h3');

	// Adding text with js
	h3.textContent = 'Testing'


	// Add Styles with js
	h3.style.display = 'flex'
	h3.style.justifyContent = 'center'

	// Use .querySelector to retrieve first 'h3' element and update including formatting


}
//-------------------------------------------------------------

// Complete functions based on button text in index.html
function gifImages() {

	const gif = document.querySelectorAll('img'); 
	let array = [];

	// probaly be better with ends with 
	gif.forEach(gif => {
		let list = gif.src.split(".");
		if (list.pop() == "gif") {
			array.push(gif);
		}
		

	})

	array.forEach(gif => {
		gif.style.border ="solid 1px black"
	})



}

function pngHideShowUsingDisplay() {
	const img = document.querySelectorAll('img')
	const array = []


	img.forEach(img => {
		if (img.src.endsWith(".png")) {
			array.push(img);
		}
	})


	array.forEach(img => {
		if (img.style.display == 'none') {
			img.style.display = 'inline-block'
		} else {
			img.style.display = 'none'
		}
	})


}

function pngHideShowUsingVisibility() {
	const img = document.querySelectorAll('img')
	const array = []


	img.forEach(img => {
		if (img.src.endsWith(".png")) {
			array.push(img);
		}
	})


	array.forEach(img => {
		if (img.style.visibility == 'hidden') {
			img.style.visibility = 'visible'
		} else {
			img.style.visibility = 'hidden'
		}
	})





}

function containsImgElement() {

	const div = document.querySelector('#paragraphs');

	const elements = div.querySelectorAll('*')

	let array = []
	console.log(elements)

	elements.forEach(element => {
		if (element.querySelector('img') != null) {
			array.push(element)

		}

	})



	array.forEach(img => {
		img.style.color = 'blue'
	})




}

function campusImages() {

	const div = document.querySelector('#output');

	const image = document.createElement('img');

	image.setAttribute('src', 'images/trafalgar.png');

	div.appendChild(image);


	/*
		NOTE: If ../images is used, it will work on localhost but BREAK when published
		REMEMBER: .js files included in <script> element in an HTML file are actually embedded
		in the HTML file so the location in .js file is actually from the calling HTML file.
		Try publishing using ./images and ../images to see difference
	*/
}
