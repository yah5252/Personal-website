$(document).ready(function () {
    $(".header").mouseenter(function (event) {
        $(".about2").fadeOut();
    });

    $(".header").mouseout(function (event) {
        $(".about2").fadeIn();
    });


    $(".header").mouseenter(function (event) {
        $(".area").fadeOut();
    });
     
    $(".about").mouseout(function (event) {
        $(".area").slideDown();
    });

    // on 範例
    $('.Project').on('click', '.top', function (event) {
        event.preventDefault();
        $(this ).mouseenter(function (event) {
            $(".work").delay(3000).addClass('bounceInLeft');
        });
        $(this).mouseenter(function (event) {
            $(".box").addClass('bounceInRight');
        });
    });
    
    $(".Project").mouseout(function (event) {
        $(".contact").slideDown("slow");
    });
    
    $(".header").mouseenter(function (event) {
        $(".contact").fadeOut();
    });
});
