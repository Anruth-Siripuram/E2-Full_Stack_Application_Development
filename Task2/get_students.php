<?php
include 'db.php';

$sort = isset($_GET['sort']) ? $_GET['sort'] : 'name';
$department = isset($_GET['department']) ? $_GET['department'] : '';

$query = "SELECT * FROM students WHERE 1=1";

if (!empty($department)) {
    $query .= " AND department='$department'";
}

if ($sort == "date") {
    $query .= " ORDER BY join_date";
} else {
    $query .= " ORDER BY name";
}

$result = $conn->query($query);

$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>
