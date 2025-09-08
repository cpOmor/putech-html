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

  //===== Nice select js

  if ($("select").length) {
    $("select").niceSelect();
  }

  //===== Slick slider js

  if ($(".testimonial-slider").length) {
    var sliderArrows = $(".testimonial-arrows");
    $(".testimonial-slider").slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 800,
      appendArrows: sliderArrows,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:
        '<div class="prev flex items-center justify-center w-10 h-10 bg-[#F0F2F4] rounded-full hover:bg-[#F14F44] group transition duration-300 cursor-pointer"><i class="far fa-angle-left text-lg text-[#696969] group-hover:text-white"></i></div>',
      nextArrow:
        '<div class="next flex items-center justify-center w-10 h-10 bg-[#F0F2F4] rounded-full hover:bg-[#F14F44] group transition duration-300 cursor-pointer"><i class="far fa-angle-right text-lg text-[#696969] group-hover:text-white"></i></div>',
    });
  }
  if ($(".related-product-slider").length) {
    $(".related-product-slider").slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 800,
      autoplay: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<div class="prev"><i class="fas fa-angle-left"></i></div>',
      nextArrow: '<div class="next"><i class="fas fa-angle-right"></i></div>',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1024,
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
  if ($(".product-big-slider").length) {
    $(".product-big-slider").slick({
      dots: false,
      arrows: false,
      speed: 800,
      autoplay: true,
      fade: true,
      asNavFor: ".product-thumb-slider",
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
      nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
    });
  }
  if ($(".product-thumb-slider").length) {
    $(".product-thumb-slider").slick({
      dots: false,
      arrows: false,
      speed: 800,
      autoplay: true,
      asNavFor: ".product-big-slider",
      focusOnSelect: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
      nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
    });
  }
  if ($(".comapny-slider").length) {
    $(".comapny-slider").slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 800,
      autoplay: false,
      slidesToShow: 8,
      slidesToScroll: 1,
      prevArrow: '<div class="prev"><i class="fas fa-angle-left"></i></div>',
      nextArrow: '<div class="next"><i class="fas fa-angle-right"></i></div>',
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 6,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }

  // //====== Isotope js

  // Select filter buttons and items
  const filterButtons = document.querySelectorAll(".filter-nav-items li");
  const filterItems = document.querySelectorAll(".filter-item");

  // Add click event listener to each filter button

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelector(".filter-nav-items li.active")
        .classList.remove("active");
      button.classList.add("active");
      const filterValue = button.getAttribute("data-filter");
      filterItems.forEach((item) => {
        if (filterValue === "all" || item.classList.contains(filterValue)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // JavaScript Code
  document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".nav-link");
    const contentSections = document.querySelectorAll(
      ".reviews, .descriptions"
    );

    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        // Tab Active Class Update
        tabs.forEach((t) => t.classList.remove("border-primary", "border-b"));
        this.classList.add("border-primary", "border-b");

        // Content Display Update
        const filter = this.getAttribute("data-filter");
        contentSections.forEach((section) => {
          section.style.display = section.classList.contains(filter)
            ? "block"
            : "none";
        });
      });
    });

    // Default Active Tab
    // tabs[0].click();
  });

  //======= Quantity Number js

  $(".quantity-down").on("click", function () {
    var numProduct = Number($(this).next().val());
    if (numProduct > 1)
      $(this)
        .next()
        .val(numProduct - 1);
  });
  $(".quantity-up").on("click", function () {
    var numProduct = Number($(this).prev().val());
    $(this)
      .prev()
      .val(numProduct + 1);
  });

  //===== Slider Range

  if ($("#slider-range").length) {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 120,
      values: [15, 100],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
  }
  if ($("#amount").length) {
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  }
})(window.jQuery);

//    sidebar js code start here
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
      //   checkmarkSpans[2].style.transform = "translateX(-50px)";
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

    // Toggle the clicked submenu (open or close)
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

  // Event listeners for submenu buttons
  homeBtn.addEventListener("click", () => toggleSubmenu(homeSubmenu));
  serviceBtn.addEventListener("click", () => toggleSubmenu(serviceSubmenu));
  projectBtn.addEventListener("click", () => toggleSubmenu(projectSubmenu));
  blogsBtn.addEventListener("click", () => toggleSubmenu(blogsSubmenu));
  pagesBtn.addEventListener("click", () => toggleSubmenu(pagesSubmenu));
  shopsBtn.addEventListener("click", toggleShopsSubmenu);

  // Sidebar and close logic
  menuBtn.addEventListener("click", openSidebar);
  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);
});

// const shops = document.getElementById("shops");
// const shopsItem = document.getElementById("shops-item");

// shops.addEventListener("mouseenter", () => {
//   shopsItem.style.display = "block";
//   setTimeout(() => {
//     shopsItem.classList.add("visible");
//   }, 10);
// });

// shopsItem.addEventListener("mouseenter", () => {
//   shopsItem.style.display = "block";
//   setTimeout(() => {
//     shopsItem.classList.add("visible");
//   }, 10);
// });

// shops.addEventListener("mouseleave", () => {
//   setTimeout(() => {
//     if (!shops.matches(":hover") && !shopsItem.matches(":hover")) {
//       shopsItem.classList.remove("visible");
//       setTimeout(() => {
//         shopsItem.style.display = "none";
//       }, 300);
//     }
//   }, 100);
// });

// shopsItem.addEventListener("mouseleave", () => {
//   setTimeout(() => {
//     if (!shops.matches(":hover") && !shopsItem.matches(":hover")) {
//       shopsItem.classList.remove("visible");
//       setTimeout(() => {
//         shopsItem.style.display = "none";
//       }, 300);
//     }
//   }, 100);
// });

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

// sub menu show js code end here
// JavaScript to handle accordion functionality
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll("[data-accordion]");

  // Open the first accordion by default
  const firstAccordion = accordions[0];

  // const firstContent = firstAccordion.querySelector("[data-content]");
  let firstContent;
  if (firstAccordion) {
    firstContent = firstAccordion.querySelector("[data-content]");
  }
  let firstPlus;
  if (firstAccordion) {
    firstPlus = firstAccordion.querySelector("[data-icon-plus]");
  }
  let firstMinus;
  if (firstAccordion) {
    firstMinus = firstAccordion.querySelector("[data-icon-minus]");
  }
  let firstBorderBox;
  if (firstAccordion) {
    firstBorderBox = firstAccordion.querySelector("[data-border-box]");
  }
  if (firstAccordion) {
    firstContent.style.maxHeight = `${firstContent.scrollHeight}px`;
  }

  if (firstAccordion) {
    firstPlus.classList.add("hidden");
  }

  if (firstAccordion) {
    firstMinus.classList.remove("hidden");
  }

  if (firstAccordion) {
    firstBorderBox.classList.add("border-black");
  }

  accordions.forEach((accordion) => {
    const trigger = accordion.querySelector("[data-trigger]");
    const content = accordion.querySelector("[data-content]");
    const iconPlus = accordion.querySelector("[data-icon-plus]");
    const iconMinus = accordion.querySelector("[data-icon-minus]");
    const borderBox = accordion.querySelector("[data-border-box]");

    trigger.addEventListener("click", () => {
      const isOpen =
        content.style.maxHeight && content.style.maxHeight !== "0px";

      // Close all accordions
      accordions.forEach((acc) => {
        const accContent = acc.querySelector("[data-content]");
        const accIconPlus = acc.querySelector("[data-icon-plus]");
        const accIconMinus = acc.querySelector("[data-icon-minus]");
        const accBorderBox = acc.querySelector("[data-border-box]");

        accContent.style.maxHeight = null;
        accIconPlus.classList.remove("hidden");
        accIconMinus.classList.add("hidden");
        accBorderBox.classList.remove("border-black");
      });

      // Open clicked accordion if it was not already open
      if (!isOpen) {
        content.style.maxHeight = `${content.scrollHeight}px`;
        iconPlus.classList.add("hidden");
        iconMinus.classList.remove("hidden");
        borderBox.classList.add("border-black");
      }
    });
  });
});

// payment info show hide
function togglePaymentMethod(selectedId) {
  // Hide all collapsible sections
  const allCollapses = document.querySelectorAll("#paymentMethod div");
  allCollapses.forEach((collapse) => {
    collapse.classList.remove("max-h-[200px]");
    collapse.classList.add("max-h-0");
  });

  // Show the selected section
  const selectedCollapse = document.getElementById(selectedId);
  if (selectedCollapse) {
    selectedCollapse.classList.remove("max-h-0");
    selectedCollapse.classList.add("max-h-[200px]");
  }
}
