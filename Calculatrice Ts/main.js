var tils = document.querySelectorAll(".numbers_tils");
var calc_list = document.getElementById("calc_list");
var operators = document.querySelectorAll(".calc_operator");
var calc_result = document.getElementById("calc_result");
tils.forEach(function (item) {
    item.addEventListener('click', function () {
        var split = item.id.split('');
        addToCalc(split[1]);
        console.log(num1, num2);
    });
});
operators.forEach(function (item) {
    item.addEventListener('click', function () {
        var operatorType = item.getAttribute("operatorType");
        addToCalc(operatorType);
    });
});
var num1;
var num2;
var operator;
var calc;
function calcule() {
    if (num1 != undefined && operator != undefined && num2 != undefined) {
        var int1 = parseInt(num1);
        var int2 = parseInt(num2);
        var total = void 0;
        if (operator == "+") {
            total = int1 + int2;
        }
        else if (operator == "-") {
            total = int1 - int2;
        }
        else if (operator == "*") {
            total = int1 * int2;
        }
        else {
            total = int1 / int2;
        }
        calc_result.innerHTML = "Result = " + total.toString();
    }
}
function addToCalc(value) {
    if (value == "+" || value == "-" || value == "*" || value == "/") {
        operator = value;
        console.log(operator);
        if (num2 == undefined) {
            calc_list.innerHTML = num1 + operator;
        }
        else {
            calc_list.innerHTML = num1 + operator + num2;
        }
    }
    else {
        if (num1 == undefined) {
            num1 = value;
            calc_list.innerHTML = num1;
        }
        else if (num1 != undefined && num2 == undefined) {
            num2 = value;
            if (operator == undefined) {
                null;
            }
            else {
                calc_list.innerHTML = num1 + operator + num2;
            }
        }
        else {
            null;
        }
    }
    calcule();
}
