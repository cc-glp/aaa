function head() {
    $('.head').load('./head.html')
}
head()
function nav() {
    $('.nav-search-hd>li').click(function () {
        $(this).removeClass('ho').siblings().addClass('ho')
        $(this).addClass('selected').siblings().removeClass('selected')
    })
}
nav()
function aj() {
    $.ajax({
        type: 'get',
        url: './head.json',
        dade: {},
        dateType: 'json'
    }).then(function (str) {
        var x = -1
        for (var a in str.baner[0]) {
            x++;
            for (var m in str.baner[0][a]) {
                var binaliang = str.baner[0][a][m]
                if (binaliang.length == 24) {
                    for (let i = 0; i < binaliang.length; i++) {
                        var html = `<a>${binaliang[i]}<a>`
                        $('.banerone').eq(x).append(html)
                    }
                }
                if (binaliang.length == 13) {
                    for (let i = 0; i < binaliang.length; i++) {
                        var html = `<a>${binaliang[i]}<a>`
                        $('.banerTwo').eq(x).append(html)
                    }
                }
                if (binaliang.length == 9) {
                    for (let i = 0; i < binaliang.length; i++) {
                        var html = `<a>${binaliang[i]}<a>`
                        $('.banerThree').eq(x).append(html)
                    }
                }
            }
        }
    })
    for (var j = 0; j < $('.baner-black').length; j++) {
        $('.baner-black').eq(j).css('top', -j * 32 + 'px')
    }
    for (var o = 0; o < $('.baner-left span').length; o++) {
        var zhi = $('.baner-left span').eq(o).text()
        $('.baner-p').eq(o).html(`${zhi}<i style="float: right;font-style: normal">更多</i>`)
    }
}
aj()
function baner() {
    var mySwiper = new Swiper('.baner-au', {
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        autoplay: 2000,//可选选项，自动滑动
        loop: true,
        autoplayDisableOnInteraction: false,
    })
    $('.baner-au').mouseover(function () {
        $('.baner-au .swiper-button-next').removeClass('hide')
        $('.baner-au .swiper-button-prev').removeClass('hide');
    }).mouseout(function () {
        $('.baner-au .swiper-button-next').addClass('hide');
        $('.baner-au .swiper-button-prev').addClass('hide');
    })
    var mySwiper2 = new Swiper('.baner-auto', {
        autoplay: 3000,//可选选项，自动滑动
        loop: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        paginationType: 'fraction',
        autoplayDisableOnInteraction: false,
    })
    $('.baner-auto').mouseover(function () {
        $('.baner-auto .swiper-button-next').removeClass('hide')
        $('.baner-auto .swiper-button-prev').removeClass('hide');
    }).mouseout(function () {
        $('.baner-auto .swiper-button-next').addClass('hide');
        $('.baner-auto .swiper-button-prev').addClass('hide');
    })
}
baner()
function aj2() {
    $.ajax({
        type: 'get',
        url: './head.json',
        dade: {},
        dateType: 'json'
    }).then(function (str) {
        var ee = str.main[0].youhaohuo
        $(ee).each(function (i, item) {
            var html = `
            <li>
            <div class="youha-img">
            <img src="${item.imgSrc}">
            </div>
            <h4>${item.youfa} </h4>
            <p>${item.tedian}</p>
            <h6>${item.haochu} </h6>
        </li>
            `
            $('.youhaoh-wrap').eq(0).append(html)
        })
        var ff = str.main[0].aiguangjie
        $(ff).each(function (i, item) {
            var html = `
            <li>
            <div class="youha-img">
            <img src="${item.imgSrc}">
            </div>
            <h4>${item.youfa} </h4>
            <p>${item.tedian}</p>
          </li>
            `
            $('.youhaoh-wrap').eq(1).append(html)
        })
    })
}
aj2()
function one() {
    timer = setInterval(function () {
        $('.b-b-rig').animate({ 'top': '-75px' }, 5000, function () {
            $('.b-r-cont:first').appendTo('.b-b-rig')
            $('.b-b-rig').css({ 'top': '0' })
        })
    }, 3000)
}
one()



function content() {
    $.ajax({
        type: 'get',
        url: './main.json',
        dade: {},
        dateType: 'json'
    }).then(function (str) {
        var conten = $(str.content)
        for (var i in str.content) {
            var html = `
            <div class="item" index=${str.content[i].id}>
                <div class="item-img">
                 <img src=${str.content[i].imgSrc}>
                </div>
                <h4>${str.content[i].title}</h4>
                <p class="infoo">
                    <span class="price">￥<em></em>${str.content[i].price}</span>
                    <span class="sales">销量:71</span>
                </p>
             </div>
            `
            $('.center').append(html)
        }
    })
}
content()
// 判断有没有登陆
function getUrlParams(name) {
    var re = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var r = window.location.search.substr(1).match(re)
    if (r == null) {
        return;
    } else {
        return r[2];
    }
}

var hh = location.search[1]
if (hh != null) {
    console.log(getUrlParams('username'))
    $('.min').html(getUrlParams('username'))

}

function item() {
    $('.center').on('click', '.item', function () {
        window.open('./fenye.html?' + location.search.substr(1) + '&&index=' + $(this).attr('index'))
    })

}
item()
function den() {
    $('.den').click(function () {
        window.open('./denglu.html')
    })
    $('.zhu').click(function () {
        window.open('./zhuce.html')
    })
    $('.tuichu').click(function () {
        window.open('./index.html')
    })
}
den()
// 搜索
function sea() {
    $('.iptSearch').on('input propertychange', function () {
        var hh = $(this).val()
        var reg = new RegExp($('.iptSearch').val())
        $('.item').css('border-color','#f4f4f4')
        $.ajax({
            type: 'get',
            url: './main.json',
            dade: {},
            dateType: 'json'
        }).then(function (str) {
            for (var i in str.content) {
                var title = str.content[i].title
                if (reg.test(title)) {
                    $('.shuang').show().html(title)
                    return;
                   
                }else{
                    $('.shuang').show().html(hh)
               }
            }
        })


        if ($(this).val() != '') {
            $('.nav-fdj').hide()

        }

    })
    $('.iptSearch').blur(function () {
        $('.shuang').hide()
    })
}
sea()
$('.nav-search-right>button').click(function () {
    var vv = $('.iptSearch').val()
    var item=document.getElementsByClassName('item')
    for(var i=0;i<item.length;i++){
        if($('.item').eq(i).attr('index')==vv){
            $('.item').eq(i).css('border-color','red')
           var hh=$('.item').eq(i).offset().top
           $(window).scrollTop(hh)
        }
        
    }


    var reg = new RegExp($('.iptSearch').val())
    console.log(reg)
    $.ajax({
        type: 'get',
        url: './main.json',
        dade: {},
        dateType: 'json'
    }).then(function (str) {
        for (var i in str.content) {
            var title = str.content[i].title
            if (reg.test(title)) {
              // $('.item').filter(function(item){
                //     return $(this).attr=='one'
                // }).eq('item')
            }
        }
    })
})
