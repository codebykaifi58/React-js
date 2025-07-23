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

// username check kary ga ya function ka kahe username duplicate to nhi ha
$result =  mysqli_query($con, "SELECT *FROM signup_login WHERE username = '$username'");
if(mysqli_num_rows($result) > 0){
    echo json_encode(["Succes" => false, "message" => "Username is already exist"]);
    exit;
}

// email check kary ga ya funciton ka kahe email duplicate to nhi ha
$result = mysqli_query($con, "SELECT *FROM signup_login WHERE email = '$email'");
if(mysqli_num_rows($result)>0){
    echo json_encode(["Succes" => false, "message" => "Email is already exist"]);
    exit;
}

// phone check kary ga ya funciton ka kahe phone number duplicate to nhi ha

$result = mysqli_query($con, "SELECT *FROM signup_login WHERE phone = '$phone'");
if(mysqli_num_rows($result)>0){
    echo json_encode(["Succes" => false, "Message" => "Phone number is already exist"]);
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
