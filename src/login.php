<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/stylos-login.css">
    <!-- agregando estiulos y iconos de bootstrap -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <title>Inicio Sesion</title>
</head>

<body>

    <div class="contenedor">
        <div class="titulo-form">
            <h1>Inicia Sesion</h1>
        </div>
        <div>
            <?php require_once 'controlador/logeo-controlador.php' ?>
        </div>
        <div class="formulario">
            <form method="post">
                <div class="form-content">
                    <label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                        <input type="email" placeholder="Usuario" name="usuario" required id="user">
                    </label>
                    <label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-lock-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z" />
                        </svg>
                        <input type="password" placeholder="Contraseña" name="password" required id="pass">
                    </label>
                    <div class="password-enlace">
                        <span>olvidaste tu contraseña? ingresa <a href="#">aqui</a></span>
                    </div>
                    <input type="submit" value="Ingresar">
                    <div class="registro-enlace">
                        <span>no tienes cuenta? registrate <a href="#">aqui</a></span>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="bg-fondo">
        <div class="img">
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
            <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json" background="transparent" speed="1" style="width: auto; height: auto; position: absolute; right: 10px;" loop autoplay></lottie-player>

        </div>
    </div>

</body>

</html>