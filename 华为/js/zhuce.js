$('.sta_zi').click(function () {
    $('.sta_lie').toggle()
})

$(".sta_lie li").click(function () {
    $(".ZG").html($(this).html())
})
$('#number').click(function () {
    $('#ber_num1').toggle()
})
$('#telephone').click(function () {
    $('#ber_num2').toggle();
})

$("#ber_num2 li").click(function () {
    var a = $(this).index()
    $("#change2").html($(this).html())
    $('.ZG').html($('.sta_lie li').eq(a).html())
})
$('#ber_num1 li').click(function () {
    var a = $(this).index()
    $("#change").html($(this).html())
    $('.ZG').html($('.sta_lie li').eq(a).html())
})

$('.oncirc').mouseover(function () {
    $(this).addClass('animated pulse');
})
$('.oncirc').mouseout(function () {
    $(this).removeClass('animated pulse');
})
$('.day_year').click(function () {
    $('.yer_ul').toggle()
})
$('.day_yue').click(function () {
    $('.yer_ul1').toggle()
})
$('.ri').click(function () {
    $('.ri_ul').toggle()
})
$('.yue').click(function () {
    $('.yue_ul').toggle()
})
$(".yer_ul li").click(function () {
    $(".yer").html($(this).html())
    $('.yer_ul').css('display', 'none')
})
$(".yue_ul li").click(function () {
    $(".yue_s1").html($(this).html())
    $(this).parent().css('display', 'none')

})
$(".ri_ul li").click(function () {
    $(".ri_s1").html($(this).html())
    $(this).parent().css('display', 'none')

})

$('.tele_tl').click(function () {
    $('.reg').hide()
    $('.tele_tl').removeClass('active')
    $('.reg').eq($(this).index('.tele_tl')).show()
    $(this).addClass('active')
})

// cookie
var $index = 0;
if(getCookie('num')){
    $index=getCookie('num');
}
console.log(getCookie('num'))
var re = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
$('.ber_inp').eq(0).blur(function () {
    if (re.test($('.ber_inp').eq(0).val())) {
        var sjh = getCookie('phone+$index')
        console.log(getCookie('phone1'))
        console.log(sjh);


         
        if ($('.ber_inp').eq(0).val() == sjh) {
            alert('用户已存在')
        } else {
            var Num = suiji();

            //获取随机数
            $('.code_sp').eq(0).click(function () {
                alert(Num);
                return Num;
            })
            var jieshou = Num;
            console.log(jieshou)
            $('.code_inp').eq(0).blur(function () {

                if ($('.code_inp').eq(0).val() != jieshou) {
                    alert('验证码有误，请重新输入')
                } else {
                    //输入密码
                    var partner = /^[\w_-]{6,16}$/; //密码 要求6~16位
                    $('#password').blur(function () {
                        if (partner.test($('#password').val())) {
                            $('<span style="color:green">格式正确</span>').insertAfter($(this).parent())
                        } else {
                            $('<span style="color:red">格式不正确</span>').insertAfter($(this).parent())
                        }
                    })
                    $('#confirmPw').blur(function(){
              if ($('#confirmPw').val() == $('#password').val()) {
                            $('<span style="color:green">密码一致</span>').insertAfter($('#confirmPw').parent())
                }else{
                            alert('两次密码不一致')
                        }
                    })
                    $('.zc').click(function () {
                   
                        //设置cookie
                            $index++;
                            setCookie('phone' + $index, $('.ber_inp').eq(0).val(), 1)
                            setCookie('pass' + $index, $('.pa_inp').eq(0).val(), 1)
                            setCookie('num',$index,1)
                            $('.ber_inp').val('');
                            $('.code_inp').val('');
                            $('#password').val('');
                            $('#confirmPw').val('');
                            $('#password').parent().siblings('span').hide();
                            $('#confirmPw').parent().siblings('span').hide()
                            

                            alert("注册成功")
                          window.location.href="../html/denglu.html"
                                    
                                // if ($('.ber_inp').eq(0).val() == sjh) {
                                //     alert('用户已存在')
                                // }
                
                
                
                
                        })

                }
            })

        }

    } else {
        alert('手机号码格式不正确')
    }
})

//短信验证码
//获取动态码随机数
function suiji() {
    var num = "";
    for (var i = 0; i < 4; i++) {
        num += parseInt(Math.random() * 10);
    }
    return num;
}

//点击登录跳转到登陆页
$('#dl').click(function(){
    window.open('../html/denglu.html')
})


$(".zc").click(function(){
    
})