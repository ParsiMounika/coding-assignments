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
function repeat_numbers()
{
    var i;
    for(i=0;i<input.length-1;i++)
    {
        for(j=i+1;j<input.length;j++)
        {
            if(input[i]==input[j])
            {
                document.getElementById("ans").innerHTML=input[i];
                input[i]=0;
            }
        }

    }
}