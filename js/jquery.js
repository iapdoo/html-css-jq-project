/* glopale */
$(function(){
   
    'use strict';
    
    // start header
    var myheader=$('.header');
    
    myheader.height($(window).height())
    
    $(window).resize(function(){
       
       myheader.height($(window).height()) 
       
        $('.bxslider').css('paddingTop' ,($(window).height()- $('.bxslider li').height())/2);
        
    });
    
    // link class active
    $('.links li a').parent().click(function(){
       
        $(this).addClass('active').siblings().removeClass('active');
        
    });
    
       //start bx slider
    $('.bxslider').bxSlider({
        pager: false
    });
    
    // make items center
    $('.bxslider').each(function(){
       
        $(this).css('paddingTop' ,($(window).height() - $('.bxslider li').height())/2);
        
    });
    // start sclor our servises
    $('.links li a').click(function(){
        $('html, body').animate({
       scrollTop: $('#' + $(this).data("value")).offset().top
            
        }, 1000);
    });
    // our aoto slider 
    (function apdoo(){
       
        $('.slider .active').each(function(){
            if (!$(this).is(':last-child')) {
                    $(this).delay(3000).fadeOut(1000 , function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn(1500);
                    apdoo();
                });
            }else{
                      $(this).delay(3000).fadeOut(1000 , function(){
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn(1500);
                    apdoo();
                });
                
            }
            
        });
    }());
    
    // trigger mixitup
    $('#container').mixItUp();
    
    // start shufle
    $('.shuffle li').click(function(){
       
        $(this).addClass('select').siblings().removeClass('select');
    });
 
    // trigger jquery.nicescroll.min
    $('html').niceScroll({
        cursorcolor: '#1abc9c' ,
        cursorwidth: '10px' ,
        cursorborder: '1px solid #1abc9c'
    });
});