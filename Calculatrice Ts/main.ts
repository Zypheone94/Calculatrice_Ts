let tils : NodeListOf<Element> = document.querySelectorAll(".numbers_tils")
let calc_list : HTMLElement = document.getElementById("calc_list")
let operators : NodeListOf<Element> = document.querySelectorAll(".calc_operator")
let calc_result : HTMLElement = document.getElementById("calc_result")

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

function calcule () : void{
    if(num1 != undefined && operator != undefined && num2 != undefined) { 
        let int1 : number = parseInt(num1)
        let int2 : number = parseInt(num2)
        let total : number
        if( operator == "+") { total = int1 + int2 }
        else if ( operator == "-" ) { total = int1 - int2 } 
        else if ( operator == "*" ) { total = int1 * int2 }
        else { total = int1 / int2 }
        calc_result.innerHTML = "Result = " + total.toString()
    } 
}

function addToCalc (value : string) : void{
    if(value == "+" || value == "-" || value == "*" || value == "/"){
        operator = value
        console.log(operator)
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
    calcule()
}