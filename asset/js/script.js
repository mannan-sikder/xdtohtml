
/*===== MENU SHOW =====*/
/* Validate if constant exists */
const navMenu = document.getElementById('nav-menu'), 
      navToggle = document.getElementById('nav-toggle'),
      navList = document.getElementById('navList'),
      navClose = document.getElementById('nav-close')  

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
 if(navToggle){
     navToggle.addEventListener( 'click', ()=>{
         navMenu.classList.add('show-menu')
         navToggle.classList.add('disable')
         navList.classList.add('C_flex')
         navClose.style.display = "block";
         
     })
 }

/*==================== REMOVE MENU MOBILE ====================*/
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
         navToggle.classList.remove('disable')
         navList.classList.remove('C_flex')
         navClose.style.display = "none";
    })
}
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
    navToggle.classList.remove('disable')
}


/*============ modal ================ */
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_btn")[0];

// When the user clicks the button, open the modal 
if(btn){
     btn.addEventListener( 'click', ()=>{
        modal.style.display = "block";
        span.style.display = "block";
     })
 }

 if (span) {
   span.addEventListener('click', ()=>{
  modal.style.display = "none";
  btn.style.display = "block";
  span.style.display = "none";
   })
 }
// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it




/*==================== Slider ====================*/




var owl = $('#category_slider');
    owl.owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        margin:10,
        responsive:{
            0:{
                items:4,
            },
            600:{
                items:4,
            
            },            
            960:{
                items:6,
        
            },
            1200:{
                items:8,
            }
        }
    });

//     var owl = $('#owl-two');
//     owl.owlCarousel({
//         loop:true,
//         nav:false,
//         dots:false,
//         margin:10,
//         responsive:{
//             0:{
//                 items:5,
//             },
//             600:{
//                 items:8,
            
//             },            
//             960:{
//                 items:10,
        
//             },
//             1200:{
//                 items:12,
//             }
//         }
//     });

    // swiper slider


	