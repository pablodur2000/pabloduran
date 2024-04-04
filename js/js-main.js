var intro = document.querySelectorAll('.intro');
var body = document.getElementById("body");
var introH1 = document.getElementById("pablo-duran-intro-h1");
body.style.overflowY = 'scroll';

document.addEventListener("DOMContentLoaded", function() {
    
    setTimeout(function (){  
        document.body.scrollIntoView(true);

    }, 150);
    

    setTimeout(function (){  
        introH1.style.top = '2%';
        introH1.style.left = '2%'
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
    }, 4500);
});



$(document).ready(function(){
    var ir_a = $(".desplazar");  //Declaramos variable ir_a y le decimos que su valor es la clase .desplazar

    ir_a.click(function(event){   //cuando se haga click a ir_a, se ejecutará la funcion con evento 
        event.preventDefault();    //previene configuraciones default

        $("body, html").animate({   //.animate es de jquery
            scrollTop: $(this.hash).offset().top  // 
        },800);

    })
});


//--------------------Projects-------------------------
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

    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    for (let i = 0; i < imgMenu.length; i++){
        liMenu[i].addEventListener('mouseenter', function() {
            imgMenu[i].style.filter = 'brightness(1)';

        });
    
        liMenu[i].addEventListener('mouseleave', function() {
        // Se ejecuta cuando el mouse sale del elemento
            imgMenu[i].style.filter = 'brightness(0)';
        });
    }

    function checkVisibility(){

        imgMenu.forEach(img => {                    //desactivo todos los elementos del menu
            img.style.filter = 'brightness(0)';
        });



        liMenu.forEach(li => {                    //desactivo todos los elementos del menu
            li.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        });

        for (let i = 0; i < imgMenu.length; i++){
  
                var boundingContainer = container[i].getBoundingClientRect();
                var iAnt = i - 1;

            if (boundingContainer.top >= 0 && boundingContainer.top <= windowHeight - 500){
                
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




//--------------------Movimientos Pagina-----------------------------

document.addEventListener("DOMContentLoaded", function() { 
    var titleH1 = document.querySelectorAll('.title-h1');

    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    function checkVisibility(){


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