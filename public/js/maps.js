var geocoder;
var map;
var marker;

function initialize(){
    
    var latlng = new google.maps.LatLng(-34.5, -58.5);
    
    var options = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
        
    map = new google.maps.Map(document.getElementById("map_canvas"), options);
        
    geocoder = new google.maps.Geocoder();
    
    marker = new google.maps.Marker({
        map: map,
        draggable: true
    });
}

$(document).ready(function() { 
         
    initialize();
                  
    $(function() {
        $("#address").autocomplete({

            source: function(request, response) {
            geocoder.geocode( {'address': request.term }, function(results, status) {
            response($.map(results, function(item) {
                    return {
                        label:  item.formatted_address,
                        value: item.formatted_address,
                        latitude: item.geometry.location.lat(),
                        longitude: item.geometry.location.lng()
                        }
                    }));
                });
            },

            select: function(event, ui) {
                    
                $("#latitude").val(ui.item.latitude);
                $("#longitude").val(ui.item.longitude);
                var location = new google.maps.LatLng(ui.item.latitude, ui.item.longitude);
                marker.setPosition(location);
                map.setCenter(location);
            }
        });
    });
});
