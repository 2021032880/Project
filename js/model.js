$(function(){
    //打开模态框
    $('#btn').click(function(){
        $('.model').fadeIn();
    })
    //关闭模板
    $('#close').click(function(){
        $('.model').fadeOut();
    })
    // 点击确定按钮跳转页面
    $('.content p .yes').click(function() {
        $(window).attr('location', 'index.html')
    })
    // 点击取消按钮跳转页面
    $('.content p .no').click(function() {
        $(window).attr('location', 'model.html')
    })
})