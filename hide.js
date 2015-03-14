function save() {
            var file = "tits";

            window.open('data:txt/file;charset=utf-8,' + escape(file));
        }

        var sButton = document.getElementById('saveInfo');
        sButton.addEventListener('click', save);
		
		
var table = document.getElementById("myTable");

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
yrCell.innerHTML = "i";
cAgeCell.innerHTML = "NEW CELL2";
sAgeCell.innerHTML = "NEW CELL1";
pretaxCell.innerHTML = "NEW CELL2";
taxableCell.innerHTML = "NEW CELL1";
aftertaxCell.innerHTML = "NEW CELL2";