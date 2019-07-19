$(function(){
    var RanArr = new Array(parseInt(Math.random()*26+65),parseInt(Math.random()*26+97),parseInt(Math.random()*9+48));
    var re1 = /^[a-zA-z]\w{3,15}$/;
    var re2 = /^1\d{10}$/
    var re3 = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    var re4 = /^\w{6,18}$/
    //判断是否以有cookie；

    if(document.cookie){
        arr=JSON.parse(getCookie('userArr'))
    }else{
        arr = [];
    }
    //toggle
    $(".toggle").eq(0).click(function(){
        $(".toggle_icon1").addClass('hidden')
        $(".toggle_icon2").removeClass('hidden')
        $('.logo_tab').addClass('hidden')
        $('.tab_contents').addClass('hidden')
        $('.WJ').hide()
    })
    $(".toggle").eq(1).click(function(){
        $(".toggle_icon2").addClass('hidden')
        $(".toggle_icon1").removeClass('hidden')
        $('.logo_tab').removeClass('hidden')
        $('.tab_contents').removeClass('hidden')
        $('.WJ').show()
    })
    //tab
    $('.mod').click(function(){
        $('.logo_tab a').removeClass('tab_on');
        $(this).find('a').addClass('tab_on')
        console.log($(this).index('.mod'));
        if($(this).index('.mod')==0){
            $('.mod_ZC').css('display','block')
            $('.mod_WM').css('display','none')
            $('.WJ').css('display','block')
            $('.sub').css('display','block')
            $('.sub1').css('display','none')
            $('.tihis').hide();
            $('.mod_ZC_text').val('')
        }else{
            $('.mod_WM').css('display','block')
            $('.mod_ZC').css('display','none')
            $('.WJ').css('display','none')
            $('.sub').css('display','none')
            $('.sub1').css('display','block')
            $('.mod_ZC_text').val('')
        }
    })
    //  滑动验证
    $('.box1').mousedown(function(ev){
        ev =ev||event;
        var disx = ev.clientX+parseInt($('.box1').css('left'));
        console.log(disx)
        console.log(parseInt($('.box1').css('left')))
        $(window).bind('mousemove',function(ev){
            ev =ev||event;
            $('.box1').css('left',ev.clientX - disx)
        })
        $(window).mouseup(function(){
            $(window).unbind('mousemove');
            $(window).unbind('mouseup');
            if(parseInt($('.box1').css('left'))<219&&parseInt($('.box1').css('left'))>215){
                alert('验证成功')
                $('.box2').css('display','none')
            }else{
                alert('验证失败')
                $('.box1').css('left',0)
            }
        })

    })
    // 用户注册
    $('.mod_WM input').eq(0).blur(function(){
        if(re1.test($('.mod_WM input').eq(0).val())||re2.test($('.mod_WM input').eq(0).val())||re3.test($('.mod_WM input').eq(0).val())){
            $('.cuowu').css('display','none')
        }else{
            $('.cuowu').css('display','block').html('请输入正确的账号格式')
        }
    })
    $('.mod_WM input').eq(1).blur(function(){
        if(re4.test($('.mod_WM input').eq(1).val())){
            $('.cuowu').css('display','none')
        }else{
            $('.cuowu').css('display','block').html('请输入正确的密码格式')
        }
    })
    $('.mod_WM input').eq(3).blur(function(){
        if($('.mod_WM input').eq(1).val()==$('.tishi').val()){
            $('.tishi').css('display','none')
            $('.cuowu').css('display','none')
        }else{
            $('.cuowu').css('display','block').html('请输入正确的验证码')
        }
    })
    //用户登陆
    $('.mod_ZC input').eq(0).blur(function(){
        if(re1.test($('.mod_ZC input').eq(0).val())||re2.test($('.mod_ZC input').eq(0).val())||re3.test($('.mod_ZC input').eq(0).val())){
            $('.cuowu').css('display','none')
        }else{
            $('.cuowu').css('display','block').html('请输入正确的账号格式')
        }
    })
    $('.mod_ZC input').eq(1).blur(function(){
        if(re4.test($('.mod_ZC input').eq(1).val())){
            $('.cuowu').css('display','none')
            $('.YZimg').css('display','block')
        }else{
            $('.cuowu').css('display','block').html('请输入正确的密码格式')
        }
    })
    //注册按钮
    $('.sub1').click(function(){
        var username = $('.mod_WM input').eq(0).val()
        var password = $('.mod_WM input').eq(1).val()
        for(var i = 0;i<arr.length;i++){
            if(username==arr[i].username){
                alert('该账号已存在')
                return;
            }
        }
        var obj = {
            username:username,
            password:password
        }
        arr.push(obj)
        var Jarr = JSON.stringify(arr)
        setCookie("userArr",Jarr,14)
        alert('用户创建成功')
        $('.mod_WM').css('display','none');
        $('.mod_ZC').css('display','block');
        $('.WJ').css('display','block')
        $('.sub').css('display','block')
        $('.sub1').css('display','none')
        $('.logo_tab a').removeClass('tab_on')
        $('.tishi').hide();
        $('.mod').eq(0).find('a').addClass('tab_on')
    })
    //登陆按钮
    $('.sub').click(function(){
        var username = $('.mod_ZC input').eq(0).val()
        var password = $('.mod_ZC input').eq(1).val()
        var isflage = false;
        var index = 0;
        console.log(arr)
        if(arr){
        
        for(var i = 0;i<arr.length;i++){
            if(username==arr[i].username){
				isflage=true
				index=i;
			}
        }
        if(isflage){
            
            if(password==arr[index].password){
                $('.WJ').css('display','block')
                $('.sub1').css('display','none')
                $('.sub').css('display','block')
                $('.YZimg').hide();
                setCookie('user',username)
                setTimeout(function(){
                    window.location.href = './index.html'
                },700)
			}else{
                $('.cuowu').html('请输入正确的密码')
            }
        }else{
            alert('用户不存在 ，请去注册')
            $('.mod_WM').css('display','block')
            $('.mod_ZC').css('display','none')
            $('.WJ').css('display','none')
            $('.sub').css('display','none')
            $('.sub1').css('display','block')
            $('.logo_tab a').removeClass('tab_on')
            $('.mod').eq(1).find('a').addClass('tab_on')
        }
    }else{
            alert('还未注册 ，请去注册')
            $('.mod_WM').css('display','block')
            $('.mod_ZC').css('display','none')
            $('.WJ').css('display','none')
            $('.sub').css('display','none')
            $('.sub1').css('display','block')
            $('.logo_tab a').removeClass('tab_on')
            $('.mod').eq(1).find('a').addClass('tab_on')
    }
    })
    //获取动态验证码
    $('.mod_WM a').click(function(){
        var y1 =  String.fromCharCode(RanArr[parseInt(Math.random()*3)])
        var y2 =  String.fromCharCode(RanArr[parseInt(Math.random()*3)])
        var y3 =  String.fromCharCode(RanArr[parseInt(Math.random()*3)])
        var y4 =  String.fromCharCode(RanArr[parseInt(Math.random()*3)])
        $('.tishi').css('display','block')
        $('.tishi').html(y1+y2+y3+y4)
    })
    //忘记密码
    $('.WJ').click(function(){
        window.location.href = './ZHMM.html'
    })  
})