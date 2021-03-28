let menuWidth;
let link  = document.querySelectorAll('.nav-link');
window.onload = () =>{
    let val = false;
    let button1 = document.querySelector('.m-toggle-icon');
    let menu = document.querySelector('.menu-r');
    let vmenu = document.querySelector('.menu');


    menuWidth = menu.getBoundingClientRect().width;
    menu.style.top='0px'
    

    if(val == false){
        if(menuWidth <= 1066){
            menu.style.display='none';
            

        }else{
            menu.style.display='inherit'; 
        }
    }
    
    // window.addEventListener('resize',()=>{
    //     menuWidth = menu.getBoundingClientRect().width;
    //     if(menuWidth <= 1066 ){
    //         menu.style.display='none'; 
    //         menu.style.top='0px'

    //     }
    //     if(menuWidth>= 1067 && val==true){
    //         menu.style.display='inherit'
    //     }
    //     if(menuWidth<= 1067 && val==true)
    //     {
    //         menu.style.display='inherit';

    //     }
    //     if(menuWidth>= 1067 && val==false){
    //         menu.style.display='inherit'
    //     }
    //     console.log(menuWidth)
    // });


    console.log(vmenu);
    
    button1.addEventListener('click',()=>{
        console.log("c'est moi");
        if(val == false){
            link.forEach(function(lin){
                lin.style.display='block';
            });
            menu.style.display = 'inherit';
            menu.style.top='66px';
            menu.style.height = 'auto';
            val = true;
            console.log(val);

        }else{
            link.forEach(function(lin){
                lin.style.display='none';
            });
            menu.style.display = 'none';
            menu.style.top='0px'
            val = false;
            console.log(val);

        }
    });
    
    // function reportWindowSize(){
    //     menu.textContent = window.innerWidth;
    //     console.log(screen.width)
    // }

    // window.onreize = reportWindowSize;
    // window.addEventListener('resize', reportWindowSize);

    // // // mise en ouvre du responsive
    // // window.addEventListener("resize",()=>{
    // //     //on calcule la largeur du diaporama apres reduction de la taille de l'ecran
    // // let slideWidth = menu.getBoundingClientRect().width
    //     console.log(slideWidth);
    // })
}


