const textEl = document.getElementById("text-area")
const total = document.getElementById("total-char")
const remainEl = document.getElementById("remain-char")

textEl.addEventListener("keyup",()=>{
    updateCunter()
})
function updateCunter(){
    let totalCounter= total.innerText = textEl.value.length
    let remainingCounter = textEl.getAttribute("maxlength") - totalCounter
    remainEl.innerText = remainingCounter

}