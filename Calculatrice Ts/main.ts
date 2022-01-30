let tils : NodeListOf<Element> = document.querySelectorAll(".numbers_tils")
let calc_list : HTMLElement = document.getElementById("calc_list")
let operators : NodeListOf<Element> = document.querySelectorAll(".calc_operator")

tils.forEach(item => {
    item.addEventListener('click', function(){
        let split : string[] = item.id.split('')
        addToCalc(split[1])
        console.log(num1, num2)
    })
})

operators.forEach(item => {
    item.addEventListener('click', function(){
        let operatorType = item.getAttribute("operatorType")
        addToCalc(operatorType)
    })
})

let num1 : string
let num2 : string
let operator : string
let calc : string

function addToCalc (value : string) : void{
    if(value == "+" || value == "-" || value == "*" || value == "/"){
        operator = value
        if(num2 == undefined) { calc_list.innerHTML = num1 + operator }
        else { calc_list.innerHTML = num1 + operator + num2 }
        
    }
    else {
        if(num1 == undefined){ 
            num1 = value 
            calc_list.innerHTML = num1
        }
        else if (num1 != undefined && num2 == undefined) { 
            num2 = value
            if ( operator == undefined) { null }
            else { calc_list.innerHTML = num1 + operator + num2 }
        }
        else { null }
    }
}