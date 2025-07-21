<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Connect to database
$con = mysqli_connect("localhost", "root", "", "chat_app");
if (!$con) {
    echo json_encode(["message" => "Database not connected"]);
    exit();
}

// Get JSON input
$data = json_decode(file_get_contents("php://input"));

if (!$data) {
    echo json_encode(["message" => "No data received"]);
    exit();
}

// Explicitly fetch and sanitize data
$username = isset($data->username) ? mysqli_real_escape_string($con, $data->username) : '';
$email    = isset($data->email) ? mysqli_real_escape_string($con, $data->email) : '';
$number   = isset($data->phone) ? mysqli_real_escape_string($con, $data->phone) : ''; // match with JS key
$password = isset($data->password) ? mysqli_real_escape_string($con, $data->password) : '';

// Validate
if (empty($username) || empty($email) || empty($number) || empty($password)) {
    echo json_encode(["message" => "All fields are required"]);
    exit();
}

// Insert into DB
$sql = "INSERT INTO signup_login (username, email, number, password) 
        VALUES ('$username', '$email', '$number', '$password')";

if (mysqli_query($con, $sql)) {
    echo json_encode(["success" => true, "message" => "User registered successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Failed to register", "error" => mysqli_error($con)]);
}

mysqli_close($con);
?>
