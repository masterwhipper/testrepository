$(document).ready(function() {
	$(".ui-button-icon-only").hide();
	
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
			assetNew = false;
		}else{
			assets[currentAsset] = json;
		}
		syncAssetTable();
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
			incomeNew = false;
		}else{
			incomeSources[currentIncomeSource] = json;
		}
		syncISourceTable();
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
		var html = "<select id='assetSelector' style='width: 100%;'>";
		for(var i = 0; i < assets.length; i++){
			html += "<option value='" + i + "'>" + assets[i]["aDesc"] + "</option>";
		}
		html += "</select>";
		html += "<button type='button' id='assetSelectOpen' style:'float: right;'>Open</button>";
		html += "<button type='button' id='assetSelectCancel' style:'float: right;'>Cancel</button>";
		
		document.getElementById("editAssetDialog").innerHTML = html;
		$("#assetSelectOpen").click(function(){
			$("#editAssetDialog").dialog("close");
			currentAsset = document.getElementById("assetSelector").value;
			syncAssetInput();
			assetNew = false;
		});		
		
		$("#assetSelectCancel").click(function(){
			$("#editAssetDialog").dialog("close");
		});
	});
	
	$("#editICSourcesDialog").on("dialogopen", function(event, ui){
		var html = "<select id='isourceSelector' style='width: 100%;'>";
		for(var i = 0; i < incomeSources.length; i++){
			html += "<option value='" + i + "'>" + incomeSources[i]["iDesc"] + "</option>";
		}
		html += "</select>";
		html += "<button type='button' id='isourceSelectOpen' style:'float: right;'>Open</button>";
		html += "<button type='button' id='isourceSelectCancel' style:'float: right;'>Cancel</button>";
		
		document.getElementById("editICSourcesDialog").innerHTML = html;
		$("#isourceSelectOpen").click(function(){
			$("#editICSourcesDialog").dialog("close");
			currentIncomeSource = document.getElementById("isourceSelector").value;
			syncISourceInput();
			incomeNew = false;
		});
		
		$("#isourceSelectCancel").click(function(){
			$("#editICSourcesDialog").dialog("close");
		});
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
		
		$("#sDay").on('input', function(){
			s_dobDay = document.getElementById("sDay").value;
			sAgeCalc();
			document.getElementById("sAge").innerHTML = sAge;
		});
		$("#sYear").on('input', function(){
			s_dobYear = document.getElementById("sYear").value;
			sAgeCalc();
			document.getElementById("sAge").innerHTML = sAge;
		});
		$("#sMonth").on('input', function(){
			s_dobMonth = document.getElementById("sMonth").value
			sAgeCalc();
			document.getElementById("sAge").innerHTML = sAge;
		});
		
		$("#cDay").on('input', function(){
			c_dobDay = document.getElementById("cDay").value;
			cAgeCalc();
			document.getElementById("cAge").innerHTML = cAge;
		});
		$("#cYear").on('input', function(){
			c_dobYear = document.getElementById("cYear").value;
			cAgeCalc();
			document.getElementById("cAge").innerHTML = cAge;
		});
		$("#cMonth").on('input', function(){
			c_dobMonth = document.getElementById("cMonth").value
			cAgeCalc();
			document.getElementById("cAge").innerHTML = cAge;
		});
		
		
	});