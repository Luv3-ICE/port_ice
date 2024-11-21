window.onload = loginLoad;
function loginLoad(){
	var logkohmun = document.getElementById("myLogin");
	logkohmun.onsubmit = checkLogin
}

function checkLogin(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const usename = urlParams.get('username');
	const pass = urlParams.get('password');
	var pas =document.forms["myLogin"]["password"].value
    var use =document.forms["myLogin"]["username"].value
	if(use != usename || pas != pass){
		alert('wrong username or pass');
		return false;
	}
	else{
		alert('welcome');
	}
}

			