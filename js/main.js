var xdr = new XMLHttpRequest();

xdr.onload = function() {
	alert(xdr.responseText);
}

xdr.open("GET", "http://koni.io/widget.php");
xdr.send();
