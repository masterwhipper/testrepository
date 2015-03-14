function save() {
            var file = "tits";

            window.open('data:txt/file;charset=utf-8,' + escape(file));
        }

        var sButton = document.getElementById('saveInfo');
        sButton.addEventListener('click', save);
		
		
var table = document.getElementById("myTable");