

function getstk(){
    let getstk = new XMLHttpRequest();
    getstk.open("GET", "stk.json");
    getstk.onload = function () {
        let stkPic = JSON.parse(getstk.responseText);
        console.log(stkPic);
        buildstk(stkPic);
    };

    getstk.onerror = function () { alert("ERROR!stk"); };
    getstk.send();
}

function buildstk(stkPic){
    console.log(Object.keys(stkPic).length);
    let stkp = Object.keys(stkPic);
    let godiv = document.getElementById("stkshow");
    let allstk = document.querySelectorAll("#stkshow img");
    let getbt = document.getElementById("stkbt");
    if(allstk.length < 1){
        for(let i = 0; i < stkp.length; i++){
            let stkimg = document.createElement("img");
            stkimg.src = stkPic[stkp[i]].pic;
            godiv.appendChild(stkimg);
            getbt.innerHTML = "Hide Sticker"
        }
    }
    else{
        getbt.innerHTML = "Show Sticker"
        cleargameFunction();
    }

    
}

function cleargameFunction(){
    let gotobox = document.getElementById("stkshow");
    gotobox.innerHTML = '';
}