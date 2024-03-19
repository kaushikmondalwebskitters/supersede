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


        if ($('[data-split="line"]').length) {
            const splitLines = new SplitText('[data-split="line"]', {
                type: "lines",
                linesClass: "line line++"
            });

            jQuery('[data-split="line"] .line').wrap('<div class="line-wrapper">');

            gsap.utils.toArray(".line").forEach((el) => {
                gsap.from(el, {
                    yPercent: 200,
                    duration: 1,
                    ease: "power4",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 60%"
                        //toggleActions: "play none none reverse"
                    }
                });
            });
        }
    }



    setTimeout(() => {
        $('.loader').addClass('isEnding');
        afterLoad();
    }, 3000);
})
