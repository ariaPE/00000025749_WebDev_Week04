/**function input(){
	var angka;
		angka = prompt("Masukkan Angka : ");
}
*/

function check(){
		var angka;
		angka = prompt("Masukkan Angka : ");
		//while (true){
			if (angka % 2 == 0){ document.getElementById('riwayat').innerHTML += "<p style='Color: red;'> " + angka + "- Genap </p> ";
			} else{	 document.getElementById('riwayat').innerHTML += "<p style='Color: blue;'> " + angka + "- Ganjil </p> ";
			}
		//}
}

function atribut(){
	document.getElementById("tombol1").style.background = "#525252" ;
}

function kelas(){
		document.getElementById("tombol2").className = "tombolgrey" ;
}