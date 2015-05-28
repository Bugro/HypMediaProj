<?php
$mysqli = new mysqli("localhost", "root", "", "biggym");
//$mysqli = new mysqli(getenv("mysqli_default_host"), getenv("mysqli_default_user"),getenv("mysqli_default_pw"),getenv("mysqli_default_table"));

if (mysqli_connect_errno()) {
    echo "Error connecting to DBMS: ".mysqli_connect_error();
    exit();
}
else {
    $table = $_POST['table'];
    $order = $_POST['order'];
    $query = " SELECT * FROM $table ORDER BY $order";
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
