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
            <div class="center-text"><h1>Selected Room</h1></div>
            <div class="descriptionOfRoom">Here goes the description of the room and all the information on its location, what people are doing inside...</div>
        </div>
      <div class="row bottom-padding">
        <h1 class="center-text"> Small Room</h1>
        <div class="col-md-3"><img class="center-img img-rounded img-equip" src="/assets/small.jpg"></div>
        <div class="col-md-9">
          <p>Courses held here: <a href="../courses/index.php">Boxing</a></p>
      </div>
    </div>
    <div class="row bottom-padding">
        <h1 class="center-text"> Big Room</h1>
        <div class="col-md-3"><img class="center-img img-rounded img-equip" src="/assets/medium.jpg"></div>
        <div class="col-md-9">
          <p>Courses held here: <a href="../courses/index.php">Hatha Yoga</a></p>
      </div>
    </div>
    </div>
  </div><?php include($_SERVER['DOCUMENT_ROOT'].'/footer.html'); ?>
</body>
</html>
