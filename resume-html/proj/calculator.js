
function plusf() {
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let result = Number(first)+ Number(second);
    displayf(result);
}

function minusf(){
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let result = Number(first)- Number(second);
    displayf(result);
}

function multiplyf(){
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let result = Number(first)* Number(second);
    displayf(result);
}

function dividef(){
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let result = Number(first)/ Number(second);
    displayf(result);
}

function powerf(){
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let result = 1;
    for (let i= 0 ; i< second; i++){
        result = result * first;
    }
    displayf(result);
}

function displayf(t){
    let result = t;
    let outputElement= document.getElementById("output");
    if (result < 0){
        outputElement.style.color = "red";
    }
    else{
        outputElement.style.color = "";
    }
    outputElement.innerHTML=String(result);
}
function clearf(){
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    document.getElementById("output").innerHTML= "";
}









