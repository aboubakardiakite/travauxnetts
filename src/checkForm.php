<?php

    class ParmsException extends Exception{};

    const METHOD = INPUT_GET;
    const ETAT = ['NONOBLI','CONDITIONS'];
    

    function checkNom($fistName){
        $veri = filter_input(METHOD,$fistName,FILTER_SANITIZE_STRING);
        if($veri === NULL || $veri === '')
			throw new ParmsException("param $fistName : valeur absente");
		else if($veri === FALSE)
			throw new ParmsException("param $fistName : valeur incorrecte");
		return $veri;

    }

    function checkPrenom($lastName){
        $veri = filter_input(METHOD,$lastName,FILTER_SANITIZE_STRING);
        if($veri === NULL || $veri === '')
			throw new ParmsException("param $lastName : valeur absente");
		else if($veri === FALSE)
			throw new ParmsException("param $lastName : valeur incorrecte");
		return $veri;
    }

    function checkEmail($email){
        $veri = filter_input(METHOD,$email,FILTER_VALIDATE_EMAIL);
        if($veri === NULL || $veri === '')
			throw new ParmsException("param $email : valeur absente");
		else if($veri === FALSE)
			throw new ParmsException("param $email : valeur incorrecte");
		return $veri;
    }

    function checkTelephone($telephone){
        $veri = filter_input(METHOD,$telephone,FILTER_VALIDATE_INT);
        if($veri === NULL || $veri === '')
			throw new ParmsException("param $telephone : valeur absente");
		else if($veri === FALSE)
			throw new ParmsException("param $telephone : valeur incorrecte");
		return $veri;
    }

    function checkChoice($etat){
        $veri = $_GET[$etat];
        if($veri === NULL)
            throw new ParmsException("param '$etat' : valeur absente");
        return $veri;

    }

    $nom       = checkNom('fistName');
    $prenom    = checkPrenom('lastName');
    $email     = checkEmail('email');
    $telephone = checkTelephone('telephone');
    $etat1     = checkChoice('etat2');
    $etat2     = $_GET['etat1'];
    


?>