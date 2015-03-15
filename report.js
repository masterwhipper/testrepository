var cAge = 60;
var sAge = 67;


function generateReport() {
for (i = 0; i < 21; i++) { 
// Create an empty <tr> element and add it to the 1st position of the table:
var rTable = document.getElementById("incomeTable");
var row = rTable.insertRow(i);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var yrCell = row.insertCell(0);
var cAgeCell = row.insertCell(1);
var sAgeCell = row.insertCell(2);
var pretaxCell = row.insertCell(3);
var taxableCell = row.insertCell(4);
var aftertaxCell = row.insertCell(5);

// Add some text to the new cells:
yrCell.innerHTML = year + i;
cAgeCell.innerHTML = cAge + i;
sAgeCell.innerHTML = sAge + i;
pretaxCell.innerHTML = "test";
taxableCell.innerHTML = "test";
aftertaxCell.innerHTML = "test";
}
}