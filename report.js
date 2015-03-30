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

var iLength = 1;
var aLength = 1;

function generateReport() {
	var i;
	var j;
	var k;
	
 var table = document.getElementById("reportTable");
 var head = table.insertRow(0);
	head.style.backgroundColor = "black";
	head.style.fontSize = "10pt";
	head.style.color = "white";
	head.style.height = "20px";
	head.style.maxHeight = "20px";
	
	head.insertCell(0).innerHTML = "<b>Year</b>";
	head.insertCell(0).style.width = "61px";
	head.insertCell(1).innerHTML = "<b>Client<br/>Age</b>";
	head.insertCell(1).style.width = "40px";
	head.insertCell(2).innerHTML = "<b>Spouse<br/>Age</b>";
	head.insertCell(2).style.width = "40px";
	head.insertCell(3).innerHTML = "<b>Pre-Tax <br/>Income</b>";
	head.insertCell(3).style.width = "300px";
	head.insertCell(3).innerHTML = "<b>Pre-Tax <br/>Income</b>";
	head.insertCell(3).style.width = "300px";
	head.insertCell(3).innerHTML = "<b>Pre-Tax <br/>Income</b>";
	head.insertCell(3).style.width = "300px";
	
 
	for (i=0;i<21;i++){
		var row = table.insertRow(i+1);
		row.insertCell(0).innerHTML = year + i,
		row.insertCell(1).innerHTML = cDead(i),
		row.insertCell(2).innerHTML = sAge + i;
			for (j=0; j<iLength; j++){
				row.insertCell(j + 3).innerHTML = incomeSources[j]["iMA"];
			}
			for (k=0; k<aLength; k++){
				row.insertCell(iLength + k + 3).innerHTML = assets[k]["aMA"];
			}
		row.insertCell(iLength + aLength + 3).innerHTML = "pretax";
		row.insertCell(iLength + aLength + 4).innerHTML = "taxable";
		row.insertCell(iLength + aLength + 5).innerHTML = "aftertax";
    }
}

