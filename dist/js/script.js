window.addEventListener('DOMContentLoaded', function() {
    const modals = () => {
        function bindModal(trigger, modal, close) {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                modal.style.display = 'block';
                modal.classList.add('animated', 'fadeIn');
                document.body.style.overflow = 'hidden';
            });
            close.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            });
        }
        const callMe = document.querySelector('.nav .nav__account'),
            modalMe = document.querySelector('.login'),
            closeMe = document.querySelector('.login .login__close');
            
    
        bindModal(callMe, modalMe, closeMe);
        
    
    };
    modals();
});