function getData(event){
    event.preventDefault()

    const camp1 = document.querySelector('[data-number1]')
    const camp2 = document.querySelector('[data-number2]')
    const op = document.querySelector('[data-operador]')
    
    const n1 = parseFloat(camp1.value) 
    const n2 = parseFloat(camp2.value)
    const oper = op.value

    calc(n1,n2,oper)

    camp1.value=''
    camp2.value=''
}
function calc(n1,n2,oper){
    if(n1 && n2 == NaN){
        alert("Opa")
    }
    const result = document.querySelector('[data-result]')

    switch(oper){
        case "somar":
            const sm = n1 + n2
            result.value = sm
            break

        case "subtrair":
            const sub = n1 - n2
            result.value = sub
            break

        case "multiplicar":
            const mult = n1*n2
            result.value = mult
            break

        case "dividir":
            const div = n1/n2
            result.value = div
    }
}