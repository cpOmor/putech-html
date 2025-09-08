/*-----------------------------------------------------------------------------------
    
    Template Name: Sasly - Multipurpose Landing Page HTML Template
    URI: site.com 
    Description: Sasly is a flexible and professional Multipurpose HTML template, ideal for a variety of landing page needs including SaaS, software, fintech, Ai, E-learning, creative agencies, consulting services, software subscriptions, web applications, and digital marketing websites. Designed with all the essential elements to create an impactful landing page or corporate site, Sasly covers every detail to suit your business needs. We have included best practices of web development and you can create a great website layout based on Bootstrap or Grid 1320px.
    Author: Pixelfit
    Author URI: https://themeforest.net/user/pixelfit
    Version: 1.0 

    Note: This is Main Js file
-----------------------------------------------------------------------------------
    Js INDEX
    ===================
    ## Preloader
    ## Slick Slider
    ## AOS Js
    
-----------------------------------------------------------------------------------*/

(function($) {
    'use strict';

    //===== Preloader
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    })
    

    //===== Slick slider js
    
    if ($('.inner-page-slider').length) {
        var sliderArrows = $('.innerpages-arrows');
        $('.inner-page-slider').slick({
            dots: false,
            arrows: true,
            infinite: true,
            appendArrows: sliderArrows,
            speed: 800,
            autoplay: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="flaticon-left-arrow"></i></div>',
            nextArrow: '<div class="next"><i class="flaticon-right-arrow-1"></i></div>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    //===== Gasp 
        
    gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);

    // Added ScrollSmoother just for fun

    ScrollSmoother.create({
    smooth: 1,
    effects: true,
        smoothTouch: 0.1,
    });

    if ($('.text-anm').length) {				
        let	 staggerAmount 		= 0.03,
        translateXValue	= 20,
        delayValue 		= 0.1,
        easeType 			= "power2.out",
        animatedTextElements = document.querySelectorAll('.text-anm');

        animatedTextElements.forEach((element) => {
            let animationSplitText = new SplitText(element, { type: "chars, words" });
            gsap.from(animationSplitText.chars, {
                duration: 1,
                delay: delayValue,
                x: translateXValue,
                autoAlpha: 0,
                stagger: staggerAmount,
                ease: easeType,
                scrollTrigger: { trigger: element, start: "top 85%"},
            });
        });		
    }
    //====== Aos 
    
    AOS.init();



})(window.jQuery);