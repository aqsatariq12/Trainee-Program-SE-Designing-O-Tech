$(document).ready(function () {
    $('.case-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
    $('.test-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
            '<i class="fa-solid fa-arrow-left"></i>',
            '<i class="fa-solid fa-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1025: {
                items: 2
            }
        }
    });
    $('.team-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
            '<i class="fa-solid fa-arrow-left"></i>',
            '<i class="fa-solid fa-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            643:{
                items:3
            },
            1025: {
                items: 4
            }
        }
    });
});