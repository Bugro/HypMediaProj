<!DOCTYPE html>
<html lang="en">
<head>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/head.html'); ?>
    <script type="text/javascript" src="../js/callCourseInfo.js"></script>
</head>
<body>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/header.html'); ?>
  <div class="content">
    <div class="container">
          
            <h3 class='center-text' id='courseTitle'></h3>
            <div class='row'>
                <div class='col-md-3'>
                    <div class='small-overlay-img' id="courseImage">
                        
                    </div>
                </div>
                <div class='col-md-9'>
                    <p id='courseDescription'></p>
                </div>
            </div>
            <div class='well black-links col-xs-12'>
                <div class='center-text'>Instructors for this course</div>
            </div>
            <div class="col-xs-12" id="listOfInstructorsForThisCourse"></div>
            <a href='/courses/' class='btn btn-primary btn-room col-xs-12' role='button'>Back</a>
            
            
  </div><?php include($_SERVER['DOCUMENT_ROOT'].'/footer.html'); ?>
</body>
</html>
