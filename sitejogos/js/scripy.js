document.addEventListener('DOMContentLoaded', () => {
    /* btns carrocel*/
    const slider = document.querySelectorAll('.image');
    const btnprev = document.getElementById('btnprev');
    const btnnext = document.getElementById('btnnext');

    if (slider.length && btnprev && btnnext) {
        let slideAtual = 0;

        const showSlide = () => {
            slider.forEach(item => item.classList.remove('ativo'));
            slider[slideAtual].classList.add('ativo');
        };

        btnnext.addEventListener('click', () => {
            slideAtual = (slideAtual + 1) % slider.length;
            showSlide();
        });

        btnprev.addEventListener('click', () => {
            slideAtual = (slideAtual - 1 + slider.length) % slider.length;
            showSlide();
        });
    }

    /* formulario verificações*/
    const form = document.getElementById('form-contato');
    const msgvalidacao = document.getElementById('msgvalidacao');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = document.getElementById('nome')?.value.trim() || '';
            const email = document.getElementById('email')?.value.trim() || '';
            const message = document.getElementById('message')?.value.trim() || '';

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (nome === '' || email === '' || message === '') {
                msgvalidacao.textContent = 'Preencha todos os campos!';
                msgvalidacao.style.color = 'red';
                return;
            }

            if (!emailRegex.test(email)) {
                msgvalidacao.textContent = 'Insira um email válido!';
                msgvalidacao.style.color = 'red';
                return;
            }

            msgvalidacao.textContent = 'Mensagem enviada com sucesso!';
            msgvalidacao.style.color = 'green';
            form.reset();
        });
    }

    /* voltar ao topo btn*/
    const voltarTopo = document.getElementById('voltarTopo');
    if (voltarTopo) {
        voltarTopo.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
