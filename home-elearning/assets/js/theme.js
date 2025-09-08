/*-----------------------------------------------------------------------------------
    
    Template Name: Pesco - Fashion eCommerce HTML Template
    URI: site.com 
    Description: Pesco is a clean, modern, and elegant fashion e-commerce HTML template. It allows you to easily create a well-designed e-commerce website that is easily customizable to fit your brand colors and requirements.
    Author: Pixelfit
    Author URI: https://themeforest.net/user/pixelfit
    Version: 1.0 

    
-----------------------------------------------------------------------------------*/

(function($) {
    'use strict';

    //===== Slick slider js

    if ($('.categories-slider').length) {
        $('.categories-slider').slick({
          dots: false,
          arrows: false,
          infinite: true,
          speed: 800,
          autoplay: true,
          slidesToShow: 1,
          variableWidth: true,
          slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="fas fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="fas fa-angle-right"></i></div>'
        });
    }
    if ($('.testimonial-slider').length) {
        $('.testimonial-slider').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 800,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev"><i class="fas fa-angle-left"></i></div>',
            nextArrow: '<div class="next"><i class="fas fa-angle-right"></i></div>'
        });
    }
    if ($('.client-slider').length) {
        $('.client-slider').slick({
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
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
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
  const projectBtn = document.getElementById("project-btn");
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
      input.checked = false;
      input.dispatchEvent(new Event("change"));
    } else {
      gsap.to(sidebar, {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      overlay.classList.remove("hidden");
      input.checked = true;
      input.dispatchEvent(new Event("change"));
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
  projectBtn.addEventListener("click", () => toggleSubmenu(projectSubmenu));
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



//  faq funcationality start
    document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll("[data-accordion]");
  
    const firstAccordion = accordions[0];
    if (firstAccordion) {
      const firstContent = firstAccordion.querySelector("[data-content]");
      const firstPlus = firstAccordion.querySelector("[data-icon-plus]");
      const firstMinus = firstAccordion.querySelector("[data-icon-minus]");
      const firstText = firstAccordion.querySelector("h6");
      const firstParagraph = firstAccordion.querySelector("p");
  
      firstContent.style.maxHeight = `${firstContent.scrollHeight}px`;
      firstPlus.classList.add("hidden");
      firstMinus.classList.remove("hidden");
      firstAccordion.style.backgroundColor = "#042A1B";
      firstText.style.color = "white";
      if (firstParagraph) {
        firstParagraph.style.color = "white";
      }
    }
  
    accordions.forEach((accordion) => {
      const trigger = accordion.querySelector("[data-trigger]");
      const content = accordion.querySelector("[data-content]");
      const iconPlus = accordion.querySelector("[data-icon-plus]");
      const iconMinus = accordion.querySelector("[data-icon-minus]");
      const text = accordion.querySelector("h6");
      const paragraph = accordion.querySelector("p");
  
      trigger.addEventListener("click", () => {
        const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";
  
        accordions.forEach((acc) => {
          const accContent = acc.querySelector("[data-content]");
          const accIconPlus = acc.querySelector("[data-icon-plus]");
          const accIconMinus = acc.querySelector("[data-icon-minus]");
          const accText = acc.querySelector("h6");
          const accParagraph = acc.querySelector("p");
  
          accContent.style.maxHeight = null;
          accIconPlus.classList.remove("hidden");
          accIconMinus.classList.add("hidden");
          acc.style.backgroundColor = "";
          accText.style.color = "";
          if (accParagraph) {
            accParagraph.style.color = "";
          }
        });
  
        if (!isOpen) {
          content.style.maxHeight = `${content.scrollHeight}px`;
          iconPlus.classList.add("hidden");
          iconMinus.classList.remove("hidden");
          accordion.style.backgroundColor = "#042A1B";
          text.style.color = "white"; 
          if (paragraph) {
            paragraph.style.color = "white";
          }
        }
      });
    });
  });
  
  
  
  