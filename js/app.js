const navEl = document.querySelector('.nav-list')
const buttonEl = document.querySelector('.nav-toggle')

buttonEl.addEventListener('click', function(){
    if(navEl.classList.contains('active')){
        navEl.classList.remove('active')
    }else{
        navEl.classList.add('active')
    }
})


