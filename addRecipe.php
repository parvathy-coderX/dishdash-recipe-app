<?php
// backend/addRecipe.php
include 'db.php';

$title        = $_POST['title']        ?? '';
$description  = $_POST['description']  ?? '';
$ingredients  = $_POST['ingredients']  ?? '';
$instructions = $_POST['instructions'] ?? '';

// handle image upload
$imagePath = null;
if (!empty($_FILES['image']['name'])) {
  $targetDir  = __DIR__ . '/../images/';
  $fileName   = uniqid() . '_' . basename($_FILES["image"]["name"]);
  $targetFile = $targetDir . $fileName;
  if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
    $imagePath = 'images/' . $fileName;
  }
}

$stmt = $conn->prepare(
  "INSERT INTO recipes (title, description, ingredients, instructions, image)
   VALUES (?, ?, ?, ?, ?)"
);
$stmt->bind_param(
  "sssss",
  $title,
  $description,
  $ingredients,
  $instructions,
  $imagePath
);

if ($stmt->execute()) {
  header('Location: ../browse-recipe.html');
  exit;
} else {
  echo "Error: " . $stmt->error;
}
?>
