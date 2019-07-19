$(function(){
    $('.header').load('./header.html')
    $('.footer').load('./footer.html')
    
    
    //ajax
    $.ajax({
        type:"get",
        url:"./index.json",
        data:{},
        dataType:"json",
        async:"false"
    }).done(function(str){
        $.each($('.column-wrap'),function(i){
            var str1 = str['result'+i];
            str1.forEach(function(j){
                $(`
                <div class="item-wrap" sysid="${j.id}">
                    <img src="${j.image}"
                        alt="">
                </div>
                `).appendTo($('.column-wrap').eq(i))
            });
        })
        
    })
    //瀑布流
    var falge = false;
    $(window).scroll(function(ev){
        ev = ev||event;
        if(!falge){
            falge = true;
            if(parseInt($(window).scrollTop()) >= 200){
                    $('.header_bottom').hide().eq(1).show()
                    $('.bottom_wrap').animate({"top":"0px"},500)
                if(parseInt($(document).height())-parseInt($(window).scrollTop())<=2000){
                    console.log(111)
                        $.ajax({
                            type:"get",
                            url:"./index.json",
                            data:{},
                            dataType:"json",
                            async:"false"
                        }).done(function(str){
                            $.each($('.column-wrap'),function(i){
                                var str1 = str['result'+i];
                                console.log(str1)
                                str1.forEach(function(j){
                                    $(`
                                    <div class="item-wrap" sysid="${j.id}">
                                        <img src="${j.image}"
                                            alt="">
                                    </div>
                                    `).appendTo($('.column-wrap').eq(i))
                                });
                            })
                            
                        })
                } 
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
    $('.item-wrap a').attr('href',"javascript:")
   
        $(".column-wrap").on("click",".item-wrap",function(){
            if($(this).attr("sysid")){
                window.open("./GGye.html?type=GGye"+$(this).attr("sysid"))
            }
            })
            
    
})