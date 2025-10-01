/*-----------------------------------------------------------------------------------
    
    Template Name: Sasly - Multipurpose Landing Page HTML Template
    URI: site.com 
    Description: Sasly is a flexible and professional Multipurpose HTML template, ideal for a variety of landing page needs including SaaS, software, fintech, Ai, E-learning, creative agencies, consulting services, software subscriptions, web applications, and digital marketing websites. Designed with all the essential elements to create an impactful landing page or corporate site, Sasly covers every detail to suit your business needs. We have included best practices of web development and you can create a great website layout based on Bootstrap or Grid 1320px.
    Author: Pixelfit
    Author URI: https://themeforest.net/user/pixelfit
    Version: 1.0 
    
-----------------------------------------------------------------------------------*/

(function ($) {
  "use strict";

  //===== Slick slider js

  $(".hero-content").animatedHeadline({
    animationType: "rotate-1",
  });

  if ($(".case-slider").length) {
    $(".case-slider").slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 800,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<div class="prev"><i class="fas fa-angle-left"></i></div>',
      nextArrow: '<div class="next"><i class="fas fa-angle-right"></i></div>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($(".company-slider").length) {
    $(".company-slider").slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 800,
      autoplay: false,
      slidesToShow: 7,
      slidesToScroll: 1,
      prevArrow: '<div class="prev"><i class="fas fa-angle-left"></i></div>',
      nextArrow: '<div class="next"><i class="fas fa-angle-right"></i></div>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  if ($(".testimonial-slider").length) {
    $(".testimonial-slider").slick({
      speed: 8000,
      autoplay: true,
      autoplaySpeed: 0,
      centerMode: false,
      cssEase: "linear",
      slidesToShow: 1,
      draggable: false,
      focusOnSelect: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      breakpoints: {
        992: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        },
      },
    });
  }
  if ($(".testimonial-slider-rtl").length) {
    $(".testimonial-slider-rtl").slick({
      speed: 8000,
      autoplay: true,
      autoplaySpeed: 0,
      centerMode: false,
      cssEase: "linear",
      draggable: false,
      focusOnSelect: false,
      pauseOnFocus: false,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      infinite: true,
      initialSlide: 1,
      arrows: false,
      buttons: false,
      rtl: true,
    });
  }
})(window.jQuery);

// sidebar js code start here
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const overlayBtn = document.getElementById("overlay");
  const closeBtn = document.getElementById("close-btn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  // Submenu buttons
  const homeBtn = document.getElementById("home-btn");
  const serviceBtn = document.getElementById("service-btn");
  // const projectBtn = document.getElementById("project-btn");
  const blogsBtn = document.getElementById("blogs-btn");
  const pagesBtn = document.getElementById("pages-btn");
  const shopsBtn = document.getElementById("shops-btn");

  // Submenus
  const homeSubmenu = document.getElementById("home-submenu");
  const serviceSubmenu = document.getElementById("service-submenu");
  const projectSubmenu = document.getElementById("project-submenu");
  const blogsSubmenu = document.getElementById("blogs-submenu");
  const pagesSubmenu = document.getElementById("pages-submenu");
  const shopsSubmenu = document.getElementById("shops-submenu");

  const input = document.querySelector("input");
  const checkmarkSpans = document.querySelectorAll(".checkmark span");

  input.addEventListener("change", () => {
    if (input.checked) {
      checkmarkSpans[0].style.top = "50%";
      checkmarkSpans[0].style.transform = "translateY(-50%) rotate(45deg)";
      checkmarkSpans[1].style.top = "50%";
      checkmarkSpans[1].style.transform = "translateY(-50%) rotate(-45deg)";
      checkmarkSpans[2].style.opacity = "0";
    } else {
      checkmarkSpans[0].style.top = "";
      checkmarkSpans[0].style.transform = "";
      checkmarkSpans[1].style.top = "";
      checkmarkSpans[1].style.transform = "";
      checkmarkSpans[2].style.transform = "";
      checkmarkSpans[2].style.opacity = "1";
    }
  });

  const openSidebar = () => {
    const sidebarXPosition = gsap.getProperty(sidebar, "x");

    if (sidebarXPosition === 0) {
      gsap.to(sidebar, {
        x: "-100%",
        duration: 0.5,
        ease: "power2.in",
      });
      overlay.classList.add("hidden");
    } else {
      gsap.to(sidebar, {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      overlay.classList.remove("hidden");
    }
  };

  const closeSidebar = () => {
    gsap.to(sidebar, {
      x: "-100%",
      duration: 0.5,
      ease: "power2.in",
    });
    overlay.classList.add("hidden");
  };

  overlayBtn.addEventListener("click", () => {
    input.checked = !input.checked;
    input.dispatchEvent(new Event("change"));
  });
  closeBtn.addEventListener("click", () => {
    input.checked = !input.checked;
    input.dispatchEvent(new Event("change"));
  });

  // Smooth toggle for submenus
  const toggleSubmenu = (submenu, excludePages = false) => {
    const allSubmenus = [
      homeSubmenu,
      serviceSubmenu,
      projectSubmenu,
      blogsSubmenu,
      pagesSubmenu,
      shopsSubmenu,
    ];

    allSubmenus.forEach((item) => {
      if (item !== submenu && (!excludePages || item !== pagesSubmenu)) {
        gsap.to(item, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          overflow: "hidden",
        });
        item.classList.add("hidden");
      }
    });

    if (submenu.classList.contains("hidden")) {
      gsap.to(submenu, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        overflow: "hidden",
        onStart: () => {
          submenu.classList.remove("hidden");
        },
      });
    } else {
      gsap.to(submenu, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        overflow: "hidden",
        onComplete: () => {
          submenu.classList.add("hidden");
        },
      });
    }
  };

  const toggleShopsSubmenu = () => {
    toggleSubmenu(shopsSubmenu, true);
  };

  homeBtn.addEventListener("click", () => toggleSubmenu(homeSubmenu));
  serviceBtn.addEventListener("click", () => toggleSubmenu(serviceSubmenu));
  blogsBtn.addEventListener("click", () => toggleSubmenu(blogsSubmenu));
  pagesBtn.addEventListener("click", () => toggleSubmenu(pagesSubmenu));
  shopsBtn.addEventListener("click", toggleShopsSubmenu);

  menuBtn.addEventListener("click", openSidebar);
  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);
});

// sidebar js code end here

// sub menu show js code start here

const shops = document.getElementById("shops");
const shopsItem = document.getElementById("shops-item");

shops.addEventListener("mouseenter", () => {
  shopsItem.style.display = "block";
  setTimeout(() => {
    shopsItem.classList.add("visible");
  }, 10);
});

shopsItem.addEventListener("mouseenter", () => {
  shopsItem.style.display = "block";
  setTimeout(() => {
    shopsItem.classList.add("visible");
  }, 10);
});

shops.addEventListener("mouseleave", () => {
  shopsItem.classList.remove("visible");
  shopsItem.style.display = "none";
});

shopsItem.addEventListener("mouseleave", () => {
  shopsItem.classList.remove("visible");
  shopsItem.style.display = "none";
});

// sub menu show js code end here

document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(
    "#accordionOne [data-accordion]"
  );
  // Open first by default
  if (accordions.length) {
    const first = accordions[0];
    const firstContent = first.querySelector("[data-content]");
    const firstPlus = first.querySelector("[data-icon-plus]");
    const firstMinus = first.querySelector("[data-icon-minus]");
    const firstBorderBox = first.querySelector("[data-border-box]");
    firstContent.style.maxHeight = firstContent.scrollHeight + "px";
    firstPlus.classList.add("hidden");
    firstMinus.classList.remove("hidden");
    firstBorderBox.style.borderColor = "#FE7587";
  }
  accordions.forEach((acc) => {
    const trigger = acc.querySelector("[data-trigger]");
    const content = acc.querySelector("[data-content]");
    const iconPlus = acc.querySelector("[data-icon-plus]");
    const iconMinus = acc.querySelector("[data-icon-minus]");
    const borderBox = acc.querySelector("[data-border-box]");
    trigger.addEventListener("click", function () {
      const isOpen =
        content.style.maxHeight && content.style.maxHeight !== "0px";
      // Close all
      accordions.forEach((a) => {
        a.querySelector("[data-content]").style.maxHeight = null;
        a.querySelector("[data-icon-plus]").classList.remove("hidden");
        a.querySelector("[data-icon-minus]").classList.add("hidden");
        a.querySelector("[data-border-box]").style.borderColor = "";
      });
      // Open clicked
      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        iconPlus.classList.add("hidden");
        iconMinus.classList.remove("hidden");
        borderBox.style.borderColor = "#FE7587";
      }
    });
  });
});
