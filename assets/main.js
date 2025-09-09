 // Animação de aparecimento suave ao rolar a página
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            function checkFade() {
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.classList.add('visible');
                    }
                });
            }
            
            // Verificar ao carregar e ao rolar
            checkFade();
            window.addEventListener('scroll', checkFade);
            
            // Animação para o botão de call-to-action
            const ctaButton = document.querySelector('.btn-morski');
            if (ctaButton) {
                setInterval(() => {
                    ctaButton.classList.toggle('pulse');
                }, 4000);
            }
        });