<?php

class logeo
{
    private $conexion;

    public function __construct()
    {
        require_once 'conexion.php';
        $this->conexion = conexion::dbConexion();
    }
    public function get_usuarios($user, $pass)
    {
        try {
            $sql = "SELECT * FROM usuarios WHERE correo_u=:usuario AND contraseña_u = :contrasena;";
            $query = $this->conexion->prepare($sql);
            $query->bindValue(':usuario', $user);
            $query->bindValue(':contrasena', $pass);
            $query->execute();
            $resul = $query->fetch(PDO::FETCH_NUM);
            if ($resul == true) {
                $rol = $resul[6];
                $_SESSION['rol'] = $rol;
            } else {
                ?>
                <div style="color: darkred; background-color: #ff8b8b; height: 35px; width: 290px; display: flex; justify-content: center; padding-top: 5px;">
                <p class="errPass" style="font-size: 16px;">Error en Usuario o Contraseña</p>
                </div>
                    
                <?php
            }
        } catch (Exception $errSelectUsuario) {
            echo "error en seleccionar un usuario " . $errSelectUsuario->getCode();
            die("error en la linea " . $errSelectUsuario->getLine());
        }
        return $resul;
    }
}
