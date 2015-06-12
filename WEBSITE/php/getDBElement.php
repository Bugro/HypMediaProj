<?php
//$mysqli = new mysqli("localhost", "root", "", "biggym");
$mysqli = new mysqli(getenv("mysqli_default_host"), getenv("mysqli_default_user"),getenv("mysqli_default_pw"),getenv("mysqli_default_table"));

if (mysqli_connect_errno()) {
    echo "Error connecting to DBMS: ".mysqli_connect_error();
    exit();
}
else {
    $table_names = array("course","equipment","instructor","room","testimony", "category");
    if (isset($_POST['table']) && in_array($_POST['table'], $table_names, TRUE)) {
        $table = $_POST['table'];
    } else {
        echo "No table name provided";
        exit();
    }
    $title = (string) $_POST['title'];
    $column = (string) $_POST['column'];

    $query = " SELECT * FROM $table WHERE $column = '$title'";
    $result = $mysqli->query($query);
    if ($result->num_rows > 0) {
        $myArray = array();
        while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $myArray[] = array_map('utf8_encode', $row);
        }
        echo json_encode($myArray);
    }

    $result->close();
    $mysqli->close();
}
?>
