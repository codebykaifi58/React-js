<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json"); // Important: tells browser it's JSON

// Database connection
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "chat_app";

$con = mysqli_connect($host, $user, $pass, $dbname);

if (!$con) {
    echo json_encode(["success" => false, "message" => "Database connection failed"]);
    exit;
}

// Query
$sql = "SELECT * FROM signup_login";
$result = mysqli_query($con, $sql);

$users = [];

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $users[] = $row;
    }
    echo json_encode(["success" => true, "users" => $users]);
} else {
    echo json_encode(["success" => false, "message" => "No records found"]);
}

mysqli_close($con);
?>
