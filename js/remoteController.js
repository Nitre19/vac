var socket = io.connect('http://192.168.1.131:8081', {'forceNew': true});

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