window.onload = pageLoad;

function pageLoad() {
    let getdrawpic = new XMLHttpRequest();
    getdrawpic.open("GET", "drawpic.json");
    getdrawpic.onload = function () {
        let drawPic = JSON.parse(getdrawpic.responseText);
        console.log(drawPic);
        nextpic(drawPic);
        prevpic(drawPic);
    };

    getdrawpic.onerror = function () { alert("ERROR!draw"); };
    getdrawpic.send();

}

let drawing = 1;

function nextpic(drawPic) {
    let nextclick = document.getElementById("arrRight");
    let mdp = Object.keys(drawPic);

    let getimg = document.getElementById("myDrawPic");
    nextclick.onclick = function () {
        getimg.src = drawPic[mdp[drawing]].pic;
        drawing++;
        if (drawing == mdp.length) {
            drawing = 0;
        }
    }
}

function prevpic(drawPic) {
    let prevclick = document.getElementById("arrLeft");
    let mdp = Object.keys(drawPic);

    let getimg = document.getElementById("myDrawPic");
    prevclick.onclick = function () {
        getimg.src = drawPic[mdp[drawing]].pic;
        drawing--;
        if (drawing < 0) {
            drawing = mdp.length - 1;
        }
    }
}

function gamebt(){
    let getgame = new XMLHttpRequest();
    getgame.open("GET", "gamepic.json");
    getgame.onload = function () {
        let gamePic = JSON.parse(getgame.responseText);
        console.log(gamePic);
        buildimg(gamePic);
    };

    getgame.onerror = function () { alert("ERROR!game"); };
    getgame.send();
    
}

function buildimg(gamePic){
    console.log(Object.keys(gamePic).length);
    let gp = Object.keys(gamePic);
    let doimg = document.getElementById("layer")
    let allbox = document.querySelectorAll("#layer img");
    let showgame = document.getElementById("showgame");
    if(allbox.length < 1){
        for(let i =0;i <gp.length;i++){
            let hidiv = document.createElement("div");
            hidiv.id = "picgamediv"+i;
            hidiv.classList.add("gamepic");
            doimg.appendChild(hidiv);
            let getdiv = document.getElementById("picgamediv"+i);
            let hiimg = document.createElement("img");
            hiimg.src = gamePic[gp[i]].pic;
            getdiv.appendChild(hiimg);
        }
        showgame.innerHTML = "Hide Game";
    }

    else{
        cleargameFunction();
        showgame.innerHTML = "Show Game";
    }
}

function cleargameFunction(){
    let gotobox = document.getElementById("layer");
    gotobox.innerHTML = '';
}
/*Main*/

/*comment*/
let o = 1;

function postFunction(){
    let gotobox = document.getElementById("box");
    let builduser = document.createElement("h3");
    builduser.className = "user"+o;
    builduser.classList.add("username");
    builduser.innerHTML = "User"+o;
    gotobox.appendChild(builduser);

    let buildp = document.createElement("div");
    buildp.id = "comment"+o;
    buildp.classList.add("align")
    gotobox.appendChild(buildp);

    let gotop = document.getElementById("comment"+o);
    let buildimg = document.createElement("img");
    let chapic = document.getElementById("charater").value;
    buildimg.className = "chapic";
    buildimg.src = "pic/"+ chapic +".png";
    gotop.appendChild(buildimg);

    let buildcmt = document.createElement("p");
    buildcmt.id = "cmt"+o;
    buildcmt.classList.add("cmttext");
    gotop.appendChild(buildcmt);

    document.getElementById("cmt"+o).innerHTML = document.getElementById("text1").value;

    let buildhr = document.createElement("hr");
    gotobox.appendChild(buildhr);

    o++;
}

function clearcmtFunction(){
    let gotobox = document.getElementById("box");
    gotobox.innerHTML = '';

    o = 1;
}
/*comment*/


