// https://kaushikmondalwebskitters.github.io/supersede/script.js

"use strict";

const responsive_size = 1024;
var isDekstop = true;
//detect device width
if (window.innerWidth <= responsive_size) {
    isDekstop = false;
    document.body.classList.add("mobileLayout");
}
const page_container = document.querySelector("[data-scroll-container]");
var loco_scroll;

var Webflow = Webflow || [];
Webflow.push(function () {
    //for desktop
    if (isDekstop) {
        loco_scroll = new LocomotiveScroll({
            el: page_container,
            smooth: true,
            class: "inviewport",
            reloadOnContextChange: true,
            offset: [0, 0],
            repeat: true,
            initPosition: { x: 0, y: 0 },
            direction: "vertical",
            getDirection: true,
            getSpeed: true,
            tablet: { breakpoint: 0, smooth: false },
            smartphone: { smooth: false },
        });
        loco_scroll.on("scroll", ScrollTrigger.update);
        ScrollTrigger.scrollerProxy(page_container, {
            scrollTop(value) {
                return arguments.length
                    ? loco_scroll.scrollTo(value, 0, 0)
                    : loco_scroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
            },
            pinType: page_container.style.transform ? "transform" : "fixed",
        });
        ScrollTrigger.addEventListener("refresh", () => loco_scroll.update());
        loco_scroll.stop();
    }
    function refresh() {
        if (isDekstop) {
            loco_scroll.update();
        }
        ScrollTrigger.update();
        ScrollTrigger.refresh();
    }
    refresh();

    window.addEventListener("resize", refresh);





    let mediaScreen = gsap.matchMedia();


    if ($('[data-click]').length) {
        const target = document.querySelector('#next');
        $("[data-click]").on('click', function () {
            loco_scroll.scrollTo(target);
        })
    }




    $(".new-cta-block-right .supersede-tertiary-btn").mouseenter(function () {
        $(".new-cta-logo").addClass('active')
    }).mouseleave(function () {
        $(".new-cta-logo").removeClass('active')
    });


    var lastScrollTop = 0;
    if (isDekstop) {
        loco_scroll.on("scroll", (e) => {
            var st = e.delta.y;
            if (st > 150) {
                jQuery('.supersede-header').addClass('scroll_nav');
            } else {
                jQuery('.supersede-header').removeClass('scroll_nav');
            }
            if (e.direction == "down") {
                // downscroll code
                jQuery(".supersede-header").addClass("hideNav");
            } else {
                // upscroll code
                jQuery(".supersede-header").removeClass("hideNav");
            }
            if (st <= window.innerHeight / 2) {
                // downscroll code
                jQuery(".supersede-header").removeClass("scroll_nav");
            }
            lastScrollTop = st;
        });
    }
    else {
        $(window).scroll(function (event) {
            var st = jQuery(window).scrollTop();
            if (st > lastScrollTop) {
                // downscroll code
                jQuery(".supersede-header").addClass("hideNav");
            } else {
                // upscroll code
                jQuery(".supersede-header").removeClass("hideNav");
            }
            if (st > 150) {
                jQuery('.supersede-header').addClass('scroll_nav');
            } else {
                jQuery('.supersede-header').removeClass('scroll_nav');

            }
            if (st < 50) {
                jQuery(".supersede-header").removeClass("hideNav");
            }
            if (st <= window.innerHeight / 2) {
                // downscroll code
                jQuery(".supersede-header").removeClass("scroll_nav");
            }
            lastScrollTop = st;
        });
    }
    //show menu on scroll up




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

    if ($(".marine-half-slider").length) {
        $(".marine-half-slider").slick({
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            //autoplay: true,
            dots: true
        })
    }


    // marine page clip slider
    // if ($(['marine-scroll-slider']).length) {
    //     let content = $(".feature-slider-main-innr"),
    //         pinup = $(".feature-slider-wrap"),
    //         side_nav = $(".fea-dots-list"),
    //         prev_sl = 0;
    //     let $headline = content.children();
    //     let headlines = gsap.utils.toArray($headline);

    //     let totalDuration = headlines.length * 500,
    //         singleDuration = totalDuration / headlines.length;

    //     for (let m = 0; m < headlines.length; m++) {
    //         $("<li class='fea-itemm'></li>").appendTo(side_nav);
    //     }
    //     content.find(".feature-slider-item:eq(0)").addClass("active");
    //     side_nav.find(".fea-itemm:eq(0)").addClass("active");

    //     setTimeout(function () {

    //         ScrollTrigger.create({
    //             scroller: isDekstop ? page_container : window,
    //             trigger: pinup,
    //             start: "top top",
    //             end: "+=" + totalDuration,
    //             pin: true,
    //             scrub: 1.2
    //         });
    //         let timeline_sl = gsap.timeline();
    //         headlines.forEach((elem, i) => {
    //             timeline_sl = ScrollTrigger.create({
    //                 scroller: isDekstop ? page_container : window,
    //                 trigger: content,
    //                 start: "top -=" + singleDuration * i,
    //                 end: "+=" + singleDuration,
    //                 toggleActions: "play reverse play reverse",
    //                 onEnter: function () {
    //                     $headline.removeClass("active");
    //                     $(elem).addClass("active");
    //                     $headline.removeClass("prev next");
    //                     $(elem).prev().addClass("prev");
    //                     side_nav.find("li").removeClass("active");
    //                     side_nav.find("li:eq(" + i + ")").addClass("active");
    //                     prev_sl = i;
    //                 },
    //                 onEnterBack: function () {
    //                     $headline.removeClass("active");
    //                     $(elem).addClass("active");
    //                     $headline.removeClass("prev next");
    //                     $(elem).next().addClass("next");
    //                     side_nav.find("li").removeClass("active");
    //                     side_nav.find("li:eq(" + i + ")").addClass("active");
    //                     prev_sl = i;
    //                 }
    //             });
    //         });
    //         side_nav.find("li").each(function () {
    //             this.addEventListener("click", function (e) {
    //                 e.preventDefault();
    //                 let now_index = $(this).index();
    //                 if (prev_sl < now_index) {
    //                     window.scrollTo(
    //                         0,
    //                         document.documentElement.scrollTop +
    //                         singleDuration * Math.abs(now_index - prev_sl)
    //                     );
    //                 }
    //                 if (prev_sl > now_index) {
    //                     window.scrollTo(
    //                         0,
    //                         document.documentElement.scrollTop -
    //                         singleDuration * Math.abs(now_index - prev_sl)
    //                     );
    //                 }
    //             });
    //         });
    //     }, 100)
    // }



    function afterLoad() {
        ScrollTrigger.clearScrollMemory();
        window.history.scrollRestoration = "manual";
        window.scrollTo(0, 0);
        if (isDekstop) {
            loco_scroll.start();
        }



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
                    scroller: isDekstop ? page_container : window,
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
                    scroller: isDekstop ? page_container : window,
                    trigger: ".supersede-home-banner",
                    start: 'top 0',
                    end: 'bottom 90%',
                    scrub: true,
                    //markers: true,
                }
            });

            gsap.to(".new-home-btn", {
                opacity: 0,
                yPercent: -36,
                scrollTrigger: {
                    scroller: isDekstop ? page_container : window,
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
                    scroller: isDekstop ? page_container : window,
                    trigger: ".supersede-home-banner",
                    start: 'top 0',
                    end: 'bottom 50%',
                    scrub: true,
                    // markers: true,
                }
            });
        }

        if ($(".supersede-home-banner-env").length) {
            gsap.to(".supersede-home-banner-overlay-inner", {
                yPercent: -5,
                scrollTrigger: {
                    scroller: isDekstop ? page_container : window,
                    trigger: ".supersede-home-banner-env",
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
                    scroller: isDekstop ? page_container : window,
                    trigger: ".supersede-tag-in",
                    start: 'top bottom',
                    end: 'bottom 50%',
                    scrub: true,
                    // markers: true,
                }
            });

            // gsap.to(".supersede_sticky_box", {
            //     yPercent: -30,
            //     scrollTrigger: {
            //         trigger: ".supersede_sticky_box",
            //         start: 'top bottom',
            //         end: 'bottom 50%',
            //         scrub: true,
            //     }
            // });

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
                scroller: isDekstop ? page_container : window,
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

            // gsap.to(introducingSec, {
            //     yPercent: -56,
            //     scrollTrigger: {
            //         trigger: introducingSec,
            //         start: 'top bottom',
            //         end: 'bottom 50%',
            //         scrub: true,
            //     }
            // });

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
                yPercent: 55,
                ease: "none",
                scrollTrigger: {
                    scroller: isDekstop ? page_container : window,
                    trigger: ".supersede-info-wrapper",
                    start: 'top 100%',
                    end: 'bottom 100%',
                    scrub: true

                    // markers: true,
                }
            });



        }

        if ($(".new-cta-logo").length) {
            gsap.set(".new-cta-logo", { yPercent: 60, });
            gsap.to(".new-cta-logo", {
                yPercent: 0,
                scrollTrigger: {
                    scroller: isDekstop ? page_container : window,
                    trigger: ".new-cta-block",
                    start: 'top 100%',
                    end: 'bottom 100%',
                    scrub: true,
                    // markers: true,
                }
            });
        }

        if ($(".supersede-footer-inner").length) {
            gsap.set(".ftr-btm-graphics", { yPercent: 22, });
            gsap.to(".ftr-btm-graphics", {
                yPercent: 0,
                scrollTrigger: {
                    scroller: isDekstop ? page_container : window,
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
                    scroller: isDekstop ? page_container : window,
                    trigger: ".new-cta-block",
                    start: 'top 100%',
                    end: 'bottom 50%',
                    scrub: true,
                    // markers: true,
                }
            });

            var onSec = document.querySelector(".building-manufacturing-ftr")

            gsap.to(onSec, {
                scrollTrigger: {
                    scroller: isDekstop ? page_container : window,
                    trigger: onSec,
                    start: 'top 80%',
                    end: 'bottom top',
                    scrub: true,
                    // markers: true,
                    toggleActions: "play reverse",
                    onEnter() {
                        onSec.classList.add('active');
                    },
                    onLeave() {
                        onSec.classList.remove('active');
                    },
                    onEnterBack() {
                        onSec.classList.add('active');
                    },
                    onLeaveBack() {
                        onSec.classList.remove('active');
                    }
                }
            });


        }


        if ($(".supersede-video-block").length) {

            var element = document.querySelector(".supersede-video-block-inner");
            // gsap.to(".supersede-video-wrap", {
            //     y: "-50vh",
            //     scrollTrigger: {
            //         trigger: element,
            //         pin: true,
            //         pinSpacing: false,
            //         start: "top 0",
            //         end: "+=50%",
            //         scrub: true,
            //         // markers: true, 
            //         onUpdate: (self) => {
            //             if (self.progress > 0.5) {
            //                 element.classList.add('active');
            //             } else {
            //                 element.classList.remove('active');
            //             }
            //         }
            //     }
            // })

            // const  CAA = () => {
            //    element.style.height = `${window.innerHeight * 2}px`
            // };
            // CAA(), window.addEventListener("resize", CAA);
            //, gsap.matchMedia().add("(min-width: 991px)", () => {})

            gsap.to(".supersede-video-item-f", {
                y: "-50vh",
                scrollTrigger: {
                    scroller: isDekstop ? page_container : window,
                    trigger: element,
                    pin: true,
                    start: "top top",
                    end: "+=60%",
                    scrub: true,
                    onUpdate: (self) => {
                        if (self.progress > 0.5) {
                            element.classList.add('active');
                        } else {
                            element.classList.remove('active');
                        }
                    },
                    onComplete: () => {
                        ScrollTrigger.refresh(true);
                    }
                }
            })
        }

        if ($(".reveal").length) {
            var reveal = gsap.utils.toArray(".reveal > *");
            reveal.forEach((elem, i) => {
                ScrollTrigger.create({
                    scroller: isDekstop ? page_container : window,
                    trigger: elem,
                    start: "top 80%",
                    end: "top 20%",
                    //toggleActions: "play reverse",
                    onEnter() {
                        elem.classList.add('play-reveal');
                    }
                });
            })
        }

        if ($(".anim-sp").length) {
            var itemColumnMarine = $(".sb-block-marine-column");
            var panel = $(".p-panel");
            var greenCircleMarine = itemColumnMarine.find(".sb-block-marine-sep-circle");
            var lineMarine = itemColumnMarine.find(".sb-block-marine-sep-line");
            var topTitle = itemColumnMarine.find(".sb-block-marine-top-heading");
            var mFooter = itemColumnMarine.find(".sb-block-marine-footer");
    
            var marineTl = gsap.timeline();
            gsap.set([greenCircleMarine, topTitle, mFooter], { opacity: 0, });
            gsap.set(lineMarine, { width: 0, });
            gsap.set(greenCircleMarine, { scale: 0, });
            gsap.set(mFooter, { y: 25, });
    
            itemColumnMarine.each(function (i) {
                marineTl
                    .to(greenCircleMarine.eq(i),
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.6,
                            ease: "Back.easeOut",
                        })
                    .to(lineMarine.eq(i),
                        {
                            width: "100%",
                        }, "<")
                    .to(topTitle.eq(i),
                        {
                            opacity: 1,
                        }, "-=0.15")
                    .to(mFooter.eq(i),
                        {
                            opacity: 1,
                            y: 0,
                        })
            });
            marineTl.pause();
            ScrollTrigger.create({
                scroller: isDekstop ? page_container : window,
                trigger: ".sb-block-marine",
                start: "top center",
                end: "+=1%",
                //animation: marineTl,
                onUpdate: (self) => {
                    if (self.progress >= 0.95) {
                        if (!$(".sb-block-marine").hasClass("anim")) {
                            marineTl.timeScale(3.5).restart()
                        }
                        $(".sb-block-marine").addClass("anim");
                    } else if (self.progress < 0.95) {
                        if ($(".sb-block-marine").hasClass("anim")) {
                            marineTl.timeScale(5).reverse();
                        }
                        $(".sb-block-marine").removeClass("anim");
                    }
                },
                // markers: true,
            })
        }


    }



    setTimeout(() => {
        $('.loader').addClass('isEnding');
        afterLoad();
        $(".supersede-header").addClass('active')
    }, 1000);

    setTimeout(() => {
        if ($("[data-line]").length) {
            var reveal = gsap.utils.toArray("[data-line] > *");
            reveal.forEach((elem, i) => {
                ScrollTrigger.create({
                    scroller: isDekstop ? page_container : window,
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







    /*menu*/

    mediaScreen.add("(max-width: 991px)", () => {
        gsap.set("[menu-item]", {
            opacity: 0,
            xPercent: -100,
        });
        gsap.set(".supersede-nav-menu-wrapper", {
            opacity: 0,
            xPercent: -110,
        });
    })
    const nav_anim_sp = gsap.timeline({ pause: true });
    nav_anim_sp
        .to(".supersede-nav-menu-wrapper", {
            xPercent: 0,
            opacity: 1,
            duration: 0.6,
            ease: "Power2.easeOut",
        })
        .to(
            "[menu-item]",
            {
                opacity: 1,
                xPercent: 0,
                stagger: 0.1,
                duration: 1,
                ease: "Power3.easeOut",
            },
            "-=0.2"
        )
        .pause();
    $(".menu-toggle-sp").on("click", function (e) {
        e.preventDefault();
        if ($(this).hasClass("w--open")) {
            nav_anim_sp.reverse(1.5).then(() => {
                $(this).removeClass("w--open");
                $("body").removeClass("open-nav");
                $("html").removeClass("open-nav");
            });
        } else {
            $(this).addClass("w--open");
            $("body").addClass("open-nav");
            $("html").addClass("open-nav");
            nav_anim_sp.restart();
        }
    });
    /*menu*/
    // })



});
