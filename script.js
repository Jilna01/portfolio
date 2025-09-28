document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener("click", function(e) {
        e.preventDefault();
document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior: "smooth"
});
});
});
document.addEventListener("DOMContentLoaded",()=>{
    const el=document.querySelector('.typing');
    if(!el){
        console.warn("Typing elenment not found: .typing");
        return;
    }
const texts = ["MCA Graduate", "Aspiring Software Developer", "Tech Enthusiast"];
let tIndex =0;
let charIndex=0;
let deleting=false;
const typingSpeed = 100;
const pauseBetween=1500;
function tick(){
    const full=texts[tIndex];
    if(!deleting) {
        charIndex++;
        el.textContent =full.slice(0,charIndex);
        if(charIndex===full.length){
            deleting=true;
            setTimeout(tick,pauseBetween);
            return;
        }
        }else{
       charIndex--;
       el.textContent=full.slice(0,charIndex);
       if(charIndex===0){
        deleting = false;
        tIndex=(tIndex + 1) % texts.length;
    }
}
setTimeout(tick,deleting ? typingSpeed / 2: typingSpeed);
}
tick();
});
function toggleMenu(){
    document.getElementById("mobileMenu").classList.toggle("active");
}