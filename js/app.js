const navEl = document.querySelector('.nav-list')
const buttonEl = document.querySelector('.nav-toggle')

buttonEl.addEventListener('click', function(){
    if(navEl.classList.contains('active')){
        navEl.classList.remove('active')
    }else{
        navEl.classList.add('active')
    }
})

function setupTabs(){
    document.querySelectorAll(".tabs-button").forEach(button => {
        button.addEventListener("click", () => {
            button.parentElement.childNodes.forEach(btn => {
                if(btn?.classList?.contains('tabs-button')){
                    btn.classList.remove('active')
                }
            })

            button.classList.add('active')

            button.parentElement.parentElement.childNodes.forEach(content => {
                if('#' + content?.id === button?.dataset?.target){
                    content.classList.add('tabs-content-active')
                }
                else{
                    content?.classList?.remove('tabs-content-active')
                }
            })
        });
    });
}

document.addEventListener("DOMContentLoaded", () =>{
    setupTabs();

    document.querySelectorAll(".tabs").forEach(tabsContainer =>{
        tabsContainer.querySelector(".tabs-sidebar .tabs-button").click();
    });
});

