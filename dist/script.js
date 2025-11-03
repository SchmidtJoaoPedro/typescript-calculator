"use strict";
function insert(num) {
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML += num;
    }
}
function clean() {
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML = "";
    }
}
function back() {
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerHTML = resultElement.innerHTML.slice(0, -1);
    }
}
function calculate() {
    const resultElement = document.getElementById('result');
    if (resultElement) {
        const expression = resultElement.innerHTML;
        try {
            const result = new Function(`return (${expression})`)();
            resultElement.innerHTML = result.toString();
        }
        catch (error) {
            resultElement.innerHTML = "Erro na expressão";
        }
    }
}
//# sourceMappingURL=script.js.map