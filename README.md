Crepe do Lula
Integrantes

Cauã Cerqueira Santos – Código em HTML
Ana Maria Pontes da Fonseca Gonzatti - Criação do Projeto no Figma

Sobre o Projeto
O Crepe do Lula é um site para uma creperia artesanal localizada em frente à Universidade Católica.
Tem como objetivo apresentar o cardápio, divulgar o negócio e facilitar o contato com clientes e interessados em eventos.
Design e Tecnologias
Cores: preto, vermelho e amarelo – transmitindo energia e destaque.
Fonte: Arial (sans-serif) para boa legibilidade.
Layout: moderno, responsivo e visualmente atrativo.
Tecnologias: HTML5, CSS3, JavaScript.
Estrutura do Projeto
projeto/
├── home.html          # Página inicial
├── index.html         # Cardápio
├── eventos.html       # Sobre o Crepe
├── contato.html       # Formulário de contato
├── style.css          # Estilo principal
//├── componentes/       # Componentes reutilizáveis (NOVO)
//│   ├── header.html
//│   ├── nav.html
//│   └── footer.html
//├── js/                # Scripts JavaScript (NOVO)
//│   └── componentes.js
└── Img Figma/         # Imagens dos produtos

DIAGNÓSTICO E MELHORIAS
O que já está funcionando bem:

Design Visual Atrativo
Esquema de cores (preto, vermelho, amarelo) está bem aplicado
Identidade visual consistente em todas as páginas
Uso adequado de gradientes e sombras

Responsividade Básica
Layout se adapta a diferentes tamanhos de tela
Grid de produtos responsivo (4 colunas → 3 → 2 conforme tela)
Media queries implementadas para mobile, tablet e desktop

Interatividade JavaScript
Saudação personalizada ao digitar nome
Botão de promoções com animação
Efeitos hover nos cards de produtos
Integração com WhatsApp no formulário de contato

Conteúdo Bem Estruturado
Cardápio completo com preços
Informações de contato claras
Página sobre a empresa

- Elementos HTML que se repetem em várias páginas:

Header (Cabeçalho)
Aparece em: index.html, eventos.html, contato.html
Candidato perfeito para modularização


Footer (Rodapé)
Aparece em: index.html, eventos.html, contato.html
Candidato perfeito para modularização


Menu de Navegação
Estrutura idêntica em todas as páginas internas
Pode ser modularizado junto com o header


- Onde o layout "quebra" ou fica estranho:
Mobile (375px):
Cards de produtos muito pequenos
Texto dos nomes de crepes fica espremido
Imagens perdem qualidade visual
Solução: Aumentar tamanho mínimo dos cards em mobile


Navegação horizontal no header
Botões ficam apertados em telas pequenas
Difícil clicar em alvos pequenos
Solução: Implementar menu hamburguer para mobile

Tablet (768px):
Grid de produtos
3 colunas funcionam, mas cards poderiam ser maiores
Espaço vazio nas laterais
Solução: Ajustar largura máxima do container

Página home.html
Botões poderiam ter largura responsiva
Solução: Usar largura em % ao invés de pixels fixos

Desktop (1280px+):
Container muito largo
Em telas muito grandes, o conteúdo fica esticado
Solução: Limitar largura máxima e centralizar

Imagens dos produtos
Algumas imagens ficam pixeladas ao ampliar
Solução: Usar imagens de maior resolução

Melhorias que fariam diferença real para o usuário:
Prioridade ALTA:
Menu Hamburguer para Mobile 
Melhora drasticamente a usabilidade em celulares
Experiência mobile-first
Implementação: Item 3 da Parte 2

Modularização de Componentes 
Facilita manutenção (alterar header em um lugar atualiza tudo)
Reduz duplicação de código
Implementação: Item 2 da Parte 2

Validação de Formulário Aprimorada 
Verificar email válido
Mensagens de erro claras
Feedback visual imediato

Botão "Voltar ao Topo" 
Página do cardápio é longa
Melhora navegação
Implementação: Item 3 da Parte 2

Prioridade MÉDIA:
Busca de Produtos
Filtrar crepes por nome ou ingrediente
Útil para cardápio extenso

Galeria de Imagens
Ampliar fotos dos produtos
Modal com imagem maior

Indicador Visual de Carregamento
Ao enviar formulário
Feedback de que a ação está sendo processada

Prioridade BAIXA:
Carrinho de Compras
Para pedidos online (próximo passo)
Requer backend

Plano de Ação - Parte 2:
 Item 1: Diagnóstico completo ✅
 Item 2: Modularizar header, nav e footer
 Item 3: Implementar menu hamburguer + botão voltar ao topo
 Item 4: Consolidar acessibilidade (semântica, alt, labels, etc.)


Etapas Realizadas
Parte 1:
08/10/2025 - Ideia do site e inicio do projeto no Figma / Cauã Cerqueira, Ana Maria
08/10/2025 - Criação do Protótipo no Figma / Ana Maria
12/10/2025 - Inicio do código / Cauã Cerqueira
13/10/2025 - Upload de arquivos para o github / Cauã Cerqueira
14/10/2025 - Upload de arquivos finais para o github / Ana Maria

Parte 2:
15/11/2025 - Diagnóstico e análise do projeto / Cauã Cerqueira, Ana Maria


Protótipo no Figma
https://www.figma.com/proto/LsKbokwt5YboST8Qgy4czy/Projeto-integrador-dfe?node-id=5-2&p=f&t=UIkYcFYnKiQD14c6-1&scaling=scale-down&content-scaling=fixed&page-id=3%3A15&starting-point-node-id=5%3A2
Nota: No protótipo tem 2 páginas (Crepes do Lula e Confeitaria). Selecionar a página do Crepe do Lula para ver o protótipo do figma.

Próximos Passos
 Modularizar componentes (header, nav, footer)
 Implementar menu hamburguer para mobile
 Adicionar botão "voltar ao topo"
 Melhorar acessibilidade (WCAG)
 Adicionar sistema de pedidos online
 Integrar com API de pagamento

Contato
Telefone: (61) 99882-4792
Instagram: @crepedolula_



Melhorias implementadas na Parte 2
- Interatividade:
  - Botão “voltar ao topo” nas páginas com conteúdo mais longo (cardápio, contato, sobre), facilitando a navegação em telas menores.
  - Menu hambúrguer no mobile, deixando a navegação mais limpa em celulares e tablets.
  - Validação básica no formulário de contato (campos obrigatórios não podem ficar vazios antes de abrir o WhatsApp).
  - Mensagens dinâmicas de boas-vindas e efeitos de hover nos cards de produtos e cartões de contato.

- Acessibilidade:
  - Inclusão de link “Pular para o conteúdo principal” no topo de todas as páginas.
  - Uso de <main> com id para o conteúdo principal.
  - Manutenção de tags semânticas (header, nav, main, section, footer).
  - Garantia de que botões e links são acessíveis via teclado, com foco visível (estilos :focus).
  - Revisão de textos alternativos (alt) nas imagens e de labels associados aos campos de formulário.

- Responsividade:
  - Ajustes no comportamento do menu em telas menores (menu hambúrguer).
  - Manutenção do grid responsivo dos produtos e dos cartões de contato.
  - Verificação do layout em 375px (mobile), 768px (tablet) e 1280px/1920px (desktop) usando o DevTools.

- Integrações externas:
  - Integração com WhatsApp no formulário de contato (mensagem automática com dados do cliente).
  - Links diretos para o Instagram oficial do Crepe do Lula.
