$(document).ready(function () {
    new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,


        speed: 300,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            576: {slidesPerView: 1},
            768: {slidesPerView: 2},
            992: {slidesPerView: 3},
        },
    });

    $("#clientCarousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {items: 2},
            576: {items: 3},
            768: {items: 4},
            992: {items: 6},
        },
    });


    const sliderSection = document.querySelector('.slider-container');
    const sliderItems = document.querySelectorAll('.slider-container .item');
    const totalItems = sliderItems.length;

    gsap.set(sliderItems, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        opacity: 1,
        x: "50%"
    });

    gsap.set(sliderItems[0], {
        opacity: 1,
        x: 0
    });

    ScrollTrigger.create({
        trigger: ".slider-container",
        start: "top center",
        end: "+=" + (totalItems * 100) + "%",
        scrub: 0.5,
        markers: false,
        pin: true,
        onUpdate: function (self) {
            const progress = self.progress;

            const currentImageIndex = Math.min(Math.floor(progress * totalItems), totalItems - 1);

            const fractionalProgress = (progress * totalItems) - currentImageIndex;

            sliderItems.forEach((item, index) => {
                if (index === currentImageIndex) {
                    gsap.to(item, {
                        opacity: 1,
                        x: -fractionalProgress * 50 + "%",
                        duration: 0.1,
                        overwrite: "auto"
                    });
                } else if (index === currentImageIndex + 1) {
                    gsap.to(item, {
                        opacity: 1,
                        x: (1 - fractionalProgress) * 50 + "%",
                        duration: 0.1,
                        overwrite: "auto"
                    });
                } else if (index < currentImageIndex) {
                    gsap.set(item, {
                        opacity: 1,
                        x: "-100%"
                    });
                } else {
                    gsap.set(item, {
                        opacity: 1,
                        x: "100%"
                    });
                }
            });
        }
    });

});
