$(function(){
    $("#header").load("./header.html")
    $("#footer").load("./footer.html")



    var falge = false;
    $(window).scroll(function(ev){
        ev = ev||event;
        if(!falge){
            falge = true;
            if(parseInt($(window).scrollTop()) >= 200){
                    $('.header_bottom').hide().eq(1).show()
                    $('.bottom_wrap').animate({"top":"0px"},500)
            }else{
                        $('.header_bottom').show()
                        $('.bottom_wrap').animate({"top":"-100px"},500,function(){
                            $('.header_bottom').eq(1).hide()
                        })
                    }
                    setTimeout(function(){
                        falge = false;
                    },700)
                }
                if(parseInt($(window).scrollTop()) == 0){
                    $('.header_bottom').show()
                        $('.bottom_wrap').animate({"top":"-100px"},500,function(){
                            $('.header_bottom').eq(1).hide()
                        })
                }
            })
function getUrlParams(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    // console.log(r)
    if(r!=null)
        return  r[2];
    else 
        return "";
}



var a = getUrlParams("type");
console.log(a)
var result =articleData[a].data;
$(".con-l1-image-box img").attr("src",result.coverImg)
$(".small-box-img img").attr("src",result.coverImg)
$(".con-l3-l img").attr("src",result.coverImg)
$(".con-l3-rt3").html(result.money)


$('.goumai').click(function(){
    window.open("goumai.html?type="+a)
})
})