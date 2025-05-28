<?php

    if (isset($_POST['username']) && isset($_POST['password'])) {
        $username = $_POST['username']; 
        $password = $_POST['password']; 

        if ($username === 'fardin' && $password === 'f123') {
            header('Location: home.html'); 
            exit; 
        } else {
            echo 'Invalid username or password.'; 
        }
    }

?>