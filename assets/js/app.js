// Date Get
// const date = new Date();
// const year = date.getFullYear();
// document.getElementById("year").innerHTML = year;

// sticky navbar
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            navbar_height = document.querySelector('.navbar').offsetHeight;
            // document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            document.body.style.paddingTop = '0';
        }
    });
});

$(document).ready(function () {

    // Scroll Button Start
    // "use strict";
    var offSetTop = 1000;
    var $scrollToTopButton = $('.go-top');
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > offSetTop) {
            $scrollToTopButton.fadeIn();
        } else {
            $scrollToTopButton.fadeOut();
        }
    });

    //Click event to scroll to top
    $scrollToTopButton.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 100);
        return false;
    });
    // Scroll Button End

    // nav item click and hide nav area
    $('.navbar-collapse a').click(function () {
        $(".navbar-collapse").collapse('hide');
    });

});



