<!DOCTYPE html>
<html lang="en">
<head>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/head.html'); ?>
</head>
<body>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/header.html'); ?>
    <script type="text/javascript" src="/js/getCategory.js"></script>
  <div class="content">
    <div class="container">
        <div class="col-md-3" id="categoryListButton">
            <h2 class="center-text">Categories</h2>
      </div>
        <h2 class="center-text" id="titleOfThePage">Discover our courses</h2>
        <div class="container" id="categoryList">Select a category to see which courses are avaible</div>
    </div><?php include($_SERVER['DOCUMENT_ROOT'].'/footer.html'); ?>
  </div>
</body>
</html>
