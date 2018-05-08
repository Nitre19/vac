
function pedirAccion(){
	setTimeout(function(){
		var urlServer = "https://php-xvidalllicasmx738832.codeanyapp.com/?order=consultar";
		conexion3=new XMLHttpRequest();
		conexion3.onreadystatechange = procesar;
		conexion3.open("GET", urlServer, true);
		conexion3.send();
			setTimeout(function(){
				pedirAccion();
			}, 1000);
	}, 1000);
}

function procesar(){
    console.log(conexion3.responseText);
	document.getElementById(conexion3.responseText).click();
}