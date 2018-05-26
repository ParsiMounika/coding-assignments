var input=[];
function array_push()
{
    var str=document.getElementById("string").value;
    input.push(str);
    document.getElementById("string").value=" ";
}
function array_palindrome()
{
    var i;
    for(i=0;i<input.length;i++)
    {
        if(palindrome(input[i]))
            document.getElementById("ans").innerHTML+=input[i];
    }

}
function palindrome(input)
{
    
    var i;
    var n=input.length;
    var flag=0;
    for(i=0;i<n/2;i++)
    {
        if(str.charAt(i)!=str.charAt(n-i-1))
        {
            flag=1;
            break;
        }

    }
    if(flag==1)
        return 0;
    else
        return 1;
}