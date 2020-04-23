function mandar() {
		// body...
		var puls = false;
		var op = document.formulario.eleccion;
		var elegido = -1;
		

		for (var i = 0; i < op.length; i++) {
			if(op[i].checked==true){
				puls = true
				elegido = i
			}
		}
		if (puls == true) {
			miOpcion = op[elegido].value
	alert(nom+", el idioma elegido es: "+miOpcion+"\n Gracias por elegir.")
		} else {
			alert(" "+"no se ha elegido ninguna opcion.\n Elige una opcion, por favor para que el formulario sea enviado")
			return false
		}
	}