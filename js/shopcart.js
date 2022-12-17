/**
 * 购物车js文件
 */
    // 全选
    // 1.点击表头的全选框 获取表头全选框的选中状态
    // 2.表格中的全选框状态一致
    // 3.结算中的全选状态一致
    // 定义三个变量
$(function(){
    var $theadInput = $('table thead input[type=checkbox]');  //头部选择框
    var $bodyInput = $('table tbody input[type=checkbox]');   //中间选择框
    var $allPriceInput = $('.totalPrice input[type=checkbox]');  //结算选择框

    //
    $theadInput.change(function(){
        //获取选中状态
        var state = $(this).prop('checked');
        //
        $bodyInput.prop('checked',state);
        $allPriceInput.prop('checked',state);
        //调用总价
        calcTotalPrice();
    });
    //结算中的选择框，也需要有相同的选择功能
    $allPriceInput.change(function(){
        //
        var state = $(this).prop('checked');
        //
        $bodyInput.prop('checked',state);
        $theadInput.prop('checked',state);
        //调用总价
        calcTotalPrice();
    });
    //表单中的选中状态  反过来影响全选
    $bodyInput.change(function(){
        //
        var flag = true;
        //总价
        var totalPrice = 0;
        //循环表格中所有选择框的选中状态
        $bodyInput.each(function(i,input){
            if (!$(input).prop('checked')){ // 只要有一个选择框没有选中 那么状态就变为flase
                flag=false;
            }else{
                totalPrice += parseFloat( $(this).closest('tr').find('.subprice').text());
            }
        })
        //把状态用来改变全选框
        $theadInput.prop('checked',flag)
        $allPriceInput.prop('checked',flag)
        //调用总价
        calcTotalPrice();
    });


    //数量的加减
     //加
    $('.add').on('click',function(){
        //下一个put节点
        var $nextInput = $(this).next();

        //获取输入框的值
        var oldVal = parseInt($nextInput.val());
        //自加
        oldVal++;
        //重新赋值
        $nextInput.val(oldVal);
        //小计
        subTotalPrice(oldVal,$(this));
        //调用总价
        calcTotalPrice();
    });
    //减
    $('.reduce').on('click',function(){
        //上一个put节点
        var $prevInput = $(this).prev();

        //获取输入框的值
        var oldVal = parseInt($prevInput.val());
        //自减
        oldVal--;

        //判断
        oldVal = oldVal < 1 ? 1 : oldVal
        //重新赋值
        $prevInput.val(oldVal);
        //小计
        subTotalPrice(oldVal,$(this));
        //调用总价
        calcTotalPrice();
    });
    
    //把小计抽成函数
    function subTotalPrice(val,dom){
        var subtotal = val * parseFloat(dom.closest('tr').find('.price').text());
        //
        dom.closest('tr').find('.subprice').text(subtotal.toFixed(2));
    }

    //删除
    $('.del').click(function(){
        //整行删
        $(this).closest('tr').remove();
        //调用商品总数量
        calcGoodsCount()
    });

    //计算总价
    function calcTotalPrice() {
        //定数量
        var count = 0;
        //定义变量 保持总价
        var totalPrice = 0;
    //循环表格
    $('table tbody input[type=checkbox').each(function(i,input){
        //判断
        if($(input).prop('checked')){
            //自增
            count++;
            //累加价格
            totalPrice += parseFloat($(this).closest('tr').find('.subprice').text())
        }
    })
     //渲染到总价
     $('.total').text( totalPrice.toFixed(2) )
     //数量渲染
     $('.count').text(count)
    }

    //全部商品
    function calcGoodsCount() {
        $('.goodsCount').text($('table tbody tr').length)
    }
    calcGoodsCount();

    //删除选择商品
    $('.deleteChecked').on('click',function(){
        //循环 删除
        $bodyInput.each(function(i,input){
            if ($(this).prop('checked')){
                $(this).closest('tr').remove();
            }
        })
        //计算总价
        calcTotalPrice();
        //计算商品数量
        calcTotalPrice();
    })


})