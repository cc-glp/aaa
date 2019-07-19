$(function(){
  $("header").load("../html/header.html")

  $("footer").load("../html/footer.html")


 $(".xuanzefuwu").hover(function(){
    //  alert(11)
     $(".hui").addClass("uio")
 },function(){
     $(".hui").removeClass("uio")
 })



 $(".xuanzefuwu_xiala").hide()

 $(".xuanzefuwu").hover(function(){
      $(".xuanzefuwu_xiala").show()
 },function(){
    $(".xuanzefuwu_xiala").hide()
 })




 
 $(".content").on("click",".shanchu",function(){
  //  console.log(1231312312312)
  if( $(this).parents(".content_content").children(".checkbox").children(".vam1").prop("checked")==true){
  console.log("Asdasdasdasdsadasd")
    $(".qrsc").eq($(this).index(".shanchu")).show()
   }
   var _this=$(this).index(".shanchu")
   // 点击是的时候所发生的事情 删除添加元素
  //  for(let i=0;i<=_this.index;i++){
  //    console.log(_this.index)
  //  }
$(".shi").click(function(){
  // $(".content").remove();
  $(".content1").show();
  $(".content_bottom").hide();
  $(".content_top").hide()
  // console.log($(".content_content").eq(_this))
  $(".content_content").eq(_this).remove()
})

 })
$(".fou").click(function(){
    $(".qrsc").hide()
})


console.log($(".vam1"))


$(".bottom_left a").click(function(){ 
   $(".shanchuquanbu").show();
   $(".yes").click(function(){
    $.each($(".vam1"),function(i,item){
      // console.log(this)
       if($(this).prop("checked")==true){
        $(this).parents(".content_content").remove()   
       }
    })
  })
  
})


//    半年延保服务的小总计算
   var xiaoji1;
  var flag1=true
  var isChecked;
  var qian1=$(".qian1").html()
  var qianqian;
  var bianliang1
  /*点击半年的*/
 $(".box1").click(function(){
  //  qian2=$("qian")
     /*这是小计的钱 */
     xiaoji1=$(".xiaoji1").eq(0).html()
     /**/
    //  console.log(flag1)
     if(flag1==true){
      //  取消无忧服务的点击
      $("[name=ch4]").removeAttr("checked")
      flag4=true
         /*前面小方框 */
        $("[name=ch1]").attr("checked", 'true')
        /*延长服务的颜色 */
        $(".yanchangfuwu i").addClass("bianhong")
        /*价格*/
        $(".jiage1").eq(0).html("¥ 198.00")
        /*数量*/
         $(".sl1").eq(0).html("x 1")
         /*小计 */
       $(".xiaoji1").eq(0).html("￥198.00")
       /*最后的总价格 */
       $(".qian1").html(Number(qian1*index)+198+".00")
       bianliang1=Number(qian1*index)+198+".00"
      //  console.log(bianliang1)
       var qianqian=$(".qian1").html()
    //    console.log(qianqian)
       isChecked = $("[name='ch1']").prop("checked")
    /*如果第一个框选中，则删除第二个框 */
       if(isChecked==true){
    //     //    console.log("ch1 111")
    // 如果半年的服务被选中 那取消一年的服务
        $("[name=ch2]").removeAttr("checked")
       }


      console.log($("[name='ch1']").prop("checked"))
       if($("[name='ch3']").prop("checked")==true){
        // console.log(111111111111111111111111111111111)
        if($("[name='ch1']").prop("checked")==true){
          // console.log(1111)
          $(".qian1").html(Number(bianliang3)+198+"0")
        }else if($("[name='ch1']").prop("checked")==false){
          console.log("oooo")
          $(".qian1").html(Number(bianliang3))
        }
          // $(".qian1").html(Number(bianliang3)+"0")
       
      }

      flag1=false;
      flag2=true
     }
     else{
      
      
      //  给无忧服务添加点击
      $("[name=ch4]").attr("checked")
      $(".box4").attr("click")
      flag4=true
      $("[name=ch1]").removeAttr("checked")
      isChecked = $("[name='ch1']").prop("checked")
      isChecked=false
    //   console.log(isChecked)
     $(".yanchangfuwu i").eq(0).removeClass("bianhong")
     $(".jiage1").eq(0).html("")
      $(".sl1").eq(0).html("")
      $(".xiaoji1").eq(0).html("")
      console.log(bianliang1)
      $(".qian1").html(Number($(".qian").html())+".00")
      if(!isChecked){
        $("[name=ch1]").removeAttr("checked")
      }
      if($("[name='ch3']").prop("checked")==true){
        if($("[name='ch1']").prop("checked")==false){
          // console.log("oooo")
          $(".qian1").html(Number(bianliang3))
        }
      }
      //  console.log($("[name=ch1]").prop("checked"))
      flag1=true;
    //   flag2=true
     }

 })
 var bianliang1=Number(qian1*index)+198+".00"
 var xiaoji2;
 var flag2=true
var bianliang2
// 一年延保服务的小总计算
 var isChecked1;
$(".box2").click(function(){

 xiaoji2=$(".xiaoji2").eq(0).html()
 if(flag2==true){
    isChecked1 = $("[name='ch2']").prop("checked")
    isChecked1=true
    // 取消无忧服务的点击
     $("[name=ch4]").removeAttr("checked")
     flag4=true

     $("[name=ch2]").attr("checked", 'true')
     $(".yanchangfuwu i").eq(0).addClass("bianhong")
     $(".jiage1").eq(0).html("¥ 368.00")
     $(".sl1").eq(0).html("x 1")
    $(".xiaoji1").eq(0).html("￥ 368.00")
    $(".qian1").html(Number(qian1*index)+368+".00")
    bianliang2=Number(qian1*index)+368+".00"
    // $(".qian1").html(qianqian-198+368+".00")
    // console.log(isChecked1)
   if(isChecked1=true){
    // 如果一年的服务被选中 那取消半年的服务
    $("[name=ch1]").removeAttr("checked")
    isChecked=false
    isChecked1=false
   }
  //  if($("[name='ch3']").prop("checked")==true){
  //   // console.log(111111111111111111111111111111111)
  //   if($("[name='ch2']").prop("checked")==true){
  //     // console.log(1111)
  //     $(".qian1").html(Number(bianliang3)+368+"0")
  //   }
      // $(".qian1").html(Number(bianliang3)+"0")

      if($("[name='ch3']").prop("checked")==true){
        if($("[name='ch2']").prop("checked")==true){
          // console.log("oooo")
          $(".qian1").html(Number(bianliang3)+368+"0")
        }
      }
  

   flag2=false
   flag1=true
   }else{
     //  给无忧服务添加点击
     $("[name=ch4]").attr("checked")
     $(".box4").attr("click")
     flag4=true
    $("[name=ch2]").removeAttr("checked")
    isChecked1 = $("[name='ch2']").prop("checked")
    isChecked1=false
    // console.log(isChecked1)
    $(".yanchangfuwu i").eq(0).removeClass("bianhong")
    $(".jiage1").eq(0).html("")
    $(".sl1").eq(0).html("")
   $(".xiaoji1").eq(0).html("")
   $(".qian1").html(Number($(".qian").html())+".00")
   if(!isChecked1){
    $("[name=ch2]").removeAttr("checked")
    isChecked1=true
  }
  if($("[name='ch3']").prop("checked")==true){
    if($("[name='ch2']").prop("checked")==false){
      // console.log("oooo")
      $(".qian1").html(Number(bianliang3))
    }
  }
    flag2=true
   }

})



//  碎屏宝服务部分代码
var flag3=true;
var bianliang3
var isChecked3 = $("[name='ch3']").prop("checked") 
$(".box3").click(function(){
  
    if(flag3==true){
      isChecked3 = $("[name='ch3']").prop("checked") 
      isChecked = $("[name='ch1']").prop("checked") 
    $("[name=ch3]").attr("checked",'true')
     $(".jiage2").html("¥ 179.40"+"<s>&nbsp;¥&nbsp;299.00</s>")
  //  console.log()
    $(".sl2").html("x 1")
    $(".xiaoji2").html("¥ 179.40"+"<span>省&nbsp;¥&nbsp;119.60</span>")
    $(".qian1").html(Number(qian1*index)+parseFloat(179.40)+"0")
    bianliang3=Number(qian1*index)+parseFloat(179.40)
      //  if(isChecked==true){
      // $(".qian1").html(Number(bianliang1)+parseFloat(179.40)+"0")
      //   }
      // if(isChecked1==true){
      //     $(".qian1").html(Number(bianliang2)+parseFloat(179.40)+"0")
      //   }

        if($("[name='ch2']").prop("checked")==true){
          if($("[name='ch3']").prop("checked")==true){
            // console.log("oooo")
            $(".qian1").html(Number(bianliang2)+parseFloat(179.40)+"0")
          }
        }

        $("[name=ch4]").removeAttr("checked")
          flag4=true
    $(".qmm").html("￥119.60")
    flag3=false
    }else{
       console.log(isChecked)
       console.log(isChecked3)
       if(isChecked3==false){
        $(".qian1").html(Number($(".qian").html()));
        if(isChecked==true){
          console.log(!11111)
           $(".qian1").html(bianliang1)
        }
      }else{
         if(isChecked==false){
        $(".qian1").html(bianliang1)
        }
      }

          // if(isChecked3==false){
          //   if(isChecked1==true){
          //     $(".qian1").html(bianliang2)
          //   }else{
          //       if(isChecked1==true){
          //   $(".qian1").html(bianliang2)
          //        }
          //   }
          // }
  //  console.log($("[name='ch3']").prop("checked"))
          
     
   $("[name=ch3]").removeAttr("checked")
     $(".jiage2").html("")
    $(".sl2").html("")
    $(".xiaoji2").html("")

    if($("[name='ch2']").prop("checked")==true){
      if($("[name='ch3']").prop("checked")==false){
        console.log("oooo")
        $(".qian1").html(Number(bianliang2))
      }
    }
    $(".qmm").html("¥ 0.00")
    flag3=true
    }

})




  // 无忧服务部分代码
     var flag4=true;
     $(".box4").click(function(){
   if(flag4==true){
    
    flag1=true
    flag2=true
    flag3=true
    $("[name=ch4]").attr("checked","true")

    if($("[name=ch4]").prop("checked")==true){
      $("[name=ch1]").removeAttr("checked")
      $("[name=ch2]").removeAttr("checked")
      $("[name=ch3]").removeAttr("checked")
    }
    $(".jiage1").eq(0).html("￥969")
    $(".sl1").eq(0).html("x 1")
    $(".xiaoji1").eq(0).html("￥969")

    $(".jiage2").eq(0).html("")
    $(".sl2").eq(0).html("")
    $(".xiaoji2").eq(0).html("")

  $(".qian1").html(Number(qian1*index)+969*index+".00")
   flag4=false
   }else{
    //  给其他三位加上可选事件
    

    $("[name=ch4]").removeAttr("checked")
    $(".jiage1").eq(0).html("")
    $(".sl1").eq(0).html("")
    $(".xiaoji1").eq(0).html("")
    $(".qian1").html(Number($(".qian").html())+".00")
    flag4=true
   }
 })


var isChecked = $("[name='ch1']").prop("checked")
var isChecked1 =$("[name='ch2']").prop("checked")
//  数量部分加减乘数量部分
 var qian=$(".qian").html()
 var qian1=$(".qian1").html()

  var zong1,zong2
 var index=1
 var  qian2=$(".qian").html()
//   加法部分++++++++++++
 $(".shuliang_jia").click(function(){ 
  isChecked = $("[name='ch1']").prop("checked") 
  isChecked1 =$("[name='ch2']").prop("checked")
  isChecked2=$("[name='ch3']").prop("checked")
     index++
     $(".shuliang-text").val(index)
     $(".lll").html(index);
     $(".qian").html(qian*index)
     $(".emm").html(index)
     if($("[name='ch4']").prop("checked")==true){
        $(".qian1").html(qian1*index+969+".00")
     }
     else if($("[name='ch3']").prop("checked")==true){
      console.log(isChecked,isChecked1,bianliang3)
     $(".qian1").html(Number(qian2)*(index-1)+bianliang3)
     if($("[name='ch3']").prop("checked")==true&&isChecked==true){
      $(".qian1").html(Number(qian2)*(index-1)+bianliang3+198)
     }
     if($("[name='ch3']").prop("checked")==true&&isChecked1==true){
      $(".qian1").html(Number(qian2)*(index-1)+bianliang3+368)
     }
    }
     else if(isChecked==true&&isChecked1==false){
      $(".qian1").html(qian2*index+198)+".00"
      }
     else if(isChecked1==true&&isChecked==false){
      $(".qian1").html(qian2*index+368)+".00";
     } 
     else{
       $(".qian1").html(qian2*index)
       $(".emm").html(index)
     }
      if(index>=2){
        $(".shuliang_jian").removeClass("disable");
      }
 })
 var zong2=qian1*index+368+".00"
//  数量部分加减乘数量部分
var num=0
 var val=$(".shuliang-text").val();
 $(".shuliang_jian").click(function(){
  isChecked = $("[name='ch1']").prop("checked") 
  isChecked1 =$("[name='ch2']").prop("checked")
     index--
     if(index<=1){
      index=1
    }
     $(".qian1").html(qian1*index)
     $(".shuliang-text").val(index)
     $(".emm").html(index)
      val=$(".shuliang-text").val();
      $(".qian").html(qian*index) 
      
      if(index>=1){
        console.log(index)
        if($("[name='ch4']").prop("checked")==true){
          $(".qian1").html(qian1*index+969+".00")
          num=qian1*index+969+".00"
       }
       else if($("[name='ch3']").prop("checked")==true){
        // console.log(isChecked,isChecked1,bianliang3)
       $(".qian1").html(Number(qian2)*(index-1)+bianliang3)
       num=Number(qian2)*(index-1)+bianliang3
       if($("[name='ch3']").prop("checked")==true&&isChecked==true){
        $(".qian1").html(Number(qian2)*(index-1)+bianliang3+198)
        num=Number(qian2)*(index-1)+bianliang3+198
       }
       if($("[name='ch3']").prop("checked")==true&&isChecked1==true){
        $(".qian1").html(Number(qian2)*(index-1)+bianliang3+368)
        num=Number(qian2)*(index-1)+bianliang3+368
       }
      }
       else if(isChecked==true&&isChecked1==false){
         num=qian2*index+198
        $(".qian1").html(qian2*index+198)+".00"
        // console.log(num)
        }
       else if(isChecked1==true&&isChecked==false){
        // console.log("laoyang")
        $(".qian1").html(qian2*index+368)+".00";
        num=qian2*index+368
        // console.log(num)
       } 
       else{
        num= $(".qian1").html(qian2*index)
       }

      }
      else if (index <=1) {
        // val.html(1)
        //  index=2
        $(".shuliang-text").val(index);
         $(".emm").html(index+1)
      if($("[name='ch1']").prop("checked")&&$("[name='ch2']").prop("checked")&&$("[name='ch3']").prop("checked")&&$("[name='ch4']").prop("checked")){ 
          num=Number($(".qian").html())
          $(".qian1").html(num)
         }
        //  console.log(num)
         $(".qian1").html(num)

    }

      $(".lll").html(index)
     if (val <= 1) {
      //  val.html(1)
        index = 1
        $(".shuliang-text").val(1);
        $(".lll").html(1)
        $(".qian").html(qian) 
        $(".shuliang_jian").addClass("disable")
    }

 })



    // 全选删除部分

  var flag5=true
    $(".vam").click(function(){
      if(flag5==true){
        $(".vam").attr("checked","true");
        $(".vam1").attr("checked","true");
        $("[name=quanxuan]").attr("checked","true");
        flag5=false
      }
      else{
        $(".vam").removeAttr("checked");
        $(".vam1").removeAttr("checked");
        $("[name=quanxuan]").removeAttr("checked");
        flag5=true
      }
    })
   
    var flag6=true;
  //  底部全选删除部分
    $("[name=quanxuan]").click(function(){
       if(flag6==true){
        $(".vam").attr("checked","true");
        $(".vam1").attr("checked","true");
        $("[name=quanxuan]").attr("checked","true");
        flag6=false
       }
       else{
        $(".vam").removeAttr("checked");
        $(".vam1").removeAttr("checked");
        $("[name=quanxuan]").removeAttr("checked");
        flag6=true
      }
    })

    //  console.log("whiasodhoiasd ")
     $(".bottom_left a").click(function(){
      if($("[name=quanxuan]").prop("checked")==true&&$(".vam").prop("checked")==true){
        $(".shanchuquanbu").show()
      }else{
        $(".shanchuquanbu").hide()
      }

     })
   


     var ent=getCookie("text")
     var imgm1=getCookie("img1");
     var imgm2=getCookie("img2")
     var jieshouhei1=getCookie("hei1");
     var jieshouhei2=getCookie("hei2");
     var jieshouhei3=getCookie("hei3")
      console.log(imgm1)

     var jieshoujig1=getCookie("jig1")
  
     var jieshoujig2=getCookie("jig2")
     var jieshoujig3=getCookie("jig3")

    //  console.log(jieshouhei1)
    var jiage_1=getCookie("jiage_1")

//  $(".content").html()


 
  //  if()
//  

  // var html;
  // $(`
  //     <div class="content_content">

  //            <label class="checkbox">
  //       <input type="checkbox" readonly="readonly" class="vam1">
  //           </label>

  //                       <div class="cont_right">
  //                           <div class="cont_right_top">
  //                            <div class="right_top_img">
  //                        <img src="${imgm1}">
  //                               </div>
  //                               <ul class="right_top_ul">
  //                                   <li class="nthc1">
  //                                       ${jieshouhei1}
  //                                   </li>
  //                                   <li class="ntch2">
  //                                   ¥5488.00
  //                                   </li>
  //                                   <li>
  //                                       <div class="shuliang">
  //                                           <input type="text" class="shuliang-text" value="1">
  //                                           <div class="shuliang_btn">
  //                                               <div class="shuliang_jian disable">-</div>
  //                                               <div class="shuliang_jia">+</div>
  //                                           </div>


  //                                       </div>
  //                                   </li>
  //                                   <li class="ntch3">
                                        
  //                                       <span class="qian">${jiage_1}</span>

  //                                   </li>
  //                                   <li>
  //                                       <div class="shanchu">删除</div>

  //                                       <div class="qrsc">
  //                                           <div class="b">
  //                                               <p>您确认要删除该商品吗？</p>
  //                                               <div class="shi">是</div>
  //                                               <div class="fou">否</div>
  //                                           </div>
  //                                       </div>
  //                                   </li>
  //                               </ul>
  //                           </div>



  //                           <div class="cont_right_bottom">

  //                                     <!-- 服务部分 -->
  //                               <div class="right_bottom1">

  //                                   <!-- 服务部分 -->

  //                                   <h2>服务</h2>
  //                                   <div class="xuanzefuwu">
  //                                       <!-- 延长保服务 -->
  //                                      <ul>
  //                                           <div class="yanchang">
  //                                               <div class="yanchangfuwu">
  //                                                   <i>延长服务宝</i>
  //                                                   可选购延长服务宝
  //                                               </div>
  //                                               <div class="hui"></div>
  //                                           </div>

  //                                           <div class="jiage1"></div>
  //                                             <div class="sl1"></div>
  //                                             <div class="xiaoji1"></div>
  //                                       </ul>
  //                                       <ul>
  //                                           <div class="suiping">
  //                                   <div class="suipingfuwu">
  //                                                   <i>碎屏服务宝</i>
  //                                                   可选购碎屏服务宝
  //                                               </div>

  //                                           </div>

  //                                           <div class="jiage1 jiage2"></div>
  //                                             <div class="sl1 sl2"></div>
  //                                             <div class="xiaoji1 xiaoji2"></div>
  //                                       </ul>
  //                                       <ul>
  //                                           <div class="wuyou">
  //                                               <div class="wuyoufuwu">
  //                                                   <i>无忧服务</i>
  //                                                   可选购无忧服务宝
  //                                               </div>

  //                                           </div>

                                        
  //                                       </ul>



  //                                  <div class="xuanzefuwu_xiala" style="display: none;">

    
  //                                  <div class="xuanze1">
  //                                   <ul>
  //                                       <div class="yanchang">
  //                                           <div class="yanchangfuwu">
  //                                               <i>延长服务宝</i>
  //                                               可选购延长服务宝
  //                                           </div>
  //                                           <div class="hui"></div>
  //                                       </div>
  //                                   </ul>
  //                                   <ul>
  //                                       <div class="suiping">
  //                                    <div class="suipingfuwu">
  //                                               <i>碎屏服务宝</i>
  //                                               可选购碎屏服务宝
  //                                           </div>

  //                                       </div>
  //                                   </ul>
  //                                   <ul>
  //                                       <div class="wuyou">
  //                                           <div class="wuyoufuwu">
  //                                               <i>无忧服务</i>
  //                                               可选购无忧服务宝
  //                                           </div>

  //                                       </div>
  //                                   </ul>
  //                                  </div>

  //                                    <div class="xuanze2">
                                          
  //                                       <div class="yy1">
  //                                           <span>
  //                                               延长服务宝
  //                                           </span>
  //                                           <div class="yy1_right">
  //                                               <ul>

  //                                                   <li>
  //                                                 <div class="box1 booo">
  //                                                   <input type="checkbox" name="ch1" id="" class="ch1">
  //                                                   延长服务宝半年 ¥198
                                      
  //                                                 </div>
  //                                                   </li>
  //                                                   <li>
  //                                 <div class="box2 booo">
  //                          <input type="checkbox" name="ch2" id="" class="ch2">
  //                                         延长服务宝一年 ¥368
                                              
  //                                              </div>  
  //                                                   </li>
  //                                               </ul>
  //                                           </div>
  //                                       </div>


  //                                       <div class="yy2">
  //                                           <span>
  //                                               碎屏服务宝
  //                                           </span>
  //                                      <div class="yy2_right">
  //                                  <ul>

  //                                   <li>
  //                                 <div class="box3">
  //                                 <input type="checkbox" name="ch3" id="" class="ch3">
  //                                <em class="product-service-icon">优惠</em>
  //                                  碎屏(含后盖)服务宝1年 ¥179.4
  //                                   <s>&nbsp;¥299</s>
                                      
  //                                     </div>
  //                                    </li>
                                              
  //                                    </ul>
  //                                           </div>
  //                                       </div>

  //                                       <div class="yy3">
  //                                           <span>
  //                                               无忧服务宝
  //                                           </span>
  //                                      <div class="yy3_right">
  //                                  <ul>
  //                                   <li>
  //                                 <div class="box4">
  //                                 <input type="checkbox" name="ch4" id="" class="ch4">
                                 
  //                                 华为无忧服务 ¥969
                                    
                                      
  //                                    </div>
  //                                    </li>
                                              
  //                                    </ul>
  //                                           </div>
  //                                       </div>
  //                                    </div>

  //                                  </div>

  //                                   </div>


  //                               </div>

                                     
  //                               <!-- 赠送的物品 -->
  //                               <div class="right_bottom2">
  //                                   <h2>配</h2>
  //                                   <ul>
  //                                       <li>
  //                                           <div class="shuibei">
  //                                               <img src="https://res.vmallres.com/pimages//product/GB3102160007204/428_428_1556433735450mp.png" alt="不锈钢保温杯">
                                                
                            
  //                                           </div>
  //                                           <span>不锈钢保温杯 颜色随机发</span>
  //                                       </li>
  //                                       <li></li>
  //                                       <li>x
  //                                       <div class="lll">1</div>
  //                                       </li>
  //                                       <li></li>
  //                                   </ul>
  //                               </div>

                       

  //                           </div>





  //                       </div>

  //                   </div>
  //               `).appendTo($(".content"))



               


































































})


