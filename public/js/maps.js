var geocoder;
var map;

function initialize()
{
    var latlng = new google.maps.LatLng(0, 0);

    var options = {
        zoom: 2,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map_canvas"), options);

    geocoder = new google.maps.Geocoder();

    fill_map();
}

function set_marker(location, address, rate, centered)
{
    if (!rate) var rate = 0;
    if (!centered) var centered = false;
    
     var marker =  new google.maps.Marker({
         map: map,
         draggable: true,
         position: location,
     });

     google.maps.event.addListener(marker, 'click', function() {
           var window = new google.maps.InfoWindow({
                content: "<p><b>Address: </b>" + address + "<br/>" +
                         "<b>Beer Rate: </b>" + rate + "</p>",
           });
           window.open(map, marker);
     });
     
     if (centered)
        map.setCenter(location);

     return marker;
}

$(document).ready(function() {

    initialize();

    $(function() {

        $("#address").autocomplete({

            source: function(request, response) {

                geocoder.geocode({'address': request.term }, function(results, status) {

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
                
                var address = $("#address").val();
                $("#latitude").val(ui.item.latitude);
                $("#longitude").val(ui.item.longitude);
                var location = new google.maps.LatLng(ui.item.latitude, ui.item.longitude);
                set_marker(location, address, 0, true);              
            }
        });
    });
});
