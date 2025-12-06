const texts = [
    "Backend Developer",
    "Web Developer",
    "Software Developer",
    "Low-Level Programmer"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;     // Velocidade de escrever
const deletingSpeed = 50;    // Velocidade de apagar
const pauseBetween = 1500;   // Pausa quando completa a palavra

function typeEffect()
{

    const element = document.getElementById("typewriter");
    const currentText = texts[index];

    if (!isDeleting)
    {
        element.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length)
        {
            isDeleting = true;
            setTimeout(typeEffect, pauseBetween);
            return;
        }
    }
    else
    {
        element.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    
        if (charIndex === 0)
        {
            isDeleting = false;
            index = (index + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);