$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth'],
        menu: '#menu',
        scrollingSpeed: 1000,
        autoScrolling: true,
        scrollBar: true,
        navigation: true,
        navigationTooltips: ['HOME', 'ABOUT', 'PUBLISHING', 'PUBLISHING', 'PUBLISHING', 'PUBLISHING', 'OTHER CODING', 'GAME APP'],
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex >= 4 && nextIndex <= 6) {
                $('#menu > .m3').addClass('on');
            } else {
                $('#menu > .m3').removeClass('on');
            }
        },
        afterLoad: function(origin, destination, direction, trigger){
            //console.log(destination)
            if($('.section').eq(destination-1).is('#about')){
                $('.about_bg').addClass('on');
            }
            if($('.section').eq(destination-1).is('.pub')){
                $(this).find('.img_box').addClass('on');
                $(this).find('.wrap_bg').addClass('on');
            }
            if($('.section').eq(destination-1).is('#game')){
                $(this).find('.img_box').addClass('on');
            }
            if($('.section').eq(destination-1).is('#other')){
                $(this).find('.other_bg').addClass('on');
            }
            if($('.section').eq(destination-1).is('#game')){
                $(this).find('.game_bg').addClass('on');
            }
        },
        responsiveWidth: 640,
        afterResponsive: function (isResponsive) {
            const right = document.querySelector('#fp-nav.right');
            if (isResponsive) {
                $.fn.fullpage.setAutoScrolling(false);
                right.style.display = "none";
            }else {
                $.fn.fullpage.setAutoScrolling(true);
                right.style.display = "block";
            }
        }
    });

    /* loading */
    let loading=$('.loading');
    let loadOn=$('.load_on');
    
    loadOn.hide();

    loading.delay(2000).fadeOut();
    loadOn.delay(2500).fadeIn();
    
    
    /* skill이미지
    let skill = $('.skill')
    if (window.innerWidth < 641) {
        skill.css({ 'display': 'none' });
    } else {
        skill.css({ 'display': 'flex' });
    }
    $(window).resize(function () {
        let skill = $('.skill')
        if (window.innerWidth < 641) {
            skill.css({ 'display': 'none' });
        } else {
            skill.css({ 'display': 'flex' });
        }

    });
 */
    /* other coding*/
    let textBox = $('.info_box');
    $('.info').mouseenter(function(){
        $(this).find(textBox).addClass('on');
    });
    $('.info').mouseleave(function(){
        $(this).find(textBox).removeClass('on');
    });

    /* 왓챠 QR코드 */
    let watcha_qrBtn=$('.watcha .qr');
    let watcha_qr=$('.watcha_qr');
    let watcha_close=$('.watcha_close');
    watcha_qrBtn.click(function(e){
        e.preventDefault();
        watcha_qr.addClass('on');
    });
    watcha_close.click(function(){
        watcha_qr.removeClass('on');
    });
})