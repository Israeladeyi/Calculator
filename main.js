let result = "";
function buttonPressed(value){
 result+=value
 document.querySelector('#result').value = result
}
function clearResult() {
 result = ''
 document.querySelector('#result').value = result
}
function calculateResult(){
 let calculation = eval(result)
 result = calculation.toString()
 document.querySelector('#result').value = result
}