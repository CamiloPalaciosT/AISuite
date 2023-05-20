<?php 

class conexion {
    public static function dbConexion (){
        try{
            $db = new PDO("mysql:host=localhost; dbname=melopaly-db;", 'root', '');
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $db->exec("set names utf8");

        }
        catch(Exception $erConexion){
            echo "error en la conexion enm la base de datos " . $erConexion->getMessage();
            die("error en la linea " . $erConexion->getLine());
        }
    return $db;
    }
}

?>