mapboxgl.accessToken = 'pk.eyJ1IjoiZmxpZ2h0ZWFtc3RhbmR1cCIsImEiOiJjbThyamw3azQweW9iMmtvbWM4N3Bhc2o0In0.fywVictmDFWXM_M_LhlnQA';

var mapProps = {
	container: 'map',
	center: [-73.97, 40.75],
	zoom: 9
};

var map = new mapboxgl.Map(mapProps);
mapProps.style = 'mapbox://styles/mapbox/streets-v11';



const popup = new mapboxgl.Popup({ closeOnClick: false })
  .setLngLat([-96, 37.8])
  .setHTML('<h1>Hello World!</h1>')
  .addTo(map);
