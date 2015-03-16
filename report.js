var cDeath = 77;
var sDeath;

var cAge = 60;
var sAge = 67;
/*
var yrCell = row.insertCell(0);
var cAgeCell = row.insertCell(1);
var sAgeCell = row.insertCell(2);
var pretaxCell = row.insertCell(3);
var taxableCell = row.insertCell(4);
var aftertaxCell = row.insertCell(5);
var rTable = document.getElementById("incomeTable");
*/

function cDead(i){
	if (cAge + i > cDeath){
	return "-";
	}
	else{
	return cAge + i;
	}
}
function sDead(i){
	if (sAge + i > sDeath){
	return "-";
	}
	else{
	return sAge + i;
	}
}


function generateReport() {
	for (var i=0;i<20;i++){
 var table = document.getElementById("incomeTable");
 var row = table.insertRow(i);
 var c1 = row.insertCell(0);
 var c2 = row.insertCell(1); 
 var c3 = row.insertCell(2);
 var c4 = row.insertCell(3);
 var c5 = row.insertCell(4); 
 var c6 = row.insertCell(5);

c1.innerHTML = year + i,
c2.innerHTML = cDead(i),
c3.innerHTML = sAge + i,
c4.innerHTML = "test",
c5.innerHTML = "test",
c6.innerHTML = "test";

    }
}
