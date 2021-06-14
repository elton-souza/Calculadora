const painel = document.querySelector('[data-painel]')

const arrayNumber = document.querySelectorAll('[data-number]')
arrayNumber.forEach((valor)=>{
    valor.addEventListener('click', ()=>{
        const number = parseFloat(valor.value)
        getData(number)} )
})
const arrayOperator = document.querySelectorAll('[data-operator]')
arrayOperator.forEach((operator)=>{
    operator.addEventListener('click', ()=>{
        getData(operator.value)
    })
})
function getData(valor){
    const data = valor
    render(data)
}
function render(data){
    painel.value += data
}
function clear(){
    alert('ALO')
}
function result(){
    const result = eval(painel.value)
    painel.value = result
}