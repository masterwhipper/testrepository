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

function saveClientData(element) {
	queryClientInfo();
	var json = JSON.stringify(getClientJSON(), null, "\t");
	var blob = new Blob([json], {type: "application/json"});
	var url = URL.createObjectURL(blob);
    element.download = "Client Data.json";
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
    return json;
}
