/*!
* Start Bootstrap - New Age v6.0.4 (https://startbootstrap.com/theme/new-age)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
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

function selectButton(buttonID) {
    let button = document.getElementById(buttonID);
    if (button.classList.contains("button-off")) {
        button.classList.remove("button-off");
        button.classList.add("button-on");
    } else if (button.classList.contains("button-on")) {
        button.classList.remove("button-on");
        button.classList.add("button-off");
    }
}

function toggleVisibility(buttonID) {
    let advanced = document.querySelector("#advanced-options");
    let button = document.getElementById(buttonID);
    console.log(advanced);
    console.log("Display before toggling: ", getComputedStyle(advanced).display);
    if (getComputedStyle(advanced).display == "none") {
        advanced.style.display = "flex";
        button.innerText = "Hide Advanced Options"
    } else if (getComputedStyle(advanced).display != "none") {
        advanced.style.display = "none";
        button.innerText = "Show Advanced Options"
    }
    console.log("Visibility after toggling: ", advanced.style.visibility);
}