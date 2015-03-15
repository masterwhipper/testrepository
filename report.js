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
function generateReport() {
	for (var j=0;j<10;j++){
 var table = document.getElementById("incomeTable");
 var row = table.insertRow(j);
 var cell1 = row.insertCell(0);
 var cell2 = row.insertCell(1); 
 var cell3 = row.insertCell(2);

cell1.innerHTML = "test",
cell2.innerHTML = "test",
cell3.innerHTML = "test";
    }
}
