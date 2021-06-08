const data = document.querySelectorAll('[data-digito]')
const op = document.querySelectorAll('[data-operador]')

data.forEach((btn)=>{
    btn.addEventListener('click',(event)=>{
        const number = event.target.textContent
        getData(number)
    })
})
op.forEach((operador)=>{
    operador.addEventListener('click',(event)=>{
        const operador = event.target.textContent
        getData(operador)
    })
})

function getData(event){
    console.log(event)
}
