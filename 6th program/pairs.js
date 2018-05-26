var input=[];
function array_push()
{
    var n=parseInt(document.getElementById("number1").value);
    if(n<=0)
    alert("The number should not be negative or zero");
    else{
    input.push(n);
    }
    document.getElementById("number1").value=" ";
}
function pair_of_numbers()
{
    var i;
    var m=parseInt(document.getElementById("number").value);
    for(i=0;i<input.length;i++)
    {
        for(var j=i+1;j<input.length;j++)
        {
            if(input[i]+input[j]==m)
            document.getElementById("ans").innerHTML+="\""+input[i]+"\""+","+"\""+input[j]+"\""+"<br>";
        }
    }
}