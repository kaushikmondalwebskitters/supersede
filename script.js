/* https://kaushikmondalwebskitters.github.io/supersede/style.css */

/* loader start */
.loader {
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
    transition: opacity .3s cubic-bezier(.165,.84,.44,1);
    will-change: opacity;
    z-index: 9999999999999;
}

.loader-side {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: #000000;
    position: absolute;
    transition: transform 1.6s cubic-bezier(.86,0,.12,1);
    will-change: transform
}

.loader_left {
    left: 0;
    transform-origin: left
}

.loader_left,
.loader_right {
    height: 100vh;
    top: 0;
    width: 49.9999999968vw
}

.loader_right {
    right: 0;
    transform-origin: right
}

.loader_top {
    top: 0;
    transform-origin: top
}

.loader_bottom,
.loader_top {
    height: 49.999999995vh;
    left: 0;
    width: 100%
}

.loader_bottom {
    bottom: 0;
    transform-origin: bottom
}

.loader.isEnding .loader_left,
.loader.isEnding .loader_right {
    transform: scaleX(0)
}

.loader.isEnding .loader_bottom,
.loader.isEnding .loader_top {
    transform: scaleY(0)
}

.loader_logo .loader_logo_img {
    transition: opacity .3s ease;
    will-change: opacity;
    animation: loaderFadeInOut 2.5s infinite;
}

@keyframes loaderFadeInOut {
    0% {
        opacity: 1
    }

    50% {
        opacity: .2
    }

    to {
        opacity: 1
    }
}

.loader.isEnding .loader_logo {
    opacity: 0
}

.loader.isEnding {
    pointer-events: none;
}
/* loader end */

.supersede-nav-btn:hover .supersede-nav-btn-circle-icon,
.supersede-tertiary-btn:hover .supersede-tertiary-btn-circle-icon {
    animation: navBtnArrowHover .6s ease
}

@keyframes navBtnArrowHover {
    49% {
        opacity: 0;
        transform: translate3d(50%, 0, 0)
    }

    50% {
        opacity: 0;
        transform: translate3d(-50%, 0, 0)
    }

    to {
        opacity: 1;
        transform: none
    }
}

.supersede-primary-btn:hover .supersede-primary-btn-text,
.supersede-primary-btn-outline:hover .supersede-primary-btn-text {
    animation: BtnTextHover .6s ease
}

@keyframes BtnTextHover {
    49% {
        opacity: 0;
        transform: translate3d(0, -50%, 0)
    }

    50% {
        opacity: 0;
        transform: translate3d(0, 50%, 0)
    }

    to {
        opacity: 1;
        transform: none
    }
}

.building-manufacturing-slider .slick-dots {
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 3vw;
    width: 73.125vw;
    padding-left: 0.938vw;
    padding-right: 0.938vw;
    left: 50%;
    transform: translate(-50%, 0);
    list-style: none;
    display: flex;
    z-index: 99;
}

/* .building-manufacturing-slider .slick-slide {
    transform: translate3d(100%, 0, 0);
    transition: transform 0s cubic-bezier(.165,.84,.44,1);
    will-change: transform;
}

.building-manufacturing-slider .slick-slide.slick-cloned .building-manufacturing-slider-box {
    transform: translate3d(-100%, 0, 0);
    transition: transform 0s cubic-bezier(.165,.84,.44,1);
    width: 100%;
    will-change: transform;
}

.building-manufacturing-slider .slick-slide.slick-current {
    transform: none;
    transition: transform 1.2s cubic-bezier(.165,.84,.44,1);
    z-index: 1;
}

.building-manufacturing-slider .slick-slide.slick-current .building-manufacturing-slider-box {
    transform: none;
    transition: transform 1.2s cubic-bezier(.165,.84,.44,1);
} */

.building-manufacturing-slider .slick-dots li {
    width: 50%;
    text-align: center;
    font-weight: 600;
    font-size: 1.5vw;
    line-height: 1.5em;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    padding: 0 0.625vw;
}

.building-manufacturing-slider .slick-dots li a {
    position: relative;
    color: #FFFFFF;
    opacity: 0.5;
    overflow: hidden;
    display: block;
    cursor: pointer;
    padding: 0 0 1.225vw;
}

.building-manufacturing-slider .slick-dots li a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.25vw;
    background: rgba(217, 217, 217, 0.50);
}

.building-manufacturing-slider .slick-dots li a::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0.25vw;
    background: rgba(217, 217, 217, 1);
    transition: width 0.4s ease-in-out;
}

.building-manufacturing-slider .slick-dots li.slick-active a,
.building-manufacturing-slider .slick-dots li a:hover {
    opacity: 1;
}

.building-manufacturing-slider .slick-dots li.slick-active a::before,
.building-manufacturing-slider .slick-dots li a:hover::before {
    width: 100%;
}

.supersede-nav-menu-link::after {
    content: "";
    background-color: #ffffff;
    bottom: 2.3vw;
    height: 0.063vw;
    left: 0;
    position: absolute;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform .5s cubic-bezier(.77,0,.175,1), background-color .3s ease;
    transition-delay: 0s;
    width: 100%;
}

.supersede-nav-menu-link.w--current::after, 
.supersede-nav-menu-link:hover::after,
.nav-dropdown-new:hover .supersede-nav-menu-link::after {
    transform: scaleX(1);
    transform-origin: left;
    transition-delay: .1s;
}

/* .supersede-video-wrap {
    transform-origin: top;
    transition: all 1.2s cubic-bezier(.165,.84,.44,1);
    transition: all 1.2s cubic-bezier(.165,.84,.44,1);
    transition: all 1.2s cubic-bezier(.165,.84,.44,1), all 1.2s cubic-bezier(.165,.84,.44,1);
}

.supersede-video-block-inner {
    transition: all 1.2s cubic-bezier(.165,.84,.44,1);
    transition: all 1.2s cubic-bezier(.165,.84,.44,1);
    transition: all 1.2s cubic-bezier(.165,.84,.44,1), all 1.2s cubic-bezier(.165,.84,.44,1);
}

.supersede-video-item {
    transition: all .4s ease-in-out;
} */

/* .supersede-video-block-inner.active {
    padding: 10vw;
}

.supersede-video-block-inner.active .supersede-video-wrap {
    -webkit-clip-path: path("M1345.17 731.991C1287.85 731.991 431.714 730.757 389.185 731.991C317.069 732.4 317.686 719.037 288.717 691.895C259.748 664.752 45.2505 445.764 19.363 418.005C-6.52455 390.246 -5.90818 340.28 26.7594 307.586C59.427 274.892 241.256 91.6824 296.729 34.9306C352.202 -21.8213 416.305 2.85345 451.438 34.9306C486.571 67.0077 722.024 291.547 757.774 327.326C793.523 363.104 850.229 330.41 850.229 284.145V162.622C850.229 123.759 874.267 71.3256 945.766 71.3256H1340.86C1386.47 70.7088 1429 107.104 1429 163.239V635.759C1429 685.109 1402.5 731.991 1345.17 731.991Z");
    clip-path: path("M1345.17 731.991C1287.85 731.991 431.714 730.757 389.185 731.991C317.069 732.4 317.686 719.037 288.717 691.895C259.748 664.752 45.2505 445.764 19.363 418.005C-6.52455 390.246 -5.90818 340.28 26.7594 307.586C59.427 274.892 241.256 91.6824 296.729 34.9306C352.202 -21.8213 416.305 2.85345 451.438 34.9306C486.571 67.0077 722.024 291.547 757.774 327.326C793.523 363.104 850.229 330.41 850.229 284.145V162.622C850.229 123.759 874.267 71.3256 945.766 71.3256H1340.86C1386.47 70.7088 1429 107.104 1429 163.239V635.759C1429 685.109 1402.5 731.991 1345.17 731.991Z");
    transform-origin: center;
    width: 100%;
    will-change: transform;
    transition: all 1.2s cubic-bezier(.165,.84,.44,1);
    overflow: hidden;
}

.supersede-video-wrap.active .supersede-video-item {
    height: 50vh;
} */

[data-line] > * {
    opacity: 0;
    transform: translateY(30px);
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

[data-line] .active {
    opacity: 1;
    transform: translateY(0px);
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.fig_points {
    opacity: 1!important;
}

.building-manufacturing-head-title,
.building-manufacturing-head-text {
    opacity: 0;
    transform: translateY(30px);
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.building-manufacturing-slider .slick-slide {
    transition: unset!important;
}

.building-manufacturing-slider .slick-slide .building-manufacturing-image {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
}

.building-manufacturing-slider .slick-slide.slick-current .building-manufacturing-image {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
