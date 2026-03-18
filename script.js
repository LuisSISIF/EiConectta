// animação scroll

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("active");
}

});

},{threshold:0.15});

reveals.forEach(el => observer.observe(el));


// FAQ interação profissional

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

const question = item.querySelector(".faq-question");

question.addEventListener("click", () => {

faqItems.forEach(i => {
if(i !== item){
i.classList.remove("active");
}
});

item.classList.toggle("active");

});

});

// Scroll suave para menu

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

window.scrollTo({
top: target.offsetTop - 70,
behavior: "smooth"
});

}

});

});