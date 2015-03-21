function addIncum(object) {
 var table = document.getElementById("assetTable");
 var row = table.insertRow(incomeSources.length - 1);
 var c1 = row.insertCell(0);
 var c2 = row.insertCell(1); 
 var c3 = row.insertCell(2);
 var c4 = row.insertCell(3);

 var owner = object["aOwner"];
 var description = object["aDesc"];
 var monthly = object["aMA"];
 
c1.innerHTML = owner,
c2.innerHTML = description,
c3.innerHTML = monthly,
c4.innerHTML = monthly * 12;
}

/*function addIncum() {
 alert("bitchtits");
 var table = document.getElementById("assetTable");
 var row = table.insertRow(0);
 var c1 = row.insertCell(0);
 var c2 = row.insertCell(1); 
 var c3 = row.insertCell(2);
 var c4 = row.insertCell(3);

 var owner = "tits";
 var description = "boobs";
 var monthly = 12;
 
c1.innerHTML = owner,
c2.innerHTML = description,
c3.innerHTML = monthly,
c4.innerHTML = monthly * 12;
}*/

function addAsset(owner, description, e) {
 var table = document.getElementById("incumTable");
 var row = table.insertRow(i);
 var c1 = row.insertCell(0);
 var c2 = row.insertCell(1); 
 var c3 = row.insertCell(2);

c1.innerHTML = owner,
c2.innerHTML = description,
c3.innerHTML = e;
}

getCurrentAsset()
getCurrentIncomeSource()