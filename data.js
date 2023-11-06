let elem = document.getElementsByClassName("doboz");
let kattintva = ["", "", "", ""];
let szin = "red";

function megjelen(){
    let tartalom = "";
    for(let i = 0; i < kattintva.length; i++){
        tartalom += `
        <div class="doboz szin${i}" onclick="szinhozzaad(this)" data-index="${i}">
           
        </div>`;
    }

    document.getElementById("main").innerHTML = tartalom;
}

function szinhozzaad(e){
    let index = e.dataset.index;
    kattintva[index] = szin;
    console.log("index: "+index);
    console.log("szin:" +szin);
    console.log("data:" +e.style.backgroundColor);
    let clas = "szin" + index;
    elem = document.getElementsByClassName(clas)[0];
    console.log(elem.style.backgroundColor);
    elem.style.backgroundColor = szin;
    szin = szin == "red" ? "blue" : "red";
    /*if(szin == "red")
    {
        szin = "blue"
    }
    else
    {
        szin = "red";
    }*/
    megjelen();
}

megjelen();