<!DOCTYPE html>
<html lang="en">
<head>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/head.html'); ?>
</head>
<body>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/header.html'); ?>
  <div class="content">
    <div class="container">
	<div class="center-text"><h1>Interactive map</h1></div>
        <div id="mapOfTheGym"><img id="imgmap" class="img-rounded" src="/assets/gymplan.jpg"></div>
        <div class="selectedRoom">
      <a href="/rooms/index.php" class="btn btn-primary btn-room" role="button">All rooms</a>
            <div class="center-text"><h1>Selected Room</h1></div>
            <div class="descriptionOfRoom">Here goes the description of the room and all the information on its location, what people are doing inside...</div>
        </div>
    </div>
  </div><?php include($_SERVER['DOCUMENT_ROOT'].'/footer.html'); ?>
</body>
</html>


