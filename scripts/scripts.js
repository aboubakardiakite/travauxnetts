// //variable globale

// let compteur =0
// let timer,elements,slides,slideWidth,check,imgWidth,divImg;

// window.onload = () => {
//     const dispo = document.querySelector(".diapo");//chercher .dispo dans le dom
//     const galerie = document.querySelector(".container-fluid");
//     elements = document.querySelector(".elements")//chercher elements dans le dom
//     slides = Array.from(elements.children)//aller chercher tout les enfants d'elements 
//     //on calcule la largeur du diaporama
//     slideWidth = dispo.getBoundingClientRect().width
//     let next = document.querySelector("#nav-droite") //chercher la fleche droite qui permet de faire bouger les image
//     let prev = document.querySelector("#nav-gauche") //chercher la fleche gauche qui permet de faire bouger les image
//     next.addEventListener("click",slideNext)//mettre un ecouteur d'evenement lors du click
//     prev.addEventListener("click",slidePrev)//mettre un ecouteur d'evenement lors du click
//     check = document.querySelector(".checkbtn")
    
//     //image div
//     var containe = document.getElementById('ro');
//     divImg = containe.querySelectorAll("div.row > div")
//     divImg.setAttribute("class","col-md-12"); 

//     console.log(divImg);
//     // automatiser le diaporama
//     timer = setInterval(slideNext,4000)

//     // Gerer le survole de la souris 
//     dispo.addEventListener("mouseover",stopTimer)
//     dispo.addEventListener("mouseout", starTimer)

//     // mise en ouvre du responsive
//     window.addEventListener("resize",()=>{
//         //on calcule la largeur du diaporama apres reduction de la taille de l'ecran
//     slideWidth = dispo.getBoundingClientRect().width
//     slideNext()
//     stopTimer()
//     starTimer()
//     })

//     window.addEventListener("resize",()=>{
//         imgWidth = galerie.getBoundingClientRect().width
//         tailleReni();


//     });

//     document.getElementById("formulaire").addEventListener("submit",function(e) {
//         var erreur;

        
//         if(erreur){
//             e.preventDefault();
//             document.getElementById("erreur").innerHTML = erreur;
//             return false;
//         }else{
//             alert('formulaire envoyer');
//         }



        
//         // var nom = document.getElementById("fistName");
//         // var prenom = document.getElementById("lastName");
//         // var email = document.getElementById("email");
//         // var telephone = document.getElementById("telephone");
        
//         // if(!telephone.value){
//         //     erreur = "Veuillez renseigner un numero de téléphone";
//         // }
//         // if(!email.value){
//         //     erreur = "Veuillez renseigner un email";
//         // }
//         // if(!prenom.value){
//         //     erreur = "Veuillez renseigner un Prenom";
//         // }
//         // if(!nom.value){
//         //     erreur = "Veuillez renseigner un Nom";
//         // }

        

        
//         divImg.setAttribute("class","col-md-12");
        
//         console.log(divImg);


      
//     })
// }

// function tailleReni(){

//     if(imgWidth > 0){
//         divImg.setAttribute("style","color:red");
//         console.log("je suis rentrer")
//     }
      

// }

// //faire defiler le diaporama vers la droite
// function slideNext(){//verifier sur quel image aller si elle est sur la premiere elle ira sur la deuxieme
//     compteur++
//     if(compteur == slides.length){
//         compteur = 0
//     }
//     //nous allons decaler la premiere image vers la gauche de facons a ce que la deuxieme vien s'afficher
//     let decal = -slideWidth * compteur
//     elements.style.transform = `translateX(${decal}px)`
// }
// //faire defiler le diaporama vers la gauche
// function slidePrev(){
//     compteur--
//     if(compteur < 0){
//         compteur = slides.length - 1
//     }
//     //nous allons decaler la premiere image vers la gauche de facons a ce que la deuxieme vien s'afficher
//     let decal = -slideWidth * compteur
//     elements.style.transform = `translateX(${decal}px)`
// }

// function stopTimer(){
//     clearInterval(timer)
// }
// function starTimer(){
//     timer = setInterval(slideNext,4000)
// }
$(function(){
    // declaration des variable
    var dark = $('.hov');
    var img = $('img');
    var content = $('.contient');
    // cacher les hov
    dark.hide();// la methode hide cache dark

    // Nous allons montrer dark au survole de img
    img.mouseenter(function(){// un evenement jquery lorsque notre souris vas etre sur l'image on afficher dark
        $(this).next().fadeIn('slow');// this car on veux le dark de l'image survolé 
                                    // next car on veux la div survante de img qui est hov 
        content.addClass('content_hover');

    });

    dark.mouseleave(function(){// une fois que notre souris quitte la div hov elle doit disparaitre
        $(this).fadeOut('slow');
        content.removeClass('content_hover');
    });

});

