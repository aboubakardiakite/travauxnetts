$('#ouvreMoi').click(function(e){
    e.preventDefault();
    if(!$('#ouvregrand').hasClass('is-open') && !$('#ouvreMoi').hasClass('is-open')){
        $('.menu-r').toggleClass('is-open');
        $('.m-nav-toggle').toggleClass('is-open');
    }else{
        $('.menu-r').removeClass('is-open');
        $('.m-nav-toggle').removeClass('is-open');
    }



})