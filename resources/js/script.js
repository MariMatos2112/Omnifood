$(document).ready(function(){

        /************ Sticky Navigation ************/
    $('.js--section-features').waypoint(function(direction){
        if(direction == "down") {
            $('nav').addClass('sticky-nav');
        } else{
            $('nav').removeClass('sticky-nav');
        }
    }, { offset: '60px' });


    /************ Scroll from buttons and links to sections ************/
    function scrolling(clickedElement, destinationElement, scrollTime, topDifference) {
        $(clickedElement).click(function(){
            let showTopSection = Math.round($(destinationElement).offset().top);
            console.log(showTopSection);
            $('html, body').animate({scrollTop: (showTopSection - topDifference)}, scrollTime);
        });
    };

    scrolling('.js--logo', '.js--header', 1000, 0);
    scrolling('.js--scroll-to-plans', '.js--pricing-plans', 1700, 30);
    scrolling('.js--scroll-to-features', '.js--section-features', 800, 55);
    scrolling('.js--scroll-to-works', '.js--section-works', 1200, 30);
    scrolling('.js--scroll-to-cities', '.js--section-cities', 1500, 60);

    

    /************ Animations ************/
    $('.js--waypoint-1').waypoint(function(direction){
        $('.js--waypoint-1').addClass('animate__animated animate__fadeIn');
    },{
        offset: '50%'
    });

    $('.js--waypoint-2').waypoint(function(direction){
        $('.js--waypoint-2').addClass('animate__animated animate__fadeInLeft');
    }, {
        offset:  '50%'
    });

    $('.js--waypoint-3').waypoint(function(direction){
        $('.js--waypoint-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--waypoint-4').waypoint(function(direction){
        $('.js--waypoint-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%'
    });


    /************ Mobile ************/
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-navigation');

        nav.slideToggle(200);
    })
});

