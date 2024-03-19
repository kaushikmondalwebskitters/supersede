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
        let page_container = document.querySelector('.supersede-body');
        //// dynamic text animation -- by lines
        if ($("[data-char='intro']").length) {
            $("[data-char='intro']").each(function () {
                let els = $(this);
                let txt_target2 = els.find(".word_wrapper");
                let txt_target3 = els.find(".word");
                gsap.to(els, 0.5, {
                    scrollTrigger: {
                        trigger: els,
                        start: "top bottom",
                        end: "bottom bottom",
                        scroller: page_container,
                        scrub: false,
                        //  markers: true,
                    },
                    onComplete: function () {
                        gsap.to(txt_target2, 1, {
                            scaleY: 1,
                            yPercent: 0,
                            rotationX: 0,
                            stagger: 0.05,
                            transformOrigin: "center bottom",
                            transformStyle: "preserve-3d",
                            ease: Power3.easeOut,
                        });
                        gsap.to(txt_target3, 1, {
                            opacity: 1,
                        });
                    },
                });
            });
        }
    }

afterLoad();

    setTimeout(() => {
        $('.loader').addClass('isEnding');
        
    }, 3000);
})
