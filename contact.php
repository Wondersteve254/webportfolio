<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  $to = 'your-email-address@example.com';
  $subject = 'New contact message from ' . $name;
  $body = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";
  $headers = "From: $email\r\n";
  
  if (mail($to, $subject, $body, $headers)) {
    echo '<p>Your message has been sent. Thank you!</p>';
  } else {
    echo '<p>Sorry, something went wrong. Please try again later.</p>';
  }
}
?>
