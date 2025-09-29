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
        console.warn("Typing element not found: .typing");
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
document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector(".toggle-icon");
      const isOpen = content.classList.contains("open");

      // Close all sections
      headers.forEach(h => {
        h.classList.remove("active");
        h.nextElementSibling.classList.remove("open");
        const i = h.querySelector(".toggle-icon");
        if (i) i.textContent = "▲"; // collapsed
      });

      // Open clicked section if it was closed
      if (!isOpen) {
        content.classList.add("open");
        header.classList.add("active");
        if (icon) icon.textContent = "▼"; // expanded
      }
    });
  });
});
function toggleMenu() {
  document.getElementById("mobile-menu").classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-theme");
    body.classList.remove("dark-theme");
    themeToggle.textContent = "☀️";
  } else {
    body.classList.add("dark-theme");
    body.classList.remove("light-theme");
    themeToggle.textContent = "🌙";
  }

  themeToggle.addEventListener("click", () => {
    const isLight = body.classList.contains("light-theme");

    body.classList.toggle("light-theme", !isLight);
    body.classList.toggle("dark-theme", isLight);

    themeToggle.textContent = isLight ? "🌙" : "☀️";
    localStorage.setItem("theme", isLight ? "dark" : "light");
  });
});