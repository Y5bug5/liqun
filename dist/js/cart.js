let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
        let cookieObj = convertJsonStrToJsonObj(cookieStr);
        for (let key in cookieObj) {
            let good = cookieObj[key];
            let str = `
				<ul class="goodInfo" data-good-id="${key}">
					<li><img src="${good.src}" /></li>
					<li>${good.name}</li>
					<li>${good.price}</li>
					<li class="num">
						<a href="javascript:;" class="minus">-</a>
						<input type="text" name="" id="" value="${good.num}" />
						<a href="javascript:;" class="plus">+</a>
					</li>
					<li class="total">${good.price * good.num}</li>
					<li><a href="javascript:;" class="del">删除</a></li>
				</ul>
				`;
            $('.cartList').append(str);
        }
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
        //数量
        let $text = $('.num input');                    //num里的input
        $text.each((index, value) => {                  //遍历
            $(value).blur(function() {                  //失焦事件
                let id = $(this).parents('.goodInfo').attr('data-good-id');
                let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
                let cookieObj = convertJsonStrToJsonObj(cookieStr);
                let num = $(this).val()                     
                if (!isNaN(num) && parseInt(num) > 1) {
                    cookieObj[id].num = num;
                } else {
                    cookieObj[id].num = 1;
                }
                $.cookie('carts', JSON.stringify(cookieObj), {
                    expires: 7,
                    path: '/'
                });
                $(this).val(cookieObj[id].num)
                $(this).parent().next().html(cookieObj[id].price * cookieObj[id].num);
            })
        })
        let $del = $('.del');           //获取页面class
        $del.each((index, value) => {           //遍历
            $(value).click(function() {             //点击事件
                let id = $(this).parents('.goodInfo').attr('data-good-id');         //id是当前对象的祖先元素的自定义id
                let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';         //设置cookie对象  字符串转对象
                let cookieObj = convertJsonStrToJsonObj(cookieStr);
                delete cookieObj[id];                           //删除  cookie里这条信息
                $.cookie('carts', JSON.stringify(cookieObj), {          //创建cookie 对象转字符串 有效期 根目录
                    expires: 7,
                    path: '/'
                });
                $(this).parents('.goodInfo').remove();          //删除
            })
        })

        function convertJsonStrToJsonObj(str) {         //字符串转对象
            if (!str) {
                return {};
            }
            return JSON.parse(str);
        }