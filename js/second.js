// jsReview-second.js

// Complete functions based on button text in second.html
function startsWithEx() {
	const div = document.querySelector('#sections');
	const sections = div.querySelectorAll('section');
	

	sections.forEach(section => {
		if (section.title.startsWith('Text')) {
			section.style.color = 'red';
			section.style.fontSize = '1.25em';
		}
	})


	

	



}

function containsEx () {
	const div = document.querySelector('#sections');
	const sections = div.querySelectorAll('section');
	

	sections.forEach(section => {
		if (section.innerText.includes('color')) {
			section.style.fontStyle = 'italic';
			section.style.fontSize = '1.25em';

		}
	})



}

function hasEx() {
	const div = document.querySelector('#sections');
	const sections = div.querySelectorAll('section');
	
	sections.forEach(section => {
		let p = section.querySelector('p');
		console.log(p.innerText)
		if (p.innerText.includes('para3')) {
			section.style.textDecoration = 'underline';
			section.style.fontSize = '1.25em';

		}
	})
	



	// Notice grow is included for last because of transition
	// To update entire section (not just paragraph)
}

//---------------------------------------------------------
// Create functions to complete tasks stated in sections in second.html

function clickMe() {


}

function fadeOut(element) {
	let op = 1;  // initial opacity
	let timer = setInterval(function () {
			if (op <= 0.1){
					clearInterval(timer);
					element.style.display = 'none';
			}
			element.style.opacity = op;
			element.style.filter = 'alpha(opacity=' + op * 100 + ")";
			op -= op * 0.1;
	}, 50); 
}

function fadeOutOnly(elem) {
	// elem is passed from function argument so no # or ""
	// .querySelector() will not work in this instance


}

function growMe(elem) {
	// elem is passed from function argument so no # or ""
	// .querySelector() will not work in this instance

	// see CSS for transitions

}


