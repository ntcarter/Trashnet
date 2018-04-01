function getData() {

    var arguments = { arg: document.getElementById('option1') };

    var ajax = new XMLHttpRequest();

    ajax.open("GET", "getMapLocations.php", true);
    ajax.send();

    // receiving response from getMapLocations.php
    ajax.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            // converting JSON back to array
            var data = JSON.parse(this.responseText);
            console.log(data); // for debugging

            return data;
        }
    }
}

function initMap() {

    var data = getData();

    if(data == null || data.length == 0) {
        document.getElementById('map').innerHTML = "No data found.";
        return;
    }

    var center = { lat: data[0].latitude, lng: data[0].longitude };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: center
    });

    //create new marker at each position
    for(var current = 0; current < data.length; current++) {
        var marker = new google.maps.Marker({
            position:  { lat: data[current], lng: data[current] },
            map: map
        });
    }
}
