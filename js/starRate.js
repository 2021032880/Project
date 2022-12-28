/**
 * 封装星级评分函数
 */
$(function(){

    //写一个创建星星评分的函数 挂在window上
    window.createStarRate = function(score){
        // $.fn.createStarRate = function(score){  //扩展

    
    //满星
    var on = '<span class="iconfont"><img src="img/星星2.png" alt=""></span>';
    //半星
    var half = '<span class="iconfont"><img src="img/星星3.png" alt=""></span>';
    //灰色星星 
    var off = '<span class="iconfont"><img src="img/星星1.png" alt=""></span>';

    //样式

    $(on).css({
        fontSize: '50px',
		color: 'gold',
    })
    $(half).css({
        fontSize: '50px',
		color: '#ccc',
    })
    $(off).css({
        fontSize: '50px',
		color: 'gold',
    })
    //计算分数
    var calcScore = Math.floor(score * 2) / 2;
    console.log(calcScore);

    //计算满心
    var onCount = Math.floor(calcScore);
    //计算半星
    var isHasHalf =0;
    if(calcScore % 1  !== 0 ){
        isHasHalf = 1;
    }
    //计算灰色的星星
    var offCount = 5 - onCount - isHasHalf;
    //拼接结果
    var rst = '';
    //拼接满星
    for(var i = 0;i<onCount;i++){
        rst += on;
    }
    //拼接半个星星
    if(isHasHalf ===1){
        rst += half;
    }
    //拼接灰色星星
    for (var k = 0; k < offCount; k++){
        rst += off;
    }


    //返回
    return rst;
    // $(this).html(rst);  //扩展

    }
})