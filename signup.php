<?php
// connect to database
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

$conn = new mysqli($localhost, $username, $password, $users);

// check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST["username"];
  $password = $_POST["password"];

  // verify user credentials
  $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    // login successful, redirect to dashboard page
    header("Location: dashboard.php");
    exit();
  } else {
    // login failed, display error message
    $error_message = "Invalid username or password";
  }
}

$conn->close();
?>
