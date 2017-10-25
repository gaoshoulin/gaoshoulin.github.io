$(function() {
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

    /* if ($(" #name ").val().length > 0) {
        // $('.name:eq(0)').css('display', 'block');
        alert('21');
    } */
});