let tils : NodeListOf<Element> = document.querySelectorAll(".numbers_tils")

tils.forEach(item => {
    item.addEventListener('click', function(){
        let split : string[] = item.id.split('')
        addNumber(parseInt(split[1]))
        console.log(num1, num2)
    })
})

let num1 : number
let num2 : number
let operator : string
let calc : string

function addNumber (value : number) : void{
    if(num1 == null){ num1 = value }
    else if (num1 != null && num2 == null) { num2 = value}
    else { null }
}