// by convention, JEST unit tests have the same name as the module they test, but with .test.js as the extension

// first, import the required modules
// this makes the functions exported from the "required" file available
const { addNumber, updateDOM } = require("./script");

// import JSDOM module
// because JSDOM is a module in node_modules, we don't need to include its path, only its name
const { JSDOM } = require("jsdom");

// jest will invoke every callback that is provided as the last argument to a "test" invocation
test("addNumbers returns the sum of two argument numbers", () => {
    // AAA ("triple-a") pattern
    // arrange
    let firstOperand = 10;
    let secondOperand = 20;

    // act
    let result = addNumber(firstOperand, secondOperand);

    // assert
    // all "expect" invocations must be true for the test to pass
    expect(result).toBe(30);
});

test("updateDOM correctly updates the inner text of an element", () => {
    // initialize a new fake "DOM" object
    const dom = new JSDOM(`<!DOCTYPE html><div id="result"></div>`);
    // global object available through node
    global.document = dom.window.document;

    // setting global document causes updateDOM to update the fake dom object we set to the document
    updateDOM(30);

    expect(global.document.querySelector("#result").innerText).toBe("The result of the operation is: 30");
});