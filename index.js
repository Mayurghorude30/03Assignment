function calculate() {
    const input1 = parseFloat(document.getElementById("input1").value);
    const input2 = parseFloat(document.getElementById("input2").value);
    const operator = document.getElementById("operator").value;
    let result = 0;

    if (operator === "+") {
        result = input1 + input2;
    } else if (operator === "-") {
        result = input1 - input2;
    } else if (operator === "*") {
        result = input1 * input2;
    } else if (operator === "/") {
        result = input1 / input2;
    } else if (operator === "%") {
        result = input1 % input2;
    }

    document.getElementById("result-Area").textContent = "Result: " + result;
}

function clearAll() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("operator").value = "";
    document.getElementById("result-Area").textContent = "Result:";
}

