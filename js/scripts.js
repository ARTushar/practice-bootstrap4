$(document).ready(function(){
    $("#mycarousel").carousel({ interval: 2000 });

    $("#carouselButton").click(function(){
        if ($(this).children('span').hasClass('fa-pause')){
            $("#mycarousel").carousel('pause');
            $(this).children('span').removeClass('fa-pause');
            $(this).children('span').addClass('fa-play');
        }
        else {
            $("#mycarousel").carousel('cycle');
            $(this).children('span').removeClass('fa-play');
            $(this).children('span').addClass('fa-pause');
        }
    });

    $("#loginLink").click(function(){
        $("#loginModal").modal('toggle')
    });

    $("#reserveButton").click(function(){
        $("#reserveModal").modal('toggle')
    })

});