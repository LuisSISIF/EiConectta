document.querySelectorAll(".faq-question")
.forEach(btn => {

btn.onclick = () => {

let answer = btn.nextElementSibling

answer.style.display =
answer.style.display === "block"
? "none"
: "block"

}

})
document.querySelectorAll(".faq-question").forEach(q=>{

q.addEventListener("click",()=>{

let item=q.parentElement

item.classList.toggle("active")

})

})