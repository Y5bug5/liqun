$('#logging').click(function() {
    let uname = $('#uname').val();
    let upwd = $('#uswd').val();
    if (!uname && !upwd) {
        $('#fault').html('不能为空!');
        return;
    }
    uname.onfocus = function() {
        $('#fault').html('');
    }
    upwd.onfocus = function() {
        $('#fault').html('');
    }
    let cookieStr = $.cookie('registors') ? $.cookie('registors') : '';
    let cookieObj = convertCookieStrToCookieObj(cookieStr);
    if (uname in cookieObj) {
        if (upwd === cookieObj[uname]) {
            location.href = 'index.html';
            $.cookie('logins', uname, {
                expires: 7,
                path: '/'
            })
            return;
        } else {
            $('#fault').html('密码不正确');
            return;
        }
    } else {
       $('#fault').html('用户名不存在！');
    }
})
$('#uname').blur( function() {
    let str = this.value;
    let re = /0?(13|14|15|17|18|19)[0-9]{9}/;
    if (!re.test(str)) {
        $('#fault').html('请输入手机号！(13|14|15|17|18|19)');
    }
})
$('#uswd').blur( function() {
    let str = this.value;
    let re = /^\w{3,12}$/;
    if (!re.test(str)) {
        $('#fault').html('请输入3到12位的字母数字下划线的组合！');
    }
}) 
function convertCookieStrToCookieObj(str) {
    if (!str) {
        return {};
    }
    return JSON.parse(str);
}