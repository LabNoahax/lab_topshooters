

function showScoreboard(){
	var scoreboard = document.getElementById("scoreboard");
	if (scoreboard.style.display === "none"){
		scoreboard.style.display = "block";
	}else{
		scoreboard.style.display = "block";
	}
}

var countDecimals = function (value) {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0; 
}

window.onload = function(e) {
	showScoreboard();
	window.addEventListener('message', function(event) {
		$("#scoreboard").css("visibility","visible");
		
		if (event.data.score == true ){
			var table1 = event.data.scoreboard;

			let tableBody = this.document.getElementById("scoreTable");
			tableBody.innerHTML = "<tr><th>No</th><th>Name</th><th>Kills</th></tr>";
			var itemsShowed = 0;
			var i;
			var substract = 0;
			var counter = 4;


			table1.sort(function(a, b) {
			if (a.kills == b.kills){
				return a.kills == b.kills
			}
            });

			for (i = 0; i < table1.length; i++) {
				if (table1[i] != undefined){
					if (table1[i].kills >= 0){
						itemsShowed++;
						if ((i+1-substract) == 1){
							$("#scoreTable").append(`<tr class="first"><th class="position first">1</th><th class="mafia first">`+table1[i].name.toUpperCase()+`</th><th class="xp first">`+table1[i].kills+`</th></tr>`);
						} else if ((i+1-substract) == 2){
							$("#scoreTable").append(`<tr class="second"><th class="position second">2</th><th class="mafia second">`+table1[i].name.toUpperCase()+`</th><th class="xp second">`+table1[i].kills+`</th></tr>`);
						}else if ((i+1-substract) == 3){
							$("#scoreTable").append(`<tr class="third"><th class="position third">3</th><th class="mafia third">`+table1[i].name.toUpperCase()+`</th><th class="xp third">`+table1[i].kills+`</th></tr>`);
						}else{
							$("#scoreTable").append(`<tr><th class="position">`+counter+`</th><th class="mafia">`+table1[i].name.toUpperCase()+`</th><th class="xp">`+table1[i].kills+`</th></tr>`);
							counter++;
						}
						
						if ((i+1-substract) == 10){
							break;
						} 
					
						
					}else{
						substract++;
					}					
				}
			}
			if (itemsShowed > 0){
				showScoreboard();
			}
			
		}else if(event.data== false){
			$('.scoreboard').hide();
			$("#scoreboard").css("visibility","hidden");
		}
	});
}


$("body").on("keyup", function (key) {
    // use e.which
    	if (key.which == 27){
		$.post('http://lab_topshooters/onCloseMenu');
		$('.scoreboard').hide();
		$("#scoreboard").css("visibility","hidden");
    	}
});