<?php
$mysqli = new mysqli("localhost", "root", "", "biggym"); //connexion to the database
//$mysqli = new mysqli(getenv("mysqli_default_host"), getenv("mysqli_default_user"),getenv("mysqli_default_pw"),getenv("mysqli_default_table"));

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
    //echo "Successful connection"; // connection ok
    
    # extract results mysqli_result::fetch_array
    $query = " SELECT * FROM testimony";
    //query execution
    $result = $mysqli->query($query);
    //if there are data available
    if($result->num_rows >0)
    {
        $myArray = array();//create an array
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map('utf8_encode', $row);
        }
        echo json_encode($myArray);
    }

    //free result
    $result->close();

    //close connection
    $mysqli->close();
}
?>