<?php
include 'db.php';

$query = "SELECT department, COUNT(*) as total FROM students GROUP BY department";
$result = $conn->query($query);

$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>
