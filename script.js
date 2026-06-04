$(document).ready(function () {
//     window.addEventListener('DOMContentLoaded', () => {
//     const track = document.getElementById('marquee-track');
//     if (!track) return;

//     // 1. Double the items initially just to ensure the screen is filled comfortably
//     const initialItems = Array.from(track.children);
//     initialItems.forEach(item => {
//       const clone = item.cloneNode(true);
//       track.appendChild(clone);
//     });

//     // 2. Set scroll speed (higher number = faster movement)
//     const speed = 1; 
//     let scrollPos = 0;

//     function step() {
//       scrollPos += speed;
      
//       const firstChild = track.firstElementChild;
//       if (firstChild) {
//         // Calculate the exact width of the first item including its gap spacing
//         const itemWidth = firstChild.getBoundingClientRect().width;
//         const computedGap = parseFloat(window.getComputedStyle(track).gap) || 0;
//         const totalMoveThreshold = itemWidth + computedGap;

//         // If the first item has completely scrolled out of bounds on the left
//         if (scrollPos >= totalMoveThreshold) {
//           // Reset positioning tracker slightly to account for the threshold break
//           scrollPos -= totalMoveThreshold;
//           // Move the hidden first element directly to the end of the track
//           track.appendChild(firstChild);
//         }
//       }

//       // Smoothly push the track using an optimized CSS transform translate
//       track.style.transform = `translateX(-${scrollPos}px)`;
      
//       // Keep the native browser frame loop ticking endlessly
//       requestAnimationFrame(step);
//     }

//     // Start the infinite movement cycle
//     requestAnimationFrame(step);
//   });
  
    $('.case-carousel').owlCarousel({
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

    // About script
    $('.about-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
     navText: [
 `<div class="w-12 h-12 border border-gray-300 rounded-xl flex items-center justify-center">
      <i class="fa-solid fa-arrow-left text-xl"></i>
   </div>`,

  `<div class="w-12 h-12 border border-gray-300 rounded-xl flex items-center justify-center">
      <i class="fa-solid fa-arrow-right text-xl"></i>
   </div>`
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1025:{
            items:1
        }
    }
})
});