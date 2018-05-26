function sum()
{
    var n=document.getElementById("number").value;
    var m=parseInt(n);
    document.getElementById("ans").innerHTML=sum1(m);
    
}
function sum1(m)
{
    var i,sum=0;
    for(i=0;i<m;i++)
    {
        sum=sum+i;
    }
    return sum;

}