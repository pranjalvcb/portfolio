// Fixed Header JS

$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});



// Hamburger JS

$(function () {
    /** 
     * Mobile Nav
     *
     * Hubspot Standard Toggle Menu
     */
    $('.custom-menu-primary').addClass('js-enabled');
    $('.custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger"><i></i></div>');
    $('.custom-menu-primary .flyouts .hs-item-has-children > a').after(' <div class="child-trigger"><i></i></div>');
    $('.mobile-trigger').click(function () {
        $(this).next('.custom-menu-primary .hs-menu-wrapper').slideToggle(250);
        $('body').toggleClass('mobile-open');
        $('.child-trigger').removeClass('child-open');
        $('.hs-menu-children-wrapper').slideUp(250);
        return false;
    });
    $('.child-trigger').click(function () {
        $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').slideToggle(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).toggleClass('child-open');
        return false;
    });

});



// Header CTA Slicing

document.addEventListener('DOMContentLoaded', function () {
    // select the elements to be moved
    const headerButton = document.querySelector('header .header-wrapper .header-container .cta-container a.cta_button');
    const primaryMenu = document.querySelector('header .header-wrapper .header-container .menu-container ul');
    // function to move elements
    function moveElements() {
        const viewportWidth = window.innerWidth;
        if (viewportWidth < 768) {
            // move elements to new location
            primaryMenu.appendChild(headerButton);
        } else {
            // move elements back to original location
            const headerCta = document.querySelector('header .header-wrapper .header-container .cta-container');
            headerCta.appendChild(headerButton);
        }
    }
    // move elements on page load
    moveElements();
    // move elements on window resize
    window.addEventListener('resize', moveElements);
});


  document.addEventListener("DOMContentLoaded", function() {
    // Display the loader
    const loader = document.querySelector(".loader");
    loader.style.opacity = "1";

    // Hide the loader after 2 seconds
    setTimeout(function() {
      loader.style.opacity = "0";
      loader.style.zIndex = "-1";
    }, 2000); // 2000 milliseconds = 2 seconds
  });
