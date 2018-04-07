//call ajax

var hideShow = document.getElementById("more-info");
hideShow.style.display = "none";

function CreateRegistrationTable(){
	
	
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
			//var linkNum = "link";

            for(var a = 0; a < data.length; a++){
				var unitId = data[a].UnitId;
                var ownerId = data[a].OwnerId;
                var lon = data[a].Longitude;
                var lat = data[a].Latitude;

				//linkNum = linkNum + unitId;
				var idNum = a + 1;
				
                //appending at html
                html += "<tr>";
                    html += "<td onclick=" + "'UpdateEventLogTable(" + idNum + ")'" + "id=" + CreateId(idNum) + " " + "class='numLink'" + ">" + unitId + "</td>";
					html += "<td>" + ownerId + "</td>";
                    html += "<td>" + lon + "</td>";
                    html += "<td>" + lat + "</td>";
                html += "</tr>";
            }

            //replacing the <tbody> of <table>
            document.getElementById("data1").innerHTML = html;
            //document.getElementById("data").innerHTML = html.style

        }
    }
}

function CreateId(_id){
	var linkNum = "link" + _id;
	return linkNum;
}

function CreateEventLogTable(_id){
    var ajax = new XMLHttpRequest();

    ajax.open("GET", "EventLog.php", true);

    ajax.send();

    // receiving response from data.php
    ajax.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // converting JSON back to array
            var data = JSON.parse(this.responseText);
            console.log(data); // for debugging

            //html values
            var html = "";
			//var title = "";
            for(var a = 0; a < data.length; a++){
				if(data[a].UnitId == _id){
					console.log('gotin');
					var unitId = data[a].UnitId;
					var eventType = data[a].EventType;
					var eventTime = data[a].EventTime;

                //appending at html
					html += "<tr>";
						//html += "<td>" + unitId + "</td>";
						html += "<td>" + eventType + "</td>";
						html += "<td>" + eventTime + "</td>";
					html += "</tr>";
				}
            }
			document.getElementById("data-title").innerHTML = "Unit: " + (data[_id - 1].UnitId);

            //replacing the <tbody> of <table>
            document.getElementById("data2").innerHTML = html;
            //document.getElementById("data").innerHTML = html.style

        }
    }
}

function UpdateEventLogTable(_id){
	var linkId = "link" + _id;
	CreateEventLogTable(_id);
	hideShow.style.display = "block";
	return document.getElementById(linkId).innerHTML;
	
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

CreateRegistrationTable();

        
        

        