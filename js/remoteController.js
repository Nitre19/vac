var socket = io.connect('http://127.0.0.1:8081', {'forceNew': true});

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
	switch(data){
		case "about":
		console.log(data);
			var button = document.getElementById(data);
			button.click();
		break;
	}
}