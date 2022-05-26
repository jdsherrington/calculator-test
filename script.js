const displayText = document.getElementById('displayText'),
      calcText = document.getElementById('calcText');
displayText.textContent = '';
calcText.textContent = '';
let mainDisplay = '',
    subDisplay = '',
    calculation = '',
    lastChar = '',
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
                console.log(mainDisplay);
                displayText.textContent = mainDisplay;
                break;

            case "clear":
                mainDisplay = '';
                subDisplay = '';
                calculation = '';
                console.log(mainDisplay);
                calcText.textContent = subDisplay;
                displayText.textContent = mainDisplay;
                break;    
            
            case "add":
                calculate();
                subDisplay += ` ${numpad[e.target.id].value} `;
                calculation += `+`;
                console.log(calculation);
                calcText.textContent = subDisplay;
                displayText.textContent = mainDisplay;
                mainDisplay = '';
                break;
                    
            case "subtract":
                calculate();
                subDisplay += ` ${numpad[e.target.id].value} `;
                calculation += `-`;
                console.log(calculation);
                calcText.textContent = subDisplay;
                displayText.textContent = mainDisplay;
                mainDisplay = '';
                break;

            case "multiply":
                calculate();
                subDisplay += ` ${numpad[e.target.id].value} `;
                calculation += `*`;
                console.log(calculation);
                calcText.textContent = subDisplay;
                displayText.textContent = mainDisplay;
                mainDisplay = '';
                break;

            case "divide":
                calculate();
                subDisplay += ` ${numpad[e.target.id].value} `;
                calculation += `/`;
                console.log(calculation);
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
                    console.log(mainDisplay);
                };
                mainDisplay += numpad[e.target.id].value;
                subDisplay += numpad[e.target.id].value;
                calculation += numpad[e.target.id].value;
                console.log(mainDisplay);
                displayText.textContent = mainDisplay;
                break;

            default:
                if (mainDisplay == '0') {
                    mainDisplay = '';
                };
                mainDisplay += numpad[e.target.id].value
                subDisplay += numpad[e.target.id].value;
                calculation += numpad[e.target.id].value
                console.log(mainDisplay);
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