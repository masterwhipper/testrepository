$(document).ready(function() {
	$("#aNew").click(function(){
	
	alert("Assets New!");
		assets.push({
			"aOwner":"",
			"aDesc":"",
			"aSYear":"",
			"aEYear":"",
			"aCOLAyn":"",
			"aCOLAper":"",
			"aSByn":"",
			"aSBper":""
		});
		clearAssetBoxes();
	});

	$("#aSave").click(function(){
		
	});

	$("#aEdit").click(function(){
		
	});

	//INCOME

	$("#iNew").click(function(){
		assets.push({
			"iOwner":"",
			"iDesc":"",
			"iSYear":"",
			"iEYear":"",
			"iCOLAyn":"",
			"iCOLAper":"",
			"iSByn":"",
			"iSBper":""
		});
	});

	$("#iSave").click(function(){
		
	});

	$("#iEdit").click(function(){
		
	});

	$("input[type=file]").on('change', function(){
		loadClientData(this.files);
	});

    $("#tabAssets").hide();
    $("#tabReport").hide();
	
	$("#buttonInfo").click(function() {
        $("#tabInfo").show();
        $("#tabAssets").hide();
        $("#tabReport").hide();
    });
	
    $("#buttonReport").click(function() {
		$("#tabInfo").hide();
        $("#tabAssets").hide();
        $("#tabReport").show();
    });
    $("#buttonSources").click(function() {
		$("#tabInfo").hide();
        $("#tabAssets").show();
        $("#tabReport").hide();
    });
});