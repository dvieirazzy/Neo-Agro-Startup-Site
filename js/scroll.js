
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-page');
    header.classList.toggle('scroll-active', window.scrollY > 90);    
})


function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    reveals.forEach((reveal) => {
        var windowHeight = window.innerHeight;
        var elementTop = reveal.getBoundingClientRect().top;
        var elementVisible = 80;

        if (elementTop < windowHeight - elementVisible){
            reveal.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
