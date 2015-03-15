

function generateReport() {
var i = 0;
// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(0);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var yrCell = row.insertCell(0);
var cAgeCell = row.insertCell(1);
var sAgeCell = row.insertCell(1);
var pretaxCell = row.insertCell(1);
var taxableCell = row.insertCell(1);
var aftertaxCell = row.insertCell(1);

// Add some text to the new cells:
yrCell.innerHTML = year + i;
cAgeCell.innerHTML = cAge + i;
sAgeCell.innerHTML = sAge + i;
pretaxCell.innerHTML = "test";
taxableCell.innerHTML = "test";
aftertaxCell.innerHTML = "test";
}