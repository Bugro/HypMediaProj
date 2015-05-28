<?php
//$mysqli = new mysqli("localhost", "root", "", "biggym");
$mysqli = new mysqli(getenv("mysqli_default_host"), getenv("mysqli_default_user"),getenv("mysqli_default_pw"),getenv("mysqli_default_table"));

if (mysqli_connect_errno()) {
    echo "Error connecting to DBMS: ".mysqli_connect_error();
    exit();
}
else {
    $table_names = array("course","equipment","instructor","room","testimony");
    $table = $_POST['table'];
    if ( in_array($table, $table_names, TRUE)) {
        $query = " SELECT * FROM $table";
        $result = $mysqli->query($query);
        if ($result->num_rows > 0) {
            $myArray = array();
            while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
                $myArray[] = array_map('utf8_encode', $row);
            }
            echo json_encode($myArray);
        }
    } else {
        echo "Invalid POST data";
    }

    $result->close();
    $mysqli->close();
}
?>
