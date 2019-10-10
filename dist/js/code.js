window.onload=function(){
  var send=document.getElementById('send'),
    times=60,
    timer=null;
  send.onclick=function(){
   // 计时开始
   var that = this;
    this.disabled=true;
    timer = setInterval(function(){
      times --;
     that.value ="获取短信验证码"+ '(' + times + ')';
      if(times <= 0){
        that.disabled =false;
        that.value = "发送验证码";
        clearInterval(timer);
        times = 60;
      }
      //console.log(times);
    },1000);  
  }  
} 