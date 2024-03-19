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



    function afterLoad() {


        if ($('[data-splitting]').length) {
            // splitting text
            Splitting({
                target: "[data-splitting]",
                by: "lines",
            });
            // splitting text end
        }

        // banner 
        if ($(".supersede-home-banner").length) {
            var banner = $(".supersede-home-banner");
            var Tl = gsap.timeline();
            gsap.set(banner, {
                opacity: 1
            });
            Tl.to(banner, {
                opacity: 0,
            });
            //scroll anim
            ScrollTrigger.create({
                trigger: ".supersede-home-intro",
                start: "top 100%",
                end: "bottom 50%",
                animation: Tl,
                scrub: 1.2,
                markers: true,
            });
        }
    }



    setTimeout(() => {
        $('.loader').addClass('isEnding');
        afterLoad();
    }, 3000);
})
