<?php
$mysqli = new mysqli("https://hyper.arguggi.co.uk/biggymphp/phpmyadmin/", "phpmyadmin", "AsZqnprNuQW4INZeaA2kEp0BWi0i1Jwe", "biggym"); //connexion to the database

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
    //echo "Successful connection"; // connection ok
    
    $table = .$_POST['table'];
    # extract results mysqli_result::fetch_array
    $query = " SELECT * FROM $table ";
    //query execution
    $result = $mysqli->query($query);
    //if there are data available
    if($result->num_rows >0)
    {
        $myArray = array();//create an array
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = $row;
        }
        echo json_encode($myArray);
    }

    //free result
    $result->close();

    //close connection
    $mysqli->close();
}
?>