// navbar scripat
var bar = document.querySelector('.bar');
var wrongicon = document.querySelector('.wrong_icon');
var custum_navbar = document.querySelector('.custum_navbar');
let nav = document.querySelector('nav');

bar.addEventListener('click', ()=> {
    custum_navbar.classList.add('active');
    custum_navbar.classList.remove('active-one');
    bar.style.display = "none"
    wrongicon.style.display = "block"
});
wrongicon.addEventListener('click', ()=> {
    custum_navbar.classList.add('active-one');
    custum_navbar.classList.remove('active');
    wrongicon.style.display = "none"
    bar.style.display = "block"
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        nav.classList.add('nav_scroll');
    }else{
        nav.classList.remove('nav_scroll');
    }
}); 
// end navbar scripat

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,    
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
        loop:true,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      420: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });