# EcoDecor - Sustainable Interior Design

## About the Project
Landing page institucional desenvolvida como teste técnico para a posição de Desenvolvedor Front-End Sênior. O projeto simula a presença digital de uma empresa de decoração ecológica e sustentável, entregando código limpo, organizado e semanticamente correto. O foco principal da implementação está na performance, acessibilidade (a11y) e interatividade utilizando tecnologias nativas, sem dependência de bibliotecas externas ou frameworks.

## Features
* **Semantic HTML5:** Estruturação de dados otimizada para SEO e leitores de tela.
* **Modern CSS3:** Layouts construídos com Flexbox e CSS Grid, variáveis nativas (Custom Properties) e design totalmente responsivo (Mobile First).
* **Vanilla JavaScript:** Lógica de interface e manipulação do DOM.
* **Accessibility (a11y):** Implementação de atributos ARIA, estados de `:focus-visible` adequados e controle de navegação por teclado (suporte a `Tab` e `Enter` em elementos interativos).
* **Performance:** Animações baseadas em CSS ativadas via `IntersectionObserver API`, garantindo fluidez sem sobrecarregar a thread principal.
* **Dynamic Filtering:** Sistema de filtragem de portfólio no lado do cliente com transições visuais.
* **Inline Form Validation:** Validação de formulário em tempo real utilizando eventos `blur` e `input` para melhoria de UX.
* **Native Modals:** Utilização da tag `<dialog>` para exibição de detalhes dos projetos.

## Technologies Used
* HTML5
* CSS3
* JavaScript (ES6+)

## Project Structure
```text
ecodecor/
├── index.html
├── about.html
├── css/
│   └── styles.css
├── js/
│   └── scripts.js
└── README.md

How to Run the Project

Por se tratar de um projeto puramente estático (Client-side), não há necessidade de processos de build ou instalação de dependências via Node.js.

    Faça o Clone do repositório:

Bash

git clone <your-repository-url>

    Navegue até o diretório do projeto:

Bash

cd ecodecor

    Abra o arquivo index.html diretamente em seu navegador web. Alternativamente, utilize uma extensão como o Live Server no VS Code para uma experiência de desenvolvimento com hot-reload.
