function clearIncum(){
	var table = document.getElementById("assetTable");
}

function addIncum(object) {
	var table = document.getElementById("assetTable");
	var row = table.insertRow(incomeSources.length - 1);
	var c1 = row.insertCell(0);
	var c2 = row.insertCell(1); 
	var c3 = row.insertCell(2);
	var c4 = row.insertCell(3);
	 
	var owner = object["iOwner"];
	var description = object["iDesc"];
	var monthly = object["iMA"];
 
	c1.innerHTML = owner,
	c2.innerHTML = description,
	c3.innerHTML = monthly,
	c4.innerHTML = monthly * 12;
}

function addAsset(object) {
	var table = document.getElementById("incumTable");
	var row = table.insertRow(assets.length - 1);
	var c1 = row.insertCell(0);
	var c2 = row.insertCell(1); 
	var c3 = row.insertCell(2);
	
	var owner = object["aOwner"];
	var description = object["aDesc"];
	var e = object["aMA"];
	
	c1.innerHTML = owner,
	c2.innerHTML = description,
	c3.innerHTML = e;
}