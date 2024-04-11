// selector

const result = document.getElementById("result");
const widthInput = document.getElementById("widthInput");
const heightInput = document.getElementById("heightInput");
const btnCalc = document.getElementById("btnCalc")
const lists = document.getElementById("lists");

// processing function

const areaFun = (w,h) => w*h;

// user interaction function

const  handleFun = () => {
    if(widthInput.value == null || heightInput.value == null){
        result.innerText = "Fill width and height!"
    }
    else{
         const ans = areaFun(widthInput.valueAsNumber,heightInput.valueAsNumber);
        result.innerHTML = `${widthInput.valueAsNumber} ft * ${heightInput.valueAsNumber} ft = ${ans} ft<sup>2</sup>`;
        widthInput.value = null;
        heightInput.value = null;   
    }
}

const clearResult = () => {
    result.innerHTML = "";
}

const stoleResult = () => {
    if(result.innerHTML==""){
        result.innerText = "There is nothing to store!"
    }
    else{
        lists.innerHTML = `<li>${result.innerHTML}</li>`;
        result.innerHTML = "";
    }
}