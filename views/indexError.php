
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>
            Travauxnet
        </title>
        <script src="jsCss/scripts.js"></script>
        <meta name="viewport" content="width=divice-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <link href="jsCss/style1.css" rel="stylesheet" media="screen">
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
        <link rel="shortcut icon" href="image/logoTravauxNet.png" >
    </head>
    <body>
        <div class="menu">
            <?php
                require_once("menu.php");
            ?>
        </div>

        <div class="header" style="margin-bottom: 50px;">
            <?php
                require_once("header.php");
            ?>
        </div>

        <section id="map">  
                <?php
                    require_once("map.php");
                ?>
        </section>
        <?php
            require_once("nousSomme.php")
        ?>

        <section id="contact">
                <?php
                echo $errorMessage;
                require_once("contact.php");
                ?>
        </section>

        <?php
            require_once("footer.php")
        ?>
    </body>
</html>