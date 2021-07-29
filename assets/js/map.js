let map;
let info;


function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 56.951499404135596,
            lng: 24.115072184965943
        },
        zoom: 13,
        mapId: 'df4526e8fb1ba661',
    });
    let icon = {
        url: "assets/img/map-icon.png", // url
    };
    markerOne = new google.maps.Marker({
        position: {
            lat: 56.951499404135596,
            lng: 24.115072184965943
        },
        map: map,
        title: "Hello world",
        icon: icon,

    });
    markerTwo = new google.maps.Marker({
        position: {
            lat: 56.947499404135596,
            lng: 24.110072184965943
        },
        map: map,
        title: "Hello world",
        icon: icon,

    });
    markerThree = new google.maps.Marker({
        position: {
            lat: 56.945723,
            lng: 24.090919
        },
        map: map,
        title: "Hello world",
        icon: icon,

    });
    markerFour = new google.maps.Marker({
        position: {
            lat: 56.940052,
            lng: 24.098193
        },
        map: map,
        title: "Hello world",
        icon: icon,

    });

    info = new google.maps.InfoWindow({
        content: '<div class="map"><div class="map-flex"><div class="map-img"><img src="assets/img/AUCHlogo.png" alt=""></div><div class="map-text"><h3>AUCH beauty home</h3><p>+371 28361686, +371 23202079 auchbeauty@gmail.com Cēsu iela 20, Rīga</p></div></div></div>',
    });
    infoThree = new google.maps.InfoWindow({
        content: '<div class="map"><div class="map-flex"><div class="map-img"><img src="assets/img/kurts.jpg" alt=""></div><div class="map-text"><h3>Kurts coffee</h3><p>+371 23202079, +371 23202079 kurts@gmail.com Tērbatas iela 2i, Rīga</p></div></div></div>',
    });
    infoFour = new google.maps.InfoWindow({
        content: '<div class="map"><div class="map-flex"><div class="map-img"><img src="assets/img/purch.jpg" alt=""></div><div class="map-text"><h3>PURCH restaurant</h3><p>371 25425254, +371 23202079 purch@gmail.com Dzelzavas iela 51A, Rīga</p></div></div></div>',
    });
    markerOne.addListener("click", function() {
        info.open(map, markerOne);
    });
    markerThree.addListener("click", function() {
        infoThree.open(map, markerThree);
    });
    markerFour.addListener("click", function() {
        infoFour.open(map, markerFour);
    });

    let markers = [markerOne, markerTwo, markerThree, markerFour];

    function setMapOnAll(map) {
        for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    }

    document.getElementById("select-place").addEventListener("change", function() {
        if (this.value == 1) {
            for (let i = 0; i < markers.length; i++) {
                markers[i].setMap(map);
            }

            document.getElementById("select-type").addEventListener("change", function() {
                if (this.value == 4) {
                    setMapOnAll(null);
                    markers[2].setMap(map);
                    markers[3].setMap(map);
                }
                if (this.value == 5) {
                    setMapOnAll(null);
                    markers[0].setMap(map);
                }
            });
        } else {
            setMapOnAll(null);
        }
    });

}