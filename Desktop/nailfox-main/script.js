// прокрутка для меню
document.addEventListener('DOMContentLoaded', function() {
    
    let menuLinks = document.querySelectorAll('nav a');
    
    for(let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', function(e) {
            e.preventDefault();
            
            let href = this.getAttribute('href');
            
            if(href.startsWith('#')) {
                
                let targetElement = document.querySelector(href);
                
                if(targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
    
});