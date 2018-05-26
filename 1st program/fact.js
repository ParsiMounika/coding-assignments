function fact()
{
    var n=document.getElementById("number").value;
    var m=parseInt(n);
    document.getElementById("ans").innerHTML=fact1(m);
    
}
function fact1(m)
{
    var i,fact=1;
    for(i=1;i<=m;i++)
    {
        fact=fact*i;
    }
   return fact;
}