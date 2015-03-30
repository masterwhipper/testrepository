$(document).ready(function() {
	$("#aNew").click(function(){
		clearAssetBoxes();
		assetNew = true;
	});
	
	$("#aSave").click(function(){
		var json = {
				"aOwner":document.getElementById("aOwner").value,
				"aDesc":document.getElementById("aDesc").value,
				"aMA":document.getElementById("aMA").value,
				"aDef":document.getElementById("aDef").value,
				"aBonus":document.getElementById("aBonus").value,
				"aBPercent":document.getElementById("aBPercent").value,
				"aFeat":document.getElementById("aFeat").value,
				"aRate":document.getElementById("aRate").value,
				"aCOLAyn":document.getElementById("aCOLAyn").value,
				"aCOLAper":document.getElementById("aCOLAper").value,
				"aSByn":document.getElementById("aSByn").value,
				"aSBper":document.getElementById("aSBper").value
			};
		if(assetNew){
			currentAsset = assets.length;
			assets.push(json);
			addAsset(json);
			assetNew = false;
		}else{
			assets[currentAsset] = json;
		}
	});

	$("#aEdit").click(function(){
		$("#editAssetDialog").dialog();
	});
	
	$("#iNew").click(function(){
		clearIncomeBoxes();
		incomeNew = true;
	});

	$("#iSave").click(function(){
		var json = {
				"iOwner":document.getElementById("iOwner").value,
				"iDesc":document.getElementById("iDesc").value,
				"iSYear":document.getElementById("iSYear").value,
				"iEYear":document.getElementById("iCOLAyn").value,
				"iCOLAyn":document.getElementById("iCOLAyn").value,
				"iCOLAper":document.getElementById("iCOLAper").value,
				"iSByn":document.getElementById("iSByn").value,
				"iSBper":document.getElementById("iSBper").value,
				"iMA":document.getElementById("iMA").value
			};
		if(incomeNew){
			currentIncomeSource = incomeSources.length;
			incomeSources.push(json);
			addIncum(json);
			incomeNew = false;
		}else{
			incomeSources[currentIncomeSource] = json;
		}
	});

	$("#iEdit").click(function(){
		$("#editICSourcesDialog").dialog();
	});

	$("input[type=file]").on('change', function(){
		loadClientData(this.files);
	});

    $("#tabAssets").hide();
    $("#tabReport").hide();
	
	
	$("#editAssetDialog").on("dialogopen", function(event, ui){
		
		var newOptions = {};
		for(var i = 0; i < assets.length; i++){
			newOptions[assets[i]["aDesc"]] = i;
		}
		
		alert(JSON.stringify(newOptions));
		
		var sBox = $("#assetSelectBox");
		sBox.empty();
		$.each(newOptions, function(value,key) {
			sbox.append($("<option></option>")
				.attr("value", value).text(key));
		});
	});
	
	$("#editICSourcesDialog").on("dialogopen", function(event, ui){
	
	});
	
	$("#editAssetDialog").hide();
	$("#editICSourcesDialog").hide();
	
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