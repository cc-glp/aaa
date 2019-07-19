$(function(){
    var num2 = 0;
    var arr2 = [];
    var name = getCookie('user')
    console.log(name)
    if(getCookie(name)){
        arr = JSON.parse(getCookie(name))
        console.log(arr)
        for(let i=0;i<arr.length;i++){
            var htmlModel = $('#moban').html();
            htmlModel = htmlModel.replace('$zzz$',arr[i].index)
            htmlModel = htmlModel.replace("https://s11.mogucdn.com/mlcdn/c45406/180703_3h4cd2h07l74kb656iijkf05cjbk0_640x960.jpg_100x100.jpg",arr[i].src)
            htmlModel = htmlModel.replace('$title$',arr[i].title)
            htmlModel = htmlModel.replace('$MM$',arr[i].MM)
            htmlModel = htmlModel.replace('$money1$',Number(arr[i].money)*Number(arr[i].index))
            htmlModel = htmlModel.replace('$money$',arr[i].money)
            htmlModel = htmlModel.replace('$id$',i)
            htmlModel = htmlModel.replace('$id1$',i)
            num2 = num2+Number(arr[i].money)*Number(arr[i].index)
            $('.mokuai').append(htmlModel)
        }
    
    console.log($('.goodsNum'))
    console.log($('.goodsSum'))
    var falge = false;
    var index = Number($('.cart_num_input').val());
    var num1 = 1;
    // $.each($('.cart_thcheck'),function(i){
    //     if($(this).prop('checked')==true){
    //         num1++;
    //         num2 = num2+ Number($(this).parents('.new_cart_conent_item').find('.item_sum').html())
    //     }
    // })
        $('.shop_check').on('click',function(){
            if(!falge){
                falge = true;
                console.log($('.new_cart_conent_item').eq($(this).index('.shop_check')).find('.cart_thcheck'))
                $('.new_cart_conent_item').eq($(this).index('.shop_check')).find('.cart_thcheck').prop('checked',true)
                $(this).prop('checked',true)
                num1++
            }else{
                falge = false;
                $('.new_cart_conent_item').eq($(this).index('.shop_check')).find('.cart_thcheck').prop('checked',false)
                $(this).prop('checked',false)
                num1--
            }
            
        })
        $('.cart_thcheck').on('click',function(){
            if(!falge){
                falge = true;
                $(this).prop('checked',true)
                $('.new_cart_conent_shop').eq($(this).index('.cart_thcheck')).find('.shop_check').prop('checked',true)
                num1++
            }else{
                falge = false;
                $(this).prop('checked',false)
                $('.new_cart_conent_shop').eq($(this).index('.cart_thcheck')).find('.shop_check').prop('checked',false)
                num1--
            }
            
        })
    $('#s_all_h').on('click',function(){
        
        if(!falge){
            falge = true;
            $('[type=checkbox]').prop('checked',true)
        }else{
            falge = false;
            $('[type=checkbox]').prop('checked',false)
        }
    })
    $('#s_all_f').on('click',function(){
        if(!falge){
            falge = true;
            $('[type=checkbox]').prop('checked',true)
        }else{
            falge = false;
            $('[type=checkbox]').prop('checked',false)
        }
    })
    
    // $('.cart_num_add').on('click',function(){
    //     if($('.new_cart_conent_item').eq($(this).index('.cart_num_add')).find('[type=checkbox]').prop('checked')==true){
            
    //     if($(this).parents('.cart_mitem').find('.cart_data_sprice')){
    //         var value =  parseInt($(this).parents('.cart_mitem').find('.cart_data_sprice').html());
    //     }else{
    //         var value =  parseInt($(this).parents('.cart_mitem').find('.cart_throughline').html());
    //     }
    //     index++;
    //     $('.cart_num_reduce').eq($(this).index('.cart_num_add')).removeClass('disable')
    //     $('.cart_num_input').eq($(this).index('.cart_num_add')).val(index)
    //     $('.item_sum').eq($(this).index('.cart_num_add')).html(value*index)
    //     }
    // })
    // $('.cart_num_reduce').on('click',function(){
    //     if($('.new_cart_conent_item').eq($(this).index('.cart_num_reduce')).find('[type=checkbox]').prop('checked')==true){
    //     if($(this).parents('.cart_mitem').find('.cart_data_sprice')){
    //         var value =  parseInt($(this).parents('.cart_mitem').find('.cart_data_sprice').html());
    //     }else{
    //         var value =  parseInt($(this).parents('.cart_mitem').find('.cart_throughline').html());
    //     }
    //     index--;
    //     if(index<=1){
    //         index=1;
    //         $(this).addClass('disable')
    //     }
    //     $('.cart_num_input').eq($(this).index('.cart_num_reduce')).val(index)
    //     $('.item_sum').eq($(this).index('.cart_num_reduce')).html(value*index)
    // }
    // })
    $('.mokuai').on('click','.delete',function(){
        $('.mokuai .new_cart_conent_item').eq($(this).index('.delete')).remove()
        $('.mokuai .new_cart_conent_shop').eq($(this).index('.delete')).remove()
        $('.J_mundo').show()
        arr2.push($(this).parents('.new_cart_conent_item').attr('dataid'))
        // if(getCookie('del')){
        //     arr2 = JSON.parse(getCookie('del'))
        // }else{
        //     arr2 = []
        // }
        // arr2.push($(this).parents('.new_cart_conent_item').attr('dataid'))
        // var jj = JSON.stringify(arr2);
        // setCookie('de1',jj,14)
    })
    
    $('.J_undo').on('click',function(){
        // console.log(arr2)
        $('.J_mundo').hide()
        arr2.forEach(function(item,i){
            var htmlModel = $('#moban').html();
            htmlModel = htmlModel.replace('$zzz$',arr[item].index)
            htmlModel = htmlModel.replace("https://s11.mogucdn.com/mlcdn/c45406/180703_3h4cd2h07l74kb656iijkf05cjbk0_640x960.jpg_100x100.jpg",arr[item].src)
            htmlModel = htmlModel.replace('$title$',arr[item].title)
            htmlModel = htmlModel.replace('$MM$',arr[item].MM)
            htmlModel = htmlModel.replace('$money1$',Number(arr[item].money)*Number(arr[item].index))
            htmlModel = htmlModel.replace('$money$',arr[item].money)
            htmlModel = htmlModel.replace('$id$',item)
            htmlModel = htmlModel.replace('$id1$',item)
            num2 = num2+Number(arr[i].money)*Number(arr[item].index)
            $('.mokuai').append(htmlModel)
        })
        
    })
    $('.mokuai').on('click','.cart_num_add',function(){
        console.log(111)
        if($('.new_cart_conent_item').eq($(this).index('.cart_num_add')).find('[type=checkbox]').prop('checked')==true){
            
        if($(this).parents('.cart_mitem').find('.cart_data_sprice')){
            var value =  parseInt($(this).parents('.cart_mitem').find('.cart_data_sprice').html());
        }else{
            var value =  parseInt($(this).parents('.cart_mitem').find('.cart_throughline').html());
        }
        index++;
        $('.cart_num_reduce').eq($(this).index('.cart_num_add')).removeClass('disable')
        $('.cart_num_input').eq($(this).index('.cart_num_add')).val(index)
        $('.item_sum').eq($(this).index('.cart_num_add')).html(value*index)
        }
    })
    $('.mokuai').on('click','.cart_num_reduce',function(){
        if($('.new_cart_conent_item').eq($(this).index('.cart_num_reduce')).find('[type=checkbox]').prop('checked')==true){
        if($(this).parents('.cart_mitem').find('.cart_data_sprice')){
            var value =  parseInt($(this).parents('.cart_mitem').find('.cart_data_sprice').html());
        }else{
            var value =  parseInt($(this).parents('.cart_mitem').find('.cart_throughline').html());
        }
        index--;
        if(index<=1){
            index=1;
            $(this).addClass('disable')
        }
        $('.cart_num_input').eq($(this).index('.cart_num_reduce')).val(index)
        $('.item_sum').eq($(this).index('.cart_num_reduce')).html(value*index)
    }
    })
    var num = 1;
    $('#cartRemoveChecked').on('click',function(){
        console.log(111)
        $.each($('[type=checkbox]'),function(i){
            if($(this).prop('checked')==true){
                num++;
                $(this).parents('.new_cart_conent').remove();
            }
        })
    })
    setInterval(() => {
        
        function zzz(){
            var b = 0
            $.each($('.item_sum'),function(i){
                if($('.new_cart_conent_item').eq($(this).index('.item_sum')).find('.cart_thcheck').prop('checked')==true&&i<$('.item_sum').length-1){
                    console.log(parseInt($('.item_sum').eq(i).html()))
                    b += parseInt($('.item_sum').eq(i).html())
                }
            })
            return b;
        }
        $('.goodsSum').html('¥'+zzz())
    }, 1000);
    $('.J_num').html(num)
    $('.goodsNum').html(num1)
}else{
    alert('请先选择商品')
}
})