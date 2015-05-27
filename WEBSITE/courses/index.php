<!DOCTYPE html>
<html lang="en">
<head>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/head.html'); ?>
    <script type="text/javascript" src="../js/getCourse.js"></script>
</head>
<body>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/header.html'); ?>
  <div class="content">
    <div class="container">
      <div class="row bottom-padding">
        <div class="col-md-3">
          <a href="/courses/" class="btn btn-primary btn-room" role="button">All courses - Alphabetically</a> <a href="/courses/" class="btn btn-success btn-room" role="button">All courses - By Level</a> <a href="/courses/" class="btn btn-success btn-room" role="button">All courses - By Category</a>
        </div>
        <div class="col-md-9" id="courseList">
        </div>
      </div>
    </div><?php include($_SERVER['DOCUMENT_ROOT'].'/footer.html'); ?>
  </div>
</body>
</html>
