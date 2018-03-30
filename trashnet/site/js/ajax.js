//call ajax

function CreateTable(){
    var ajax = new XMLHttpRequest();

    ajax.open("GET", "data.php", true);

    ajax.send();

    // receiving response from data.php
    ajax.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // converting JSON back to array
            var data = JSON.parse(this.responseText);
            console.log(data); // for debugging

            //html values
            var html = "";

            for(var a = 0; a < data.length; a++){
                var id = data[a].UnitId;
                var lon = data[a].Longitude;
                var lat = data[a].Latitude;
                var freq = data[a].Frequency;
                var full = data[a].Fullness;

                //appending at html
                html += "<tr>";
                    html += "<td>" + id + "</td>";
                    html += "<td>" + lon + "</td>";
                    html += "<td>" + lat + "</td>";
                    html += "<td>" + freq + "</td>";
                    html += "<td>" + full + "</td>";
                html += "</tr>";
            }

            //replacing the <tbody> of <table>
            document.getElementById("data").innerHTML = html;
            //document.getElementById("data").innerHTML = html.style

        }
    }
}

function getAddress(lat, lon){
	function success(position){
		var latitude = lat;
		console.log("latitude " + latitude);
		var longitude = lon;
		
		var location = document.getElementById("location");
		var apiKey = "AIzaSyDdTd6M6KOw5AaWzczNr_WeHbPJyBXJtlE";
		var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
		
		// location.innerHTML = "Latitude:" + latitude+"°"+ "Longitude: " + longitude+'°';
		var theUrl = url + latitude + ',' + longitude + '&key=' + apiKey;
	 
		$.getJSON(theUrl, function(data){
			$.ajax({
				url: theUrl, dataType: 'json',
				success: function(results){
					$("#city").text(results.results[3].address_components[4].long_name)
					$("#country").text(results.results[0].address_components[5].long_name)
				}
			}     
		)});
		
	}	
  
  
	
	navigator.geolocation.getCurrentPosition(success);
	// location.innerHTML = "Locating...";
	
 }

CreateTable();
        
        

        