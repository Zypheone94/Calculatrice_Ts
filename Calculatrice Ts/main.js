var tils = document.querySelectorAll(".numbers_tils");
tils.forEach(function (item) {
    item.addEventListener('click', function () {
        var split = item.id.split('');
        addNumber(parseInt(split[1]));
        console.log(num1, num2);
    });
});
var num1;
var num2;
var operator;
var calc;
function addNumber(value) {
    if (num1 == null) {
        num1 = value;
    }
    else if (num1 != null && num2 == null) {
        num2 = value;
    }
    else {
        null;
    }
}
