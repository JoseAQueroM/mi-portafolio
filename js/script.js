window.addEventListener('beforeunload', function(e) {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    
  });

  
  
const nameId = document.getElementById('nameId');
let texto = 'Jose Quero';

const nameLetras = (elemento, texto , i = 0) => {
    elemento.textContent += texto[i];

    if( i === texto.length - 1) {

        return setTimeout(() => {
            return;

        }, 2000);
        
    }

    setTimeout(() => {
        
        nameLetras(nameId, texto, i + 1);

    }, 100);
}

nameLetras(nameId,texto);

document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar-Links');
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function updateActiveNav() {
    const navButtons = document.querySelectorAll('.navbar-Button');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    navButtons.forEach(button => {
        const targetId = button.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection && 
            targetSection.offsetTop <= scrollPosition &&
            targetSection.offsetTop + targetSection.offsetHeight > scrollPosition) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav(); 

