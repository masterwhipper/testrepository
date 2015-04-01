var cDeath = 77;
var sDeath;

var cAge;
var sAge;
/*
var yrCell = row.insertCell(0);
var cAgeCell = row.insertCell(1);
var sAgeCell = row.insertCell(2);
var pretaxCell = row.insertCell(3);
var taxableCell = row.insertCell(4);
var aftertaxCell = row.insertCell(5);
var rTable = document.getElementById("incomeTable");
*/

function cAgeCalc() {
	var bDay = new Date(c_dobYear + "-" + c_dobMonth + "-" + c_dobDay);
	var ageDifMs = Date.now() - bDay.getTime();
    var ageDate = new Date(ageDifMs);
    cAge = Math.abs(ageDate.getUTCFullYear() - 1970);
}

function sAgeCalc() {
	var bDay = new Date(s_dobYear + "-" + s_dobMonth + "-" + s_dobDay);
	var ageDifMs = Date.now() - bDay.getTime();
    var ageDate = new Date(ageDifMs);
	sAge = Math.abs(ageDate.getUTCFullYear() - 1970);
}

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
	cAgeCalc();
	sAgeCalc();
	var i;
	var j;
	var k;
	
 var table = document.getElementById("reportTable");
 var tbHead = document.getElementById("reportHead");

 var numColSpan = 3 + assets.length + incomeSources.length;
 var colSpanPer = Math.floor(90 / numColSpan);
 
 tbHead.innerHTML = "<colgroup><col width=\"4%\"><col class=\"colAge\" span=\"2\" width=\"3%\"><col class=\"colNumb\" span=\"" + numColSpan + "\" width=\"" + colSpanPer + "%\"></colgroup>";
 table.innerHTML = "<colgroup><col width=\"4%\"><col class=\"colAge\" span=\"2\" width=\"3%\"><col class=\"colNumb\" span=\"" + numColSpan + "\" width=\"" + colSpanPer + "%\"></colgroup>";
 
while(table.rows.length > 0) {
  table.deleteRow(0);
}
while(tbHead.rows.length > 0) {
  tbHead.deleteRow(0);
}

 var head = tbHead.insertRow(0);
	head.style.backgroundColor = "black";
	head.style.fontSize = "10pt";
	head.style.color = "white";
	head.style.height = "20px";
	head.style.maxHeight = "20px";
	
	head.insertCell(0).innerHTML = "<b>Year</b>";
	head.insertCell(1).innerHTML = "<b>Client<br/>Age</b>";
	head.insertCell(2).innerHTML = "<b>Spouse<br/>Age</b>";
	for (j=0; j<incomeSources.length; j++){
		head.insertCell(j + 3).innerHTML = incomeSources[j]["iDesc"];
	}
	for (k=0; k<assets.length; k++){
		head.insertCell(incomeSources.length + k + 3).innerHTML = assets[k]["aDesc"];
	}
	head.insertCell(assets.length + incomeSources.length + 3).innerHTML = "<b>Pre-Tax <br/>Income</b>";
	head.insertCell(assets.length + incomeSources.length + 4).innerHTML = "<b>Social <br/>Security Tax</b>";
	head.insertCell(assets.length + incomeSources.length + 5).innerHTML = "<b>AfterTax <br/>Income</b>";
	
 
	for (i=0;i<21;i++){
		var row = table.insertRow(i);
		row.insertCell(0).innerHTML = year + i,
		row.insertCell(1).innerHTML = cDead(i);
		row.insertCell(2).innerHTML = sAge + i;
			for (j=0; j<incomeSources.length; j++){
				row.insertCell(j + 3).innerHTML = incomeSources[j]["iMA"];
			}
			for (k=0; k<assets.length; k++){
				row.insertCell(incomeSources.length + k + 3).innerHTML = assets[k]["aMA"];
			}
		row.insertCell(incomeSources.length + assets.length + 3).innerHTML = "pretax";
		row.insertCell(incomeSources.length + assets.length + 4).innerHTML = "taxable";
		row.insertCell(incomeSources.length + assets.length + 5).innerHTML = "aftertax";
    }
}

