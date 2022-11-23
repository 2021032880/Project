/**
 * 乐购商城首页js
 * 2022-10-26 by 唐
 */
// 当页面加载完毕
$(function(){
    /*首页大图轮播*/
    $('#banner').tyslide({
        boxh:460,//盒子的高度
        w:1000,//盒子的宽度
        h:390,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:true //是否显示数字
    });

    /*图书电子书轮播*/ 
    $('#ebooks-banner').tyslide({
        boxh:223,//盒子的高度
        w:332,//盒子的宽度
        h:223,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:2,//控制按钮高度
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#00ff00",//当前控制按钮的颜色
    });
    /* 电子书 table 切换*/
    var $lis = $('.ebooks .ebooks-nav > li');
    $lis.mouseover(function(){
        // 给之间添加激活类active 把兄弟的都干掉
        $(this).addClass('active').siblings().removeClass('active');
        // 获取index
        var index = $(this).index();
        // 选中内容
        var $ebooksList = $('.ebooks-list');
        // 显示索引等于当前index
        $ebooksList.eq(index).siblings('.ebooks-list').hide();
    });

    /* 电子书推广商品切换 */
    $('.ebooks .left-box .top ul li').mouseenter(function () {
        //导航激活类的切换
        $(this).addClass('active').siblings().removeClass('active')
        //内容切换
        //获取对应索引
        var index = $(this).index(); // 0 => top : 0 * 1170, 1 =>top :-1 * 1170 ,3 =>left ;-2 * 1170
        console.log(index)
        console.log($('.promotion .content .inner-box'))
        //上下移动
        $('.promotion .content .inner-box').animate({
            'top': -index * 600
        }, 300)
    })

    /* 新书列表手风琴效果*/
    $('.ebooks .right-box  ul > li').mouseenter(function(){
        // 所有兄弟：隐藏详情 显示标题
        $(this).siblings().find('.desc').hide();
        $(this).siblings().find('.ebooks-title').show();

        // 当前：隐藏标题  显示详情
        $(this).find('.ebooks-title').hide(); //隐藏标题
        $(this).find('.desc').show(); //显示详情
        
    });

    /* 服装轮播 */
    $("#clothes-banner").tyslide({
        boxh: 330,//盒子的高度
        w: 430,//盒子的宽度
        h: 334,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 2,//控制按钮高度
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#00ff00",//当前控制按钮的颜色
    });
    /* 服装 tab 切换 */
    $('.clothe .clothes-nav li').mouseenter(function(){
        // 导航切换
        $(this).addClass('active').siblings('li').removeClass('active')
        // 获取索引
        var index = $(this).index();
        $('.clothe .clothes-content > .clothes-list').eq(index).show().siblings('.clorhes-list').hide();
    });
    /* 户外运动轮播 */
    $("#sport-banner").tyslide({
        boxh: 280,//盒子的高度
        w: 478,//盒子的宽度
        h: 280,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 2,//控制按钮高度
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#00ff00",//当前控制按钮的颜色
    });
    /* 童装轮播 */
    $("#child-banner").tyslide({
        boxh: 280,//盒子的高度
        w: 478,//盒子的宽度
        h: 280,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 2,//控制按钮高度
        controlsColor: "#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor: "#00ff00",//当前控制按钮的颜色
    });
   /* 推广商品切换 */
   $('.promotion .top ul li').mouseenter(function(){
    // 导航激活类切换
    $(this).addClass('active').siblings().removeClass('iveact')
    // 内容切换
    // 获取对应的索引
    var index = $(this).index();
    console.log(index)
    console.log($('.promotion .recommend-content .inner-box'))
    $('.promotion .recommend-content .inner-box').animate({
        'left':-index * 1190
    },300)
   });

   /* 二维码滑出效果 */
   $('.qr-code .ticket').hover(function(){
    // 让二维码出来
    $('.qr-code div').stop(true).animate({
        left:'-100px'
    })
   },function(){
     // 让二维码隐藏
     $('.qr-code div').stop(true).animate({
        left:0
    });

   });
   /*顶部搜索框互交*/
   $(document).scroll(function(){
    // 获取到顶部得距离
    var topDistance = $('html, body').scrollTop();
    // 判断
    if (topDistance > 500){
        // 如果滚动距离大于500 滑出来
        $('.top-search-box').slideDown(300)
    }else
    // 否则收回去
    $('.top-search-box').slideUp(300)
   });
   /* 楼梯跳转 */
   $('.floor li').click(function(){
    // 获取索引
    var index = $(this).index();
    // 选中每一个板块到顶部的偏移
    var topOffset = $('.floorBox').eq(index).offset().top;
    // 让滚动条滚到这个位置
    $('html,body').animate({
        scrollTop:topOffset - 50
    })
   });


    /* 返回顶部*/
    // 绑定滚动事件
    $(document).scroll(function () {
        // 获取距离顶部的位置
        var topDistance = $('html,body').scrollTop();
        // 判断
        if (topDistance > 500) {
            $('.backToTop').fadeIn();
        }
        else {
            $('.backToTop').fadeOut();
        }
    })
    // 返回顶部
    $('.backToTop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 300)
    });
    
});