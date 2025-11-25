
        // Mensagem de boas-vindas dinâmica
        const campoNome = document.querySelector("#nomeUsuario");
        const mensagemBoasVindas = document.querySelector("#mensagemBoasVindas");

        campoNome.oninput = function() {
            if (campoNome.value.trim() !== "") {
                mensagemBoasVindas.innerHTML = "Olá, <strong>" + campoNome.value + "</strong>! Seja bem-vindo(a) ao Crepe do Lula! 🎉";
                mensagemBoasVindas.parentElement.style.display = "block";
            } else {
                mensagemBoasVindas.parentElement.style.display = "none";
            }
        };

        // Manipulação do formulário
        const form = document.getElementById("formContato");
        
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const nome = document.getElementById("nomeUsuario").value;
            const telefone = document.getElementById("telefone").value;
            const tipoPedido = document.getElementById("tipoPedido").value;
            const mensagem = document.getElementById("mensagem").value;

            if (!nome.trim() || !telefone.trim() || !tipoPedido.trim() || !mensagem.trim()) {
                alert("Por favor, preencha todos os campos obrigatórios.");
                return;
            }

            // Criar mensagem para WhatsApp
            const mensagemWhatsApp = `Olá! Meu nome é ${nome}.%0A%0A` +
                `*Tipo:* ${tipoPedido}%0A` +
                `*Telefone:* ${telefone}%0A%0A` +
                `*Mensagem:*%0A${mensagem}`;
            
            // Redirecionar para WhatsApp
            window.open(`https://wa.me/5561998824792?text=${mensagemWhatsApp}`, '_blank');
            
            
            form.reset();
            mensagemBoasVindas.parentElement.style.display = "none";
            
            
            alert("Redirecionando para o WhatsApp...");
        });

        
        const telefoneInput = document.getElementById("telefone");
        telefoneInput.addEventListener("input", function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            
            if (value.length > 6) {
                value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/^(\d*)/, '($1');
            }
            
            e.target.value = value;
        });
    
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

    