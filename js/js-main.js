var intro = document.querySelectorAll('.intro');
var body = document.getElementById("body");
var introH1 = document.getElementById("pablo-duran-intro-h1");
var all = document.querySelector('.all-content');
var header = document.getElementById("header");
var buttonMenuFixed = document.querySelector('.button-menu-fixed');
var windowWidthStart = window.innerWidth;

body.style.overflowY = 'scroll';
/*
document.addEventListener("DOMContentLoaded", function() {
    buttonMenuFixed.style.opacity = '0';
    setTimeout(function (){  
        document.body.scrollIntoView(true);
        body.style.overflowY = 'hidden';
    }, 150);
    

    setTimeout(function (){  
        introH1.style.top = '25px';
        introH1.style.left = '25px';
        introH1.style.transform = 'translate(0)';
        introH1.style.fontSize = '45px';
    }, 800);
    setTimeout(function (){  
        introH1.style.opacity = '0';
    }, 1900);
    setTimeout(function (){  
        intro[0].style.marginLeft = '200px';
    }, 2200);
    setTimeout(function (){  
        intro[0].style.width = '0vw';
    }, 3500);
    setTimeout(function (){  
        body.style.overflowY = 'scroll';
        intro.style.display = 'none'
    }, 4500);
});

*/

$(document).ready(function(){
    var ir_a = $(".desplazar");  //Declaramos variable ir_a y le decimos que su valor es la clase .desplazar

    ir_a.click(function(event){   //cuando se haga click a ir_a, se ejecutará la funcion con evento 
        event.preventDefault();    //previene configuraciones default

        $("body, html").animate({   //.animate es de jquery
            scrollTop: $(this.hash).offset().top  // 
        },800);

    })
});

//---------------------------button menu---------------------------------

const button = document.querySelector('button');

button.addEventListener('click', () => {
    if (!button.classList.contains('activo')){
        header.style.transform = 'translateX(0)';
        all.style.filter = 'blur(3px) grayscale()'
    }else{
        header.style.transform = 'translateX(-200px)';
        all.style.filter = 'none';
    }

    button.classList.toggle('activo');
    
});

//----------------------END menu------------------------

//-----------------------------Projects-----------------------------------
var projectInfo = document.querySelectorAll('.projects-container-info');
var projectButton = document.querySelectorAll('.projects-container-button');
var arrowUp = document.querySelectorAll('.fa-angles-up');
var arrowDown = document.querySelectorAll('.fa-angles-down');


for (let i = 0; i < projectButton.length; i++){
    projectButton[i].addEventListener("click", function () {
        projectInfo[i].classList.toggle("projects-container-info_active");

        if (getComputedStyle(arrowUp[i]).opacity === "1"){
            arrowUp[i].style.opacity = '0';
            arrowDown[i].style.opacity = '1';
        }else{
            arrowUp[i].style.opacity = '1';
            arrowDown[i].style.opacity = '0';
        }
    });
}

//-----------End projects-------


//-----------------------Animación MENU-----------------------------

document.addEventListener("DOMContentLoaded", function() {
    var imgMenu = document.querySelectorAll('.img-menu');
    var liMenu = document.querySelectorAll('.li-menu');
    var container = document.querySelectorAll('.container');
    var pabloDuranMenu = document.querySelector('.pablo-duran-menu');

    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    for (let i = 0; i < imgMenu.length; i++){
        liMenu[i].addEventListener('mouseenter', function() {

            liMenu.forEach(li => {
                li.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            });
            imgMenu.forEach(img => {
                img.style.filter = 'brightness(0)';
            });

            imgMenu[i].style.filter = 'brightness(1)';
            liMenu[i].style.backgroundColor = 'rgba(0, 0, 0, 0.082)';
        });
    
        liMenu[i].addEventListener('mouseleave', function() {
        // Se ejecuta cuando el mouse sale del elemento
            imgMenu[i].style.filter = 'brightness(0)';
            checkVisibility();
        });
    }

    function checkVisibility(){
        var container = document.querySelectorAll('.container');
        //------menu-------
        all.style.filter = 'none';
        button.classList.remove('activo');
        if (windowWidth < 1150){
            pabloDuranMenu.style.display = 'none';
            header.style.marginTop = '90px';
            buttonMenuFixed.style.display = 'flex';
            header.style.transform = 'translateX(-200px)';
            all.style.marginLeft = '0';
        }else{
            pabloDuranMenu.style.display = 'flex';
            header.style.marginTop = '0';
            header.style.transform = 'translateX(0)';
            all.style.marginLeft = '200px';
            buttonMenuFixed.style.display = 'none';
        }
        //.....menu.....


        imgMenu.forEach(img => {                    //desactivo todos los elementos del menu
            img.style.filter = 'brightness(0)';
        });


        liMenu.forEach(li => {                    //desactivo todos los elementos del menu
            li.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        });

        for (let i = 0; i < imgMenu.length; i++){
  
                var boundingContainer = container[i].getBoundingClientRect();
                var iAnt = i - 1;

            if (boundingContainer.top < windowHeight && boundingContainer.bottom > 0){
                
                imgMenu[i].style.filter = 'brightness(1)';
                liMenu[i].style.backgroundColor = 'rgba(0, 0, 0, 0.082)';

                if (i > 0){
                    liMenu[iAnt].style.backgroundColor = 'rgba(0, 0, 0, 0)';
                    imgMenu[iAnt].style.filter = 'brightness(0)';
                }


            }
        }
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', function() {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        checkVisibility();
     }); // Vuelve a verificar la visibilidad al cambiar el tamaño de la ventana
    checkVisibility();

});
//---------------------Fin Animación MENU-----------------------------


//---------------------------Start education button-------------------------------
var evidences = document.querySelectorAll('.evidence-education-all');

document.addEventListener("DOMContentLoaded", function() { 
    var educationButtons = document.querySelectorAll('.flecha-education');
    var cruz = document.querySelectorAll('.fa-xmark');
    var buttonsNewWindows = document.querySelectorAll('.evidence-new-window-button');

    
    for (let i = 0; i < buttonsNewWindows.length; i++){
        buttonsNewWindows[i].addEventListener("click", function() {
            var imgSrc = evidences[i].querySelector('img').src;
            window.open(imgSrc, '_blank');
        });
    }

    for (let i = 0; i < educationButtons.length; i++){
        educationButtons[i].addEventListener("click", function() {
            if (i == 3){
                window.open("https://credentials.englishonline.britishcouncil.org/profile/eu-pablodurnponzoni396148/wallet", '_blank');
            }else{
                evidences[i].style.display = 'flex';
                setTimeout(function (){  
                    evidences[i].style.opacity = '1';
                }, 100);
            }
           

        });

        cruz[i].addEventListener("click", cerrarVentana);
        //evidences[i].addEventListener("click", cerrarVentana);
        

        function cerrarVentana(){
            evidences[i].style.opacity = '0';
            setTimeout(function (){  
                evidences[i].style.display = 'none';
            }, 600);
        }


    }

});

//---------------------End education button----------------------------





//--------------------Movimientos Pagina-----------------------------

document.addEventListener("DOMContentLoaded", function() { 
    var titleH1 = document.querySelectorAll('.title-h1');
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    

    function checkVisibility(){
        var scrollY = window.scrollY;
        if (scrollY <= 1 && windowWidth < 1150 && windowWidth > 550){
            buttonMenuFixed.style.opacity = '0';
            header.style.transform = 'translateX(0)';
            header.style.marginTop = '0';
        }else if (scrollY >= 0 && windowWidth > 1150 && windowWidth > 550){
            
        }else{
            header.style.transform = 'translateX(-200px)';                                      //TImer 
            all.style.marginLeft = '0';
                header.style.marginTop = '90px';
  
            
            setTimeout(function (){  
                buttonMenuFixed.style.opacity = '1';
            }, 1);
            
        }
        

        for (let i = 0; i < titleH1.length; i++){
            var boundingtitleH1 = titleH1[i].getBoundingClientRect();

            if (boundingtitleH1.top >= 0 && boundingtitleH1.top <= windowHeight - 100){
                titleH1[i].style.opacity = '1';
                titleH1[i].style.transform = 'translateX(0)';
                titleH1[i].style.filter = 'blur(0)';
            }
        }

    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', function() {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        checkVisibility();
     }); // Vuelve a verificar la visibilidad al cambiar el tamaño de la ventana
    checkVisibility();

    

});

//---------------Fin Movimientos Pagina----------------------