const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let bacground = document.querySelector('.lampada')
     if (bacground.classList.contains('acender')){
         bacground.classList.remove('acender')
     } else{
        bacground.classList.add('acender')
     }
})












