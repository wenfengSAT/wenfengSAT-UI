// 不用parallax实现的滚动视差
(function () {
    $(window).scroll(function() {
        var scrolled = $(this).scrollTop()
        $('#parallax_area1').css('top', (0 - scrolled * 0.75) + 'px') 
        $('#parallax_area2').css('top', (0 - scrolled * 0.5) + 'px')
        $('#parallax_area3').css('top', (0 - scrolled * 0.25) + 'px')
    })
})()