	
	
	var srk=document.getElementsByTagName('input')[0]
	var ss=document.getElementsByClassName('nav_ss')[0]
	var banner=document.getElementsByClassName('banner')[0];
	var ul=banner.getElementsByTagName('ul')[0];
	var ol=banner.getElementsByTagName('ol')[0];
	var oli=ul.getElementsByTagName('li');
	var ooli=ol.getElementsByTagName('li');
	var an1=document.getElementsByClassName('anniu')[0];
	var an2=document.getElementsByClassName('anniu')[1];
	var sryy=document.getElementsByClassName('sryy')[0];
	
	srk.onmouseover=function(){
		ss.style.borderColor='gray'
		srk.style.borderColor='gray'
	}
	srk.onmouseout=function(){
		ss.style.borderColor='gainsboro'
		srk.style.borderColor='gainsboro'
	}
	//输入框
	srk.onfocus=function(){
		srk.style.borderColor='#ff6700'
		ss.style.borderColor='#ff6700'
		sryy.style.display='block'
	}
	srk.onblur=function(){
		srk.style.borderColor='gainsboro'
		ss.style.borderColor='gainsboro'
		sryy.style.display='none'
	}
	//轮播图
	var index=0
	an2.onclick=function(){
		dh1(oli,ooli)
	}
	var zd=setInterval(function(){
		dh1(oli,ooli)
	},1000)
	function dh1(a,b){
		index++
		if(index>a.length-1){
			index=0
		}
		for (var i=0;i<a.length;i++) {
			a[i].style.opacity=0
			b[i].style.background=''
		}
		a[index].style.opacity=1
		b[index].style.background='gray'
	}
	an1.onclick=function(){
		index--
		if(index<0){
			index=oli.length-1
		}
		for (var i=0;i<oli.length;i++) {
			oli[i].style.opacity=0
			ooli[i].style.background=''
		}
		oli[index].style.opacity=1
		ooli[index].style.background='gray'
	}
	for (var i=0;i<ooli.length;i++) {
		ooli[i].index=i
		ooli[i].onclick=function(){
			index=ooli[this.index].index
			for (var i=0;i<ooli.length;i++) {
				oli[i].style.opacity=0
				ooli[i].style.background=''
			}
			oli[index].style.opacity=1
			ooli[index].style.background='gray'
		}
	}
	
	
	
	var box3=document.getElementsByClassName('box3')[0];
	var box2=box3.getElementsByClassName('box2_top')[0];
	var li=box2.getElementsByTagName('li');
	var b3but=box3.getElementsByClassName('box3bottom');
	var box4=document.getElementsByClassName('box4')[0];
	var box4_top=box4.getElementsByClassName('box4_top')[0];
	var b4li=box4_top.getElementsByTagName('li');
	var b4but=box4.getElementsByClassName('box4bottom');
	var box5=document.getElementsByClassName('box5')[0];
	var box5_top=box5.getElementsByClassName('box5_top')[0];
	var b5li=box5_top.getElementsByTagName('li');
	var b5but=box5.getElementsByClassName('box5bottom');
	hanshu(b5li,b5but)
	hanshu(li,b3but)
	hanshu(b4li,b4but)
	function hanshu(a,b){
	for (var i=0;i<a.length;i++) {
		a[i].index=i
		a[i].onmouseover=function(){
			for (var j=0;j<a.length;j++) {
				a[j].style.color='black'
				 b[j].style.visibility='hidden'
			}
			a[this.index].style.color='#ff6700'
			b[this.index].style.visibility='visible'
		}
	}
}
	

