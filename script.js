// https://kaushikmondalwebskitters.github.io/supersede/script.js

"use strict";

jQuery(document).ready(function ($) {

    $(".new-cta-block-right .supersede-tertiary-btn").mouseenter(function() {
        $(".new-cta-logo").addClass('active')
    }).mouseleave(function() {
        $(".new-cta-logo").removeClass('active')
    });

    function stickey_nav() {
        if (jQuery(window).scrollTop() > 150) {
            jQuery('.supersede-header').addClass('scroll_nav');
        } else {
            jQuery('.supersede-header').removeClass('scroll_nav');
        }
    }
    $(window).scroll(function () {
        // sticky function call
        stickey_nav();
    });
    //show menu on scroll up

    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            // downscroll code
            $(".supersede-header").addClass("hideNav");
        } else {
            // upscroll code
            $(".supersede-header").removeClass("hideNav");
        }
        if (st <= window.innerHeight / 2) {
            // downscroll code
            $(".supersede-header").removeClass("scroll_nav");
        }
        lastScrollTop = st;
    });

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
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            //autoplay: true,
            //dots: true
            customPaging: function (slider, i) {
                var title = $(slider.$slides[i].innerHTML).find('div[data-title]').data('title');
                return '<a class="pager__item"> ' + title + ' </a>';
            },
        })
    }



    function afterLoad() {




        if ($('[data-splitting]').length) {
            // splitting text
            // Splitting({
            //     target: "[data-splitting]",
            //     by: "lines",
            // });

            Splitting({
                target: "[data-splitting]",
                by: 'lines'
            })

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

            gsap.to(".supersede-home-banner", {
                opacity: 0,
                scrollTrigger: {
                    trigger: ".supersede-home-banner",
                    start: 'top 0',
                    end: 'bottom 30%',
                    scrub: true,
                    //markers: true,
                }
            });

            gsap.to(".supersede-home-banner-subtitle", {
                opacity: 0,
                yPercent: -36,
                scrollTrigger: {
                    trigger: ".supersede-home-banner",
                    start: 'top 0',
                    end: 'bottom 90%',
                    scrub: true,
                    //markers: true,
                }
            });

            gsap.to(".supersede-home-banner-title", {
                // opacity: 0,
                yPercent: -56,
                scrollTrigger: {
                    trigger: ".supersede-home-banner",
                    start: 'top 0',
                    end: 'bottom 50%',
                    scrub: true,
                    // markers: true,
                }
            });
        }

        if ($(".supersede-home-intro").length) {

            // gsap.set(".supersede-home-intro", {
            //     opacity: 0.55,
            // });

            // gsap.to(".supersede-home-intro", {
            //     opacity: 1,
            //     scrollTrigger: {
            //         trigger: ".supersede-home-intro",
            //         start: 'top bottom',
            //         end: 'bottom 50%',
            //         scrub: true,
            //     }
            // });

            gsap.to(".supersede-tag-in", {
                // opacity: 0,
                yPercent: -56,
                scrollTrigger: {
                    trigger: ".supersede-tag-in",
                    start: 'top bottom',
                    end: 'bottom 50%',
                    scrub: true,
                    // markers: true,
                }
            });

            gsap.to(".supersede_sticky_box", {
                // opacity: 0,
                yPercent: -56,
                scrollTrigger: {
                    trigger: ".supersede_sticky_box",
                    start: 'top bottom',
                    end: 'bottom 50%',
                    scrub: true,
                    // markers: true,
                }
            });

            var specItem = $(".pt-column")
            var greenCircle = specItem.find(".green-white-circle");
            var line = specItem.find(".white-line");
            var ptElem = specItem.find(".pt");
            // var specItem = specItem.find(".pt-column-box");

            var specTl = gsap.timeline();
            gsap.set([greenCircle, ptElem], { opacity: 0, });
            gsap.set(line, { width: 0, });
            gsap.set(greenCircle, { scale: 0, });


            specItem.each(function (i) {
                specTl
                    .to(greenCircle.eq(i),
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.6,
                            ease: "Back.easeOut",
                        })
                    .to(line.eq(i),
                        {
                            width: "100%",
                        }, "<")
                    .to(ptElem.eq(i),
                        {
                            opacity: 1,
                        }, "-=0.15")
            });

            specTl.pause();

            ScrollTrigger.create({
                trigger: ".fig_points",
                start: "top 60%",
                end: "+=1%",
                onUpdate: (self) => {
                    if (self.progress >= 0.95) {
                        specTl.timeScale(3.5).restart()
                    } else if (self.progress < 0.95) {
                        specTl.timeScale(5).reverse();
                    }
                },
                // markers: true,
            });

            var introducingSec = $(".supersede-home-introducing");
            var subTitle = introducingSec.find('.supersede-subtitle');
            var title = introducingSec.find('.supersede-int-title');
            var titleHed = introducingSec.find('.supersede-int-head-heading');
            var intButton = introducingSec.find('.supersede-home-introducing-head-btn');
            var specIntroTl = gsap.timeline();

            gsap.to(introducingSec, {
                // opacity: 0,
                yPercent: -56,
                scrollTrigger: {
                    trigger: introducingSec,
                    start: 'top bottom',
                    end: 'bottom 50%',
                    scrub: true,
                    // markers: true,
                }
            });

            // gsap.set([subTitle, title, titleHed, intButton], {
            //     opacity: 0,
            //     yPercent: 66,
            // });

            // specIntroTl.to(subTitle, {
            //     opacity: 1,
            //     yPercent: 0,
            //     duration: 0.6,
            // }).to(title, {
            //     opacity: 1,
            //     yPercent: 0,
            //     duration: 0.6,
            // }).to(titleHed, {
            //     opacity: 1,
            //     yPercent: 0,
            //     duration: 0.6,
            // }).to(intButton, {
            //     opacity: 1,
            //     yPercent: 0,
            //     duration: 0.6,
            // })
            // specIntroTl.pause();

            // ScrollTrigger.create({
            //     trigger: introducingSec,
            //     start: "top bottom",
            //     end: "bottom 50%",
            //     onUpdate: (self) => {
            //         if (self.progress >= 0.95) {
            //             specIntroTl.timeScale(3.5).restart()
            //         } else if (self.progress < 0.95) {
            //             specIntroTl.timeScale(5).reverse();
            //         }
            //     },
            // });

            gsap.to(".sd-logo", {
                // opacity: 0,
                yPercent: 56,
                scrollTrigger: {
                    trigger: ".supersede-info-wrapper",
                    start: 'top 100%',
                    end: 'bottom 100%',
                    scrub: true,
                    // markers: true,
                }
            });



        }



        if ($(".supersede-video-block").length) {
            var reveal = gsap.utils.toArray(".supersede-video-block > *");
            reveal.forEach((elem, i) => {
                ScrollTrigger.create({
                    trigger: elem,
                    start: "top -50%",
                    end: "+=5%",
                    toggleActions: "play reverse",
                    onEnter() {
                        elem.classList.add('active');
                    },
                    onEnterBack() {
                        elem.classList.remove('active');
                    }
                });
            })
        }


        if ($(".new-cta-logo").length) {
            gsap.set(".new-cta-logo", { yPercent: 60, });
            gsap.to(".new-cta-logo", {
                yPercent: 0,
                scrollTrigger: {
                    trigger: ".new-cta-block",
                    start: 'top 100%',
                    end: 'bottom 100%',
                    scrub: true,
                    // markers: true,
                }
            });
        }

        if ($(".supersede-footer-inner").length) {
            // gsap.set(".supersede-footer-inner", { yPercent: 22, });
            gsap.set(".ftr-btm-graphics", { yPercent: 22, });
            gsap.to(".ftr-btm-graphics", {
                yPercent: 0,
                scrollTrigger: {
                    trigger: ".supersede-footer",
                    start: 'top 100%',
                    end: 'bottom 0',
                    scrub: true,
                }
            });
        }

        if ($(".building-manufacturing-block").length) {
            gsap.to(".building-manufacturing-block", {
                // opacity: 0,
                yPercent: 10,
                scrollTrigger: {
                    trigger: ".new-cta-block",
                    start: 'top 100%',
                    end: 'bottom 50%',
                    scrub: true,
                    // markers: true,
                }
            });
        }





    }



    setTimeout(() => {
        $('.loader').addClass('isEnding');
        afterLoad();
    }, 1000);

    setTimeout(() => {
        if ($("[data-line]").length) {
            var reveal = gsap.utils.toArray("[data-line] > *");
            reveal.forEach((elem, i) => {
                ScrollTrigger.create({
                    trigger: elem,
                    start: "top 100%",
                    end: "top 100%",
                    toggleActions: "play reverse",
                    onEnter() {
                        elem.classList.add('active');
                    }
                });
            })
        }
    }, 2000);
})
