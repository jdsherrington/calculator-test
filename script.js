const displayText = document.getElementById('displayText'),
      calcText = document.getElementById('calcText');
displayText.textContent = '';
calcText.textContent = '';
let mainDisplay = '',
    subDisplay = '',
    calculation = '',
    tempCalc = '',
    result = '';
    numpad = new Object();
document.querySelectorAll('.btn').forEach(function(numBtn) {
    numpad[numBtn.id]= {
        value: numBtn.textContent,
        element: numBtn
    }
    numBtn.addEventListener('click', function (e) {
        switch(e.target.id) {
            case "backspace":
                if (mainDisplay == '') {
                    break;
                };
                calculation = calculation.substring(0, calculation.length - 1);
                subDisplay = subDisplay.substring(0, subDisplay.length - 1);
                mainDisplay = mainDisplay.substring(0, mainDisplay.length - 1);
                displayText.textContent = mainDisplay;
                break;

            case "clear":
                mainDisplay = '';
                subDisplay = '';
                calculation = '';
                calcText.textContent = subDisplay;
                displayText.textContent = mainDisplay;
                break;    
            
            case "add":
                tempCalc = '';
                calculate();
                subDisplay += ` ${numpad[e.target.id].value} `;
                tempCalc += `+`;
                calculation += `+`;
                console.log(tempCalc);
                calcText.textContent = subDisplay;
                displayText.textContent = mainDisplay;
                mainDisplay = '';
                break;
                    
            case "subtract":
                tempCalc = '';
                calculate();
                subDisplay += ` ${numpad[e.target.id].value} `;
                tempCalc += `-`;
                calculation += `-`;
                console.log(tempCalc);
                calcText.textContent = subDisplay;
                displayText.textContent = mainDisplay;
                mainDisplay = '';
                break;

            case "multiply":
                tempCalc = '';
                calculate();
                console.log(tempCalc);
                subDisplay += ` ${numpad[e.target.id].value} `;
                tempCalc += `*`;
                calculation += `*`;
                console.log(tempCalc);
                calcText.textContent = subDisplay;
                displayText.textContent = mainDisplay;
                mainDisplay = '';
                break;

            case "divide":
                tempCalc = '';
                calculate();
                subDisplay += ` ${numpad[e.target.id].value} `;
                tempCalc += `/`; 
                calculation += `/`;
                console.log(tempCalc);
                calcText.textContent = subDisplay;
                displayText.textContent = mainDisplay;
                mainDisplay = '';
                break;

            case "equals":
                calculate();
                calcText.textContent = subDisplay;
                mainDisplay = '';
                break;

            case "period":
                if (mainDisplay == '') {
                    mainDisplay += '0';
                    subDisplay += '0';
                    calculation += '0';
                };
                let regex = /\./i;
                console.log(regex.test(mainDisplay));
                if (regex.test(mainDisplay)) {
                    break;
                };
                tempCalc += numpad[e.target.id].value;
                console.log(tempCalc);
                mainDisplay += numpad[e.target.id].value;
                subDisplay += numpad[e.target.id].value;
                calculation += numpad[e.target.id].value;
                displayText.textContent = mainDisplay;
                break;

            default:
                if (mainDisplay == '0') {
                    mainDisplay = '';
                };
                tempCalc += numpad[e.target.id].value;
                mainDisplay += numpad[e.target.id].value
                subDisplay += numpad[e.target.id].value;
                calculation += numpad[e.target.id].value

                console.log(tempCalc);
                displayText.textContent = mainDisplay;
        };
    });
 });

 function calculate() {
    result = eval(calculation);
    console.log(result);
    mainDisplay = result + '';
    displayText.textContent = mainDisplay;
 };