init()              //调用
        $('#main').delegate('#btn', 'click', function(event) {    //每个div的委托的是里面的加入购物车的点击事件
            let goodId = $(this).parent().prev().attr('data-pr-id');         //获取id = 当前对象的父元素的（）元素
            let goodName = $(this).parent().prev('#price').header().text();                //当前对象的前一个元素的前一个元素的文本信息
            let goodPrice = parseInt($(this).parent().text());            //当前对象强制转换为整数的当前对象的前一个元素的文本
            let goodSrc = $(this).parent().attr('src');          //当前对象的兄弟的img的（）元素

            /*
            	carts
            	{
            		"sp1" : {
            			... : ...,

            		}
            	}
            */
            let cookieStr = $.cookie('carts') ? $.cookie('carts') : ''; //
            let cookieObj = convertStrToObj(cookieStr);
            if (goodId in cookieObj) {          //如果id在cookie对象
                cookieObj[goodId].num++;        //cookie对象里的num +1
            } else {
                cookieObj[goodId] = {              //否则 将cookie对象以id为索引加入cookie
                    "name": "五花肉",
                    "price": '10',
                    "src": '../img/bann_02.jpg',
                    "num": 1
                }
            }
            $.cookie('carts', JSON.stringify(cookieObj), {          //创建cookie  key ,字符串 ， 有效期和放根目录
                expires: 7,
                path: '/'
            });
        })

        function init() {
            let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
            let cookieObj = convertStrToObj(cookieStr);
            let sum = 0;        //设置为0
            for (let i in cookieObj) {
                sum += cookieObj[i].num;
            }
            $('#cart').val(`采购单(${sum})`)
        }

        function convertStrToObj(str) {
            if (!str) {
                return {};
            }
            return JSON.parse(str);
        }