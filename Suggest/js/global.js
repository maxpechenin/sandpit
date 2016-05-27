/**
 * Global JS
 */

/*global $*/
/*
 * Table of Contents
 *
 * - Global
 * - Modules
 *    back-to-top
 *    user-menu
 */

/*
--------------------
Global
--------------------
*/
//  Declare JS Enabled.
$('body').removeClass('no-js').addClass('js-enabled');

/*
--------------------
Modules
--------------------
*/

/*-- module:back-to-top --*/
/*globals debounce*/
(function ($){
    'use strict';
    var threshold = 220;
    var duration  = 500;
    var $win = $(window);
    var $back = $('#back-to-top');

    // Bind scroll visible behaviour
    $win.on('scroll.backtotop load', debounce(function() {
        if ($win.scrollTop() > threshold) {
            $back.addClass('is-active');
        } else {
            $back.removeClass('is-active');
        }
    }));

    // Animate scroll top
    $('a', $back).click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
    });
}(jQuery));

/*-- module:user-menu --*/
(function($){
    'use strict';
    var $userMenu = $('.user_menu');
            
    $('body').on('click','.header-personal__name', function(event){
        var menuState = event.currentTarget.classList.contains('open');
        if(menuState){
            $userMenu.removeClass('open');
        } else {
            $userMenu.addClass('open');
        }
        event.preventDefault();
    });
}(jQuery));