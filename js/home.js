
        // ========== BOTÃO VOLTAR AO TOPO ==========
        const btnTopo = document.getElementById('btnTopo');
        if (btnTopo) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 400) {
                    btnTopo.classList.add('show');
                } else {
                    btnTopo.classList.remove('show');
                }
            });

            btnTopo.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // ========== MENU HAMBÚRGUER ==========
        const menuToggle = document.querySelector('.menu-toggle');
        const headerEl = document.querySelector('header');

        if (menuToggle && headerEl) {
            menuToggle.addEventListener('click', () => {
                const isOpen = headerEl.classList.toggle('nav-open');
                menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });
        }

    