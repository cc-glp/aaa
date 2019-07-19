$('.log_top div').click(function(){
    // console.log(this)
    if($(this).index()==1){
      
        $('.log_img').hide();
        $('.log_id').show();
        $(this).css('color','#f10180');
        $($('.log_top div')).eq(0).css('color','#333')
    }else{
        $('.log_id').hide();
        $('.log_img').show();
        $(this).css('color','#f10180');
        $($('.log_top div')).eq(1).css('color','#333')
    }
})



// 登录注册切换
function goLogin{
    $('.login').css("display","block");

}