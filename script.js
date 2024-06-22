const h2 = document.createElement("h2");
h2.textContent = "Fathi Mohamed Bille";
document.querySelector("body").appendChild(h2);
{
document.body.style.backgroundcolor=color;
}
{
    alert(message);
}
{
    const newParagraph =document.createElement("p");
    newParagraph.textContent=text;
    document.body.appendChild(newParagraph);
}
document.addEventListener('DOMContentLoaded',
     function() { 
        const menuToggle = document.querySelector('.menu-toggle');
         const nav = document.querySelector('nav ul'); 
         menuToggle.addEventListener('click', function() { 
            nav.classList.toggle('open'); }); });