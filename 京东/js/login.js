// $(function(){
//     $('.pic_ma').hover(function(){
//         $('.img_con').animate({'left':0},300,function(){
//             $('.pho_con').show()
//         })
//     },function(){
//         $('.pho_con').hide()
//         $('.img_con').animate({'left':64})
//     })
// })


$('.login_tab').click(function(){
    $('.login_tab').find('a').removeClass('checked')
    $(this).find('a').addClass('checked')
    $('.login_con_box').eq($(this).index('.login_tab')).show().siblings().hide()
})

//登录
var get_phone=[]
var get_user=[]
var get_mima=[]
var get_email=[]
for(var a=0;a<100;a++){
    get_phone.push(getCookie('phone'+a))
    get_user.push(getCookie('user'+a))
    get_mima.push(getCookie('mima'+a))
    get_email.push(getCookie('email'+a))
}
$('#dl').click(function(){
    var user=$('#user_name').val()
    var pass=$('#user_mima').val()
    if(user==''||pass==''){
        alert('用户或密码不能为空')
    }else{
        var ishad=false
        for(var i=0;i<get_phone.length;i++){
            if(user==get_phone[i]||user==get_user[i]||user==get_email[i]){
                ishad=true
                index=i
            }
        }
        if(ishad){
            if(pass==get_mima[index]){
                // alert('登录成功')
                setCookie('dl_user',get_user[index],14)
                window.open('./index.html?dl')
            }
            else{
                alert('密码错误')
            }
        }else{
            alert('账号不存在或输入错误')
        }
    }
})

