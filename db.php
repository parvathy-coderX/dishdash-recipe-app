<?php
// backend/db.php
$host   = 'localhost';       // or your remote host
$user   = 'your_db_user';
$pass   = 'your_db_pass';
$dbname = 'dishdash';

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
  die("DB Connection failed: " . $conn->connect_error);
}
?>

