/* global $, alert, console */
$(function () {
    "use strict";
    // trigger the nice scroll plugin
    $("body").niceScroll();
    // adjusting heads's hieght
    $(".header").height($(window).height());
    // button down scrolling down to features
    $(".arrow").click(function () {
        $("html, body").animate({
            scrollTop: $(".features").offset().top
        }, 1000);
    });
    // showing images from button show more
    $(".our-work .button button").click(function () {
        $(".our-work .item-box .hidden").slideDown(1000, function () {
            $(".our-work .button button").text("show less");
            if ($(".our-work .button button").text("show less")) {
                $(".our-work .button button").click(function () {
                    $(".our-work .item-box .hidden").slideUp(1000, function () {
                    $(".our-work .button button").text("show more");
                });
            });
        }
    });
    // creating slider
    var rightArrow = $(".fa-chevron-right"),
        leftArrow = $(".fa-chevron-left");
    function myOwnSlider() {
        if ($(".testimonials .testi:first").hasClass("active")) {
            leftArrow.fadeOut();
        }else if ($(".testimonials .testi:last").hasClass("active")) {
            leftArrow.fadeIn(400, function () {
                rightArrow.fadeOut();
            });
        } else {
            leftArrow.fadeIn(400, function () {
                rightArrow.fadeIn();
            });
        }
        }
    myOwnSlider();
    $(".testimonials i").click(function () {
        if ($(this).hasClass("fa-chevron-right")) {
            $(".testimonials .active").fadeOut(400, function () {
                $(this).removeClass("active").next().addClass("active").fadeIn();
                myOwnSlider();
            });
        } else {
            $(".testimonials .active").fadeOut(400, function () {
                $(this).removeClass("active").prev().addClass("active").fadeIn();
                myOwnSlider();
        });
        }
    });
});
});