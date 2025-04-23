$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    fluidSpeed: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1.5,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2.5,
      },
      1200: {
        items: 2.2,
      },
    },
  });

  // For continuous smooth scrolling effect (optional)
  setInterval(function () {
    $(".owl-carousel").trigger("next.owl.carousel", [800]);
  }, 3000);
});


 const swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 20,
   loop: true,
//    autoplay:{
//      delay: 2000,
//      disableOnInteraction: false,
//    },
   
   speed: 300,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   breakpoints: {
     576: { slidesPerView: 1 },
     768: { slidesPerView: 2 },
     992: { slidesPerView: 3},
   },
 });

 $("#clientCarousel").owlCarousel({
   loop: true,
   margin: 30,
   nav: false,
//    autoplay: true,
//    autoplayTimeout: 2000,
   responsive: {
     0: { items: 2 },
     576: { items: 3 },
     768: { items: 4 },
     992: { items: 6 },
   },
 });
 const testimonialContainer = document.querySelector('.testimonial-container');
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');

    let currentIndex = 0;
    const totalTestimonials = testimonials.length;

   
    function updateSlider() {
      
      const offset = -currentIndex * 100;
      testimonialContainer.style.transform = `translateX(${offset}%)`;

     
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === totalTestimonials - 1;
    }


    nextButton.addEventListener('click', () => {
      if (currentIndex < totalTestimonials - 1) {
        currentIndex++;
        updateSlider();
      }
     
    });

    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
     
    });

    
    updateSlider(); 

