window.onload = pageLoad;
function pageLoad(){
    var kohmun = document.getElementById("myForm");
	kohmun.onsubmit = validateForm
}

function validateForm() {
    var pass =document.forms["myForm"]["password"].value
    var repass =document.forms["myForm"]["repassword"].value
    if(pass !== repass){
        alert("not same pass");
        document.getElementById("errormsg").innerHTML = "**wrong password**";
        return false;
    }
    else{
        alert("regis success");
    }

}