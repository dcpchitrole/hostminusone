const genPass=document.getElementById("genPass");
const genRes=document.getElementById("genRes");
const Uppercase1=document.getElementById("Uppercase")
const Lowercase1=document.getElementById("Lowercase")
const Numbers=document.getElementById("Numbers")
const Symbols=document.getElementById("Symbols")
let lengthfinal;
document.getElementById("submitBtn").onclick=function()
{   
    lengthfinal =window.prompt("Enter the length");
    if((Uppercase1.checked || Lowercase1.checked || Numbers.checked || Symbols.checked) && lengthfinal >=1)
    {
        let passu="";
        let allowedChars="";
        let lc="abcdefghijklmnopqrstuvwxyz";
        let uc="ABCDEFGGHIJKLMNOPQRSTUVWXYZ";
        let num="1234567890";
        let sym="!@#$%^&*()_+:</>.,?{}";
        if(Uppercase1.checked){
            allowedChars+=uc;
        }
        if(Lowercase1.checked)
        {
            allowedChars+=lc;
        }
        if(Numbers.checked)
        {
            allowedChars+=num;
        }
        if(Symbols.checked)
        {
            allowedChars+=sym;
        }
        for (let i=0;i<lengthfinal;i++)
        {
            let index=Math.floor(Math.random()*allowedChars.length);
            passu+=allowedChars[index];
        }
        genRes.textContent="Succesful";
        genPass.textContent=passu;
    }
    else{
        genRes.textContent="Atleast 1 Condition needs to be Applied and Length needs to be greater than 1";
    }
}