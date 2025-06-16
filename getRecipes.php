<?php
// backend/getRecipes.php
header('Content-Type: application/json');
include 'db.php';

$result = $conn->query("SELECT id, title, description, ingredients, instructions, image 
                        FROM recipes ORDER BY created_at DESC");

$recipes = [];
while ($row = $result->fetch_assoc()) {
  $recipes[] = $row;
}
echo json_encode($recipes);
?>
