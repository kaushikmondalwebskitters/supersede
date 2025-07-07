"use strict";
const responsive_size = 1024;
var loco_scroll, isDekstop = !0;
window.innerWidth <= 1024 && (isDekstop = !1, document.body.classList.add("mobileLayout"));
const page_container = document.querySelector("[data-scroll-container]");
var Webflow = Webflow || [];
Webflow.push(function () {
    // setTimeout(() => {
    //     loco_scroll.update(), ScrollTrigger.update(), ScrollTrigger.refresh();
    // }, 6000);
    function e() {
        isDekstop && loco_scroll.update(), ScrollTrigger.update()
    }
    isDekstop && ((loco_scroll = new LocomotiveScroll({
        el: page_container,
        smooth: !0,
        class: "inviewport",
        reloadOnContextChange: !0,
        offset: [0, 0],
        repeat: !0,
        initPosition: {
            x: 0,
            y: 0
        },
        direction: "vertical",
        getDirection: !0,
        getSpeed: !0,
        tablet: {
            breakpoint: 0,
            smooth: !1
        },
        smartphone: {
            smooth: !1
        }
    })).on("scroll", ScrollTrigger.update), ScrollTrigger.scrollerProxy(page_container, {
        scrollTop(e) {
            return arguments.length ? loco_scroll.scrollTo(e, 0, 0) : loco_scroll.scroll.instance.scroll.y
        },
        getBoundingClientRect: () => ({
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        }),
        pinType: page_container.style.transform ? "transform" : "fixed"
    }), ScrollTrigger.addEventListener("refresh", () => loco_scroll.update()), loco_scroll.stop()), e(), window.addEventListener("resize", e);
    let t = gsap.matchMedia();
    if ($("[data-click]").length) {
        let r = document.querySelector("#next");
        $("[data-click]").on("click", function () {
            loco_scroll.scrollTo(r)
        })
    }
    $(".new-cta-block-right .supersede-tertiary-btn").mouseenter(function () {
        $(".new-cta-logo").addClass("active")
    }).mouseleave(function () {
        $(".new-cta-logo").removeClass("active")
    });

    $(".new-cta-block-right .updated-def-btn").mouseenter(function () {
        $(".new-cta-logo").addClass("active")
    }).mouseleave(function () {
        $(".new-cta-logo").removeClass("active")
    });

    // accordion js
    $(".prd-accordion-collection-item:first .prd-accordion-box ").addClass("open");
    $(".prd-accordion-collection-item:first .prd-accordion-box .prd-accordion-content").slideDown();
    if ($(".prd-accordion-toggle").length) {
        $('.prd-accordion-toggle').on('click', function () {
            $(this).parent().toggleClass('open');
            $(this).next().stop(true, true).slideToggle();
            $(".prd-accordion-toggle").not(this).parent().removeClass('open');
            $(".prd-accordion-toggle").not(this).next().slideUp();
            setTimeout(() => {
                loco_scroll.update(), ScrollTrigger.refresh();
            }, 400);
        });
    }

    $(".m-board-sec .m-board-sec-item:first .m-board-sec-item-bx").addClass("open");
    $(".m-board-sec .m-board-sec-item:first .m-board-sec-item-bx .m-board-accordion-content").slideDown();
    if ($(".m-board-sec .m-board-accordion-toggle").length) {
        $('.m-board-sec .m-board-accordion-toggle').on('click', function () {
            $(this).parent().toggleClass('open');
            $(this).next().stop(true, true).slideToggle();
            $(".m-board-sec .m-board-accordion-toggle").not(this).parent().removeClass('open');
            $(".m-board-sec .m-board-accordion-toggle").not(this).next().slideUp();
            setTimeout(() => {
                loco_scroll.update(), ScrollTrigger.refresh();
            }, 300);
        });
    }

    $(".m-board-sec-cmp .m-board-sec-item:first .m-board-sec-item-bx").addClass("open");
    $(".m-board-sec-cmp .m-board-sec-item:first .m-board-sec-item-bx .m-board-accordion-content").slideDown();
    if ($(".m-board-sec-cmp .m-board-accordion-toggle").length) {
        $('.m-board-sec-cmp .m-board-accordion-toggle').on('click', function () {
            $(this).parent().toggleClass('open');
            $(this).next().stop(true, true).slideToggle();
            $(".m-board-sec-cmp .m-board-accordion-toggle").not(this).parent().removeClass('open');
            $(".m-board-sec-cmp .m-board-accordion-toggle").not(this).next().slideUp();
            setTimeout(() => {
                loco_scroll.update(), ScrollTrigger.refresh();
            }, 300);
        });
    }

    if ($("#cal-heightaccr").length) {
        $('.tmb-accordion-block .tmb-accordion-toggle').on('click', function () {
            $(this).parent().toggleClass('open');
            $(this).next().stop(true, true).slideToggle();
            $(".tmb-accordion-block .tmb-accordion-toggle").not(this).parent().removeClass('open');
            $(".tmb-accordion-block .tmb-accordion-toggle").not(this).next().slideUp();
            setTimeout(() => {
                loco_scroll.update(), ScrollTrigger.refresh();
            }, 300);
        });
    }

    if ($("#cal-offheightaccr").length) {
        $('.tmb-accordion-block .tmb-accordion-toggle').on('click', function () {
            $(this).parent().toggleClass('open');
            $(this).next().stop(true, true).slideToggle();
            $(".tmb-accordion-block .tmb-accordion-toggle").not(this).parent().removeClass('open');
            $(".tmb-accordion-block .tmb-accordion-toggle").not(this).next().slideUp();
        });
    }

    $('.job-category-collection-item').each(function () {
        const $item = $(this);
        if ($item.find('.job-data .w-dyn-empty').length > 0) {
            $item.addClass('hide');
        }
    });

    alert('log')

    if ($(".job-category-collection-list-wrapper").length) {
        $(".job-category-collection-item:first").addClass("open");
        $(".job-category-collection-item:first .job-data").slideDown(function () {
            loco_scroll.update();
            ScrollTrigger.refresh();
        });
        // $('.job-category-header').on('click', function () {
        //     $(this).parent().toggleClass('open');
        //     $(this).next().stop(true, true).slideToggle();
        //     $(".job-category-header").not(this).parent().removeClass('open');
        //     $(".job-category-header").not(this).next().slideUp();
        //     setTimeout(() => {
        //         loco_scroll.update(), ScrollTrigger.refresh();
        //     }, 300);
        // });
        $('.job-category-header').on('click', function () {
            const $current = $(this);
            const $currentContent = $current.next();
            const $others = $(".job-category-header").not(this);

            $current.parent().toggleClass('open');
            $currentContent.stop(true, true).slideToggle();

            $others.parent().removeClass('open');
            const $othersContent = $others.next().stop(true, true).slideUp();

            // Wait for all slide animations to finish
            $.when($currentContent, $othersContent).promise().done(function () {
                loco_scroll.update();
                ScrollTrigger.refresh();
            });
        });
    }

    // Create a new IntersectionObserver instance
    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            // Check if the section is in the viewport
            if (entry.isIntersecting) {
                var $section = $(entry.target);
                var width = $section.data('width');

                // Animate the width and add the percentage text
                $section.animate({ width: width }, 2500);
                $section.after('<span class="perc">' + width + '</span>');

                // Fade in the percentage after a delay
                $('.perc').delay(3000).fadeIn(1000);

                // Stop observing the section after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Trigger when at least 50% of the section is visible

    // Target sections to observe
    $('.spec-prg-item-prg > div').each(function () {
        observer.observe(this);
    });

    // $('.spec-progressbar-block .m-board-accordion-content-tab-link.nwrp').on('click', function(){
    //     setTimeout(() => {
    //         loco_scroll.update(), ScrollTrigger.refresh();
    //     }, 100);
    // })



    // $('.arc-exp-btn-tigger').on('click', function(){
    //     $(this).closest(".prd-accordion-box").find('.prd-modal').addClass('open-opoup');
    //     $('body').addClass('open-opoup-body');
    //     loco_scroll.stop();
    // })

    function modalOpen(d) {
        $('body').addClass('open-opoup-body');
        $(d).addClass('open-opoup');
        loco_scroll.stop();
    }

    $('[data-modal]').on('click', function () {
        let targetModalId = $(this).attr('data-modal');
        let targetModal = $('[data-id="' + targetModalId + '"]');
        modalOpen(targetModal)
    })

    $('.prd-modal-close').on('click', function () {
        $(this).closest('.prd-modal').removeClass('open-opoup');
        $('body').removeClass('open-opoup-body');
        loco_scroll.start();
    })


    var s = 0;
    isDekstop ? loco_scroll.on("scroll", e => {
        var t = e.delta.y;
        t > 150 ? jQuery(".supersede-header").addClass("scroll_nav") : jQuery(".supersede-header").removeClass("scroll_nav"), "down" == e.direction ? jQuery(".supersede-header").addClass("hideNav") : jQuery(".supersede-header").removeClass("hideNav"), t <= window.innerHeight / 2 && jQuery(".supersede-header").removeClass("scroll_nav"), s = t
    }) : $(window).scroll(function (e) {
        var t = jQuery(window).scrollTop();
        t > s ? jQuery(".supersede-header").addClass("hideNav") : jQuery(".supersede-header").removeClass("hideNav"), t > 150 ? jQuery(".supersede-header").addClass("scroll_nav") : jQuery(".supersede-header").removeClass("scroll_nav"), t < 50 && jQuery(".supersede-header").removeClass("hideNav"), t <= window.innerHeight / 2 && jQuery(".supersede-header").removeClass("scroll_nav"), s = t
    }), $(".building-manufacturing-slider").length && $(".building-manufacturing-slider").slick({
        dots: !0,
        arrows: !1,
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: !0,
        customPaging: function (e, t) {
            return '<a class="pager__item"> ' + $(e.$slides[t].innerHTML).find("div[data-title]").data("title") + " </a>"
        }
    }), $(".marine-half-slider").length && $(".marine-half-slider").slick({
        autoplay: !0,
        autoplaySpeed: 6e3,
        arrows: !0,
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: !0,
        dots: !0
    }), $(".lg-banner-slider").length && $(".lg-banner-slider").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        dots: false
    }), setTimeout(() => {
        $(".loader").addClass("isEnding"),
            function e() {
                if (ScrollTrigger.clearScrollMemory(), window.history.scrollRestoration = "manual", window.scrollTo(0, 0), isDekstop && loco_scroll.start(), $("[data-splitting]").length && Splitting({
                    target: "[data-splitting]",
                    by: "lines"
                }), $(".supersede-home-banner").length && (gsap.to(".supersede-home-banner", {
                    opacity: 0,
                    scrollTrigger: {
                        scroller: isDekstop ? page_container : window,
                        trigger: ".supersede-home-banner",
                        start: "top 0",
                        end: "bottom 30%",
                        scrub: !0
                    }
                }), gsap.to(".supersede-home-banner-subtitle", {
                    opacity: 0,
                    yPercent: -36,
                    scrollTrigger: {
                        scroller: isDekstop ? page_container : window,
                        trigger: ".supersede-home-banner",
                        start: "top 0",
                        end: "bottom 90%",
                        scrub: !0
                    }
                }), gsap.to(".new-home-btn", {
                    opacity: 0,
                    yPercent: -36,
                    scrollTrigger: {
                        scroller: isDekstop ? page_container : window,
                        trigger: ".supersede-home-banner",
                        start: "top 0",
                        end: "bottom 90%",
                        scrub: !0
                    }
                }), gsap.to(".supersede-home-banner-title", {
                    yPercent: -56,
                    scrollTrigger: {
                        scroller: isDekstop ? page_container : window,
                        trigger: ".supersede-home-banner",
                        start: "top 0",
                        end: "bottom 50%",
                        scrub: !0
                    }
                })), $(".supersede-home-banner-env").length && (gsap.to(".supersede-home-banner-overlay-inner", {
                    yPercent: -7,
                    scrollTrigger: {
                        scroller: isDekstop ? page_container : window,
                        trigger: ".supersede-home-banner-env",
                        start: "top 0",
                        end: "bottom 50%",
                        scrub: !0
                    }
                }), gsap.to(".env-logo", {
                    yPercent: 15,
                    scrollTrigger: {
                        scroller: isDekstop ? page_container : window,
                        trigger: ".supersede-home-banner-env",
                        start: "top 0",
                        end: "bottom 50%",
                        scrub: !0
                    }
                })), $(".supersede-home-intro").length) {
                    gsap.to(".supersede-tag-in", {
                        yPercent: -56,
                        scrollTrigger: {
                            scroller: isDekstop ? page_container : window,
                            trigger: ".supersede-tag-in",
                            start: "top bottom",
                            end: "bottom 50%",
                            scrub: !0
                        }
                    });
                    var r = $(".pt-column"),
                        s = r.find(".green-white-circle"),
                        o = r.find(".white-line"),
                        a = r.find(".pt"),
                        n = gsap.timeline();
                    gsap.set([s, a], {
                        opacity: 0
                    }), gsap.set(o, {
                        width: 0
                    }), gsap.set(s, {
                        scale: 0
                    }), r.each(function (e) {
                        n.to(s.eq(e), {
                            opacity: 1,
                            scale: 1,
                            duration: .6,
                            ease: "Back.easeOut"
                        }).to(o.eq(e), {
                            width: "100%"
                        }, "<").to(a.eq(e), {
                            opacity: 1
                        }, "-=0.15")
                    }), n.pause(), ScrollTrigger.create({
                        scroller: isDekstop ? page_container : window,
                        trigger: ".fig_points",
                        start: "top 60%",
                        end: "+=1%",
                        onUpdate(e) {
                            e.progress >= .95 ? n.timeScale(3.5).restart() : e.progress < .95 && n.timeScale(5).reverse()
                        }
                    });
                    var i = $(".supersede-home-introducing");
                    i.find(".supersede-subtitle"), i.find(".supersede-int-title"), i.find(".supersede-int-head-heading"), i.find(".supersede-home-introducing-head-btn"), gsap.timeline(), gsap.to(".sd-logo", {
                        yPercent: 55,
                        ease: "none",
                        scrollTrigger: {
                            scroller: isDekstop ? page_container : window,
                            trigger: ".supersede-info-wrapper",
                            start: "top 100%",
                            end: "bottom 100%",
                            scrub: !0
                        }
                    })
                }
                if ($(".new-cta-logo").length && (gsap.set(".new-cta-logo", {
                    yPercent: 60
                }), gsap.to(".new-cta-logo", {
                    yPercent: 0,
                    scrollTrigger: {
                        scroller: isDekstop ? page_container : window,
                        trigger: ".new-cta-block",
                        start: "top 100%",
                        end: "bottom 100%",
                        scrub: !0
                    }
                })), $(".supersede-footer-inner").length && (gsap.set(".ftr-btm-graphics", {
                    yPercent: 22
                }), gsap.to(".ftr-btm-graphics", {
                    yPercent: 0,
                    scrollTrigger: {
                        scroller: isDekstop ? page_container : window,
                        trigger: ".supersede-footer",
                        start: "top 100%",
                        end: "bottom 0",
                        scrub: !0
                    }
                })), $(".building-manufacturing-block").length) {
                    gsap.to(".building-manufacturing-block", {
                        yPercent: 10,
                        scrollTrigger: {
                            scroller: isDekstop ? page_container : window,
                            trigger: ".new-cta-block",
                            start: "top 100%",
                            end: "bottom 50%",
                            scrub: !0
                        }
                    });
                    var l = document.querySelector(".building-manufacturing-ftr");
                    gsap.to(l, {
                        scrollTrigger: {
                            scroller: isDekstop ? page_container : window,
                            trigger: l,
                            start: "top 80%",
                            end: "bottom top",
                            scrub: !0,
                            toggleActions: "play reverse",
                            onEnter() {
                                l.classList.add("active")
                            },
                            onLeave() {
                                l.classList.remove("active")
                            },
                            onEnterBack() {
                                l.classList.add("active")
                            },
                            onLeaveBack() {
                                l.classList.remove("active")
                            }
                        }
                    })
                }
                if ($(".supersede-video-block").length) {
                    var c = document.querySelector(".supersede-video-block-inner");
                    gsap.to(".supersede-video-item-f", {
                        y: "-50vh",
                        scrollTrigger: {
                            scroller: isDekstop ? page_container : window,
                            trigger: c,
                            pin: !0,
                            start: "top top",
                            end: "+=60%",
                            scrub: !0,
                            onUpdate(e) {
                                e.progress > .5 ? c.classList.add("active") : c.classList.remove("active")
                            },
                            onComplete() {
                                ScrollTrigger.refresh(!0)
                            }
                        }
                    })
                }
                if ($(".reveal").length && gsap.utils.toArray(".reveal > *").forEach((e, t) => {
                    ScrollTrigger.create({
                        scroller: isDekstop ? page_container : window,
                        trigger: e,
                        start: "top 80%",
                        end: "top 20%",
                        onEnter() {
                            e.classList.add("play-reveal")
                        }
                    })
                }), $(".anim-sp").length) {
                    var d = $(".sb-block-marine-column");
                    $(".p-panel");
                    var p = d.find(".sb-block-marine-sep-circle"),
                        g = d.find(".sb-block-marine-sep-line"),
                        u = d.find(".sb-block-marine-top-heading"),
                        m = d.find(".sb-block-marine-footer"),
                        h = gsap.timeline();
                    gsap.set([p, u, m], {
                        opacity: 0
                    }), gsap.set(g, {
                        width: 0
                    }), gsap.set(p, {
                        scale: 0
                    }), gsap.set(m, {
                        y: 25
                    }), d.each(function (e) {
                        h.to(p.eq(e), {
                            opacity: 1,
                            scale: 1,
                            duration: .6,
                            ease: "Back.easeOut"
                        }).to(g.eq(e), {
                            width: "100%"
                        }, "<").to(u.eq(e), {
                            opacity: 1
                        }, "-=0.15").to(m.eq(e), {
                            opacity: 1,
                            y: 0
                        })
                    }), h.pause(), ScrollTrigger.create({
                        scroller: isDekstop ? page_container : window,
                        trigger: ".sb-block-marine",
                        start: "top center",
                        end: "+=1%",
                        onUpdate(e) {
                            e.progress >= .95 ? ($(".sb-block-marine").hasClass("anim") || h.timeScale(3.5).restart(), $(".sb-block-marine").addClass("anim")) : e.progress < .95 && ($(".sb-block-marine").hasClass("anim") && h.timeScale(5).reverse(), $(".sb-block-marine").removeClass("anim"))
                        }
                    })
                }
                setTimeout(() => {
                    $("[data-line]").length && gsap.utils.toArray("[data-line] > *").forEach((e, t) => {
                        ScrollTrigger.create({
                            scroller: isDekstop ? page_container : window,
                            trigger: e,
                            start: "top 100%",
                            end: "top 100%",
                            toggleActions: "play reverse",
                            onEnter() {
                                e.classList.add("active")
                            }
                        })
                    })
                }, 1e3), t.add("(max-width: 991px)", () => {
                    gsap.set("[menu-item]", {
                        opacity: 0,
                        xPercent: -100
                    }), gsap.set(".supersede-nav-menu-wrapper", {
                        opacity: 0,
                        xPercent: -110
                    })
                });
                let b = gsap.timeline({
                    pause: !0
                });
                b.to(".supersede-nav-menu-wrapper", {
                    xPercent: 0,
                    opacity: 1,
                    duration: .6,
                    ease: "Power2.easeOut"
                }).to("[menu-item]", {
                    opacity: 1,
                    xPercent: 0,
                    stagger: .1,
                    duration: 1,
                    ease: "Power3.easeOut"
                }, "-=0.2").pause(), $(".menu-toggle-sp").on("click", function (e) {
                    e.preventDefault(), $(this).hasClass("w--open") ? b.reverse(1.5).then(() => {
                        $(this).removeClass("w--open"), $("body").removeClass("open-nav"), $("html").removeClass("open-nav")
                    }) : ($(this).addClass("w--open"), $("body").addClass("open-nav"), $("html").addClass("open-nav"), b.restart())
                })
            }(), $(".supersede-header").addClass("active")
    }, 1e3), $(".w-pagination-next").on("click", function () {
        loco_scroll.update(), ScrollTrigger.refresh()
    })

    const num = document.querySelectorAll(".data-number-class");
    if (num.length) {
        num.forEach((el) => {
            let countTo = parseInt(el.getAttribute("data-count"), 10);

            ScrollTrigger.create({
                trigger: el,
                start: "top 80%",
                once: true,
                //markers: true,
                scroller: isDekstop ? page_container : window,
                onEnter: () => {
                    gsap.fromTo(
                        el,
                        { innerText: 0 },
                        {
                            innerText: countTo,
                            duration: 2,
                            ease: "power1.out",
                            snap: { innerText: 1 },
                            onUpdate: function () {
                                el.innerText = Math.floor(el.innerText);
                            },
                            onComplete: function () {
                                el.innerText = countTo;
                            },
                        }
                    );
                },

            });
        });
    }


});
