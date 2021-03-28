<div class="separe">

</div>
<form name="formulaireContact" action="index.php" method="get" id="formulaire" >
    <div class="container col-md-6 col-lg-6">
        <h2 class="present"> Contactez-nous</h2>
        <div class="row" style="margin-bottom: 10px;">
            <div class="col">
                <label for="fistName">Nom</label>
                <input type="text" class="form-control" id="fistName" name="fistName"  placeholder="Nom*" size="25" maxlength="100">
            </div>
            <div class="col">
                <label for="lastNane">Prénom</label>
                <input type="text" class="form-control" id="lastName" name="lastName"  placeholder="Prénom*" size="25" maxlength="100">
            </div> 
        </div>
        <div class="row">
            <div class="col">
                <label for="emain">Email*</label>
                <input type="mail" class="form-control" id="email" name="email"  placeholder="E-mail*" size="25" maxlength="100">
            </div>
            <div class="col">
                <label for="telephone">Télephone</label>
                <input class="form-control" type="tel" id="telephone" name="telephone"  placeholder="Entrez votre Téléphone"
                pattern="[0-9]{10}"
                >
            </div> 
        </div>
        <div class="form-group" style="margin-top: 10px;">
            <label for="commentaire"></label>
            <textarea class="form-control" id="commentaire" name="commentaire"  placeholder="Votre message"></textarea>
        </div>
        <div class="checkbox">
            <label class="checkbox" for="etat1"><input type="checkbox" id="etat1" name="etat1" value="NONOBLI"> Cochez cette case si vous souhaitez être recontacté(e) par téléphon</label>
            
            <label class="checkbox" for="etat2"><input type="checkbox" required id="etat2" name="etat2" value="CONDITIONS"> En cochant cette case j'accepte les conditions particulières ci-dessous ** <br> 
              Les données personnelles communiquées sont destinées et nécessaires aux fins de vous contacter
            </label>
        </div>
            <button type="submit" id="valide" name="valide" class="btn btn-primary" value="ok">Envoyer</button>    
            <button type="reset" class="btn btn-default">Effacer</button>
        </div>
    </div>
</form>
    <p style="color:red;" id="erreur"></p>
    