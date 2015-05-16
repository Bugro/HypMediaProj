<!DOCTYPE html>
<html lang="en">
<head>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/head.html'); ?>
  <title></title>
</head>
<body>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/header.html'); ?>
  <div class="content">
    <div class="container">
      <h2 class="center-text">Welcome to the Gym</h2>
<img class="center-img img-rounded" src="/assets/gym.jpg"> <a href="/history/" class="btn btn-primary btn-room" role="button">History</a>
      <div class="row">
        <div class="col-md-4">
          <a href="/location/" class="btn btn-primary btn-room" role="button">Location</a>
        </div>
        <div class="col-md-4">
          <a href="/testimonials/" class="btn btn-primary btn-room" role="button">Testimonials</a>
        </div>
        <div class="col-md-4">
          <a href="/Equipment/" class="btn btn-primary btn-room" role="button">Equipment</a>
        </div>
      </div>
    </div><?php include($_SERVER['DOCUMENT_ROOT'].'/footer.html'); ?>
  </div>
</body>
</html>
