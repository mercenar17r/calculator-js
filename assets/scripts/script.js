const defaultResult=0;
function add (num1,num2){
    const result=num1+num2;
    alert('The result is'  + result);

}
add(6,7);


let currentResult = defaultResult;
currentResult=(currentResult + 10)* 3 /2 -1;


let calculationDescription =`( ${defaultResult} + 10) * 3 /2 -1` ;
 outputResult (currentResult, calculationDescription);
