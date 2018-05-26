function power()
{
    var n=document.getElementById("number").value;
    var m=parseInt(n);
    document.getElementById("ans").innerHTML=pow1(m);
    
}
function pow1(m)
{
    var res=1,count=0;
    var b=isPowerOf2(m);
    if(b==0)
    {
        while(res<=(m-1)/2)
        {
            res=res*2;
            count++;
        }
        return count;
    }
    else
    return b;
}
function isPowerOf2(m)
{
    var count1=0;
    while(m!=1)
    {
        if(m%2==0)
        return 0;
        m=m/2;
        count1++;
    }
    return count1;
}