<!DOCTYPE html>
<html lang="en">
<head>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/head.html'); ?>
  <script src="/js/maps.js">
  </script>
  <script>
      function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var myPosition = new google.maps.LatLng(45.477652, 9.220414);
        var mapOptions = {
          center: myPosition,
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
       var map = new google.maps.Map(mapCanvas, mapOptions);
       var marker = new google.maps.Marker({
         position: myPosition,
         map: map,
        });
      }
      google.maps.event.addDomListener(window, 'load', initialize);
  </script>
</head>
<body>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/header.html'); ?>
  <div class="content">
    <div class="container">
      <h1 class="center-text">Where are we?</h1>
      <div class="row">
        <div class="col-md-12">
          <p class="center-text">Via Giuseppe Balzaretti, 28, 20133 Milan</p>
        </div>
      </div>
    </div><?php include($_SERVER['DOCUMENT_ROOT'].'/footer.html'); ?>
  </div>
</body>
</html>
