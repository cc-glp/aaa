$(function () {


    $("header").load("../html/header.html")
    $("footer").load("../html/footer.html")
    $(".shipin").click(function () {
        $(this).hide(200);
        $(".video").show()
    })
    $(".guanbi").click(function () {
        $(".video").hide();
        $(".shipin").show(200)
    })


    $(".zhantu_ul li").mouseover(function () {
        $(this).addClass("active").siblings().removeClass("active")
        $(".box_box img").attr("src", $(this).children("img").prop("src"))
        // console.log( )
    })



    var index = 0
    $(".zhantu_right").click(function () {
        index++;
        if (index > 3) {
            index = 3
        }
        $(".zhantu_ul").animate({ "left": -74 * index + "px" }, 200)
    })

    $(".zhantu_left").click(function () {
        index--;
        if (index < 0) {
            index = 0
        }
        console.log(index)
        $(".zhantu_ul").animate({ "left": -74 * index + "px" }, 200)
    })






    $(".xuanzeyanse li").click(function () {
        $(this).addClass("ccc").siblings().removeClass("ccc")
    })

    $(".xuanzebanben li").click(function () {
        $(this).addClass("ccc").siblings().removeClass("ccc")
    })

    $(".xuanzetaocan li").click(function () {
        $(this).addClass("ccc").siblings().removeClass("ccc")
    })



     
   $(".heise").click(function(){
    //    aa=$(this).attr("huawe1")
    //    console.log($(this).attr('class'))
 
    // window.location.href="../html/fenye.html?"+$(this).attr("huawe1")
    // var atte=window.location.search.substr(1)
    // console.log(atte)
    var atte1=huawe1["heise"].data.list;
    // console.log(atte1)23
// console.log(huawe1[atte].data)
   $(".top_name").text(atte1.topname)
    $(".top_h1").text(atte1.rightname)
   $(".jiage_x").text(atte1.jiage)
   $(".shangpin_text1").text(atte1.xuanze)
  $(".box_box img").attr("src",atte1.ing)
for(let i=0;i<$(".zhantu_ul li img").length;i++){
    $(".zhantu_ul li img").eq(i).attr("src",atte1['img'+(i+1)])
}


  var img1=setCookie("img1",$(".zhantu_ul li img").eq(0).prop("src"));
  var jiage_1=setCookie("jiage_1",$(".jiagema").html())
  console.log(img1)
})



$(".jiguang").click(function(){
   
    var atte2=huawe1["aurora"].data.list;
    $(".top_name").text(atte2.topname)
 $(".top_h1").text(atte2.rightname)
$(".jiage_x").text(atte2.jiage)
$(".shangpin_text1").text(atte2.xuanze)
$(".box_box img").attr("src",atte2.ing)
for(let i=0;i<$(".zhantu_ul li img").length;i++){
    $(".zhantu_ul li img").eq(i).attr("src",atte2['img'+(i+1)])
}
var img2=setCookie("img1",$(".zhantu_ul li img").eq(0).prop("src"))
  
})


$(".tiankong").click(function(){
    var atte3=huawe1["tian"].data.list
    $(".top_name").text(atte3.topname)
    $(".top_h1").text(atte3.rightname)
   $(".jiage_x").text(atte3.jiage)
   $(".shangpin_text1").text(atte3.xuanze)
   $(".box_box img").attr("src",atte3.ing)
   for(let i=0;i<$(".zhantu_ul li img").length;i++){
 $(".zhantu_ul li img").eq(i).attr("src",atte3['img'+(i+1)])
   }
})
// 
$(".chicha").click(function(){
    var atte4=huawe1["tangerine"].data.list;
    $(".top_name").text(atte4.topname)
    $(".top_h1").text(atte4.rightname)
   $(".jiage_x").text(atte4.jiage)
   $(".shangpin_text1").text(atte4.xuanze)
   $(".box_box img").attr("src",atte4.ing)
   for(let i=0;i<$(".zhantu_ul li img").length;i++){
       $(".zhantu_ul li img").eq(i).attr("src",atte4['img'+(i+1)])
   }
})

$(".mubei").click(function(){
    var atte5=huawe1["pearl"].data.list;
    $(".top_name").text(atte5.topname)
    $(".top_h1").text(atte5.rightname)
     $(".jiage_x").text(atte5.jiage)
   $(".shangpin_text1").text(atte5.xuanze)
   $(".box_box img").attr("src",atte5.ing)
   for(let i=0;i<$(".zhantu_ul li img").length;i++){
       $(".zhantu_ul li img").eq(i).attr("src",atte5['img'+(i+1)])
   // console.log($(".zhantu_ul li img").eq(i).attr("src"))
   }
})

 console.log(typeof $(".jiage_x").html())
$(".xzbb1").click(function(){
    if($(".heise").hasClass("ccc")){ 
    // huawe1["heise"].data.list;
        $(".top_name").text(huawe1["heise"].data.list.topname)
        $(".top_h1").text(huawe1["heise"].data.list.rightname)
         $(".jiage_x").text(huawe1["heise"].data.list.jiage)
         $(".shangpin_text1").text(huawe1["heise"].data.list.xuanze)
        
         
         var hei1=setCookie("hei1",$(".top_h1").html())
        //  var jiage1=setCookie("jiage1",Number(toSting))
        //  console.log(hei1)
        //  console.log(Number($(".jiage_x").html()))
        }

       if($(".jiguang").hasClass("ccc")){
        $(".top_name").text(huawe1["aurora"].data.list.topname)
        $(".top_h1").text(huawe1["aurora"].data.list.rightname)
         $(".jiage_x").text(huawe1["aurora"].data.list.jiage)
         $(".shangpin_text1").text(huawe1["aurora"].data.list.xuanze)
       
         var jig1=setCookie("jig1",$(".top_h1").html())
       
        }
       if($(".tiankong").hasClass("ccc")){
        $(".top_name").text(huawe1["tian"].data.list.topname)
        $(".top_h1").text(huawe1["tian"].data.list.rightname)
         $(".jiage_x").text(huawe1["tian"].data.list.jiage)
         $(".shangpin_text1").text(huawe1["tian"].data.list.xuanze)
       }
       if($(".chicha").hasClass("ccc")){
        $(".top_name").text(huawe1["tangerine"].data.list.topname)
        $(".top_h1").text(huawe1["tangerine"].data.list.rightname)
         $(".jiage_x").text(huawe1["tangerine"].data.list.jiage)
         $(".shangpin_text1").text(huawe1["tangerine"].data.list.xuanze)
       }
       if($(".mubei").hasClass("ccc")){
        $(".top_name").text(huawe1["pearl"].data.list.topname)
        $(".top_h1").text(huawe1["pearl"].data.list.rightname)
         $(".jiage_x").text(huawe1["pearl"].data.list.jiage)
         $(".shangpin_text1").text(huawe1["pearl"].data.list.xuanze)
       }
 })

 $(".xzbb2").click(function(){  
    if($(".heise").hasClass("ccc")){ 
     var shuju1=huawe1["heise1"].data.list;
     $(".top_name").text(shuju1.topname)
     $(".top_h1").text(shuju1.rightname)
      $(".jiage_x").text(shuju1.jiage)
      $(".shangpin_text1").text(shuju1.xuanze);
      

      var hei2=setCookie("hei2",$(".top_h1").html())
     
      console.log(hei2)
     
   
    }
    if($(".jiguang").hasClass("ccc")){
        $(".top_name").text(huawe1["aurora1"].data.list.topname)
        $(".top_h1").text(huawe1["aurora1"].data.list.rightname)
         $(".jiage_x").text(huawe1["aurora1"].data.list.jiage)
         $(".shangpin_text1").text(huawe1["aurora1"].data.list.xuanze)
         var jig2=setCookie("jig2",$(".top_h1").html())
        }

       if($(".tiankong").hasClass("ccc")){
        $(".top_name").text(huawe1["tian1"].data.list.topname)
        $(".top_h1").text(huawe1["tian1"].data.list.rightname)
         $(".jiage_x").text(huawe1["tian1"].data.list.jiage)
         $(".shangpin_text1").text(huawe1["tian1"].data.list.xuanze)
       }
       if($(".chicha").hasClass("ccc")){
        $(".top_name").text(huawe1["tangerine1"].data.list.topname)
        $(".top_h1").text(huawe1["tangerine1"].data.list.rightname)
         $(".jiage_x").text(huawe1["tangerine1"].data.list.jiage)
         $(".shangpin_text1").text(huawe1["tangerine1"].data.list.xuanze)
       }
       if($(".mubei").hasClass("ccc")){
        $(".top_name").text(huawe1["pearl1"].data.list.topname)
        $(".top_h1").text(huawe1["pearl1"].data.list.rightname)
         $(".jiage_x").text(huawe1["pearl1"].data.list.jiage)
         $(".shangpin_text1").text(huawe1["pearl1"].data.list.xuanze)
       }
 })

 $(".xzbb3").click(function(){
    if($(".heise").hasClass("ccc")){ 
        $(".top_name").text(huawe1["heise2"].data.list.topname)
        $(".top_h1").text(huawe1["heise2"].data.list.rightname)
         $(".jiage_x").text(huawe1["heise2"].data.list.jiage)
         $(".shangpin_text1").text(huawe1["heise2"].data.list.xuanze)
       
       var hei3=setCookie("hei3",$(".top_h1").html());
       console.log(hei3)
      
        }
       if($(".jiguang").hasClass("ccc")){
        $(".top_name").text(huawe1["aurora2"].data.list.topname)
        $(".top_h1").text(huawe1["aurora2"].data.list.rightname)
         $(".jiage_x").text(huawe1["aurora2"].data.list.jiage)
         $(".shangpin_text1").text(huawe1["aurora2"].data.list.xuanze)
         var jig3=setCookie("jig3",$(".top_h1").html())
        }
       if($(".tiankong").hasClass("ccc")){
        $(".top_name").text(huawe1["tian2"].data.list.topname)
        $(".top_h1").text(huawe1["tian2"].data.list.rightname)
         $(".jiage_x").text(huawe1["tian2"].data.list.jiage)
         $(".shangpin_text1").text(huawe1["tian2"].data.list.xuanze)
       }
       if($(".chicha").hasClass("ccc")){
        $(".top_name").text(huawe1["tangerine2"].data.list.topname)
        $(".top_h1").text(huawe1["tangerine2"].data.list.rightname)
         $(".jiage_x").text(huawe1["tangerine2"].data.list.jiage)
         $(".shangpin_text1").text(huawe1["tangerine2"].data.list.xuanze)
       }
       if($(".mubei").hasClass("ccc")){
        $(".top_name").text(huawe1["pearl2"].data.list.topname)
        $(".top_h1").text(huawe1["pearl2"].data.list.rightname)
         $(".jiage_x").text(huawe1["pearl2"].data.list.jiage)
         $(".shangpin_text1").text(huawe1["pearl2"].data.list.xuanze)
       }
 })

   
















    //    延保服务的hover效果
    $(".yanbaofuwu_box").hover(function () {
        $(".xiaojiant").addClass("uio")
        $(".yanbaofuwu_xiala").show()
    }, function () {
        $(".xiaojiant").removeClass("uio")
        $(".yanbaofuwu_xiala").hide()
    })
    $(".yanbaofuwu_xiala").hover(function () {
        $(".yanbaofuwu_xiala").show()
        $(".xiaojiant").addClass("uio")
    }, function () {
        $(".yanbaofuwu_xiala").hide()
        $(".xiaojiant").removeClass("uio")
    })

    //  此处代码写的过于沙雕 如需有更好的想法 请自行更改
    var flag = true;
    // 半年延保点击切换到盒子里的内容
    var text1 = $(".bannian_box").html()
    var text2 = $(".shangpin_text").text()
    var texxt1 = $(".shangpin_text1").text()
    //  text1+=111
    var flug = true;
    // var isChecked = $("[name='yanbao']").prop("checked")
    var money = 0;
    $(".bannian_box,[name='yanbao']").click(function () {
        if (flag == true) {
            $(this).css("color", "#ca141d");
            $("[name='yanbao']").attr("checked", 'true')
            $(".yinian_box").css("color", "black")
            $("[name='yanbao1']").removeAttr("checked")
            $(".yanbaofuwu_box").html(text1);
            isChecked = $("[name='yanbao']").prop("checked")
            if (isChecked == true) {
                if (flug == true) {
                    //  money+= 1 * 198;'         
                    $(".bannian_box").clone().appendTo(".shangpin_text")
                    flug = false;
                    
                }
            }
            flag = false
            flag1 = true
        } else {
            $(this).css("color", "black")
            $("[name='yanbao']").removeAttr("checked")
            flag = true;
            flag1 = true
            isChecked = $("[name='yanbao']").prop("checked")
            // console.log(isChecked)
            if (!isChecked) {
                $(".shangpin_text .bannian_box").remove()
                flug = true
            }
        }
        if ($(".shangpin_text .bannian_box")) {
            $(".shangpin_text .yinian_box").remove()
            flug = true
        }
    })


    var flag1 = true
    var flug1 = true
    //   一年延保点击切换到盒子里的内容
    var text = $(".yinian_box").text()
    $(".yinian_box,[name='yanbao1']").click(function () {
        if (flag1 == true) {
            $(this).css("color", "#ca141d");
            $("[name='yanbao1']").attr("checked", 'true');
            $(".bannian_box").css("color", "black");
            $("[name='yanbao']").removeAttr("checked");
            $(".yanbaofuwu_box").html(text);
            isChecked1 = $("[name='yanbao1']").prop("checked")
            if (isChecked1 == true) {
                if (flug1 == true) {
            $(".yinian_box").clone().appendTo(".shangpin_text");
                    flug1 = false
                   
                }
            }
            flag1 = false
            flag = true
        } else {
            $(this).css("color", "black")
            $("[name='yanbao1']").removeAttr("checked");
            isChecked1 = $("[name='yanbao1']").prop("checked");
            if (!isChecked1) {
                $(".shangpin_text .yinian_box").remove()
                flug1 = true
            }
            flag1 = true;
            flag = true
        }
        if($(".shangpin_text .yinian_box")){
            $(".shangpin_text .bannian_box").remove()
            flug1 = true
            }

    })




    // 碎屏服务部分效果代码
    $(".suipingfuwu").hover(function () {
        $(".suipingfuwu_xiala").show()
        $(".xiaojiantt").addClass("uio")
    }, function () {
        $(".suipingfuwu_xiala").hide()
        $(".xiaojiantt").addClass("uio")
    })

    var flog = true;
    var flog1= true;
    $(".suiping_box").click(function () {
        if (flog == true) {
            $(this).css("color", "#ca141d");
            $("[name='suiping']").attr("checked", 'true');
            isChecked3 = $("[name='suiping']").prop("checked");
            if(isChecked3==true){
                if(flog1==true){
                console.log(flog1)
                $(".suiping_box").children().not("em,s").clone().appendTo(".shangpin_text")
               flog1=false
                }
            }
            flog = false;
        }
        else {
            flog = true
            $(this).css("color", "black");
            $("[name='suiping']").removeAttr("checked");
            isChecked3 = $("[name='suiping']").prop("checked");
            if(!isChecked3){
         $(".shangpin_text").children(".max_bannian,.ff").remove()
            flog1 = true
            }
        }

    })


        //    无忧服务部分代码
    $(".wuyoufuwu").hover(function () {
        $(".wuyou_xiala").show()
        $(".xiaojianttt").addClass("uio")
    }, function () {
        $(".wuyou_xiala").hide()
        $(".xiaojianttt").addClass("uio")
    })

    var flag3 = true
    var flag4=true;
    $(".wuyouu_box").click(function () {
        if (flag3 == true) {
            $(this).css("color", "#ca141d");
            $("[name='wuyou']").attr("checked", 'true');
            isChecked4 = $("[name='wuyou']").prop("checked");
            if(isChecked4==true){
                if(flag4==true){
                    $(".wuyouu_box").clone().appendTo($(".shangpin_text"))
                    flag4=false
                }
            }
            flag3 = false
        } else {
            flag3 = true
            $(this).css("color", "black");
            $("[name='wuyou']").removeAttr("checked");
            isChecked4 = $("[name='wuyou']").prop("checked");
            if(!isChecked4){
       $(".shangpin_text .wuyouu_box").remove()
                flag4=true
            }
        }

        if($(".shangpin_text .wuyouu_box")){
            $(".shangpin_text").children(".max_bannian,.ff").remove();
            $(".shangpin_text .bannian_box").remove()
            $(".shangpin_text .yinian_box").remove()
        }
    })

    //    购物车旁边加减部分的东西
    var text2=setCookie("text2",index1)
    var index1 = 1
    $(".pro_jia").click(function () {
        index1++
        $(".pro_text").val(index1);
        if (index1 >= 2) {
            $(".pro_jian").removeClass("disable")
        }
        var text=setCookie("text",$(".pro_text").val())
    })
    $(".pro_jian").click(function () {
        index1--;
        $(".pro_text").val(index1);
        var val = $(".pro_text").val();
        if (val <= 1) {
            index1 = 1
            $(".pro_text").val(1);

        }
        if (index1 <= 1) {
            $(".pro_jian").addClass("disable")
        }
        var text=setCookie("text",$(".pro_text").val())
    })





 

    $(".jiarugouwuche").click(function () {

        var pro_text=getCookie("text")
        var imgm1=getCookie("img1");
        var imgm2=getCookie("img2");
        var jieshouhei1=getCookie("hei1");
        var jieshouhei2=getCookie("hei2");
        var jieshouhei3=getCookie("hei3")
         console.log(pro_text)
    
        var jieshoujig1=getCookie("jig1")
     
        var jieshoujig2=getCookie("jig2")
        var jieshoujig3=getCookie("jig3") 

        var jieshowtext2=getCookie("text2")
     


   if($(".xuanzeyanse li").hasClass("ccc")){
    if($(".xuanzebanben li").hasClass("ccc")){

        // 如果黑色被选中的了 我就换到黑色部分
     if($(".heise").hasClass("ccc")){

        if($(".xzbb1").hasClass("ccc")){
            $(".box2_p").html(jieshouhei1)
        }
        if($(".xzbb2").hasClass("ccc")){
            $(".box2_p").html(jieshouhei2)
        }
        if($(".xzbb3").hasClass("ccc")){
            $(".box2_p").html(jieshouhei3)
        }
          
     }
   

    //  如果极光选中的话 购物车提示内容变化
     if($(".jiguang").hasClass("ccc")){
        if($(".xzbb1").hasClass("ccc")){
            $(".box2_p").html(jieshoujig1)
        }
        if($(".xzbb2").hasClass("ccc")){
            $(".box2_p").html(jieshoujig2)
        }
        if($(".xzbb3").hasClass("ccc")){
            $(".box2_p").html(jieshoujig3)
        }
     }

     $(".quanping,.quanping_box").show()
             }
         }else{
             alert("您还没有选中商品内容")
         }
        
    })
    $(".guangguang,.guanbii").click(function () {
        $(".quanping,.quanping_box").hide()
    })



   $(".qujiesuan").click(function(){

       location.href="gouwuche.html"
   })
































































})