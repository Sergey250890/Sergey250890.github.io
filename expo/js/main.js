$(".continue").prop("disabled", !0),
    $(".agree").change(function () {
        $(".continue").prop("disabled", function (e, i) {
            return !i
        })
    }),
    $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
        asNavFor: ".slider-nav"
    }),
    $(".slider-nav").slick({
        vertical: !0,
        asNavFor: ".slider-for",
        verticalSwiping: !0,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: !0,
        autoplay: !1,
        infinite: !1,
        nextArrow: '<div class="arrow_right"></div>',
        prevArrow: '<div class="arrow_left"></div>',
        responsive: [{
            breakpoint: 640,
            settings: {
                slidesToShow: 3
            }
        }]
    }),
    $(".btn_call").click(function () {
        $(".agree").prop("checked", !1),
            $(".continue").prop("disabled", !0)
    }),
    $(".phone_input").mask("+7 (999) 999-9999"),
    $(".formsubmit1").submit(function () {
        return !1
    }),
    $(".formsubmit1").submit(function () {
        var e = $(this);
        return $.ajax({
            type: "POST",
            url: "mail.php",
            data: e.serialize()
        }).done(function () {
            UIkit.modal("#success").show(),
                setTimeout(function () {
                    UIkit.modal("#success").hide(),
                        $("input").val(""),
                        $(".agree").removeAttr("checked"),
                        $(".continue").prop("disabled", !0)
                }, 3e3)
        }),
            !1
    }),
    $(".formsubmit2").submit(function () {
        return !1
    }),
    $(".formsubmit2").submit(function () {
        var e = $(this);
        return $.ajax({
            type: "POST",
            url: "mail.php",
            data: e.serialize()
        }).done(function () {
            UIkit.modal("#success2").show(),
                setTimeout(function () {
                    UIkit.modal("#success2").hide(),
                        $("input").val(""),
                        $(".agree").removeAttr("checked"),
                        $(".continue").prop("disabled", !0)
                }, 3e3)
        }),
            !1
    });