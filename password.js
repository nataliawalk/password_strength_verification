function weryfikuj() {	
	let haslo = document.getElementById("haslo").value;
	let length = haslo.length;
	
	if(haslo == "") {
		document.getElementById('wynik').innerHTML="Wpisz hasło";
		document.getElementById('wynik').style.color="red";
	}		
	else if (length>=7 && jestCyfra(haslo)) {
		document.getElementById('wynik').innerHTML='<span style="color:green;">Hasło silne</span>';		
	}	
	else if(length>3 && length<=6 && jestCyfra(haslo)) {
		document.getElementById('wynik').innerHTML='<span style="color:orange;">Hasło średnie</span>';
	}			
	else {
		document.getElementById('wynik').innerHTML='<span style="color:red;">Hasło słabe</span>';
	}	
}

function jestCyfra(x) {	
	let length = x.length;	
	for(i=0; i<length; i++) {		
		if(isNaN(x.charAt(i))) {
			continue; 
		}
		else {
			return true;
		}
		return false;
	}
}		



