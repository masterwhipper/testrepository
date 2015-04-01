var date = new Date();
var year = date.getFullYear();

var c_firstName;
var c_lastName;
var c_dobMonth;
var c_dobDay;
var c_dobYear;
var c_retirementAge;
var c_comments;
var c_age;

var s_firstName
var s_lastName;
var s_dobMonth;
var s_dobDay;
var s_dobYear;
var s_retirementAge;
var s_comments;
var s_age;

var incomeSources = [];
var assets = [];

var incomeNew = true, assetNew = true;
var currentIncomeSource = 0, currentAsset = 0;

function getCurrentIncomeSource(){
	return incomeSources[currentIncomeSource];
}

function getCurrentAsset(){
	return assets[currentAsset];
}

function clearAssetBoxes(){
	document.getElementById("aOwner").value = "Client";
	document.getElementById("aDesc").value = "";
	document.getElementById("aMA").value = "";
	document.getElementById("aDef").value = "";
	document.getElementById("aBonus").value = "yes";
	document.getElementById("aBPercent").value = "";
	document.getElementById("aFeat").value = "simple";
	document.getElementById("aRate").value = "";
	document.getElementById("aCOLAyn").value = "yes";
	document.getElementById("aCOLAper").value = "";
	document.getElementById("aSByn").value = "joint";
	document.getElementById("aSBper").value = "";
}

function clearIncomeBoxes(){
	document.getElementById("iOwner").value = "Client";
	document.getElementById("iDesc").value = "";
	document.getElementById("iSYear").value = "";
	document.getElementById("iEYear").value = "";
	document.getElementById("iCOLAyn").value = "yes";
	document.getElementById("iCOLAper").value = "";
	document.getElementById("iSByn").value = "yes";
	document.getElementById("iSBper").value = "";
	document.getElementById("iMA").value = "";
}

function loadClientData(files){
	var file = files[0];
	var reader = new FileReader();
	
	reader.onload = function(event){
		var contents = JSON.parse(reader.result);
		
		//client
		document.getElementById("cFName").value = contents["c_firstName"];
		document.getElementById("cLName").value = contents["c_lastName"];
		document.getElementById("cMonth").value = contents["c_dobMonth"];
		document.getElementById("cDay").value = contents["c_dobDay"];
		document.getElementById("cYear").value = contents["c_dobYear"];
		document.getElementById("cComment").value = contents["c_comments"];

		//spouse
		document.getElementById("sFName").value = contents["s_firstName"];
		document.getElementById("sLName").value = contents["s_lastName"];
		document.getElementById("sMonth").value = contents["s_dobMonth"];
		document.getElementById("sDay").value = contents["s_dobDay"];
		document.getElementById("sYear").value = contents["s_dobYear"];
		document.getElementById("sComment").value = contents["s_comments"];
		
		//misc
		incomeSources = contents["incomeSources"];
		assets = contents["assets"];
		
		for(var i = 0; i < incomeSources.length; i++){
			addIncum(incomeSources[i]);
		}
		for(var i = 0; i < incomeSources.length; i++){
			addAsset(assets[i]);
		}
	}
	
	reader.readAsText(file, "UTF-8");
	queryClientInfo();
}

function saveClientData(element) {
	queryClientInfo();
	var json = JSON.stringify(getClientJSON(), null, "\t");
	var blob = new Blob([json], {type: "application/json"});
	var url = URL.createObjectURL(blob);
    element.download = c_firstName.concat(".json");
	element.href = url;
}

function queryClientInfo() {
    //client
    c_firstName = document.getElementById("cFName").value;
    c_lastName = document.getElementById("cLName").value;
    c_dobMonth = document.getElementById("cMonth").value;
    c_dobDay = document.getElementById("cDay").value;
    c_dobYear = document.getElementById("cYear").value;
    c_comments = document.getElementById("cComment").value;

    //spouse
    s_firstName = document.getElementById("sFName").value;
    s_lastName = document.getElementById("sLName").value;
    s_dobMonth = document.getElementById("sMonth").value;
    s_dobDay = document.getElementById("sDay").value;
    s_dobYear = document.getElementById("sYear").value;
    s_comments = document.getElementById("sComment").value;
}
		
function getClientJSON() {
    var json = {};
    //CLIENT'S INFO
    json["c_firstName"] = c_firstName;
    json["c_lastName"] = c_lastName;
    json["c_dobMonth"] = c_dobMonth;
    json["c_dobDay"] = c_dobDay;
    json["c_dobYear"] = c_dobYear;
    json["c_retirementAge"] = c_retirementAge;
    json["c_comments"] = c_comments;
    //SPOUSE INFO
    json["s_firstName"] = s_firstName;
    json["s_lastName"] = s_lastName;
    json["s_dobMonth"] = s_dobMonth;
    json["s_dobDay"] = s_dobDay;
    json["s_dobYear"] = s_dobYear;
    json["s_retirementAge"] = s_retirementAge;
    json["s_comments"] = s_comments;
	
	json["incomeSources"] = incomeSources;
	json["assets"] = assets;
    return json;
}
