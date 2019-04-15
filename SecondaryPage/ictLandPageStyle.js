$(document).ready(function() {

    // preloaderStarts
    $(window).on("load", function() {
    preloaderFadeOutTime = 1200;
    function hidePreloader() {
    var preloader = $('.loaderBox');
    setTimeout(function(){
        $('.mainContent').removeClass('none');
        preloader.hide();
    }, 1200);
    }
    hidePreloader();
    });
    // preloaderEnds
    
    $("a[href^='#blockquote']").click(function(e) {
    e.preventDefault();
    
    var position = $($(this).attr("href")).offset().top;

    $("body, html").animate({
        scrollTop: position
    },1000);
});
    $("a[href^='#InstructorList']").click(function(e) {
    e.preventDefault();
    
    var position = $($(this).attr("href")).offset().top - 63;

    $("body, html").animate({
        scrollTop: position
    },1000);
});
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.presentation').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object - 150){
                
                $(this).animate({'opacity':'1'},400);
                    
            }
            
        }); 
    
    });
    
});

