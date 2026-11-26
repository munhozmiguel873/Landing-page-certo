# Festival Sabores da Alta Paulista

Landing page responsiva desenvolvida para apresentar o Festival Sabores da Alta Paulista, divulgando informações sobre atrações, programação, ingressos e perguntas frequentes.

## Demonstração

- Site publicado: https://landing-page-miguel-rho.vercel.app/

## Sobre o projeto

A aplicação apresenta os principais dados do evento em uma interface moderna e organizada:

- Informações sobre o festival
- Calendário e horários da programação
- Participantes e atrações
- Opções de ingresso
- Perguntas frequentes
- Dados resumidos do evento
- Navegação adaptada para desktop e dispositivos móveis

## Tecnologias utilizadas

- React 19
- Vite 8
- Tailwind CSS 4
- JavaScript
- Oxlint

## Como executar

### Pré-requisitos

- Node.js
- npm

### Instalação

```bash
npm install
```

### Servidor de desenvolvimento

```bash
npm run dev
```

Acesse a URL exibida no terminal, normalmente:

```text
http://localhost:5173
```

## Comandos disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Gera os arquivos de produção
npm run preview  # Visualiza a versão de produção
npm run lint     # Executa a análise do código
```

## Estrutura do projeto

```text
lp-evento-miguel-munhoz/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Acessibilidade

O projeto possui recursos voltados à acessibilidade, como:

- Navegação pelo teclado
- Link para pular diretamente ao conteúdo principal
- Estrutura semântica
- Contraste de cores adequado
- Suporte a leitores de tela

As verificações realizadas estão documentadas em [ACESSIBILIDADE.md](./ACESSIBILIDADE.md).

## Lighthouse

| Categoria | Nota |
| --- | ---: |
| Performance | 100 |
| Acessibilidade | 100 |
| SEO | 100 |

## Build de produção

```bash
npm run build
```

Os arquivos compilados são gerados na pasta `dist/`.