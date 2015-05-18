<!DOCTYPE html>
<html lang="en">
<head>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/head.html'); ?>
</head>
<body>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/header.html'); ?>
  <div class="content">
    <div class="container">
      <div class="row bottom-padding">
        <div class="col-md-3">
          <a href="/courses/" class="btn btn-primary btn-room" role="button">All courses - Alphabetically</a> <a href="/courses/" class="btn btn-success btn-room" role="button">All courses - By Level</a> <a href="/courses/" class="btn btn-success btn-room" role="button">All courses - By Category</a>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-4">
              <div class="small-overlay-img">
                <a href="/courses/boxing.php"><img class="small-img img-rounded" src="/assets/course-boxing.jpg">
                <p class="desc white-links">BOXING</p></a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="small-overlay-img">
                <a href="/courses/hathayoga.php"><img class="small-img img-rounded" src="/assets/course-hatha.jpg">
                <p class="desc white-links">HATHA YOGA</p></a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="small-overlay-img">
                <a href="/courses/kickboxing.php"><img class="small-img img-rounded" src="/assets/course-kickboxing.jpg">
                <p class="desc white-links">KICKBOXING</p></a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="small-overlay-img">
                <a href="/courses/muaythai.php"><img class="small-img img-rounded" src="/assets/course-muaythai.jpg">
                <p class="desc white-links">MUAY THAI</p></a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="small-overlay-img">
                <a href="/courses/pilates.php"><img class="small-img img-rounded" src="/assets/course-pilates.jpg">
                <p class="desc white-links">PILATES</p></a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="small-overlay-img">
                <a href="/courses/trxtraining.php"><img class="small-img img-rounded" src="/assets/course-trxtraining.jpg">
                <p class="desc white-links">TRX TRAINING</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><?php include($_SERVER['DOCUMENT_ROOT'].'/footer.html'); ?>
  </div>
</body>
</html>
