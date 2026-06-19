/*===== Resize Navbar on Scroll =====*/
var navbar = document.querySelector(".navbar");
window.onscroll = () => {
    window.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

/*===== nav toggler =====*/
const navMenu = document.querySelector(".menu");
const navToggle = document.querySelector(".menu-btn");

if(navToggle)
{
    navToggle.addEventListener("click", () =>
    {
        // CAMBIO: Ahora usa 'open' para coincidir perfectamente con tu CSS (.menu.open)
        navMenu.classList.toggle("open"); 
    })
}

// closing menu
const navLink = document.querySelectorAll(".nav-link");
function linkAction()
{
    const navMenu = document.querySelector(".menu");
    navMenu.classList.remove("open"); // CAMBIO: También limpiamos la clase 'open' aquí
}
navLink.forEach(n => n.addEventListener("click", linkAction));


// CORRECCIÓN: Seleccionamos correctamente las secciones de la página por su etiqueta
const sections = document.querySelectorAll("section"); 

function scrollActive()
{
    // CORRECCIÓN: Cambiado de window,pageYOffset a window.scrollY (más moderno y sin comas)
    const scrollY = window.scrollY; 
    
    // CORRECCIÓN: Cambiado de una coma por un punto para recorrer el arreglo
    sections.forEach(current => { 
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id'); // CORRECCIÓN: Añadido const
        
        // Evitamos errores si alguna sección de tu HTML no llega a tener un atributo id
        if (!sectionId) return; 

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.links a[href*=' + sectionId + ']')?.classList.add('active');
        }
        else
        {
            document.querySelector('.links a[href*=' + sectionId + ']')?.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', scrollActive);