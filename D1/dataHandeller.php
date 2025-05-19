<?php
require('model.php');

if (isset($_POST['submit'])) {  
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (empty($name) || empty($email) || empty($password)) {
        echo "Please fill in all fields.";
    } else {
        insert($name, $email, $password);
    }
}
?>