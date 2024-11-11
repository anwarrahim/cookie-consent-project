
const modalCloseBtn = document.getElementById("modal-close-btn")
const modal = document.getElementById("modal")

setTimeout(()=>{
    modal.style.display = 'inline'
}, 3000)

modalCloseBtn.addEventListener('click',  ()=>{
    modal.style.display= 'none'
})




