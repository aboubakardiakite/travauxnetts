
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>
            Travauxnet
        </title>
        <meta name="viewport" content="width=divice-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <link href="scripts/style1.css" rel="stylesheet" media="screen">
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
        <link rel="shortcut icon" href="image/logoTravauxNet.png" >
    </head>
    <body data-spy="scroll" data-target="#scrollspy-nav" data-offset="60">
        <div class="menu" id="menu">
            <?php
                require_once("menu.php");
            ?>
        </div>

        <div class="header" style="margin-bottom: 50px;" id="header">
            <?php
                require_once("header.php");
            ?>
        </div>

       
        <section id="apropos">
            <?php
                require_once("nousSomme.php")
            ?>
        </section>
        <section id="offres">
            <?php
                require_once("offre.php");
            ?>
        </section>
        <section id="chantiers">
            <?php
                require_once("travaux.php");
            ?>
        </section>
        <div class="separe">

        </div>

        <h2 class="present">Nous collaborons</h2>

        <section  style="background-color: rgba(5, 40, 194,0.1);" id="collaboration">
            <?php
                require_once("collaboration.php");
            ?>
        </section>



        <section id="contact">
                <?php
                require_once("contact.php");
                ?>
        </section>
        <section id="map">  
                <?php
                    require_once("map.php");
                ?>
        </section>
    
                <?php
                    require_once("footer.php")
                ?>
        <script src="scripts/scroll.js"></script>
        <script src="scripts/scripts.js"></script>
        <script src="scripts/header.js"></script>
        <script src="scripts/modal.js"></script>
        <script src="scripts/logo.js"></script>

    </body>
</html>