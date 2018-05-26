function fb()
{
    var n=document.getElementById("number").value;
    var m=parseInt(n);
    document.getElementById("ans").innerHTML=fb1(m);
    
}
function fb1(m)
{
    var i,j;
    var arr=[];
    for(i=1,j=0;i<=m;i++,j++)
    {
        if(i%3==0&&i%5==0)
        arr[j]="FIZZBUZZ";
        else if(i%3==0)
        arr[j]="FIZZ";
        else if(i%5==0)
        arr[j]="BUZZ";
        else
        arr[j]=i;
    }
    return arr;
}