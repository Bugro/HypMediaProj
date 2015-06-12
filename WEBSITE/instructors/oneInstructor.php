<!DOCTYPE html>
<html lang="en">
<head>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/head.html'); ?>
    <script type="text/javascript" src="../js/callInstructorInfo.js"></script>
</head>
<body>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/header.html'); ?>
  <div class="content">
    <div class="container">
          
            <h3 class='center-text' id='instructorTitle'></h3>
            <div class='row'>
                <div class='col-md-3'>
                    <div class='small-overlay-img' id="instructorImage">
                        
                    </div>
                </div>
                <div class='col-md-9'>
                    <p id='instructorDescription'></p>
                </div>
            </div>
            <div class='well black-links col-xs-12'>
                <div class='center-text'>Courses with this instructor: 
                    <span id="listOfCoursesForThisInstructor"></span>
                </div>
            </div>
            <a href='/instructors/' class='btn btn-primary btn-room col-xs-12' role='button'>Back</a>
            
            
  </div><?php include($_SERVER['DOCUMENT_ROOT'].'/footer.html'); ?>
</body>
</html>
