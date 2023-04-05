window.onload = function() {

}
let $parenthesesOn = "0";

/* History */
let $historyOn = 0;

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

let $equation = "";
let $convertedEquation = "";
let $checkEquationEnd = "";
let $checkEquationIncludesSigns = "";
let $checkEquationStartsPN = "";

let $signName = "";

function ToConvertEquation(){
    $equation = document.getElementById("equation");
    $convertedEquation = $equation.innerText;
}
function ToCheckEquationEnd(){
    $checkEquationEnd = $convertedEquation.endsWith("+") || 
    $convertedEquation.endsWith("-") || 
    $convertedEquation.endsWith("*") ||
    $convertedEquation.endsWith(".") ||
    $convertedEquation.endsWith("/") ||
    $convertedEquation.endsWith("%");
}
function CheckEquationIncludesSigns(){
    $checkEquationIncludesSigns = $convertedEquation.includes("+") || 
    $convertedEquation.includes("-") || 
    $convertedEquation.includes("*") ||
    $convertedEquation.includes("/") ||
    $convertedEquation.includes("%");
}
function ToCheckEquationStartsPN(){
    $checkEquationStartsPN = $convertedEquation.startsWith("0.0") ||
    $convertedEquation.startsWith("0.1") ||
    $convertedEquation.startsWith("0.2") ||
    $convertedEquation.startsWith("0.3") ||
    $convertedEquation.startsWith("0.4") ||
    $convertedEquation.startsWith("0.5") ||
    $convertedEquation.startsWith("0.6") ||
    $convertedEquation.startsWith("0.7") ||
    $convertedEquation.startsWith("0.8") ||
    $convertedEquation.startsWith("0.9");
}
function ToClearHistory(){
    document.getElementById("history-one").innerHTML = " ";
    document.getElementById("history-two").innerHTML = " ";
    document.getElementById("history-three").innerHTML = " ";
    document.getElementById("history-four").innerHTML = " ";
    document.getElementById("history-five").innerHTML = " ";
    document.getElementById("history-six").innerHTML = " ";
    document.getElementById("history-seven").innerHTML = " ";
    document.getElementById("history-eight").innerHTML = " ";
    document.getElementById("history-nine").innerHTML = " ";
    document.getElementById("history-ten").innerHTML = " ";
}
function ToHistory(){
    if ($historyOn === 10){
        $historyOn = 0;
    }
    if ($historyOn === 0){
        document.getElementById("history-one").innerHTML = `${$convertedEquation} = ${eval($convertedEquation)}`;
        ToClearHistory();
    }
    if ($historyOn === 9){
        document.getElementById("history-ten").innerHTML = `${$convertedEquation} = ${eval($convertedEquation)}`;
        $historyOn = 10;
    }
    if ($historyOn === 8){
        document.getElementById("history-nine").innerHTML = `${$convertedEquation} = ${eval($convertedEquation)}`;
        $historyOn = 9;
    }
    if ($historyOn === 7){
        document.getElementById("history-eight").innerHTML = `${$convertedEquation} = ${eval($convertedEquation)}`;
        $historyOn = 8;
    }
    if ($historyOn === 6){
        document.getElementById("history-seven").innerHTML = `${$convertedEquation} = ${eval($convertedEquation)}`;
        $historyOn = 7;
    }
    if ($historyOn === 5){
        document.getElementById("history-six").innerHTML = `${$convertedEquation} = ${eval($convertedEquation)}`;
        $historyOn = 6;
    }
    if ($historyOn === 4){
        document.getElementById("history-five").innerHTML = `${$convertedEquation} = ${eval($convertedEquation)}`;
        $historyOn = 5;
    }
    if ($historyOn === 3){
        document.getElementById("history-four").innerHTML = `${$convertedEquation} = ${eval($convertedEquation)}`;
        $historyOn = 4;
    }
    if ($historyOn === 2){
        document.getElementById("history-three").innerHTML = `${$convertedEquation} = ${eval($convertedEquation)}`;
        $historyOn = 3;
    }
    if ($historyOn === 1){
        document.getElementById("history-two").innerHTML = `${$convertedEquation} = ${eval($convertedEquation)}`;
        $historyOn = 2;
    }
    if ($historyOn === 0){
        document.getElementById("history-one").innerHTML = `${$convertedEquation} = ${eval($convertedEquation)}`;
        $historyOn = 1;
    }
}
function ToAddSign(x){
    if ($checkEquationEnd == false){
        document.getElementById("equation").innerHTML = $convertedEquation + x;
        document.getElementById("result").style.color = "rgba(138, 138, 138, 0)";
        ToCheckForFonts();
        if (x === "+"){
            console.log(`Plus Sign Has Been Added.`);
        } else if (x === "-"){
            console.log("Minus Sign Has Been Added.");
        } else if (x === "."){
            console.log("Dot Sign Has Been Added.");  
        } else if (x === "*"){
            console.log("Multiplication Sign Has Been Added.");
        } else if (x === "/"){
            console.log("Divide Sign Has Been Added.");
        } else if (x === "%"){
            console.log("Percent Sign Has Been Added.");
        }
    }
}
function ToAddNumber(x){
    let checkEquationStartsPoint = $convertedEquation.startsWith("0.");
    let checkEquationStarts = $convertedEquation.startsWith("0");
    switch (checkEquationStarts){
        case false:
            document.getElementById("equation").innerHTML = $convertedEquation + x;
            console.log(`Number ${x} Has Been Added.`);
            break;
        case true:
            if (checkEquationStartsPoint == false){
            document.getElementById("equation").innerHTML = x;
            console.log(`Number ${x} Has Been Added.`);
            break; 
            }
        case true:
            if (checkEquationStartsPoint == true){
            document.getElementById("equation").innerHTML = $convertedEquation + x;
            console.log(`Number ${x} Has Been Added.`);
            break;
            }
    }
}
/* Checks For Fonts */
function ToCheckForFonts() { 
    ToConvertEquation();
    let checkLength = $convertedEquation.length;
    switch (checkLength){
        case 24:
        document.getElementById("equation").innerHTML = $convertedEquation.slice(0,-1);
        break;
        case 15:
        document.getElementById("equation").style.fontSize = "25px";
        document.getElementById("equation").style.marginBottom = "26px";
        break;
        case 14:
        document.getElementById("equation").style.fontSize = "40px";
        document.getElementById("equation").style.marginBottom = "0px";     
        break;
    }  
}

/* Checks For Equals */
function ToCheckForEquals() { 
    ToConvertEquation();
    ToCheckEquationStartsPN();
    CheckEquationIncludesSigns();
    let checkEquationStartsPoint = $convertedEquation.startsWith("0.");
    switch ($checkEquationIncludesSigns){
        case true:
            if ($convertedEquation.endsWith("(") == true){
            document.getElementById("result").innerHTML = "0";
            document.getElementById("result").style.color = "rgba(138, 138, 138, 0)";
            break;
            }
        case true:
            if ($convertedEquation.endsWith(".") == true){
            document.getElementById("result").innerHTML = "0";
            document.getElementById("result").style.color = "rgba(138, 138, 138, 0)";
            break;
            }
        case true:
            if($checkEquationStartsPN == true){
            document.getElementById("result").innerHTML = eval($convertedEquation);
            document.getElementById("result").style.color = "rgb(138, 138, 138)";
            break;
            }
        case true:
            if (checkEquationStartsPoint == true){
            document.getElementById("result").innerHTML = "0";
            document.getElementById("result").style.color = "rgba(138, 138, 138, 0)";
            break;
            }
        case true:
            if ($convertedEquation.startsWith("-") == false){
                document.getElementById("result").innerHTML = eval($convertedEquation);
                document.getElementById("result").style.color = "rgb(138, 138, 138)";
            break;
            }
        case true:
            if ($convertedEquation.startsWith("-") == true){
                document.getElementById("result").innerHTML = "0";
                document.getElementById("result").style.color = "rgba(138, 138, 138, 0)";
            break;
            }    
        }
}
/* Checks For Equals If No Sign */
function ToCheckIfNoSign(){
    ToConvertEquation();
    let checkEquationIncludes = $convertedEquation.includes("+") || 
    $convertedEquation.includes("-") || 
    $convertedEquation.includes("*") ||
    $convertedEquation.includes(".") ||
    $convertedEquation.includes("/") ||
    $convertedEquation.includes("%");
    if (checkEquationIncludes == false){
        document.getElementById("result").innerHTML = "0";
        document.getElementById("result").style.color = "rgba(138, 138, 138, 0)";
}
}
/* Checks For Equals If There Is a Sign In The End */
function ToCheckIfSignEnd() { 
    ToConvertEquation();
    ToCheckEquationEnd();
    if ($checkEquationEnd == true){
        document.getElementById("result").innerHTML = "0";
        document.getElementById("result").style.color = "rgba(138, 138, 138, 0)";
    }
}
/* Signs */
function PlusSign() {
    ToConvertEquation();
    let checkLength = $convertedEquation.length;
    if(checkLength < 23){
    ToCheckEquationEnd();
    ToAddSign("+");
    ToCheckIfSignEnd();
    ToCheckForEquals();
    ToCheckForFonts();
    }
}
function MinusSign() {
    ToConvertEquation();
    let checkLength = $convertedEquation.length;
    if(checkLength < 23){
    ToCheckEquationEnd();
    ToAddSign("-");
    ToCheckIfSignEnd();
    ToCheckForEquals();
    ToCheckForFonts();
    }
}
function DotSign() {
    ToConvertEquation();
    let checkLength = $convertedEquation.length;
    if(checkLength < 23){
    ToCheckEquationEnd();
    ToAddSign(".");
    ToCheckIfSignEnd();
    ToCheckForEquals();
    ToCheckForFonts();
    }
}
function MultiplicationSign() {
    ToConvertEquation();
    let checkLength = $convertedEquation.length;
    if(checkLength < 23){
    ToCheckEquationEnd();
    ToAddSign("*");
    ToCheckIfSignEnd();
    ToCheckForEquals();
    ToCheckForFonts();
    }
}
function DivideSign() {
    ToConvertEquation();
    let checkLength = $convertedEquation.length;
    if(checkLength < 23){
    ToCheckEquationEnd();
    ToAddSign("/");
    ToCheckIfSignEnd();
    ToCheckForEquals();
    ToCheckForFonts();
    }
}
function PercentSign() {
    ToConvertEquation();
    let checkLength = $convertedEquation.length;
    if(checkLength < 23){
    ToCheckEquationEnd();
    ToAddSign("/");
    ToCheckIfSignEnd();
    ToCheckForEquals();
    ToCheckForFonts();
    }
}
function ParenthesesSign() {
    ToConvertEquation();
    let checkLength = $convertedEquation.length;
    if(checkLength < 23){
    let checkEquationStarts = $convertedEquation.startsWith("0");
    ToCheckEquationStartsPN();
    ToCheckIfSignEnd();
    ToCheckForFonts();
    switch (checkEquationStarts){
        case true:
            if ($checkEquationStartsPN == true && $parenthesesOn == "0"){
                document.getElementById("equation").innerHTML = $convertedEquation + "(";
                $parenthesesOn = "1";
            break;
            }
        case true:
            if ($checkEquationStartsPN == false && $parenthesesOn == "1"){
                $parenthesesOn = "0";
                document.getElementById("equation").innerHTML = $convertedEquation + ")";
                ToCheckForEquals();
            break;
                }
        case true:
            if ($parenthesesOn == "0"){
                $parenthesesOn = "1";
                document.getElementById("equation").innerHTML = "(";
            break;
            }
        case false:
            if ($parenthesesOn == "0"){
                $parenthesesOn = "1";
                document.getElementById("equation").innerHTML = $convertedEquation + "(";
                break;
            } else {
                    $parenthesesOn = "0";
                    document.getElementById("equation").innerHTML = $convertedEquation + ")";
                    ToCheckForEquals();
                    break;
                }
            }
    }   
}
function EqualSign() {
    ToConvertEquation();
    ToCheckEquationEnd();
    CheckEquationIncludesSigns();
    ToCheckIfSignEnd();
    ToCheckForEquals();
    ToCheckForFonts();
    switch ($checkEquationEnd){
    case false:
        if ($checkEquationIncludesSigns == false)
    break;
    case false:
        document.getElementById("equation").innerHTML = eval($convertedEquation);
        document.getElementById("equation").style.fontSize = "40px";
        document.getElementById("equation").style.marginBottom = "0px";
        document.getElementById("result").innerHTML = "0";
        document.getElementById("result").style.color = "rgba(138, 138, 138, 0)";
        ToHistory();
    break;
  }
}
function DeleteSign(){
    ToConvertEquation();
    ToCheckEquationEnd();
    ToCheckIfNoSign();
    let checkLength = $convertedEquation.length;
    if($convertedEquation.endsWith(")")){
        $parenthesesOn = 1; 
    }
    if($convertedEquation.endsWith("(")){
        $parenthesesOn = 0; 
    }
    if(checkLength != 1){
    document.getElementById("equation").innerHTML = $convertedEquation.slice(0,-1);
    ToCheckIfSignEnd();
    ToCheckForEquals();
    ToCheckForFonts();
    if ($checkEquationEnd == false){
        console.log(`Number ${$convertedEquation.slice(-1)} Has Been Deleted`); 
        } else {
          console.log(`Sign ${$convertedEquation.slice(-1)} Has Been Deleted`);   
        }
    } else if(checkLength == 1){
    document.getElementById("equation").innerHTML = 0;
    ToCheckIfSignEnd();
    ToCheckForEquals();
    ToCheckForFonts();
    if($convertedEquation.startsWith("0") == false){
    $parenthesesOn = 0;
    console.log("All Numbers Have Been Deleted.");   
    } 
  }
}
function ClearSign(){
    ToConvertEquation();
    ToCheckIfNoSign();
    ToCheckIfSignEnd();
    ToCheckForFonts();
    if($convertedEquation.startsWith("0") == false){
    document.getElementById("equation").style.fontSize = "40px";
    document.getElementById("equation").style.marginBottom = "0px";
    document.getElementById("equation").innerHTML = "0"; 
    document.getElementById("result").innerHTML = "0";
    document.getElementById("result").style.color = "rgba(138, 138, 138, 0)";
    $parenthesesOn = 0;
    console.log("All Numbers Have Been Deleted.");
    }
}
/* Numbers */
function Nzero(){
    ToConvertEquation();
    let checkLength = $convertedEquation.length;
    if(checkLength < 23){
    ToAddNumber(0);
    ToCheckIfNoSign();
    ToCheckIfSignEnd();
    ToCheckForEquals();
    ToCheckForFonts();
    }
}
function None(){
    ToConvertEquation();
    let checkLength = $convertedEquation.length;
    if(checkLength < 23){
    ToAddNumber(1);
    ToCheckIfNoSign();
    ToCheckIfSignEnd();
    ToCheckForEquals();
    ToCheckForFonts();
    }
}
function Ntwo(){
    ToConvertEquation();
    let checkLength = $convertedEquation.length;
    if(checkLength < 23){
    ToAddNumber(2);
    ToCheckIfNoSign();
    ToCheckIfSignEnd();
    ToCheckForEquals();
    ToCheckForFonts();
    }
}
function Nthree(){
    ToConvertEquation();
    let checkLength = $convertedEquation.length;
    if(checkLength < 23){
    ToAddNumber(3);
    ToCheckIfNoSign();
    ToCheckIfSignEnd();
    ToCheckForEquals();
    ToCheckForFonts();
    }
}
function Nfour(){
    ToConvertEquation();
    let checkLength = $convertedEquation.length;
    if(checkLength < 23){
    ToAddNumber(4);
    ToCheckIfNoSign();
    ToCheckIfSignEnd();
    ToCheckForEquals();
    ToCheckForFonts();
    }
}
function Nfive(){
    ToConvertEquation();
    let checkLength = $convertedEquation.length;
    if(checkLength < 23){
    ToAddNumber(5);
    ToCheckIfNoSign();
    ToCheckIfSignEnd();
    ToCheckForEquals();
    ToCheckForFonts();
    }
}
function Nsix(){
    ToConvertEquation();
    let checkLength = $convertedEquation.length;
    if(checkLength < 23){
    ToAddNumber(6);
    ToCheckIfNoSign();
    ToCheckIfSignEnd();
    ToCheckForEquals();
    ToCheckForFonts();
    }
}
function Nseven(){
    ToConvertEquation();
    let checkLength = $convertedEquation.length;
    if(checkLength < 23){
    ToAddNumber(7);
    ToCheckIfNoSign();
    ToCheckIfSignEnd();
    ToCheckForEquals();
    ToCheckForFonts();
    }
}
function Neight(){
    ToConvertEquation();
    let checkLength = $convertedEquation.length;
    if(checkLength < 23){
    ToAddNumber(8);
    ToCheckIfNoSign();
    ToCheckIfSignEnd();
    ToCheckForEquals();
    ToCheckForFonts();
    }
}
function Nnine(){
    ToConvertEquation();
    let checkLength = $convertedEquation.length;
    if(checkLength < 23){
    ToAddNumber(9);
    ToCheckIfNoSign();
    ToCheckIfSignEnd();
    ToCheckForEquals();
    ToCheckForFonts();
    }
}