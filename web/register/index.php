<!DOCTYPE html>
<html lang="en">
<head>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/head.html'); ?>
</head>
<body>
  <?php include($_SERVER['DOCUMENT_ROOT'].'/header.html'); ?>
  <div class="content">
    <div class="container">
        <div class="center-text"><h1>Fill this form to register</h1></div>
        <div class="col-sm-offset-2 col-sm-8">
            <form action="">
                <div class="input-group formelmt input-group-lg">
                    <span class="input-group-addon" id="addon1"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></span>
                    <input type="text" name="firstname" class="form-control" placeholder="First Name" aria-describedby="addon1" autofocus="on"/>
                </div>
                <div class="input-group formelmt input-group-lg">
                    <span class="input-group-addon" id="addon2"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></span>
                    <input type="text" name="secondname" class="form-control" placeholder="Second Name" aria-describedby="addon2"/>
                </div>
                <div class="input-group formelmt input-group-lg">
                    <span class="input-group-addon" id="addon3"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></span>
                    <input type="text" name="email" class="form-control" placeholder="Email" aria-describedby="addon3"/>
                </div>
                <div class="input-group formelmt input-group-lg">
                    <span class="input-group-addon" id="addon4"><span class="glyphicon glyphicon-education" aria-hidden="true"></span></span>
                    <input type="text" name="age" class="form-control" placeholder="Age" aria-describedby="addon4"/>
                </div>
                <div class="input-group formelmt input-group-lg">
                    <span class="input-group-addon" id="addon5"><span class="glyphicon glyphicon-scale" aria-hidden="true"></span></span>
                    <input type="text" name="weight" class="form-control" placeholder="Weight" aria-describedby="addon5"/>
                </div>
                <input type="submit" name="register" class="btn form-control btn-primary" value="Submit"/>
            </form>
        </div>
    </div><?php include($_SERVER['DOCUMENT_ROOT'].'/footer.html'); ?>
  </div>
</body>
</html>
