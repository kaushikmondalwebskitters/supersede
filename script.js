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
            // var banner = $(".supersede-home-banner");
            // var Tl = gsap.timeline();
            // gsap.set(banner, {
            //     opacity: 1
            // });
            // Tl.to(banner, {
            //     opacity: 0,
            // });
            // //scroll anim
            // ScrollTrigger.create({
            //     trigger: ".supersede-home-intro",
            //     start: "top 100%",
            //     end: "top 100%",
            //     animation: Tl,
            //     scrub: true,
            //     markers: true,
            // });

            gsap.to(".supersede-home-banner",{
                opacity: 0 ,
                scrollTrigger:{
                    trigger: ".supersede-home-banner",
                    start: 'top 0',
                    end: 'bottom 10%',
                    scrub: true,
                    //markers: true,
                }
            });

            gsap.to(".supersede-home-banner-subtitle",{
                opacity: 0,
                yPercent: -36,
                scrollTrigger:{
                    trigger: ".supersede-home-banner",
                    start: 'top 0',
                    end: 'bottom 90%',
                    scrub: true,
                    //markers: true,
                }
            });

            gsap.to(".supersede-home-banner-title",{
                // opacity: 0,
                yPercent: -56,
                scrollTrigger:{
                    trigger: ".supersede-home-banner",
                    start: 'top 0',
                    end: 'bottom 50%',
                    scrub: true,
                   // markers: true,
                }
            });
        }

        if ($(".supersede-home-intro").length) {
            gsap.to(".supersede-tag-in",{
                // opacity: 0,
                yPercent: -56,
                scrollTrigger:{
                    trigger: ".supersede-tag-in",
                    start: 'top bottom',
                    end: 'bottom 50%',
                    scrub: true,
                   // markers: true,
                }
            });

            gsap.to(".supersede_sticky_box",{
                // opacity: 0,
                yPercent: -56,
                scrollTrigger:{
                    trigger: ".supersede_sticky_box",
                    start: 'top bottom',
                    end: 'bottom 50%',
                    scrub: true,
                   // markers: true,
                }
            });

            var specItem = $(".pt-column")
            var specItem = specItem.find(".pt-column-box");
            // var SpecTl = gsap.timeline();
            gsap.set(specItem, { 
                opacity: 0, 
                xPercent: -16,
            });

            gsap.to(specItem,{
                opacity: 1,
                xPercent: 0,
                scrollTrigger:{
                    trigger: specItem,
                    start: 'top center',
                    end: 'bottom 50%',
                    //scrub: true,
                   // markers: true,
                }
            });
        }
    }



    setTimeout(() => {
        $('.loader').addClass('isEnding');
        afterLoad();
    }, 1000);
})
