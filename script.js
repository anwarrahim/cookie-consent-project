
const modalCloseBtn = document.getElementById("modal-close-btn")
const modal = document.getElementById("modal")
const consentForm = document.getElementById("consent-form")
const modalText = document.getElementById('modal-text')


setTimeout(()=>{
    modal.style.display = 'inline'
}, 1500)


modalCloseBtn.addEventListener('click',  ()=>{
    modal.style.display= 'none'
})


consentForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    modalText.innerHTML = `  <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">
            Uploading your data to the dark web...
        </p>
    </div>`
    
    setTimeout(()=>{
        document.getElementById('upload-text').innerText=`Making the
   sale...`
    }, 1500)
    
    setTimeout(()=>{
        modalText.innerHTML =   `<h2>Thanks you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.">
    </div>
    `
    }, 3000)
    
    
})







