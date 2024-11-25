function addNumber(num1, num2) {
    return num1 + num2;
}

function updateDOM(value) {
    let resultDiv = document.getElementById("result");

    if(resultDiv) {
        resultDiv.innerText = `The result of the operation is: ${value}`;
    }
}

function init() {
    let result = addNumber(10, 20);
    updateDOM(result);
}

// REMEMBER: typeof always returns a string; evaluating against the undefined TYPE will always be false
if(typeof window === "undefined") {
    // window object represents the browser window
    module.exports = { addNumber, updateDOM, init };
} else {
    // if undefined, window object is not available
    // typically result of working in a Node environment
    window.onload = init;
}