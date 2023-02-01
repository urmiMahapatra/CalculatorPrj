prev = NaN;
curr = 0;
currOp = "";
isFloat = false;
floatConv = 10;

function Clicked(input) {
    let c1 = checkedNumOrOp(input);
    if(isNaN(c1)) {
        processOperator(input);
    } else {
        if(isFloat) {
            curr = curr + (c1/floatConv);
            floatConv *= 10;
        } else {
            curr = curr * 10 + c1;
        }
        displayText(curr);
    }
}

function resetFloat() {
    isFloat = false;
    floatConv = 10;
}

function clearDisplay(){
    document.getElementById("display").innerHTML="0";
    prev = NaN;
    curr = 0;
    currOp = "";
    resetFloat();
}

function displayText(text) {
    document.getElementById("display").innerHTML = text;
}

function checkedNumOrOp(inChar) {
    return parseInt(inChar);
}

function processOperator(inChar) {
    console.log("inChar " + inChar)
    if(inChar == ".") {
        curr = curr * 1.0;
        isFloat = true;
        dispText = curr + ".";
        console.log("dispText = " + dispText);
        displayText(dispText);
    } 
    else if(inChar == "+/-") {
        resetFloat();
        curr = -curr;
        displayText(curr);
    } 
    else if(prev == NaN) {
        console.log("prev is NaN")
        currOp = "";
        return;
    }
    else if  (currOp == "") {
        currOp = inChar;
        prev = curr;
        curr = 0;
        displayText(prev);
        resetFloat();
    }
    else {
        resetFloat();
        solve(currOp);
        currOp = inChar;
    }
}


function solve(operator){
    if(operator == "") {
        prev = curr
    }else if(operator =="+") {
        prev = prev + curr;
    }  else if(operator =="-") {
        prev = prev - curr;
    }  else if(operator =="/") {
        prev = prev / curr;
    } else if(operator =="*") {
        prev = prev * curr;
    } else if(operator =="%") {
        prev = (prev * curr )/ 100;
    }
    curr = 0;
    displayText(prev);
}