<?php
session_start();
if(isset($_SESSION['rol'])){
    if($_SESSION['rol'] != 'usuario'){
        header('location: ../login.php');
    }
}
else{
    header('location: ../login.php');
}

?>