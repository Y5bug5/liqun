  //一、 获取页面元素
        //用户输入的数据框
        let oTxt = document.querySelectorAll('.txt');
        //按钮
        let oBtn = document.querySelectorAll('#only');

        //二、添加事件 
        oTxt[0].onblur = function() {
            let uname = this.value;
            let re = /0?(13|14|15|17|18|19)[0-9]{9}/;
            if (!re.test(uname)) {
                $('#fault').html('请输入手机号！(13|14|15|17|18|19)');
            }
        }
        oTxt[0].onfocus = function() {
            $('#fault').html('');
        }
        oTxt[1].onblur = function() {
            let uswd = this.value;
            let re = /^\w{3,12}$/;
            if (!re.test(uswd)) {
                $('#fbult').html('请输入3到12位的字母数字下划线的组合！');
            }
        }
        oTxt[1].onfocus = function() {
            $('#fbult').html('');
        }
        oTxt[2].onblur = function() {
            let uemail = this.value;
            let re = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
            if (!re.test(uemail)) {
                $('#fcult').html('请输入邮箱');
            }
        }
        oTxt[2].onfocus = function() {
            $('#fcult').html('');
        }
        oBtn[0].onclick = function() {
            //获取用户名和密码
            let uname = oTxt[0].value;
            let upwd = oTxt[1].value;
            let uemail= oTxt[2].value;
            //判断是否为空
            if (!uname && !upwd && ! uemail) {
                alert('用户名和密码,邮箱不能为空！');
                return;
            }
            let cookieStr = getCookie('registors') ? getCookie('registors') : '';
            //转成对象
            let cookieObj = convertCookieStrToCookieObj(cookieStr);
            //判断对象中是否有当前注册的用户
            if (uname in cookieObj) {
                alert('用户名已存在！');
                return;
            } else {
                cookieObj[uname] = upwd;
                cookieObj[uname] = uemail;
            }
            //创建cookie
            createCookie('registors', JSON.stringify(cookieObj), 7);
        }
        //将cookie字符串转为cookie对象
        function convertCookieStrToCookieObj(str) {
            if (!str) {
                return {};
            }
            return JSON.parse(str);
        }