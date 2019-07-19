$('.sta_zi').click(function () {
    $('.sta_lie').toggle()
})

$(".sta_lie li").click(function () {
    $(".ZG").html($(this).html())
})
$('.ber_l1').click(function () {
    $('.ber_num').toggle()
})

//手机号
var flas6 = true; //标识符
		$(".ber_inp").blur(function() {
			var tell1 = $(".ber_inp").val(); //
			//以1开头的正则表达式
			var aa = /^1\d{10}$/

			if(tell1 == null || tell1 == "") {
				alert("不能为空")
				flas6 = false;

			} else {
				flas6 = true;
			}
  
			if(!aa.test(tell1) || tell1.length != 11) {
				alert("手机号输入错误")
				flas6 = false;
				return;
			} else {
				flas6 = true;
			}

        })
        

//验证码
$(".ber_num li").click(function () {
    $(".ber_l2").html($(this).html())
})
$('.code_sp').click(function () {
    var code; /*存放验证码*/
    code = '';  /*默认code为空*/
    var codes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];  /*声明一个数组,用来放所有数字字母*/
    for (var i = 0; i < 4; i++) {  /*获取长度为4的验证码*/
    var j = Math.floor(Math.random() * 62);/*从codes数组下标随机获取数字0-61,存入arr*/
    code += codes[j];
    }
    alert(code)/*把得到的验证码赋值给显示按钮*/
$('.code_inp').blur(function(){
    if($('.code_inp').val()==code){

    }else{
        alert('验证码错误')
    }
})
})

//密码
$('.pa_inp2').blur(function(){
    if($('.pa_inp1').val()==$('.pa_inp2').val()){

    }else{
        alert('密码不一致，请重新输入')
    }
})


$('.oncirc').mouseover(function () {
    $(this).addClass('animated pulse');
})
$('.oncirc').mouseout(function () {
    $(this).removeClass('animated pulse');
})
$('.day_year').click(function () {
    $('.yer_ul').toggle()
})
$('.day_yue').click(function () {
    $('.yer_ul1').toggle()
})
$('.ri').click(function () {
    $('.ri_ul').toggle()
})
$('.yue').click(function () {
    $('.yue_ul').toggle()
})
$(".yer_ul li").click(function () {
    $(".yer").html($(this).html())
})
$(".yue_ul li").click(function () {
    $(".yue_s1").html($(this).html())
})
$(".ri_ul li").click(function () {
    $(".ri_s1").html($(this).html())
})

$('.tele_tl').click(function () {
    $('.reg').hide()
    $('.tele_tl').removeClass('active')
    $('.reg').eq($(this).index('.tele_tl')).show()
    $(this).addClass('active')
})
