/******************************************
    File Name: custom.js
    Template Name: auricle
/*******************************************/

"use strict";

/**== wow animation ==**/

new WOW().init();

/**== mega menu ==**/

$(document).ready(function () {
    "use strict";
    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">&nbsp;</a>");
    $(".menu > ul > li").hover(function (e) {
        if ($(window).width() > 991) {
            $(this).children("ul").stop(true, false).fadeToggle(150);
            e.preventDefault();
        }
    });
    $(".menu > ul > li").on('click', function () {
        if ($(window).width() <= 991) {
            $(this).children("ul").fadeToggle(150);
        }
    });
    $(".menu-mobile").on('click', function (e) {
        $(".menu > ul").toggleClass('show-on-mobile');
        e.preventDefault();
    });
});
$(window).resize(function () {
    $(".menu > ul > li").children("ul").hide();
    $(".menu > ul").removeClass('show-on-mobile');
});


/** side bar **/

function openNav1() {
    document.getElementById("side_bar").style.width = "250px";
}

function closeNav1() {
    document.getElementById("side_bar").style.width = "0";
}

/** ecommer side bar **/

function openNav() {
    document.getElementById("ecomm_menu").style.width = "250px";
}

function closeNav() {
    document.getElementById("ecomm_menu").style.width = "0";
}


