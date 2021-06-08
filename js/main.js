const valor = document.querySelectorAll('[data-digito]')
valor.forEach((btn)=>{
    console.log(btn)
    btn.addEventListener('click', (btn)=>{
        console.log(btn.target.textContent)
    })
})