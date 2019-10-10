function createCookie(key,value,expires){
    let cookieText = encodeURIComponent(key) + '=' + encodeURIComponent(value) + ";path=/";
    if(!isNaN(expires)){
        let date = new Date();
        date.setDate(date.getDate() + expires);
        cookieText += ';expires=' + date;
    } 
    document.cookie = cookieText;
}

function getCookie(key){
    let cookie = document.cookie;
    let arr = cookie.split(';');
    for(let i = 0, len =arr.length;i < len ; i++){
        let list = arr[i].split('=');
        if(list[0] === encodeURIComponent(key)){
            return decodeURIComponent(list[1]);
        }
    }
}

function removeCookie(key){
    document.cookie = encodeURIComponent(key) + '=' + ';expires=' + new Date(0) + ';path=/';
}