var ishover=true
if(ishover){
    ishover=false
    console.log(ishover)
$('.banner .center .left ul li ').hover(function(){
        $('.banner .center .left ul li ').find($('.wrap')).hide()
        $(this).find($('.wrap')).show()
        
},function(){
    // if(ishover){
    //     ishover=false
        $(this).find($('.wrap')).hide()
    //     setTimeout(function(){
    //         ishover=true
    //         console.log('111')
    //     },500)
    // }
    // console.log(ishover)
})
setTimeout(function(){
    ishover=true
},1000)
console.log(ishover)
}

var user = window.location.search.substr(1)
var mzi='';
if (user == '') {
    $('.nav-center .right ul li:first').html(`<span onclick="window.open('./login.html','_self')">你好，请登录&nbsp;&nbsp;</span>
    <p onclick="window.open('./zhuce.html','_self')">免费注册</p>
    `)
    $('.banner .center .right .top').html(`
    <div class="tou"></div>
    <p>Hi~欢迎来到京东！</p>
    <span onclick="window.open('./login.html','_self')">登录</span>&nbsp;&nbsp;
    <b onclick="window.open('./zhuce.html','_self')">注册</b><br />
    <h5>新人福利</h5>
    <h6>PLUS会员</h6>
    `)
    $('.sidebar_list_con .my_vip').click(function(){
        window.open('./login.html','_self')
    })
} else if (user == 'dl') {
    $('.nav-center .right ul li:first').html(`<em>${getCookie('dl_user')}</em>
    <i class="userico_ico"></i>`)
    $('.banner .center .right .top').html(`
    <div class="tou"></div>
    <p>Hi~${getCookie('dl_user')}</p>
    <p class='tuichu'>退出</p>
    <h5>新人福利</h5>
    <h6>PLUS会员</h6>
    `)
    $('.my_vip_user').html(getCookie('dl_user'))
    mzi=getCookie('dl_user')
    // setCookie('zxuser',getCookie('dl_user'))
    // window.location.search=''
} else if (user == 'zc') {
    var index = getCookie('index')
    $('.nav-center .right ul li:first').html(`<em>${getCookie('user' + index)}</em>
    <i class="userico_ico"></i>`)
    $('.banner .center .right .top').html(`
    <div class="tou"></div>
    <p>Hi~${getCookie('user' + index)}</p>
    <p class='tuichu'>退出</p>
    <h5>新人福利</h5>
    <h6>PLUS会员</h6>
    `)
    $('.my_vip_user').html(getCookie('user' + index))
    mzi=getCookie('user' + index)
    // setCookie('zxuser',getCookie('user' + index))
    // window.location.search=''
}
$('.banner .center .right .top').on('click','.tuichu',function(){
    window.location.search=''
})
var i = 0
var timer = null
var isclick = true
ban_fun()
function ban_fun() {
    timer = setInterval(function () {
        i++
        if (i > 7) {
            i = 0
        }
        $('.banner .center .pic ul li').eq(i).fadeIn().siblings($('.banner .center .pic ul li')).fadeOut()
        $('.slider_points .slider_points_btn').eq(i).addClass('active').siblings($('.slider_points .slider_points_btn')).removeClass('active')
    }, 3000)
}
$('.pic').mouseover(function () {
    clearInterval(timer)
}).mouseout(function () {
    ban_fun()
})
$('.ban_next').click(function () {
    if (isclick) {
        isclick = false
        i++
        if (i > 7) {
            i = 0
        }
        $('.banner .center .pic ul li').eq(i).fadeIn().siblings($('.banner .center .pic ul li')).fadeOut()
        $('.slider_points .slider_points_btn').eq(i).addClass('active').siblings($('.slider_points .slider_points_btn')).removeClass('active')
        setTimeout(function () {
            isclick = true
        }, 800)
    }
})
$('.ban_prev').click(function () {
    if (isclick) {
        isclick = false
        i--
        if (i < 0) {
            i = 7
        }
        $('.banner .center .pic ul li').eq(i).fadeIn().siblings($('.banner .center .pic ul li')).fadeOut()
        $('.slider_points .slider_points_btn').eq(i).addClass('active').siblings($('.slider_points .slider_points_btn')).removeClass('active')
        setTimeout(function () {
            isclick = true
        }, 800)
    }
})
$('.slider_points .slider_points_btn').mouseover(function () {
    i = $(this).index()
    $('.banner .center .pic ul li').eq(i).fadeIn().siblings($('.banner .center .pic ul li')).fadeOut()
    $(this).addClass('active').siblings($('.slider_points .slider_points_btn')).removeClass('active')

})
$.ajax({
    type: 'GET',
    url:'pagexx.json',
    data: {},
    dataType: 'json',
}).done(function (list) {
    var data = list.result;
    var html = '';
    data.forEach(function (txt) {
        html += `
        <li class="more_item">
            <div class="pic_gg"><img src="${txt.image}" alt=""></div>
            <div class="more_info">
                <p class="more_info_name">${txt.title}</p>
                <div class="more_info_price">
                    <div class="mod_price">${txt.price}</span>
                    </div>
                </div>
            </div>
        </li>
        `
    })
    $('.more_list').html(html)
})

console.log(mzi)
$('.more_list').on('click','li',function(){
    var i=$(this).index()
    window.open('gwc.html?zxuser='+mzi+'&gw=Nr'+i,'_blank')
})




//侧边栏
$('.sidebar_list_con li').click(function () {
    var a=$(this).index()
    if($('.sidebar_list_con li').eq(a).hasClass('col_red')){
        $('.sidebar_box').animate({ 'right': 0 }, 200)
        $('.sidebar_list_con li').removeClass('col_red')
    }else{
        $(this).addClass('col_red').siblings().removeClass('col_red')
    $('.sidebar_box').animate({ 'right': 270 }, 200,function(){
      $('.sidebar_list_body').eq(a).fadeIn().siblings().hide()
    })
    }
    
})




if(getCookie(mzi+'sp')){
    var sp=getCookie(mzi+'sp')
}else{
    var sp=0
}
console.log(Number(sp)+1)
var gwctj=[]
console.log(mzi)
for(var a=1;a<Number(sp)+1;a++){
    gwctj.push(getCookie(mzi+'sp'+a))
}
console.log(gwctj)

if(gwctj==''){
    $('.header_gwc').html(`<div class="car_empty">
    <i class="cart_empty_img"></i>
    购物车中还没有商品，赶紧选购吧！
</div>`)
}else{
    var html=''
    var html2=''
    var price_mon=0
    for(var b=0;b<gwctj.length;b++){
        var num=gwctj[b]
        var data=gwcCG[num].data
        console.log(data)
        price_mon+=Number(data.price)
        html+=`
            <div class="sp_jtcon">
                <div class="sp_img">
                    <img src="${data.coverImg}" alt="">
                </div>
                <div class="sp_jjcon">${data.title}</div>
                <div class="price_box">
                    <p>￥${data.price}×1</p>
                    <a href="javascript:;" class="del">删除</a>
                </div>
            </div>
        `
        html2+=`
        <div class="sidebar_gwc">
            <div class="sidebar_gwc_con">
                <div class="si_gw_img">
                    <img src="${data.coverImg}" alt="">
                </div>
                <div class="si_gw_txt">
                ${data.title}
                </div>
                <div class="si_gw_price">
                    ￥<span>${data.price}</span>×1
                </div>
            </div>
        </div>
        `
    }
    $('.sp_con').html(html)
    $('.sp_num').html(gwctj.length)
    $('.sp_money').html(price_mon)
    $('.header .center .car span b').html(gwctj.length)

    $('.gwc_con').html(html2)
    $('.J_count').html(gwctj.length)
    $('.J_total').html(price_mon)
}

$('.car').click(function(){
    window.open('mygwc.html?zxuser='+mzi,'_blank')
})
$('.go_gwc').click(function(){
    window.open('mygwc.html?zxuser='+mzi,'_blank')
})