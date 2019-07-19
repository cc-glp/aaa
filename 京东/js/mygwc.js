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
        $('.he_li').html(`<span onclick="window.open('./login.html','_self')">你好，请登录&nbsp;&nbsp;</span>
    <p onclick="window.open('./zhuce.html','_self')">免费注册</p>
    `)
        $('.nologin-tip').show()
    }else{
        $('.he_li').html('<p>'+username+'</p><i class="userico_ico"></i>')
        $('.nologin-tip').hide()
    }




    if(getCookie(username+'sp')){
        var sp=getCookie(username+'sp')
    }else{
        var sp=0
    }
    console.log(Number(sp)+1)
    var gwctj=[]
    console.log(username)
    for(var a=1;a<Number(sp)+1;a++){
        gwctj.push(getCookie(username+'sp'+a))
    }
    console.log(gwctj)
    $('.sp_num b').html(gwctj.length)
    
    if(gwctj==''){
        $('.cart-tbody').html(`<div class="car_empty">
        <i class="cart_empty_img"></i>
        购物车中还没有商品，赶紧选购吧！
    </div>`)
    }else{
        var html=''
        var price_mon=0
        for(var b=0;b<gwctj.length;b++){
            var num=gwctj[b]
            var data=gwcCG[num].data
            console.log(data)
            price_mon+=Number(data.price)
            html+=`
            <div class="shop">
            <div class="shop_chek">
                <input type="checkbox" checked="checked" class="jdcheckbox">
            </div>
            <div class="shop-txt">
                <a>京东自营</a>
            </div>
            <div class="yunfei">
                <div class="yunfei_">
                    <span>
                        <i class="icoo"></i>
                        已免运费
                    </span>
                </div>
            </div>
        </div>
        <div class="item-list">
            <div class="item_shangpin">
                <div class="item-form">
                    <div class="cell p_cke">
                        <div class="cart-checkbox">
                            <input type="checkbox" class="danxuan">
                        </div>
                    </div>
                    <div class="cell p_cke2 ">
                        <div class="goods-item">
                            <div class="p_img">
                                <a class="tu">
                                    <img src="${data.coverImg}">
                                </a>
                            </div>
                            <div class="item-msg">
                                <div class="p-name">
                                    <a class="p_name_a">
                                    ${data.title}
                                    </a>
                                </div>
                                <div class="p-extend p-extend-new">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cell p_cke3 p_ckecj">
                        <div class="props-txt"></div>
                    </div>
                    <div class="cell p_cke4">
                        <p class="plus-switch">
                            <strong class="jiage">
                                ¥${data.price}
                            </strong>
                        </p>
                    </div>
                    <div class="cell p_cke5">
                        <div class="quantity-form">
                            <a class="jian">-</a>
                            <input type="text" class="itxt" value="1">
                            <a class="jia">+</a>
                        </div>
                    </div>
                    <div class="cell p_cke6">
                        <strong class="xiaojiqian">¥${data.price}</strong>
                    </div>
                    <div class="cell p_cke7">
                        <a class="shanchu">删除</a>
                    </div>
                </div>
            </div>
        </div>
            `
        }
        $('.cart-tbody').html(html)
        // console.log(sp)
        // if(gwctj.length<=1){
        //     $('.sp_num b').html(0)
        // }else{
        //     $('.sp_num b').html(gwctj.length)
        // }
        $('.num_jia b').html(price_mon)
        $('.sp_num b').html(gwctj.length)
    
    }
    $('.shanchu').click(function(){
        var t=Number($(this).index())
        console.log(username+'sp'+(t+1))
        $('.shop').remove()
        $('.item-list').remove()
        // $('.cart-item-list').empty($('.cart-tbody').eq(t))
        removeCookie(username+'sp'+(t+1))

        var zs=sp-1
        if(zs<=1){
            zs=1
        }
        setCookie(username+'sp',zs)
    })












