# Netflix Mockup (W4D1)

Projeto front-end inspirado na interface da Netflix, construido com HTML, CSS e JavaScript puro.

## Estrutura do projeto

- `index.html`: estrutura principal da pagina.
- `style.css`: estilos visuais, responsividade e animacoes.
- `script.js`: logica dos carrosseis e efeito de revelacao das secoes.
- `assets/imgs/movies/`: imagens dos cards de filmes.

## O que foi feito

- Layout principal com barra de navegacao, secoes de filmes e rodape.
- Carrosseis de filmes com navegacao por botoes (proximo/anterior).
- Efeito de entrada suave das linhas de filmes ao rolar a pagina.
- Adaptacao responsiva para desktop, tablet e mobile.
- Rodape com links e icones sociais.

## Ajuste aplicado

Foi implementada a clicabilidade dos icones sociais no rodape:

- Facebook
- Instagram
- X (Twitter)
- YouTube

Cada icone agora esta dentro de uma tag `<a>` com:

- `href` para o perfil oficial da Netflix
- `target="_blank"` para abrir em nova aba
- `rel="noopener noreferrer"` por seguranca
- `aria-label` para acessibilidade

## Como executar

1. Abra a pasta do projeto no VS Code.
2. Abra o arquivo `index.html` no navegador (ou use a extensao Live Server).

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 5 (CDN)
- Bootstrap Icons (CDN)
