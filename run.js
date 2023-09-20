
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed:3000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint:1000,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 400,
            settings: {
                slidesToShow:2
            }
        }, {
            breakpoint: 250,
            settings: {
                slidesToShow:1
            }
        }]
    });
});