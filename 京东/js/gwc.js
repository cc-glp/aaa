$('.min_img01').mouseover(function(){
    $(this).addClass('img_hover').siblings('.min_img01').removeClass('img_hover');
    $('.cloth01').eq($(this).index('.min_img01')).fadeIn().siblings('.cloth01').fadeOut();
    $('.cloth_bigbox>img').eq($(this).index('.min_img01')).fadeIn().siblings('.cloth_bigbox>img').fadeOut();
})


// console.log(getCookie('zxuser'))
// var user=window.location.search.substr(1,6)
// console.log(user)
// if (user == '') {
//     $('.nav-center .right ul li:first').html(`<span onclick="window.open('./login.html','_self')">你好，请登录&nbsp;&nbsp;</span>
//     <p onclick="window.open('./zhuce.html','_self')">免费注册</p>
//     `)
// }else if(user=='zxuser'){
//     $('.nav-center .right ul li:first').html(`<p>${getCookie('zxuser')}</p>
//     <i class="userico_ico"></i>`)
// }


var i=$('#buy_num').val()
$('.num_add').click(function(){
i++
if(i>50){
    i=50
    alert('清仓了')
}
$('#buy_num').val(i)
})
$('.num_remove').click(function(){
    i--
    if(i<1){
        i=1
        alert('╭(╯^╰)╮买吧╭(╯^╰)╮')
    }
    $('#buy_num').val(i)
    })



$(function(){
     //获取页面url传过来的参数
 function getUrlParams(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) { return r[2]; }
    else { return ""; }
}
var  username=unescape(getUrlParams('zxuser'))
console.log(username)
if(username==''){
    $('.nav-center .right ul li:first').html(`<span onclick="window.open('./login.html','_self')">你好，请登录&nbsp;&nbsp;</span>
    <p onclick="window.open('./zhuce.html','_self')">免费注册</p>
    `)
}else if(username!=''){
    $('.nav-center .right ul li:first').html('<p>'+username+'</p><i class="userico_ico"></i>')
}
var num= getUrlParams('gw')
console.log(num)
var data=gwcNr[num].data
$('.big_pic_one').attr('src',data.daimgone)
$('.big_pic_two').attr('src',data.daimgtwo)
$('.big_pic_three').attr('src',data.daimgthree)
$('.big_pic_four').attr('src',data.daimgfour)
$('.big_pic_five').attr('src',data.daimgfive)
$('.small_pic_one').attr('src',data.xiaoimgone)
$('.small_pic_two').attr('src',data.xiaoimgtwo)
$('.small_pic_three').attr('src',data.xiaoimgthree)
$('.small_pic_four').attr('src',data.xiaoimgfour)
$('.small_pic_five').attr('src',data.xiaoimgfive)
$('.sku_name').html(data.title)
$('.news').html(data.smlltitle)
$('.sp_js').html('')
$('.sp_js').append('<img width="100%" src='+data.coverImg+'>')
$('.track').html('')
$('.track').append('<img width="100%" src='+data.rightimg+'>')

if(getCookie(username+'sp')){
    var sp=getCookie(username+'sp')
 }else{
     sp=0
 }
 console.log(username)
 $('.add_cart').click(function(){
     if (username == ''){
         window.open('./login.html','_self')
     }else{
         sp++
         setCookie(username+'sp',sp,14)
        setCookie(username+'sp'+sp,num,14)
        window.open('mygwc.html?zxuser='+username,'_blank')
        alert('加入成功')
     }
 })





})