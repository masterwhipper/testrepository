$(document).ready(function() {
	$("#aNew").click(function(){
		clearAssetBoxes();
		assetNew = true;
	});
	
	$("#aSave").click(function(){
		if(incomeNew){
			
		}else currentAssetSource = assets.length;
		assetNew = false;
	});

	$("#aEdit").click(function(){
		
	});
	
	$("#iNew").click(function(){
		clearIncomeBoxes();
		incomeNew = true;
	});

	$("#iSave").click(function(){
		incomeSources.push({
			"iOwner":document.getElementById("iOwner").value,
			"iDesc":document.getElementById("iDesc").value,
			"iSYear":document.getElementById("iSYear").value,
			"iEYear":document.getElementById("iCOLAyn").value,
			"iCOLAyn":document.getElementById("iCOLAyn").value,
			"iCOLAper":document.getElementById("iCOLAper").value,
			"iSByn":document.getElementById("iSByn").value = "yes",
			"iSBper":document.getElementById("iSBper").value
		});
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