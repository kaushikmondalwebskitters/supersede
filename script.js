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

            mySplitText = new SplitText('[data-splitting]', {type:"words"}),
            splitTextTimeline = gsap.timeline();
        
            gsap.set('[data-splitting]', {perspective:400});

            splitTextTimeline.from(mySplitText.lines, { 
                duration: 0.5, 
                opacity: 0, 
                rotationX: -120, 
                force3D: true, 
                transformOrigin: "top center -150", 
                stagger: 0.1 
            });
            // splitting text end
        }
    }



    setTimeout(() => {
        $('.loader').addClass('isEnding');
        afterLoad();
    }, 3000);
})
