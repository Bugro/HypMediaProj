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
          <button class="btn btn-primary btn-room col-md-12" style="width: 100%" role="button" id="allCourseAlpha">All courses - Alphabetically</button>
            <button class="btn btn-primary btn-room col-md-12" style="width: 100%" role="button" id="allCourseLevel">All courses - By Level</button>
            <button class="btn btn-primary btn-room col-md-12" style="width: 100%" role="button" id="allCourseCateg">All courses - By Category</button><br>
        </div>
        <div class="col-md-9" id="courseList">
        </div>
      </div>
    </div><?php include($_SERVER['DOCUMENT_ROOT'].'/footer.html'); ?>
  </div>
</body>
</html>
