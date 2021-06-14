const screen = document.querySelector('[data-screen]')

const arrayNumber = document.querySelectorAll('[data-number]')
arrayNumber.forEach((valor)=>{
    valor.addEventListener('click', ()=>{
        getData(valor.value)} )
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
    screen.value += data
}
function result(){
    if (screen.value == ""){
        alert('Não vai ter resultado se não tiver o calculo :)')
    }else{
        const result = eval(screen.value)
        screen.value = result
    }
}

function clearScreen(){
    screen.value = ""
}