$(document).ready(function() {
            $("#tabAssets").hide();
            $("#tabReport").hide();

            $("#buttonInfo").click(function() {
                $("#tabInfo").show();
                $("#tabAssets").hide();
                $("#tabReport").hide();
                requestUpload("test.json");
                alert("DEBUG");
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