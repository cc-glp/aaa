$(function(){
    $('.mytop').load('./header.html');
    $('.mybottom').load('./footer.html');
    if(!document.cookie){
        $('.mycart').text('登录');
        $('.mycart').css('line-height', '40px');
        $('.mycart').click(function(){
            window.open('./account/account.html?login');
        })
        $('.myhover p:nth-of-type(2)').click(function(){
            window.open('./account/account.html?login');
        });
        return;
    }
    $('.myhover p:nth-of-type(2)').click(function(){
        var index = $(this).index('.myhover p:nth-of-type(2)');
        $.ajax({
            type: 'post',
            url: 'http://www.unitguyver.cn/guyver/project/vip/php/addcart.php',
            data: document.cookie + '&goods=good' + index + '&pic=' + $('.mypic').eq(index).attr('src') + '&info=' + $('.myinfo').eq(index).text() + '&price=' + $('.myprice').eq(index).text() + '&number=1',
            success: function(res){
                alert(res);
            }
        })
    })
    $('.mycart').click(function(){
        window.open('./account/cart.html');
    })
})