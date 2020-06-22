//// Scroll on buttons!
$(document).ready(function() {

  $('.js--scroll-to-map').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-map').offset().top}, 1000)
  });

  $('.js--scroll-to-deals').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-deals').offset().top}, 1000)
  });
  $('.js--scroll-to-about').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000)
  });
  $('.js--scroll-to-top').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-header').offset().top}, 1000)
  });
  $('.js--scroll-to-dj').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-dj').offset().top}, 1000)
  });
  $('.js--scroll-to-contact').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000)
  });
  $('.js--scroll-to-menu').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-menu').offset().top}, 1000)
  });
});


var marker;

function initMap() {
    // Styles a map in night mode.
    var uluru = {lat: 52.955566, lng: -1.149557};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: uluru, 
      zoom: 14,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#000000'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#250715'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#ff6ebe'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#ffd9ee'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#ffd9ee'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#550833'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#470b2d'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#ff6ebe'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#250715'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#550833'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#ff6ebe'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
    
    
     
        marker = new google.maps.Marker({
        position: uluru, 
        icon:'/img/calluna-marker.png', 
        //http://maps.google.com/mapfiles/kml/paddle/pink-stars.png
        map: map});
        marker.setAnimation(google.maps.Animation.BOUNCE);
        marker.addListener('click', toggleBounce);
  }

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}



