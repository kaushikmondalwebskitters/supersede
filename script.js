// https://kaushikmondalwebskitters.github.io/supersede/script.js

"use strict";

jQuery(document).ready(function ($) {

     // Smooth Scroll
     const lenis = new Lenis()
     lenis.on('scroll', (e) => {
         console.log(e)
     })
     function raf(time) {
         lenis.raf(time)
         requestAnimationFrame(raf)
     }
     requestAnimationFrame(raf)

    if ($('.building-manufacturing-slider').length) {
        $(".building-manufacturing-slider").slick({
            dots: true,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            //autoplay: true,
            //dots: true
            customPaging: function (slider, i) {
                var title = $(slider.$slides[i].innerHTML).find('div[data-title]').data('title');
                return '<a class="pager__item"> ' + title + ' </a>';
            },
        });
    }






    setTimeout(() => {
        $('.loader').addClass('isEnding')
    }, 3000);
})
