function mul()
{
    var n=document.getElementById("number").value;
    var m=parseInt(n);
    document.getElementById("ans").innerHTML=mul1(m);
    
}
function mul1(m)
{
    var i,sum=0;
    for(i=1;i<m;i++)
    {
        if(i%3===0||i%5===0)
        sum=sum+i;
    }
    return sum;
}