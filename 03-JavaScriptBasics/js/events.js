let button = document.querySelector("button");
let buttonClicks = 0;

button.addEventListener('click', function(event) {
	buttonClicks++;
	console.log("you clicked the button " + buttonClicks + " times");
});