const arrayNumber = document.querySelectorAll('[data-number]')
arrayNumber.forEach((valor)=>{
    valor.addEventListener('click', ()=>{getData(valor.value)} )
})


function getData(valor){
    const number = valor
    render(number)
}

function render(number){
    const painel = document.querySelector('[data-painel]')
    painel.value += number
}