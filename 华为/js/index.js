$(function () {
    // 引入公共头公共尾
    $('#header').load('./header.html');
    $('#footer').load('./footer.html');
    // 头部轮播
    
    var swiper = new Swiper('#swiper', {
        autoplay: {
            disableOnInteraction: false,
            delay: 2000,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    // 文字上下轮播
    var swiper0 = new Swiper('#sw1', {
        direction: 'vertical',
        observer: true,
        observeParents: true,
        autoplay : true,
      });

      // 左右按钮消失的轮播
    var swiper1 = new Swiper(' #sw2', {
        observer: true,
        observeParents: true,
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 5,
        loop: false,
        loopFillGroupWithBlank: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        // 
    });
    $('#left').click(function () {
        $('#right').show();
        var name = $('#sw2 .swiper-slide').eq(0).attr('class');
        if (name.indexOf('swiper-slide-active') != -1) {
        $(this).hide();
        }
    })
    $('#right').click(function () {
        $('#left').show();
        var name = $('#sw2 .swiper-slide').eq(10).attr('class');
        if (name.indexOf('swiper-slide-active') != -1) {
        $(this).hide();
        }
    })

      // 第一块模板
    //请求json数据
    $(function () {
        loadArticleList1();
    })
    
    function loadArticleList1() {
        // 热销单品
        var result1 = huawe['shouji0'];
        var list = result1.data.list;
        // console.log(list)
        if (!list || !list.length) {
        $('#template').html("缓存失败")
        } else {
        for (var i = 2; i < list.length; i++) {
            var phonemodel = $('#itemHtml').html();
            phonemodel = phonemodel.replace('../img/428_428_1553051766797mp.png', list[i].img)
            phonemodel = phonemodel.replace('$sellname$', list[i]['model number'])
            phonemodel = phonemodel.replace('$sellyh$', list[i].discounts)
            phonemodel = phonemodel.replace('$sellmoney$', list[i].price)
            $('#template').append(phonemodel)
        }
        }

        // 手机
    var result2 = huawe['shouji1'];
    var list1 = result2.data.list;
    // console.log(list1)
    if (!list1 || !list1.length) {
        $('#template1').html("缓存失败")
    } else {
        for (var i = 2; i < list1.length; i++) {
        var phonemodel = $('#itemHtml0').html();
        phonemodel = phonemodel.replace('../img/428_428_1554948184556mp.png', list1[i].img)
        phonemodel = phonemodel.replace('$phtitle$', list1[i]['model number'])
        phonemodel = phonemodel.replace('$phdesc$', list1[i].discounts)
        phonemodel = phonemodel.replace('$phmoney$', list1[i].price)
        $('#template1').append(phonemodel)
        }
    }

    }
    var isClicked = false; //声明一个开关
    //AI穿戴  底部banner
    $('.wearable .footer_next').click(function () {
        $('.wearable .footer_prev').show();
        $(this).hide();
        $('.wearable .AIbanner').animate({
            'left': -808
        }, 300);
    })
    $('.wearable .footer_prev').click(function () {
        $('.wearable .footer_next').show();
        $(this).hide();
        $('.wearable .AIbanner').animate({
            'left': 0
        }, 300);
    })

    //AI家居  底部banner
    // 声明一个点击次数变量
    var time=0;
    var time1=0;
    $('.AIhouse .footer_next').click(function () {
        $('.AIhouse .footer_prev').show();
        if(time==0){
            $('.AIhouse .AIbanner').animate({
                'left': -1212
            }, 300);
        time++;
        }else if(time==1){
            $('.AIhouse .AIbanner').animate({
                'left': -2020
            }, 300);
             $(this).hide();
             time=0;
        }
    })
    $('.AIhouse .footer_prev').click(function () {
        $('.AIhouse .footer_next').show();
        if(time1==0){
            $('.AIhouse .AIbanner').animate({
                'left': -1212
            }, 300);
        time1++;
        }else if(time1==1){
            $('.AIhouse .AIbanner').animate({
                'left': 0
            }, 300);
             $(this).hide();
             time1=0;
        }
    })
    // 热销配件  生态精品   精选配件 底部banner
    $('.lunbo .footer_next').click(function () {
        $('.lunbo .footer_prev').show();
        if(time==0){
            $('.lunbo .AIbanner').animate({
                'left': -1212
            }, 300);
        time++;
        }else if(time==1){
            $('.lunbo .AIbanner').animate({
                'left': -2424
            }, 300);
             $(this).hide();
             time=0;
        }
    })
    $('.lunbo .footer_prev').click(function () {
        $('.lunbo .footer_next').show();
        if(time1==0){
            $('.lunbo .AIbanner').animate({
                'left': -1212
            }, 300);
        time1++;
        }else if(time1==1){
            $('.lunbo .AIbanner').animate({
                'left': 0
            }, 300);
             $(this).hide();
             time1=0;
        }
    })

    //请求json数据
    $(function () {
        loadArticleList();
    })

    function loadArticleList() {
        // 笔记本电脑JSON
        var result1 = huawe['bijibe'];
        var list1 = result1.data.list;
        if (!list1 || !list1.length) {
            $('#artcileList1').html("缓存失败")
        } else {
            for (var i = 2; i < list1.length; i++) {
                var bijibenModel = $('#itemHtml1').html();
                    bijibenModel = bijibenModel.replace('../img01/grid_01.png', list1[i].img)
                    bijibenModel = bijibenModel.replace('$articleTitle$', list1[i]['model number'])
                    bijibenModel = bijibenModel.replace('$discount$', list1[i].discounts)
                    bijibenModel = bijibenModel.replace('$price$', list1[i].price)
                $('#articleList1').append(bijibenModel)
            }
        }

        // 精品平板
        var result2 = huawe['pingban'];
        var list2 = result2.data.list;
        if (!list2 || !list2.length) {
            $('#artcileList2').html("缓存失败")
        } else {
            for (var i = 1; i < list2.length; i++) {
                var bijibenModel = $('#itemHtml2').html();
                    bijibenModel = bijibenModel.replace('../img01/grid_01.png', list2[i].img)
                    bijibenModel = bijibenModel.replace('$articleTitle$', list2[i]['model number'])
                    bijibenModel = bijibenModel.replace('$discount$', list2[i].discounts)
                    bijibenModel = bijibenModel.replace('$price$', list2[i].price)
                    bijibenModel = bijibenModel.replace('$tips$', list2[i].tips)
                $('#articleList2').append(bijibenModel)
            }
        }

        // 智能穿戴
        var result3 = huawe['chuandai'];
        var list3 = result3.data.list;
        if (!list3 || !list3.length) {
            $('#artcileList3').html("缓存失败")
        } else {
            for (var i = 1; i < list3.length; i++) {
                var bijibenModel = $('#itemHtml3').html();
       
                    bijibenModel = bijibenModel.replace('../img01/grid_01.png', list3[i].img)
                    bijibenModel = bijibenModel.replace('$articleTitle$', list3[i]['model number'])
                    bijibenModel = bijibenModel.replace('$discount$', list3[i].discounts)
                    bijibenModel = bijibenModel.replace('$price$', list3[i].price)
                    bijibenModel = bijibenModel.replace('$tips$', list3[i].tips)
                $('#articleList3').append(bijibenModel)
            }
        }

        // 智能家居
        var result4 = huawe['jiaju'];
        var list4 = result4.data.list;
        if (!list4 || !list4.length) {
            $('#artcileList4').html("缓存失败")
        } else {
            for (var i = 1; i < list4.length; i++) {
                var bijibenModel = $('#itemHtml4').html();
                    bijibenModel = bijibenModel.replace('../img01/grid_01.png', list4[i].img)
                    bijibenModel = bijibenModel.replace('$articleTitle$', list4[i]['model number'])
                    bijibenModel = bijibenModel.replace('$discount$', list4[i].discounts)
                    bijibenModel = bijibenModel.replace('$price$', list4[i].price)
                $('#articleList4').append(bijibenModel)
            }
        }

        var jieguo1=huawe['jiaju1'];
        var liebiao1=jieguo1.data.list;
        if(!liebiao1 || !liebiao1.length){
            $('#bannerList1').html("缓存失败")
        }else{
            for(var i=0;i<liebiao1.length;i++){
                var bijibenModel = $('#bannerModel1').html();
                    bijibenModel = bijibenModel.replace('../img01/AI_banner01.png', liebiao1[i].img)
                    bijibenModel = bijibenModel.replace('$articleTitle$', liebiao1[i]['model number'])
                    bijibenModel = bijibenModel.replace('$discount$', liebiao1[i].discounts)
                    bijibenModel = bijibenModel.replace('$price$', liebiao1[i].price)
                    bijibenModel = bijibenModel.replace('$tips$', liebiao1[i].tips)
                $('#bannerList1').append(bijibenModel)
            }
        }

        // 热销配件
        var result5 = huawe['peijian'];
        var list5 = result5.data.list;
        if (!list5 || !list5.length) {
            $('#artcileList5').html("缓存失败")
        } else {
            for (var i = 1; i < list5.length; i++) {
                var bijibenModel = $('#itemHtml5').html();
                    bijibenModel = bijibenModel.replace('../img01/grid_01.png', list5[i].img)
                    bijibenModel = bijibenModel.replace('$articleTitle$', list5[i]['model number'])
                    bijibenModel = bijibenModel.replace('$discount$', list5[i].discounts)
                    bijibenModel = bijibenModel.replace('$price$', list5[i].price)
                    bijibenModel = bijibenModel.replace('$tips$', list5[i].tips)
                    
                $('#articleList5').append(bijibenModel)
            }
        }

        var jieguo2=huawe['peijian1'];
        var liebiao2=jieguo2.data.list;
        if(!liebiao2 || !liebiao2.length){
            $('#bannerList2').html("缓存失败")
        }else{
            for(var i=0;i<liebiao2.length;i++){
                var bijibenModel = $('#bannerModel2').html();
                    bijibenModel = bijibenModel.replace('../img01/AI_banner01.png', liebiao2[i].img)
                    bijibenModel = bijibenModel.replace('$articleTitle$', liebiao2[i]['model number'])
                    bijibenModel = bijibenModel.replace('$discount$', liebiao2[i].discounts)
                    bijibenModel = bijibenModel.replace('$price$', liebiao2[i].price)
                    bijibenModel = bijibenModel.replace('$tips$', liebiao2[i].tips)
                $('#bannerList2').append(bijibenModel)
            }
        }

         // 生态精品
         var result6 = huawe['jingpin'];
         var list6 = result6.data.list;
         if (!list6 || !list6.length) {
             $('#artcileList6').html("缓存失败")
         } else {
             for (var i = 1; i < list6.length; i++) {
                 var bijibenModel = $('#itemHtml6').html();
                     bijibenModel = bijibenModel.replace('../img01/grid_01.png', list6[i].img)
                     bijibenModel = bijibenModel.replace('$articleTitle$', list6[i]['model number'])
                     bijibenModel = bijibenModel.replace('$discount$', list6[i].discounts)
                     bijibenModel = bijibenModel.replace('$price$', list6[i].price)
                     bijibenModel = bijibenModel.replace('$tips$', list6[i].tips)
                     $('#articleList6').append(bijibenModel)
             }
         }
 
         var jieguo3=huawe['jingpin1'];
         var liebiao3=jieguo3.data.list;
         if(!liebiao3 || !liebiao3.length){
             $('#bannerList3').html("缓存失败")
         }else{
             for(var i=0;i<liebiao3.length;i++){
                 var bijibenModel = $('#bannerModel3').html();
                     bijibenModel = bijibenModel.replace('../img01/AI_banner01.png', liebiao3[i].img)
                     bijibenModel = bijibenModel.replace('$articleTitle$', liebiao3[i]['model number'])
                     bijibenModel = bijibenModel.replace('$discount$', liebiao3[i].discounts)
                     bijibenModel = bijibenModel.replace('$price$', liebiao3[i].price)
                     bijibenModel = bijibenModel.replace('$tips$', liebiao3[i].tips)
                 $('#bannerList3').append(bijibenModel)
             }
         }
          // 精选配件
          var result7 = huawe['peijian2'];
          var list7 = result7.data.list;
          if (!list7 || !list7.length) {
              $('#artcileList7').html("缓存失败")
          } else {
              for (var i = 1; i < list7.length; i++) {
                  var bijibenModel = $('#itemHtml7').html();
                      bijibenModel = bijibenModel.replace('../img01/grid_01.png', list7[i].img)
                      bijibenModel = bijibenModel.replace('$articleTitle$', list7[i]['model number'])
                      bijibenModel = bijibenModel.replace('$discount$', list7[i].discounts)
                      bijibenModel = bijibenModel.replace('$price$', list7[i].price)
                      bijibenModel = bijibenModel.replace('$tips$', list7[i].tips)
                      $('#articleList7').append(bijibenModel)
              }
          }
  
          var jieguo4=huawe['peijian3'];
          var liebiao4=jieguo4.data.list;
          if(!liebiao4 || !liebiao4.length){
              $('#bannerList4').html("缓存失败")
          }else{
              for(var i=0;i<liebiao4.length;i++){
                  var bijibenModel = $('#bannerModel4').html();
                      bijibenModel = bijibenModel.replace('../img01/AI_banner01.png', liebiao4[i].img)
                      bijibenModel = bijibenModel.replace('$articleTitle$', liebiao4[i]['model number'])
                      bijibenModel = bijibenModel.replace('$discount$', liebiao4[i].discounts)
                      bijibenModel = bijibenModel.replace('$price$', liebiao4[i].price)
                      bijibenModel = bijibenModel.replace('$tips$', liebiao4[i].tips)
                  $('#bannerList4').append(bijibenModel)
              }
              
          }
       
    }

     // 侧边栏  伪元素竖线变化
     $('aside li').click(function () {
         if (!isClicked) {
             $('aside li').children('a').removeClass('hover')
             $(this).children('a').addClass('hover')
             $('.redline').delay(300).animate({
                 'top': '-18px'
             }, 300)
             $(this).children('.redline').animate({
                 'top': '10px'
             }, 300)
             setTimeout(function () {
                 isClicked = false;
             }, 300)
         }

     })
     // 侧边栏滚动事件
     $(function(){
        //设置标杆
        var _line=parseInt($(window).height()/2);
        $(window).scroll(function(){
            //滚动730px，侧边栏显示
            if ($(window).scrollTop()>750) {
                $('aside').fadeIn()
                $('aside').addClass('animated slideInRight')
            }else{
                $('aside').fadeOut(200)
                $('aside').removeClass('animated slideInRight')
                
            };
            //滚动到标杆位置,侧边栏加hover
            // $('aside li').each(function(){
            //     var _target=parseInt($(this).offset().top-$(window).scrollTop()-_line);
            //     // console.log(_target)
            //     var _i=$(this).index();
            //     console.log(_i);
                
            //     if (_target>=0) {
            //         $('aside a').removeClass('hover');
            //         $('aside a').eq(_i).addClass('hover');
            //     }
            //     //如果到达页面底部，给左侧导航最后一个加active
            //     else if($(document).height()==$(window).scrollTop()+$(window).height()){
            //         $('aside a').removeClass('hover');
            //         $('aside a').eq($('aside li').length-1).addClass('hover');
            //     }
            // });
        });
        $('aside a').click(function(){
            $('.redline').animate({
                'top': '-18px'
            }, 100)
            $(this).children('.redline').animate({
                'top': '10px'
            }, 300)
            $(this).addClass('hover').siblings('a').removeClass('hover');
            var _i=$(this).parent('li').index();
             $('body, html').animate({scrollTop:$('section').eq(_i).offset().top-_line},500);
        });
    });

    //返回顶部
    $(window).scroll(function(){
        if($('html,body').scrollTop()>=400){
             $('#top').fadeIn(300)
        }else{
          $('#top').fadeOut(300)
        }
    })
    //   30
    $('#top').click(function(){
        $('html,body').animate({'scrollTop':0},1000)

      //   var distance=$('body,html').scrollTop()
      //   var time=1000
      //   var itemDistance=distance/(time/30)
      //   var timer=setInterval(function(){
      //     distance-=itemDistance
      //     if(distance<=0){
      //       clearInterval(timer)
      //     }
      //     $('body,html').scrollTop(distance)
      //   },30)
    })

})
$(".qiehuan").mouseover(function () {
    $('.yinc').eq($(this).index()).show().siblings('.yinc').hide();
})
$('.qiehuan').mouseout(function () {
    $('.yinc').eq($(this).index()).hide().siblings('.yinc').show();
}); 

