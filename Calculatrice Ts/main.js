var tils = document.querySelectorAll(".numbers_tils");
var calc_list = document.getElementById("calc_list");
var operators = document.querySelectorAll(".calc_operator");
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
function addToCalc(value) {
    if (value == "+" || value == "-" || value == "*" || value == "/") {
        operator = value;
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
}
