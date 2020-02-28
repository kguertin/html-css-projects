// Initialization and Add the Map 
function initMap() {
  // Your Location
  const loc = { lat: 43.653225, lng: -79.383186 };
  // Centered Map on Location
  const map = new google.maps.Map(document.querySelector('.map'),
  {
    zoom: 14,
    center: loc
  });
  // The Marker Positioned at Location
  const marker = new google.maps.Marker({postion: loc, map: map});
}