let i = 1;

function postFunction(){
    let gotobox = document.getElementById("box");
    let builduser = document.createElement("h3");
    builduser.className = "user"+i;
    builduser.innerHTML = "User"+i;
    gotobox.appendChild(builduser);

    let buildp = document.createElement("div");
    buildp.id = "comment"+i;
    buildp.classList.add("align");
    gotobox.appendChild(buildp);

    let gotop = document.getElementById("comment"+i);
    let buildimg = document.createElement("img");
    let chapic = document.getElementById("charater").value;
    buildimg.className = "chapic";
    buildimg.src = "pic/"+ chapic +".png";
    gotop.appendChild(buildimg);

    let buildcmt = document.createElement("p");
    buildcmt.id = "cmt"+i;
    gotop.appendChild(buildcmt);

    document.getElementById("cmt"+i).innerHTML = document.getElementById("text1").value;

    let buildhr = document.createElement("hr");
    gotobox.appendChild(buildhr);

    document.getElementById("text1").value = "";
    i++;
}

function clearFunction(){
    let gotobox = document.getElementById("box");
    gotobox.innerHTML = '';

    i = 1;
}