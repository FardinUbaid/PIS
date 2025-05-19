<?php

include_once ('conn.php');

function insert($name, $email, $password) {
    $conn = getConnection();

    if (!$conn) {
        die("Database connection failed: " . mysqli_connect_error());
    }

    $sql = "INSERT INTO users (name, email, pass) VALUES ('$name', '$email', '$password')";

    $data = mysqli_query($conn, $sql);

    if ($data) {
        header('Location: home.php');
        exit();
    } else {
        echo "Error: " . mysqli_error($conn);
    }
    mysqli_close($conn);
}


?>