var socket = io.connect('http://37.15.98.56:8081', {'forceNew': true});

socket.on('command', function(data){
	console.log(data);
	doAction(data);
});

function doAction(data){
	var button;
	switch(data){
		case "about":
			button = document.getElementById('about');
		break;
	}
	button.click();
	
}