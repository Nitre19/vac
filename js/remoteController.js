var socket = io.connect('https://voice-car.firebaseapp.com:8081', {'forceNew': true});

socket.on('command', function(data){
	console.log(data);
	doAction(data);
});

function doAction(data){
/*	var command; 
	command = data.map(function(elem, index){
		return ("${elem.command}");
	}).join(" ");
*/
console.log(data);
	document.getElementById(data).click();
}