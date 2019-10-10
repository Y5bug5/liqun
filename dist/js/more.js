
 //减
 let $minus = $('.minus');
 $minus.each((index, value) => {
     $(value).click(function() {
         let id = $(this).parents('.goodInfo').attr('data-good-id');     //id
         let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';      //字符串
         let cookieObj = convertJsonStrToJsonObj(cookieStr);             //转对象
         if (cookieObj[id].num > 1) {                        //超过1 的可以---
             cookieObj[id].num--;
         }
         $.cookie('carts', JSON.stringify(cookieObj), {          
             expires: 7,
             path: '/'
         });
         $(this).next().val(cookieObj[id].num);
         $(this).parent().next().html(cookieObj[id].price * cookieObj[id].num);
     })
 })
     //加
 let $plus = $('.plus');
 $.each($plus, (index, value) => {
     $(value).click(function() {
         let id = $(this).parents('.goodInfo').attr('data-good-id');
         let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
         let cookieObj = convertJsonStrToJsonObj(cookieStr);
         cookieObj[id].num++;
         $.cookie('carts', JSON.stringify(cookieObj), {
             expires: 7,
             path: '/'
         });
         $(this).prev().val(cookieObj[id].num);
         $(this).parent().next().html(cookieObj[id].price * cookieObj[id].num);
     })
 })