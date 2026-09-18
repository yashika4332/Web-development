
function numbers() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    return [num1, num2];
}

function add() {
    let [num1, num2] = numbers();

    let result = num1 + num2;

    document.getElementById("result").innerHTML = "Result: " + result;
}

function subtract() {
    let [num1, num2] = numbers();

    let result = num1 - num2;

    document.getElementById("result").innerHTML = "Result: " + result;
}

function multiply() {
    let [num1, num2] = numbers();

    let result = num1 * num2;

    document.getElementById("result").innerHTML = "Result: " + result;
}

function divide() {
    let [num1, num2] = numbers();

    if (num2 === 0) {
        document.getElementById("result").innerHTML =
            "The number cannot be divided by 0";
    } else {
        let result = num1 / num2;

        document.getElementById("result").innerHTML = "Result: " + result;
    }
}

