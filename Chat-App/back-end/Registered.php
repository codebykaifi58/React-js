<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");


// Database
$con = mysqli_connect("localhost", "root", "", "chat_app");

if (!$con) {
    echo json_encode(["success" => false, "message" => "DB connection failed"]);
    exit;
}

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

$username = $data['username'];
$email = $data['email'];
$phone = $data['phone'];
$password = $data['password'];
$conf_password = $data['confPassword']; // Notice camelCase here

if ($password !== $conf_password) {
    echo json_encode(["success" => false, "message" => "Passwords do not match"]);
    exit;
}

// Insert query
$sql = "INSERT INTO signup_login (username, email, phone, password, conf_password)
        VALUES ('$username', '$email', '$phone', '$password', '$conf_password')";

if (mysqli_query($con, $sql)) {
    echo json_encode(["success" => true, "message" => "User registered successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to register"]);
}

mysqli_close($con);
?>
