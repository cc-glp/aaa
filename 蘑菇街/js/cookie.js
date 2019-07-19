function setCookie(name,value,iDay) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    return document.cookie = name + '=' + value + ';expires=' + oDate;
}
    
function getCookie(name) {
    var arr = document.cookie.split('; ')
        for(var i = 0; i < arr.length; i++) {
            var start = arr[i].indexOf(name+'=')
            var arr2 = arr[i].slice(start).split('=');
            if(arr2[0] == name) {
                console.log()
                return arr2[1];
            } 
        }
    return '';
   
}