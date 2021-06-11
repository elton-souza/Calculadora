const painel = document.querySelector('[data-painel]')

const arrayNumber = document.querySelectorAll('[data-number]')
arrayNumber.forEach((valor)=>{
    valor.addEventListener('click', ()=>{
        console.log(valor.value)
        getData(valor.value)} )
})

function getData(valor){
    const number = valor
    render(number)
}
function render(number){
    painel.value += number
}
function clear(){
    painel.value = ""
}

function result(valor1,valor2,op){

}