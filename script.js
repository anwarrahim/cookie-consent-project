
const modalCloseBtn = document.getElementById("modal-close-btn")
const modal = document.getElementById("modal")

setTimeout(()=>{
    modal.style.display = 'inline'
}, 5000)

modalCloseBtn.addEventListener('click', function (){
    modal.style.display= 'none'
})