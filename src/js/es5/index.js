function(){
    var OneLi=document.getElementsByClassName('fr_link')[0].getElementsByTagName('li');
    var TwoLi=document.getElementsByClassName('box')[0].getElementsByTagName('ul');
    var a=document.getElementsByClassName('fr_link')[0].getElementsByTagName('a')
    
    OneLi[0].className='bj'
    a[0].style.color='white'
    for(var i=0;i<OneLi.length;i++){
        OneLi[i].index=i
        OneLi[i].onclick=function(){
             var num=parseInt(this.index)
        for(var j=0;j<OneLi.length;j++){
            OneLi[j].className=''
            TwoLi[j].className='show_01'
            a[j].style.color=''
         }
            OneLi[num].className='bj'
            TwoLi[num].className='show'
            a[num].style.color='white'
        }
    }
}
