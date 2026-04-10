// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Mouse parallax effect on hero visual
document.addEventListener("mousemove", parallax);
function parallax(e) {
    const visual = document.querySelector('.hero-visual');
    if(!visual) return;
    
    let w = window.innerWidth / 2;
    let h = window.innerHeight / 2;
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    
    let orb = document.querySelector('.glow-orb');
    if(orb) {
        orb.style.transform = `translate(calc(-50% + ${(mouseX - w) * 0.05}px), calc(-50% + ${(mouseY - h) * 0.05}px))`;
    }
    
    let card = document.querySelector('.main-car');
    if(card) {
        let rotateX = ((mouseY - h) / h) * 5; // max 5 deg
        let rotateY = ((mouseX - w) / w) * -5;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
}
