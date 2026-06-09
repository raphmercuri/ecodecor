document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('primary-navigation');

    if (mobileMenu && navbar) {
        mobileMenu.addEventListener('click', () => {
            const isExpanded = mobileMenu.getAttribute('aria-expanded') === 'true';
            mobileMenu.setAttribute('aria-expanded', !isExpanded);
            navbar.classList.toggle('active');
            mobileMenu.classList.toggle('is-active');
            const bars = mobileMenu.querySelectorAll('.bar');
            if (mobileMenu.classList.contains('is-active')) {
                bars[0].style.transform = 'translateY(8px) rotate(45deg)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
            } else {
                bars[0].style.transform = 'translateY(0) rotate(0)';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'translateY(0) rotate(0)';
            }
        });
    }
    const whatsappBtn = document.getElementById('whatsapp-demo');
    const toastNotification = document.getElementById('toast-notification');

    if (whatsappBtn && toastNotification) {
        whatsappBtn.addEventListener('click', (event) => {
            event.preventDefault();
            toastNotification.classList.add('show');
            setTimeout(() => {
                toastNotification.classList.remove('show');
            }, 3500);
        });
    }
    const projectsData = {
        '1': {
            title: 'Projeto Sala de Estar Orgânica',
            description: 'Uso predominante de madeira de demolição, tecidos naturais como linho e algodão orgânico, e iluminação natural maximizada.',
            imgSrc: 'https://i.ibb.co/RGDFr5Lx/saladeestarorganica.jpg'
        },
        '2': {
            title: 'Projeto Escritório Verde',
            description: 'Integração de design biofílico corporativo, paredes verdes para melhoria da qualidade do ar e mobiliário ergonômico feito de plásticos reciclados do oceano.',
            imgSrc: 'https://i.ibb.co/V6NV1Dm/escritorioverde.jpg'
        },
        '3': {
            title: 'Projeto Quarto Minimalista',
            description: 'Foco na redução de excessos. Utilização de tintas ecológicas sem compostos orgânicos voláteis (VOCs) e piso de bambu de rápido crescimento.',
            imgSrc: 'https://i.ibb.co/HLYJWv1k/quartominimalista.jpg'
        },
        '4': {
            title: 'Projeto Varanda Botânica',
            description: 'Criação de um micro-clima utilizando espécies nativas, sistema de captação de água da chuva para irrigação e deck de madeira certificada FSC.',
            imgSrc: 'https://i.ibb.co/nM9ZXr0b/varanda-botanica.jpg'
        },
        '5': {
            title: 'Design de Interiores Eco',
            description: 'Reforma completa de apartamento focado em eficiência energética, instalando vidros duplos termicamente eficientes e iluminação 100% LED automatizada.',
            imgSrc: 'https://i.ibb.co/sdWC5J1g/interiores.jpg'
        },
        '6': {
            title: 'Consultoria Sustentável',
            description: 'Análise de ciclo de vida dos materiais existentes no local, propondo rotas de descarte consciente e fornecedores locais para reduzir a pegada de carbono do transporte.',
            imgSrc: 'https://i.ibb.co/wqpzQZd/consultoria.jpg'
        }
    };

    const modal = document.getElementById('project-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImage = document.getElementById('modal-image');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    const openModal = (id) => {
        const data = projectsData[id];
        if (data && modal) {
            modalTitle.textContent = data.title;
            modalDescription.textContent = data.description;
            modalImage.src = data.imgSrc;
            modalImage.alt = `Fotografia do projeto ${data.title}`;
            modal.showModal();
        }
    };

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            openModal(item.getAttribute('data-id'));
        });
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                openModal(item.getAttribute('data-id'));
            }
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.close();
        });
    }
    if (modal) {
        modal.addEventListener('click', (e) => {
            const dialogDimensions = modal.getBoundingClientRect();
            if (
                e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom
            ) {
                modal.close();
            }
        });
    }
});
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-section');
    revealElements.forEach(el => {
        scrollObserver.observe(el);
    });
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItemsDOM = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItemsDOM.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === itemCategory) {
                    item.classList.remove('hidden');
                    setTimeout(() => {
                        item.classList.remove('fade-out');
                    }, 50);
                } else {
                    item.classList.add('fade-out');
                    setTimeout(() => {
                        item.classList.add('hidden');
                    }, 400);
                }
            });
        });
    });

    const formInputs = document.querySelectorAll('#contact-form input, #contact-form textarea');

    const validateField = (field) => {
        const errorElement = document.getElementById(`${field.id}-error`);
        let isValid = true;
        let errorMessage = '';

        if (field.value.trim() === '') {
            isValid = false;
            errorMessage = 'Este campo é obrigatório.';
        } else if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value.trim())) {
                isValid = false;
                errorMessage = 'Insira um e-mail válido.';
            }
        }

        if (!isValid) {
            field.classList.add('invalid');
            field.classList.remove('valid');
            errorElement.textContent = errorMessage;
            errorElement.classList.add('active');
        } else {
            field.classList.remove('invalid');
            field.classList.add('valid');
            errorElement.classList.remove('active');
        }

        return isValid;
    };

    formInputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        
        input.addEventListener('input', () => {
            if (input.classList.contains('invalid')) {
                validateField(input);
            }
        });
    });

    const mainForm = document.getElementById('contact-form');
    const mainFeedback = document.getElementById('form-feedback');

    if (mainForm) {
        mainForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let isFormValid = true;

            formInputs.forEach(input => {
                if (!validateField(input)) {
                    isFormValid = false;
                }
            });

            mainFeedback.style.display = 'block';

            if (isFormValid) {
                mainFeedback.style.color = '#4CAF50';
                mainFeedback.textContent = 'Formulário enviado com sucesso.';
                mainForm.reset();
                formInputs.forEach(input => input.classList.remove('valid'));
            } else {
                mainFeedback.style.color = '#ff4d4d';
                mainFeedback.textContent = 'Verifique os erros nos campos acima.';
            }
        });
    }
const images = document.querySelectorAll('.portfolio-item img');
images.forEach(img => {
    if (img.complete) {
        img.parentElement.classList.add('loaded');
    } else {
        img.addEventListener('load', () => {
            img.parentElement.classList.add('loaded');
        });
    }
});
