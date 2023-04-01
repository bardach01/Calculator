window.onload = function() {

}
let $parenthesesOn = "0";

/* History */
let $historyOneOn = "0";
let $historyTwoOn = "0";
let $historyThreeOn = "0";
let $historyFourOn = "0";
let $historyFiveOn = "0";
let $historySixOn = "0";
let $historySevenOn = "0";
let $historyEightOn = "0";
let $historyNineOn = "0";
let $historyTenOn = "0";

let $historyOne = " ";
let $historyTwo = " ";
let $historyThree = " ";
let $historyFour = " ";
let $historyFive = " ";
let $historySix = " ";
let $historySeven = " ";
let $historyEight = " ";
let $historyNine = " ";
let $historyTen = " ";

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
function ParenthesesSign() {
    let firstEquation = document.getElementById("equation");
    let convertedEquation = firstEquation.innerText;   
    let checkEquationStarts = convertedEquation.startsWith("0");
    switch (checkEquationStarts){
        case true:
            if ($parenthesesOn == "0"){
                $parenthesesOn = "1";
                document.getElementById("equation").innerHTML = "(";
            }
            break;
        case false:
            if ($parenthesesOn == "0"){
                $parenthesesOn = "1";
                document.getElementById("equation").innerHTML = convertedEquation + "(";
            } else {
                    $parenthesesOn = "0";
                    document.getElementById("equation").innerHTML = convertedEquation + ")";
                }
            break;
    }
}
function EqualSign() {
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    let checkEquationEnd = convertedEquation.endsWith("+") || 
    convertedEquation.endsWith("-") || 
    convertedEquation.endsWith("*") ||
    convertedEquation.endsWith(".") ||
    convertedEquation.endsWith("/") ||
    convertedEquation.endsWith("%");
    if (checkEquationEnd == false){

    document.getElementById("result").innerHTML = "ㅤ";
    document.getElementById("result").style.marginBottom = "0px";
    document.getElementById("equation").innerHTML = eval(convertedEquation);
    if ($historyTenOn == 1){
        document.getElementById("history-one").innerHTML = `${convertedEquation} = ${eval(convertedEquation)}`;
        document.getElementById("history-two").innerHTML = " ";
        document.getElementById("history-three").innerHTML = " ";
        document.getElementById("history-four").innerHTML = " ";
        document.getElementById("history-five").innerHTML = " ";
        document.getElementById("history-six").innerHTML = " ";
        document.getElementById("history-seven").innerHTML = " ";
        document.getElementById("history-eight").innerHTML = " ";
        document.getElementById("history-nine").innerHTML = " ";
        document.getElementById("history-ten").innerHTML = " ";
        $historyOneOn = "0";
        $historyTwoOn = "0";
        $historyThreeOn = "0";
        $historyFourOn = "0";
        $historyFiveOn = "0";
        $historySixOn = "0";
        $historySevenOn = "0";
        $historyEightOn = "0";
        $historyNineOn = "0";
        $historyTenOn = "0";
    }
    if ($historyNineOn == 1){
        document.getElementById("history-ten").innerHTML = `${convertedEquation} = ${eval(convertedEquation)}`;
        $historyOneOn = "3";
        $historyTwoOn = "3";
        $historyThreeOn = "3";
        $historyFourOn = "3";
        $historyFiveOn = "3";
        $historySixOn = "3";
        $historySevenOn = "3";
        $historyEightOn = "3";
        $historyNineOn = "3";
        $historyTenOn = "1";
    }
    if ($historyEightOn == 1){
        document.getElementById("history-nine").innerHTML = `${convertedEquation} = ${eval(convertedEquation)}`;
        $historyOneOn = "3";
        $historyTwoOn = "3";
        $historyThreeOn = "3";
        $historyFourOn = "3";
        $historyFiveOn = "3";
        $historySixOn = "3";
        $historySevenOn = "3";
        $historyEightOn = "3";
        $historyNineOn = "1";
    }
    if ($historySevenOn == 1){
        document.getElementById("history-eight").innerHTML = `${convertedEquation} = ${eval(convertedEquation)}`;
        $historyOneOn = "3";
        $historyTwoOn = "3";
        $historyThreeOn = "3";
        $historyFourOn = "3";
        $historyFiveOn = "3";
        $historySixOn = "3";
        $historySevenOn = "3";
        $historyEightOn = "1";
    }
    if ($historySixOn == 1){
        document.getElementById("history-seven").innerHTML = `${convertedEquation} = ${eval(convertedEquation)}`;
        $historyOneOn = "3";
        $historyTwoOn = "3";
        $historyThreeOn = "3";
        $historyFourOn = "3";
        $historyFiveOn = "3";
        $historySixOn = "3";
        $historySevenOn = "1";
    }
    if ($historyFiveOn == 1){
        document.getElementById("history-six").innerHTML = `${convertedEquation} = ${eval(convertedEquation)}`;
        $historyOneOn = "3";
        $historyTwoOn = "3";
        $historyThreeOn = "3";
        $historyFourOn = "3";
        $historyFiveOn = "3";
        $historySixOn = "1";
    }
    if ($historyFourOn == 1){
        document.getElementById("history-five").innerHTML = `${convertedEquation} = ${eval(convertedEquation)}`;
        $historyOneOn = "3";
        $historyTwoOn = "3";
        $historyThreeOn = "3";
        $historyFourOn = "3";
        $historyFiveOn = "1";
    }
    if ($historyThreeOn == 1){
        document.getElementById("history-four").innerHTML = `${convertedEquation} = ${eval(convertedEquation)}`;
        $historyOneOn = "3";
        $historyTwoOn = "3";
        $historyThreeOn = "3";
        $historyFourOn = "1";
    }
    if ($historyTwoOn == 1){
        document.getElementById("history-three").innerHTML = `${convertedEquation} = ${eval(convertedEquation)}`;
        $historyOneOn = "3";
        $historyTwoOn = "3";
        $historyThreeOn = "1";
    }
    if ($historyOneOn == 1){
        document.getElementById("history-two").innerHTML = `${convertedEquation} = ${eval(convertedEquation)}`;
        $historyTwoOn = "1";
    }
    if ($historyOneOn == 0){
        document.getElementById("history-one").innerHTML = `${convertedEquation} = ${eval(convertedEquation)}`;
        $historyOneOn = "1";
    }
  }
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
    let checkEquationStartsPoint = convertedEquation.startsWith("0.");
    let checkEquationStarts = convertedEquation.startsWith("0");
    switch (checkEquationStarts){
        case false:
            document.getElementById("equation").innerHTML = convertedEquation + 0;
            console.log("Number 0 Has Been Added.");
            break;
        case true:
            if (checkEquationStartsPoint == false){
            document.getElementById("equation").innerHTML = 0;
            console.log("Number 0 Has Been Added.");
            break; 
            }
        case true:
            if (checkEquationStartsPoint == true){
            document.getElementById("equation").innerHTML = convertedEquation + 0;
            console.log("Number 0 Has Been Added.");
            break;
            }
    }
}
function None(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    let checkEquationStartsPoint = convertedEquation.startsWith("0.");
    let checkEquationStarts = convertedEquation.startsWith("0");
    switch (checkEquationStarts){
        case false:
            document.getElementById("equation").innerHTML = convertedEquation + 1;
            console.log("Number 1 Has Been Added.");
            break;
        case true:
            if (checkEquationStartsPoint == false){
            document.getElementById("equation").innerHTML = 1;
            console.log("Number 1 Has Been Added.");
            break; 
            }
        case true:
            if (checkEquationStartsPoint == true){
            document.getElementById("equation").innerHTML = convertedEquation + 1;
            console.log("Number 1 Has Been Added.");
            break;
            }
    }
}
function Ntwo(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    let checkEquationStartsPoint = convertedEquation.startsWith("0.");
    let checkEquationStarts = convertedEquation.startsWith("0");
    switch (checkEquationStarts){
        case false:
            document.getElementById("equation").innerHTML = convertedEquation + 2;
            console.log("Number 2 Has Been Added.");
            break;
        case true:
            if (checkEquationStartsPoint == false){
            document.getElementById("equation").innerHTML = 2;
            console.log("Number 2 Has Been Added.");
            break; 
            }
        case true:
            if (checkEquationStartsPoint == true){
            document.getElementById("equation").innerHTML = convertedEquation + 2;
            console.log("Number 2 Has Been Added.");
            break;
            }
    }
}
function Nthree(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    let checkEquationStartsPoint = convertedEquation.startsWith("0.");
    let checkEquationStarts = convertedEquation.startsWith("0");
    switch (checkEquationStarts){
        case false:
            document.getElementById("equation").innerHTML = convertedEquation + 3;
            console.log("Number 3 Has Been Added.");
            break;
        case true:
            if (checkEquationStartsPoint == false){
            document.getElementById("equation").innerHTML = 3;
            console.log("Number 3 Has Been Added.");
            break; 
            }
        case true:
            if (checkEquationStartsPoint == true){
            document.getElementById("equation").innerHTML = convertedEquation + 3;
            console.log("Number 3 Has Been Added.");
            break;
            }
    }
}
function Nfour(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    let checkEquationStartsPoint = convertedEquation.startsWith("0.");
    let checkEquationStarts = convertedEquation.startsWith("0");
    switch (checkEquationStarts){
        case false:
            document.getElementById("equation").innerHTML = convertedEquation + 4;
            console.log("Number 4 Has Been Added.");
            break;
        case true:
            if (checkEquationStartsPoint == false){
            document.getElementById("equation").innerHTML = 4;
            console.log("Number 4 Has Been Added.");
            break; 
            }
        case true:
            if (checkEquationStartsPoint == true){
            document.getElementById("equation").innerHTML = convertedEquation + 4;
            console.log("Number 4 Has Been Added.");
            break;
            }
    }
}
function Nfive(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    let checkEquationStartsPoint = convertedEquation.startsWith("0.");
    let checkEquationStarts = convertedEquation.startsWith("0");
    switch (checkEquationStarts){
        case false:
            document.getElementById("equation").innerHTML = convertedEquation + 5;
            console.log("Number 5 Has Been Added.");
            break;
        case true:
            if (checkEquationStartsPoint == false){
            document.getElementById("equation").innerHTML = 5;
            console.log("Number 5 Has Been Added.");
            break; 
            }
        case true:
            if (checkEquationStartsPoint == true){
            document.getElementById("equation").innerHTML = convertedEquation + 5;
            console.log("Number 5 Has Been Added.");
            break;
            }
    }
}
function Nsix(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    let checkEquationStartsPoint = convertedEquation.startsWith("0.");
    let checkEquationStarts = convertedEquation.startsWith("0");
    switch (checkEquationStarts){
        case false:
            document.getElementById("equation").innerHTML = convertedEquation + 6;
            console.log("Number 6 Has Been Added.");
            break;
        case true:
            if (checkEquationStartsPoint == false){
            document.getElementById("equation").innerHTML = 6;
            console.log("Number 6 Has Been Added.");
            break; 
            }
        case true:
            if (checkEquationStartsPoint == true){
            document.getElementById("equation").innerHTML = convertedEquation + 6;
            console.log("Number 6 Has Been Added.");
            break;
            }
    }
}
function Nseven(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    let checkEquationStartsPoint = convertedEquation.startsWith("0.");
    let checkEquationStarts = convertedEquation.startsWith("0");
    switch (checkEquationStarts){
        case false:
            document.getElementById("equation").innerHTML = convertedEquation + 7;
            console.log("Number 7 Has Been Added.");
            break;
        case true:
            if (checkEquationStartsPoint == false){
            document.getElementById("equation").innerHTML = 7;
            console.log("Number 7 Has Been Added.");
            break; 
            }
        case true:
            if (checkEquationStartsPoint == true){
            document.getElementById("equation").innerHTML = convertedEquation + 7;
            console.log("Number 7 Has Been Added.");
            break;
            }
    }
}
function Neight(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    let checkEquationStartsPoint = convertedEquation.startsWith("0.");
    let checkEquationStarts = convertedEquation.startsWith("0");
    switch (checkEquationStarts){
        case false:
            document.getElementById("equation").innerHTML = convertedEquation + 8;
            console.log("Number 8 Has Been Added.");
            break;
        case true:
            if (checkEquationStartsPoint == false){
            document.getElementById("equation").innerHTML = 8;
            console.log("Number 8 Has Been Added.");
            break; 
            }
        case true:
            if (checkEquationStartsPoint == true){
            document.getElementById("equation").innerHTML = convertedEquation + 8;
            console.log("Number 8 Has Been Added.");
            break;
            }
    }
}
function Nnine(){
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    let checkEquationStartsPoint = convertedEquation.startsWith("0.");
    let checkEquationStarts = convertedEquation.startsWith("0");
    switch (checkEquationStarts){
        case false:
            document.getElementById("equation").innerHTML = convertedEquation + 9;
            console.log("Number 9 Has Been Added.");
            break;
        case true:
            if (checkEquationStartsPoint == false){
            document.getElementById("equation").innerHTML = 9;
            console.log("Number 9 Has Been Added.");
            break; 
            }
        case true:
            if (checkEquationStartsPoint == true){
            document.getElementById("equation").innerHTML = convertedEquation + 9;
            console.log("Number 9 Has Been Added.");
            break;
            }
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
/*
setInterval(function () { 
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    let checkEquationStartsPoint = convertedEquation.startsWith("0.");
    let checkEquationStarts = convertedEquation.startsWith("0");
    let checkEquationIncludes = convertedEquation.includes("+") || 
    convertedEquation.includes("-") || 
    convertedEquation.includes("*") ||
    convertedEquation.includes(".") ||
    convertedEquation.includes("/") ||
    convertedEquation.includes("%");
    if (checkEquationIncludes == true , convertedEquation.startsWith("-") == false){
        document.getElementById("result").innerHTML = eval(convertedEquation),
        document.getElementById("result").style.marginBottom = "36px"}
}, 10);
*/
/* Checks For Equals */
setInterval(function () { 
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    let checkEquationStartsPoint = convertedEquation.startsWith("0.");
    let checkEquationIncludes = convertedEquation.includes("+") || 
    convertedEquation.includes("-") || 
    convertedEquation.includes("*") ||
    convertedEquation.includes(".") ||
    convertedEquation.includes("/") ||
    convertedEquation.includes("%");
    switch (checkEquationIncludes){
        case true:
            if (checkEquationStartsPoint == true)
            {
            document.getElementById("result").innerHTML = " ";
            document.getElementById("result").style.marginBottom = "80px";
            break;
            }
        case true:
            if (convertedEquation.startsWith("-") == false){
                document.getElementById("result").innerHTML = eval(convertedEquation);
                document.getElementById("result").style.marginBottom = "36px";
            break;
            }
        }
}, 1);

/* Checks For Equals If No Sign In The End */
setInterval(function () { 
    let Equation = document.getElementById("equation");
    let convertedEquation = Equation.innerText;
    let checkEquationIncludes = convertedEquation.includes("+") || 
    convertedEquation.includes("-") || 
    convertedEquation.includes("*") ||
    convertedEquation.includes(".") ||
    convertedEquation.includes("/") ||
    convertedEquation.includes("%");
    if (checkEquationIncludes == false){
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
    document.getElementById("result").innerHTML = "ㅤ",
    document.getElementById("result").style.marginBottom = "0px"}
}, 10);

