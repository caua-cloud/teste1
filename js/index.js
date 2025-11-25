
        // ========== DESAFIO 1: CLIQUE - Botão de Promoções ==========
        const botao = document.querySelector("#botaoPromocao");
        const titulo = document.querySelector("#tituloSite");
        
        botao.onclick = function() {
            titulo.innerHTML = "🎉 PROMOÇÕES ESPECIAIS ATIVAS! 🎉";
            titulo.style.color = "#ffcc00";
            document.body.style.backgroundColor = "#1a0000";
            
            // Alerta com informação
            alert("🔥 Promoções do dia:\n\n✨ Compre 2 crepes e ganhe 10% de desconto!\n🍹 Refrigerante grátis na compra acima de R$ 40,00!\n\nVálido até hoje!");
            
            // Volta ao normal após 5 segundos
            setTimeout(function() {
                titulo.innerHTML = "CREPE DO LULA";
                titulo.style.color = "#fff";
                document.body.style.backgroundColor = "#000";
            }, 5000);
        };

        // ========== DESAFIO 2: SAUDAÇÃO PERSONALIZADA ==========
        const campoNome = document.querySelector("#nomeUsuario");
        const mensagemBoasVindas = document.querySelector("#mensagemBoasVindas");

        campoNome.oninput = function() {
            if (campoNome.value.trim() !== "") {
                mensagemBoasVindas.innerHTML = "Olá, <strong>" + campoNome.value + "</strong>! 😊 Seja bem-vindo(a) ao Crepe do Lula! Confira nossas delícias! 🥞✨";
            } else {
                mensagemBoasVindas.innerHTML = "";
            }
        };

        // ========== DESAFIO 3: REAÇÃO AO MOVIMENTO DO MOUSE ==========
        const cards = document.querySelectorAll(".card-hover");

        cards.forEach(function(card) {
            // Quando o mouse passa por cima
            card.onmouseover = function() {
                card.style.transform = "scale(1.05)";
                card.style.border = "3px solid #ffcc00";
                card.style.boxShadow = "0 8px 20px rgba(255, 204, 0, 0.5)";
                card.style.transition = "all 0.3s ease";
            };

            // Quando o mouse sai
            card.onmouseout = function() {
                card.style.transform = "scale(1)";
                card.style.border = "none";
                card.style.boxShadow = "0 4px 6px rgba(0,0,0,0.3)";
            };
        });

        // ========== NAVEGAÇÃO SUAVE (mantida do código original) ==========
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // ========== MENU ATIVO AO SCROLL (mantido do código original) ==========
        const sections = document.querySelectorAll('.menu-section');
        const navButtons = document.querySelectorAll('.category-btn');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('href') === `#${current}`) {
                    btn.classList.add('active');
                }
            });
        });

        // ========== BÔNUS: Mensagem de boas-vindas ao carregar a página ==========
        window.onload = function() {
            setTimeout(function() {
                alert("🥞 Bem-vindo ao Crepe do Lula! 🎉\n\nExplore nosso cardápio e descubra sabores incríveis!\n\n💡 Dica: Passe o mouse sobre os produtos para vê-los em destaque!");
            }, 1000);
        };
    
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

    