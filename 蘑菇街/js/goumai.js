$("#footer").load("./footer.html")
$("a").attr("href","javascript:")
var MM = null;
$('.info-box411 li').click(function(){
    $(this).attr("xz","1").siblings("li").attr("xz","0")
    $(this).css({"border":"1px solid black"}).siblings("li").css({"border":"1px solid #ddd"})
})
$('.J_SizeList li').click(function(){
    MM = $(this).html();
    $(this).attr("xz","1").siblings("li").attr("xz","0")
    $(this).css({"border":"1px solid black"}).siblings("li").css({"border":"1px solid #ddd"})
})
$(".num-add").click(function(){
    if($(".num-input").val() < parseInt($("#nummm").text())){
        $(".num-input").val(parseInt($(".num-input").val())+1);
    }
    if($(".num-input").val()>1){
        $(".num-reduce").css({"opacity":"1"})
    }
})
$(".num-reduce").click(function(){
    if($(".num-input").val()>1){
        $(".num-input").val(parseInt($(".num-input").val())-1);
    }
    if($(".num-input").val()==1){
        $(".num-reduce").css({"opacity":"0.3"})
    }
   
})
$(".num-input").blur(function(){
    if($(this).val()>parseInt($("#nummm").text())){
        $('.goods-stock-tip').show();
        $(this).val(parseInt($("#nummm").text()))
    }
    if($(".num-input").val()>1){
        $(".num-reduce").css({"opacity":"1"})
    }
    if($(".num-input").val()==1){
        $(".num-reduce").css({"opacity":"0.3"})
    }
})



function getUrlParams(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
        return  r[2];
    else 
        return "";
}

var a = getUrlParams("type");
console.log(a)
var result =articleData[a].data;
$("#J_BigImg").attr("src",result.coverImg)
$(".info-box411 li img").attr("src",result.coverImg)
$(".carousel li img").attr("src",result.coverImg)
$(".info-box2-b2").html(result.money)
$(".info-box1").html()
index = 0;
var a = getCookie('user')
$(".car").click(function(){
    if(MM){
        if(getCookie(a)){
            arr1 = JSON.parse(getCookie(a))
        }else{
            arr1=[];
        }
        var obj ={
            src:result.coverImg,
            money:Number(result.money.substr(1)),
            title:result.title,
            MM:MM,
            index:Number($(".num-input").val())
        }
        arr1.push(obj)
        var zz = JSON.stringify(arr1)
        console.log(arr1)
        // setCookie('aa',zz,14)
        
        setCookie(a,zz,14)
        console.log(getCookie(a))
        window.open("./gouwuche.html")
    }else{
        alert('请选择尺码')
    }
    



//    var coo =  document.cookie.split('; ')
//    for(var n = 0;n<coo.length;n++){
//     var cook = coo[n].split("=")
//     if(cook[0].slice(0,6) == "wuping"){
//         var cooki = cook[0].slice(6,)
//     }
//    }
   
//     if($('.info-box411 li').attr('xz') && $('.J_SizeList li').attr('xz')){
//         for(var F= 0;F<$(".chima").length;F++){
//             if($(".chima").eq(F).attr("xz")==1){
//                 var C = $(".chima").eq(F).text();
//             }
//             if($(".yanse").eq(F).attr("xz")==1){
//                 var T = $(".yanse").eq(F).attr("ys")
//             }
//         }
//         if(cooki == a){
//             setCookie("wuping"+a+index,"j"+parseInt($(".info-box2-b2").text().slice(1,))+"s"+$(".num-input").val()+"c"+C+"y"+T);
//             index++;
//         }else{
//             setCookie("wuping"+a,"j"+parseInt($(".info-box2-b2").text().slice(1,))+"s"+$(".num-input").val()+"c"+C+"y"+T);
//         }
        
        
//         window.open("./gouwuche.html");
//         index++;
//     }else{
//         alert("请选择正确的颜色和尺寸")
//     }

})