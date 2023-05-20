<?php

session_start();
if (isset($_POST['usuario']) && isset($_POST['password'])) {
    $user = $_POST['usuario'];
    $pass = $_POST['password'];
    if (empty($user) or empty($pass)) {
?>
        <div style="color: darkred; background-color: #ff8b8b; height: 35px; width: 290px; display: flex; justify-content: center; padding-top: 5px;">
            <p class="errPass" style="font-size: 16px;">No puede estar los campos en blanco</p>
        </div>

<?php
    } else {
        $usuariosSelect = new logeo();
        $usuariosSelect->get_usuarios($user, $pass);

        if (isset($_SESSION['rol'])) {
            session_start();
            switch ($_SESSION['rol']) {
                case 'usuario':
                    header('location: usuario/index.php');
                    break;

                case 'administrador':
                    header('location: administrador/index.php');
                    break;
                default;
            }
        }
    }
}
