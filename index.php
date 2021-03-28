<?php
    try{
        require_once('src/checkForm.php');
        require_once("views/travauxnetts.php");
    }catch(ParmsException $e){
        $errorMessage = $e->getMessage();
        require('index.php');
    }
    
?>