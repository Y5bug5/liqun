function GetRTime(){
    var EndTime= new Date('2020/06/20 00:00:00');
    var NowTime = new Date();
    var t =EndTime.getTime() - NowTime.getTime(); 
    var d=Math.floor(t/1000/60/60/24);
    var hover=Math.floor(t/1000/60/60%24);
    var m=Math.floor(t/1000/60%60);  
    var s=Math.floor(t/1000%60); 
    document.getElementById("t_h").innerHTML = hover;
    document.getElementById("t_m").innerHTML = m ;
    document.getElementById("t_s").innerHTML = s ;
}
setInterval(GetRTime,0);