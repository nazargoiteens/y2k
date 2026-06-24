const glow = document.querySelector('.glow');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let posX = mouseX;
let posY = mouseY;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    posX += (mouseX - posX) * 0.05;
    posY += (mouseY - posY) * 0.05;

    glow.style.left = `${posX}px`;
    glow.style.top = `${posY}px`;

    requestAnimationFrame(animate);
}

animate();