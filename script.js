window.onload = function() {
    //const z = document.getElementById("equation");
    //const x = "";
    //const y = x.slice(-1);
    //if(y == "+", y == "-", y == "*", y == "/", y == "%") {
    //document.getElementById("equation").innerHTML = "hello";
}
let $parenthesesOn = "0";
function ParenthesesSign() {
    let firstEquation = document.getElementById("equation");
    let convertedEquation = firstEquation.innerText;
    if ($parenthesesOn == "0"){
        $parenthesesOn = "1";
        document.getElementById("equation").innerHTML = convertedEquation + "("; 
    } else {
        $parenthesesOn = "0";
        document.getElementById("equation").innerHTML = convertedEquation + ")"; 
        }
}
/* Signs */
function PlusSign() {
    let firstEquation = document.getElementById("equation");
    let convertedEquation = firstEquation.innerText;
    let checkEquationEnd = convertedEquation.endsWith("+") || 
    convertedEquation.endsWith("-") || 
    convertedEquation.endsWith("*") ||
    convertedEquation.endsWith(".") ||
    convertedEquation.endsWith("/") ||
    convertedEquation.endsWith("%");
    if (checkEquationEnd == false){
    document.getElementById("equation").innerHTML = convertedEquation + "+"; 
    console.log("Plus Sign Has Been Added.");
    }
}
function MinusSign() {
    let firstEquation = document.getElementById("equation");
    let convertedEquation = firstEquation.innerText;
    let checkEquationEnd = convertedEquation.endsWith("+") || 
    convertedEquation.endsWith("-") || 
    convertedEquation.endsWith("*") ||
    convertedEquation.endsWith(".") ||
    convertedEquation.endsWith("/") ||
    convertedEquation.endsWith("%");
    if (checkEquationEnd == false){
    document.getElementById("equation").innerHTML = convertedEquation + "-"; 
    console.log("Minus Sign Has Been Added.");
    }
}
function DotSign() {
    let firstEquation = document.getElementById("equation");
    let convertedEquation = firstEquation.innerText;
    let checkEquationEnd = convertedEquation.endsWith(".") || 
    convertedEquation.endsWith("-") || 
    convertedEquation.endsWith("*") ||
    convertedEquation.endsWith(".") ||
    convertedEquation.endsWith("/") ||
    convertedEquation.endsWith("%");
    if (checkEquationEnd == false){
    document.getElementById("equation").innerHTML = convertedEquation + ".";
    console.log("Dot Sign Has Been Added."); 
    }
}
function MultiplicationSign() {
    let firstEquation = document.getElementById("equation");
    let convertedEquation = firstEquation.innerText;
    let checkEquationEnd = convertedEquation.endsWith(".") || 
    convertedEquation.endsWith("-") || 
    convertedEquation.endsWith("*") ||
    convertedEquation.endsWith(".") ||
    convertedEquation.endsWith("/") ||
    convertedEquation.endsWith("%");
    if (checkEquationEnd == false){
    document.getElementById("equation").innerHTML = convertedEquation + "*"; 
    console.log("Multiplication Sign Has Been Added.");
    }
}
function DivideSign() {
    let firstEquation = document.getElementById("equation");
    let convertedEquation = firstEquation.innerText;
    let checkEquationEnd = convertedEquation.endsWith(".") || 
    convertedEquation.endsWith("-") || 
    convertedEquation.endsWith("*") ||
    convertedEquation.endsWith(".") ||
    convertedEquation.endsWith("/") ||
    convertedEquation.endsWith("%");
    if (checkEquationEnd == false){
    document.getElementById("equation").innerHTML = convertedEquation + "/"; 
    console.log("Divide Sign Has Been Added.");
    }
}
function PercentSign() {
    let firstEquation = document.getElementById("equation");
    let convertedEquation = firstEquation.innerText;
    let checkEquationEnd = convertedEquation.endsWith(".") || 
    convertedEquation.endsWith("-") || 
    convertedEquation.endsWith("*") ||
    convertedEquation.endsWith(".") ||
    convertedEquation.endsWith("/") ||
    convertedEquation.endsWith("%");
    if (checkEquationEnd == false){
    document.getElementById("equation").innerHTML = convertedEquation + "%";
    console.log("Percent Sign Has Been Added."); 
    }
}
function EqualSign() {
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    document.getElementById("result").innerHTML = "ㅤ";
    document.getElementById("result").style.marginBottom = "0px";
    document.getElementById("equation").innerHTML = eval(convertedEquation);
}
function DeleteSign(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    let checkLength = convertedEquation.length;
    if(checkLength != 1){
    document.getElementById("equation").innerHTML = convertedEquation.slice(0,-1);
    console.log(`Number ${convertedEquation.slice(-1)} Has Been Deleted`);  
    }
    if(checkLength == 1){
    document.getElementById("equation").innerHTML = 0;
    if(convertedEquation.startsWith("0") == false){
    console.log("All Numbers Have Been Deleted.");   
    } 
}
}
function ClearSign(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    if(convertedEquation.startsWith("0") == false){
    document.getElementById("equation").innerHTML = 0; 
    document.getElementById("result").innerHTML = "ㅤ";
    document.getElementById("result").style.marginBottom = "0px"; 
    console.log("All Numbers Have Been Deleted.");
    }
}
/* Numbers */
function Nzero(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    if(convertedEquation.startsWith("0") == false){
    document.getElementById("equation").innerHTML = convertedEquation + 0; 
    console.log("Number 0 Has Been Added.");
    }
    if(convertedEquation.startsWith("0") == true){
        document.getElementById("equation").innerHTML = 0;    
        console.log("Number 0 Has Been Added.");
    }
}
function None(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    if(convertedEquation.startsWith("0") == false){
    document.getElementById("equation").innerHTML = convertedEquation + 1; 
    console.log("Number 1 Has Been Added.");
    }
    if(convertedEquation.startsWith("0") == true){
        document.getElementById("equation").innerHTML = 1;  
        console.log("Number 1 Has Been Added.");  
    }
}
function Ntwo(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    if(convertedEquation.startsWith("0") == false){
    document.getElementById("equation").innerHTML = convertedEquation + 2;
    console.log("Number 2 Has Been Added.");
    } 
    if(convertedEquation.startsWith("0") == true){
        document.getElementById("equation").innerHTML = 2;    
        console.log("Number 2 Has Been Added.");
    }
}
function Nthree(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    if(convertedEquation.startsWith("0") == false){
    document.getElementById("equation").innerHTML = convertedEquation + 3; 
    console.log("Number 3 Has Been Added.");
    }
    if(convertedEquation.startsWith("0") == true){
        document.getElementById("equation").innerHTML = 3;
        console.log("Number 3 Has Been Added.");
    }
}
function Nfour(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    if(convertedEquation.startsWith("0") == false){
    document.getElementById("equation").innerHTML = convertedEquation + 4; 
    console.log("Number 4 Has Been Added.");
    }
    if(convertedEquation.startsWith("0") == true){
        document.getElementById("equation").innerHTML = 4;
        console.log("Number 4 Has Been Added.");    
    }
}
function Nfive(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    if(convertedEquation.startsWith("0") == false){
    document.getElementById("equation").innerHTML = convertedEquation + 5; 
    console.log("Number 5 Has Been Added.");
    }
    if(convertedEquation.startsWith("0") == true){
        document.getElementById("equation").innerHTML = 5;    
        console.log("Number 5 Has Been Added.");
    }
}
function Nsix(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    if(convertedEquation.startsWith("0") == false){
    document.getElementById("equation").innerHTML = convertedEquation + 6;
    console.log("Number 6 Has Been Added."); 
    }
    if(convertedEquation.startsWith("0") == true){
        document.getElementById("equation").innerHTML = 6;   
        console.log("Number 6 Has Been Added.");  
    }
}
function Nseven(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    if(convertedEquation.startsWith("0") == false){
    document.getElementById("equation").innerHTML = convertedEquation + 7; 
    console.log("Number 7 Has Been Added.");
    }
    if(convertedEquation.startsWith("0") == true){
        document.getElementById("equation").innerHTML = 7;  
        console.log("Number 7 Has Been Added.");  
    }
}
function Neight(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    if(convertedEquation.startsWith("0") == false){
    document.getElementById("equation").innerHTML = convertedEquation + 8; 
    console.log("Number 8 Has Been Added.");
    }
    if(convertedEquation.startsWith("0") == true){
        document.getElementById("equation").innerHTML = 8;
        console.log("Number 8 Has Been Added.");    
    }
}
function Nnine(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    if(convertedEquation.startsWith("0") == false){
    document.getElementById("equation").innerHTML = convertedEquation + 9; 
    console.log("Number 9 Has Been Added.");
    }
    if(convertedEquation.startsWith("0") == true){
        document.getElementById("equation").innerHTML = 9;    
        console.log("Number 9 Has Been Added.");
    }
}
/* Checks For Fonts */
setInterval(function () { 
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    let checkLength = convertedEquation.length;
    if (checkLength == 15) {
    document.getElementById("equation").style.fontSize = "25px", 
    document.getElementById("equation").style.marginBottom = "26px"}
    if (checkLength == 14) {
        document.getElementById("equation").style.fontSize = "40px",
        document.getElementById("equation").style.marginBottom = "0px"}  
    if (checkLength == 24) {
        document.getElementById("equation").innerHTML = convertedEquation.slice(0,-1)}     
}, 10);
/* Checks For Equals */
setInterval(function () { 
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    let checkEquationEnd = convertedEquation.includes("+") || 
    convertedEquation.includes("-") || 
    convertedEquation.includes("*") ||
    convertedEquation.includes(".") ||
    convertedEquation.includes("/") ||
    convertedEquation.includes("%");
    if (checkEquationEnd == true){
        document.getElementById("result").innerHTML = eval(convertedEquation),
        document.getElementById("result").style.marginBottom = "36px"}
}, 10);
/* Checks For Equals If No Sign In The End */
setInterval(function () { 
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    let checkEquationEnd = convertedEquation.includes("+") || 
    convertedEquation.includes("-") || 
    convertedEquation.includes("*") ||
    convertedEquation.includes(".") ||
    convertedEquation.includes("/") ||
    convertedEquation.includes("%");
    if (checkEquationEnd == false){
        document.getElementById("result").innerHTML = "ㅤ",
        document.getElementById("result").style.marginBottom = "0px"}
}, 10);
/* Checks For Equals If There Is a Sign In The End */
setInterval(function () { 
let Equation = document.getElementById("equation");
let convertedEquation = Equation.innerText;
let checkEquationEnd = convertedEquation.endsWith("+") || 
convertedEquation.endsWith("-") || 
convertedEquation.endsWith("*") ||
convertedEquation.endsWith(".") ||
convertedEquation.endsWith("/") ||
convertedEquation.endsWith("%");
if (checkEquationEnd == true){
    document.getElementById("result").innerHTML = "ㅤ";
    document.getElementById("result").style.marginBottom = "0px"}
}, 10);