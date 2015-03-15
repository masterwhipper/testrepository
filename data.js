//GLOBAL Thingies
var date = new Date();
var year = date.getFullYear();

var c_firstName, c_lastName;
var c_dobMonth, c_dobDay, c_dobYear;
var c_retirementAge;
var c_comments;
var c_age;

var s_firstName, s_lastName;
var s_dobMonth, s_dobDay, s_dobYear;
var s_retirementAge;
var s_comments;
var s_age;

var a_firstName, a_lastName;
var a_dobMonth, a_dobDay, a_dobYear;
var a_retirementAge;
var a_comments;
		


function saveClientData() {
	queryClientInfo();
    var file = "Client Data";
    window.open('data:txt/file;charset=utf-8,' + JSON.stringify(getClientJSON()));
}

function queryClientInfo() {
    //client
    c_firstName = document.getElementByID("cFName").value;
    c_lastName = document.getElementByID("cLName").value;
    c_dobMonth = document.getElementByID("cMonth").value;
    c_dobDay = document.getElementByID("cDay").value;
    c_dobYear = document.getElementByID("cYear").value;
    c_comments = document.getElementByID("cComment").value;

    //spouse
    s_firstName = document.getElementByID("sFName").value;
    s_lastName = document.getElementByID("sLName").value;
    s_dobMonth = document.getElementByID("sMonth").value;
    s_dobDay = document.getElementByID("sDay").value;
    s_dobYear = document.getElementByID("sYear").value;
    s_comments = document.getElementByID("sComment").value;
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
    //ASSET'S INFO
    json["a_firstName"] = a_firstName;
    json["a_lastName"] = a_lastName;
    json["a_dobMonth"] = a_dobMonth;
    json["a_dobDay"] = a_dobDay;
    json["a_dobYear"] = a_dobYear;
    json["a_retirementAge"] = a_retirementAge;
    json["a_comments"] = a_comments;
    return json;
}
