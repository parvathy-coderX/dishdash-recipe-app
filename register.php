<?php
// backend/register.php
include 'db.php';

$name  = $_POST['name']     ?? '';
$email = $_POST['email']    ?? '';
$pass  = $_POST['password'] ?? '';

if (!$name || !$email || !$pass) {
  die('Please fill all fields.');
}

$hash = password_hash($pass, PASSWORD_DEFAULT);
$stmt = $conn->prepare(
  "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
);
$stmt->bind_param("sss", $name, $email, $hash);

if ($stmt->execute()) {
  header('Location: ../login.html');
  exit;
} else {
  echo "Error: " . $stmt->error;
}
?>
