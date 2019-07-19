// var index = 0
window.onload = function () {
    // index++
    var phone = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
    var email = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    var get = []
    // var num = []
    for (var i = 1; i < 100; i++) {
        get.push(getCookie('phone' + i))
    }
    // console.log(get)
    // for (var a = 0; a < 99; a++) {
    //     if (get[a] != '') {
    //         num.push(a)
    //     }
    // }
    // console.log(num)
    // if(num==''){
    //     var index=0
    // }else{
    //     var index = num[num.length - 1]
    // }
    // // var index= Math.max.apply(null, num);
    // console.log(index)

    if(!getCookie('index')){
        var index=0
    }else{
        index=getCookie('index')
    }
    var phone_num = $('#ipt_num').val()
    $('#ipt_num').focus(function () {
        $('#tip01').html('验证完成后，你可以使用该手机登录或找回密码')
        $('#tip01').css({ 'visibility': 'visible', 'color': '#c5c5c5' })
        $('#ipt_num').css({'color':'#000'})
    })
    $('#ipt_num').blur(function () {
        if ($('#ipt_num').val() == '') {
            $('#tip01').css({ 'color': 'red' })
            $('#tip01').html('不能为空')
        } else {
            if (phone.test($('#ipt_num').val())) {
                $('#tip01').css({ 'visibility': 'hidden' })
                drag();
            } else {
                $('#tip01').css({ 'color': 'red' })
                $('#tip01').html('请输入正确手机号')
            }
        }
    })
    $('#step_next').click(function () {
        if ($('#ipt_num').val() == '') {
            $('#tip01').css({ 'color': 'red' })
            $('#tip01').html('不能为空')
        } else {
            if (phone.test($('#ipt_num').val())) {
                $('#tip01').css({ 'visibility': 'hidden' })
                if ($('.drag_bg').width() < '357') {
                    alert('请拖动滑块验证')
                    drag();
                } else {
                    var ishad = false
                    for (var i = 0; i < get.length; i++) {
                        if ( $('#ipt_num').val() == get[i]) {
                            alert('该账号已存在')
                            $('#ipt_num').val('')
                            $('#drag').drag();
                            ishad = true
                            return
                        }
                    }
                    if (!ishad) {
                        index++
                        console.log(index)
                        setCookie('index',index)
                        setCookie('phone' + index, $('#ipt_num').val(), 14)
                        $('.reg_form').hide()
                        $('.pro_step2').addClass('done_step')
                        $('.done_step').find('.step_index').html('')
                        $('.line1').addClass('do_line')
                        $('.step02_wrap').show()
                    }
                }
            } else {
                $('#tip01').css({ 'color': 'red' })
                $('#tip01').html('请输入正确手机号')
            }
        }
    })

    $('.field').focus(function () {
        $('.input_tip').eq($(this).index('.field')).css({ 'visibility': 'visible' }).siblings('.input_tip').css({ 'visibility': 'hidden' })
    })
    var getuser = []
    for (var g = 0; g < 100; g++) {
        getuser.push(getCookie('user' + index))
    }

    $('#step02_register').click(function () {
        var user = $('#form_account').val()
        var mima = $('#form_pwd').val()
        var mima2 = $('#form_equalTopwd').val()
        var email_ipt = $('#form_email').val()
        if (user == '' || mima == '' || mima2 == '' || email == '') {
            alert('请正确输入信息o(*￣︶￣*)o')
        } else {
            var ishad = false
            for (var i = 0; i < getuser.length; i++) {
                if (user == getuser[i]) {
                    alert('该用户名已存在')
                    ishad = true
                    $('#form_account').val('')
                    return
                }
            }
            if (!ishad) {
                if (mima2 != mima) {
                    alert('两次密码不一致')
                }
                if (email.test(email_ipt)) {
                    setCookie('user' + index, user, 14)
                    setCookie('mima' + index, mima, 14)
                    setCookie('email' + index, email_ipt, 14)
                    var get_user = getCookie('user' + index)
                    $('.container').html('恭喜你' + get_user + '注册成功')
                    setTimeout(function () {
                        window.open('./index.html?zc', '_self')
                    }, 3000)
                } else {
                    alert('请输入正确邮箱')
                }
            }
        }
    })
}