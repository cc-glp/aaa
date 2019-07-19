/*更多*/
$('#btn-more').click(function () {
	$('#more_list').toggle();
})
/*账号正则 11位手机号码 */
var zh = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
/*密码只能输入6-16个字母、数字、下划线 */
var mm = /^[\w_-]{6,20}$/;
$("#login_userName").bind("input propertychange change", function (event) {
	$('#du_label1').css('display', 'none')
	if (!$(this).val()) {
		$('#du_label1').css('display', 'block')
	}
})
$("#login_userName").change(function () {
	if (!zh.test($(this).val())) {
		alert('账号为11位手机号码')
	}
})
$("#login_password").change(function () {
	if (!mm.test($(this).val())) {
		alert('密码为6到16位（字母、数字、下划线 ）')
	}
})
$("#login_password").bind("input propertychange change", function (event) {
	$('#du_label2').css('display', 'none')
	// console.log($(this).val())
	if (!$(this).val()) {
		$('#du_label2').css('display', 'block')
	}
})

var num = 0;
$("#remember_name_icon").click(function () {
	num++
	if (num % 2 == 1) {
		$(this).removeClass('tick-off-icon').addClass('tick-on-icon')
	} else {
		$(this).removeClass('tick-on-icon').addClass('tick-off-icon')
	}
})
$('.dlu1a1x').click(function () {
	$(this).css('color', '#b40707').siblings().css('color', '#333')
	if ($(this).index() == 0) {
		$('.dlu2').css('display', 'block')
		$('.dlu1b').css('display', 'block')
		$('.dlu1c').css('display', 'none')
	} else {
		$('.dlu1b').css('display', 'none')
		$('.dlu2').css('display', 'none')
		$('.dlu1c').css('display', 'block')
	}
})
$('.qrCode-main').hover(function () {
	$('#qrcodeImg').css('left', '20px')
	$('.qrCode-help').css('opacity', '1')
}, function () {
	$('#qrcodeImg').css('left', '112px')
	$('.qrCode-help').css('opacity', '0')
})

//点击立即注册跳转到注册页面
$('#registText').click(function () {
	window.open('../html/注册.html')
})

//获取cookie
$('#btnLogin').click(function () {
	if (!$("#login_userName").val()) {
		alert('账号不能为空')
	} else if (!$("#login_password").val()) {
		alert('密码不能为空')
	}	

	getCookie();
	var arr=document.cookie.split(';');
	// console.log(arr);
	var phone=[];
	var password=[];
	for(var i=0;i<arr.length;i++){
		if(i%2==0){
			phone.push(arr[i].split('='))
			
		}else{
			password.push(arr[i].split('='))
		}
	}
	console.log(phone);
	console.log(password)
	phone.pop()
	for(var i=0;i<phone.length;i++){
		for(var j=0;j<password.length;j++){
if($("#login_userName").val()==phone[i][1]&&$("#login_password").val()==password[j][1]){
				window.open('../html/index.html')
			}
			else{
				alert("登录账号密码错误")
			}
		}
	}

})



