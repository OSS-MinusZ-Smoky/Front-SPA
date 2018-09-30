let GoogleMap;
let marker_basket = [];

function INIT_MAP() {

    GoogleMap = new google.maps.Map(document.getElementById('google-map'), {
      center: {
        lat: 37.540705,
        lng: 126.956764
      },
      zoom: 5
    });

    let google_map_marker_initial = new google.maps.Marker({
      position : {
        lat: 37.540705,
        lng: 126.956764
      },
      map: GoogleMap
    });

  }

function markerPush(){
	
    let google_map_marker = new google.maps.Marker({

      position : LatLng,
      draggable : false,
      animation: google.maps.Animation.DROP,
      map: GoogleMap
      
	  });

	google_map_marker.setAnimation(google.maps.Animation.BOUNCE);
	google_map_marker.setMap(GoogleMap);
	
}

function markerPop() {
	
	

}