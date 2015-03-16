$(document).ready(function() {
	$("#aNew").click(function(){
		assets.push({
			"aOwner":"client",
			"aDesc":"",
			"aMA":"",
			"aDef":"",
			"aBonus":"yes",
			"aBPercent":"",
			"aFeat":"simple",
			"aRate":"",
			"aColayn":"yes",
			"aCOLAper":"",
			"aSByn":"joint",
			"aSBper":""
		});
		clearAssetBoxes();
	});
	
	$("#aSave").click(function(){
		
	});

	$("#aEdit").click(function(){
		
	});
	
	$("#iNew").click(function(){
		incomeSources.push({
			"iOwner":"client",
			"iDesc":"",
			"iSYear":"",
			"iEYear":"",
			"iCOLAyn":"yes",
			"iCOLAper":"",
			"iSByn":"yes",
			"iSBper":"joint"
		});
		clearIncomeBoxes();
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