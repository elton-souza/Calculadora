const obj = document.querySelectorAll('[data-number]')
obj.forEach((valor)=>{
    valor.addEventListener('click', ()=>{
        getData(valor.value)
    })
})

function getData(valor){
    console.log(valor)
}