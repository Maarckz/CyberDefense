/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


document.addEventListener("DOMContentLoaded", function() {
    if (window.VANTA) {
        const container = document.querySelector(".page-section");
        if (window.innerWidth > 768) {
            VANTA.NET({
                el: container, 
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 50.00,
                minWidth: 50.00,
                scale: 1.8,
                scaleMobile: 1.8,
                color: 0xff3f3f,
                backgroundColor: 0x20202,
                points: 18.00,
                maxDistance: 16.00,
                spacing: 10.00,
                rotate: 45
            });
        } else {
            VANTA.NET({
                el: container, 
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                minHeight: 100.00,
                minWidth: 100.00,
                scale: 1.8,
                scaleMobile: 1.8,
                color: 0xff3f3f,
                backgroundColor: 0x20202,
                points: 12.00,
                maxDistance: 20.00,
                spacing: 15.00,
                rotate: 45
            });
        }
    }
});
