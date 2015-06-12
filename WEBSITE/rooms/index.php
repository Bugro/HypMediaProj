<!DOCTYPE html>
<html lang="en">
<head>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/head.html'); ?>
</head>
<body>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/header.html'); ?>
    <script type="text/javascript" src="../js/getRoom.js"></script>
  <div class="content">
    <div class="container">
        <div class="center-text"><h1>Gym Map</h1></div>
        <div class="selectedRoom col-md-3">
            <div class="center-text col-md-12" id="roomList">

            </div>
        </div>
        <div class="col-md-9" id="mapOfTheGym"><img id="imgmap" class="img-rounded" src="../assets/gymplan/gymplan.jpg"></div>
    </div>
  </div><?php include($_SERVER['DOCUMENT_ROOT'].'/footer.html'); ?>
</body>
</html>
