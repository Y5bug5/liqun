function init() {
    let cookieStr = $.cookie('carts') ? $.cookie('carts') : '';
    let cookieObj = convertStrToObj(cookieStr);
    let sum = 0;        //设置为0
    for (let i in cookieObj) {
        sum += cookieObj[i].num;
    }
    $('#cart').val(`采购单(${sum})`)
}