<?php
// backend/login.php
session_start();
include 'db.php';

$email = $_POST['email']    ?? '';
$pass  = $_POST['password'] ?? '';

$stmt = $conn->prepare(
  "SELECT id, password FROM users WHERE email = ?"
);
$stmt->bind_param("s", $email);
$stmt->execute();
$res = $stmt->get_result();

if ($user = $res->fetch_assoc()) {
  if (password_verify($pass, $user['password'])) {
    $_SESSION['user_id'] = $user['id'];
    header('Location: ../browse-recipe.html');
    exit;
  }
}
echo "Invalid login credentials.";
?>
