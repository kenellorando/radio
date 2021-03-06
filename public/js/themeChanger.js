// themeButton click handling
$(document).ready(function() {
	$('.themeButton').on('click', function() {
		var themeChoice = $(this).attr('id');
		themeChanger(themeChoice);
	});
});
// Change theme
function themeChanger(themeChoice) {
	// theme object is from themeMetadata.js
	var targetTheme = theme[themeChoice];
	document.getElementById("themeStylesheet").href = targetTheme.css;
	localStorage.setItem('themeKey', targetTheme.key);
	colorButton(themeChoice);
}
// Theme button functionality
function colorButton(themeChoice) {
	// Change all theme buttons colors to the inactive style
	var buttons = document.getElementsByClassName("themeButton");
	for (var i = 0, il = buttons.length; i < il; i++) {
		buttons[i].classList.remove("activeTheme");
		buttons[i].classList.add("inactiveTheme");
	}
	// Override the selected theme button the active style
	document.getElementById(themeChoice).classList.remove("inactiveTheme");
	document.getElementById(themeChoice).classList.add("activeTheme");
}
// Retrieve themeKey in localStoprage
$(document).ready(function() {
	var themeKey = localStorage.getItem('themeKey');
	if (themeKey === null) {
		themeChanger("Default");
	} else {
		themeChanger(themeKey);
	}
});