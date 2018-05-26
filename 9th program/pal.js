function palindrome()
{
    var str=document.getElementById("textbox").value;
    //var str1=parseInt(str);
    document.getElementById("ans").innerHTML=pal1(str);
    
}
/*function pal1(str)
{
    var i;
    var re=/[^A-Za-z0-9]/g;
    str=str.toLowerCase().replace(re,'');
    var temp;
    str1=str1.toLowerCase();
    temp=str1;
    var len=str1.length;
    for(i=0;i<len/2;i++)
    {
        if(str1[i]!==str1[len-i-1]){
            return 'false';
        }
    }
    return 'true';
    str=str.split('');
    str=str.reverse();
    str=str.join('');
    var rev=str1;
    if(temp==rev)
    return 'True';
    else
    return 'False';
}*/
/*function reverseString(str) {
    var newString = "";
    for (var i = str1.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    document.write("newString");

    return "newString";
}
function pal(str)
{
    if(str===reverseString(str))
    return "true";
    else
    return "false";
}*/
function pal1(str)
{
    var i;
    var n=str.length;
    var flag=0;
    for(i=0;i<n/2;i++)
    {
        if(str.charAt(i)!=str.charAt(n-i-1)){
            flag=1;
            break;
 
        }
        
    }
    if(flag==1)
    return "false";
    else
    return "true";

}