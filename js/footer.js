// JavaScript Document
function datetime() {
	var date = new Date();
	var text = date.getYear() + "/" +
		(date.getMonth() + 1) + "/" +
		date.getDay() + " | " +
		date.getHours() + ":" +
		date.getMinutes() + ":" +
		date.getSeconds();
	document.getElementById("footer").innerHTML = text;
	console.log(text);
}
window.onload = datetime;

function yee() {
	var text = document.getElementById("yee").innerHTML;
	console.log(text)
	document.getElementById("yee").innerHTML = text + "e";
}