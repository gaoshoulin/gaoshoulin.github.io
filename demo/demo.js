$(function() {
    $(document).mousemove(function() {
        // console.log($(document).scrollTop());

        var len = $('body').scrollTop();
        // alert($('.port').offset().top);
        if (len >= 0 && len <= $('.port').offset().top - 60) {
            $('.link').eq(0).addClass('active').removeClass('unactive').siblings('.link').removeClass('active').addClass('unactive');
            // alert('sdgh');
            // console.log('sfhgj');
        } else if (len >= $('.port').offset().top - 60 && len <= $('.contact').offset().top - 60) {
            $('.link').eq(1).addClass('active').removeClass('unactive').siblings('.link').removeClass('active').addClass('unactive');
        } else if (len > $('.contact').offset().top - 60) {
            $('.link').eq(2).addClass('active').removeClass('unactive').siblings('.link').removeClass('active').addClass('unactive');
        }
    });



    $('.link').click(function() {
        $(this).addClass('active').removeClass('unactive').siblings('.link').removeClass('active').addClass('unactive');
    });

    $('.link').eq(0).click(function() {
        var target_top1 = $('.dscription').offset().top;
        $("html,body").animate({ scrollTop: target_top1 }, 1000); //带滑动效果的跳转
        // alert(target_top1);
    });

    $('.link').eq(1).click(function() {
        var target_top2 = $('.port').offset().top;
        $("html,body").animate({ scrollTop: target_top2 - 60 }, 1000); //带滑动效果的跳转
        // alert(target_top2);
    });

    $('.link').eq(2).click(function() {
        var target_top3 = $('.contact').offset().top;
        $("html,body").animate({ scrollTop: target_top3 - 60 }, 2000); //带滑动效果的跳转
        // alert(target_top3);
    });

    $('#name').blur(function() {
        var len1 = $("#name").val().length;
        if (len1 > 0) {
            $('.name').css('display', 'block');
        } else {
            $('.name').css('display', 'none');
        }
    });

    $('#email').blur(function() {
        var len1 = $("#email").val().length;
        if (len1 > 0) {
            $('.email').css('display', 'block');
        } else {
            $('.email').css('display', 'none');
        }
    });

    $('#phone').blur(function() {
        var len1 = $("#phone").val().length;
        if (len1 > 0) {
            $('.phone').css('display', 'block');
        } else {
            $('.phone').css('display', 'none');
        }
    });

    $('#message').blur(function() {
        var len1 = $("#message").val().length;
        if (len1 > 0) {
            $('.message').css('display', 'block');
        } else {
            $('.message').css('display', 'none');
        }
    });

});