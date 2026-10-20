**Atividade — Landing page de evento em React** 

**PEND — Programação Front-End · Encontro 12 · 20/10/2026 · Individual** 

**O desafio** 

Uma produtora da região vai lançar um evento e precisa de uma **landing page**: uma página única que apresenta o evento e convence o visitante a garantir o ingresso. 

Você vai construir essa página **sozinho**, em React com Vite e Tailwind CSS. Não é trabalho em grupo: a landing page é sua, o repositório é seu e o código é seu. 

Na próxima aula (27/10), vamos **auditar a acessibilidade** desta mesma página com o Lighthouse. Por isso ela precisa estar funcionando e no GitHub até o fim de hoje. 

**Escolha o seu tema** 

O conteúdo de cada evento está no arquivo **04-briefings-temas.md** : textos, datas, programação, atrações, ingressos e sugestão de cores. Você não precisa inventar texto, só construir a página. 

| Tema  | Evento |
| ----- | ----- |
| A  | **Festival Som da Alta Paulista** — música independente |
| B  | **GameJam OC 48h** — maratona de criação de jogos |
| C  | **Corrida Noturna OC** — corrida de rua de 5 km e 10 km |
| D  | **Festival Sabores da Alta Paulista** — gastronomia regional |

Combinado: **o colega do lado não pode ter o mesmo tema que você.**  
Quem fez a atividade de reforço do **DevFest OC** (aquela de HTML e CSS) pode usar esse evento como tema, com o mesmo conteúdo, agora em React. 

**Seções obrigatórias** 

A página precisa ter estas sete seções, nesta ordem, **cada uma em um componente separado**: 

| \#  | Seção  | O que precisa ter |
| :---: | ----- | ----- |
| 1  | **Cabeçalho**  | Nome do evento e menu com links que levam até as seções da página |
| 2  | **Hero** | Nome do evento (o único \<h1\> da página), slogan, data, local e um botão que leva até a inscrição |
| 3  | **Sobre** | Texto de apresentação e os três números de destaque do briefing, gerados com map |
| 4  | **Programação**  | Lista de horários e atividades, gerada com map a partir de um array |
| 5  | **Atrações** | Um cartão para cada atração. O cartão é um **componente próprio que recebe props**, usado dentro de um map |
| 6  | **Inscrição** | Formulário **controlado** ( useState ) com nome, e-mail e tipo de ingresso ( \<select\> com as opções do briefing). Ao enviar, o formulário some e aparece uma mensagem de confirmação com o nome da pessoa e o ingresso escolhido |
| 7  | **Rodapé**  | Nome do evento, local e a frase "Evento fictício criado para fins didáticos" |

**Estrutura do projeto** 

Esta é a estrutura esperada. O conteúdo de cada arquivo é com você.  
lp-evento-seunome/ 

index.html lang="pt-BR" e título do evento 

vite.config.js plugin do Tailwind 

src/ 

index.css @import "tailwindcss" \+ @theme com as cores do evento main.jsx 

App.jsx só importa e empilha as seções 

data/ 

evento.js dados do evento e os arrays (programação, atrações, ingres components/ 

Cabecalho.jsx 

Hero.jsx 

Sobre.jsx 

Programacao.jsx 

Atracoes.jsx 

CartaoAtracao.jsx recebe props 

Inscricao.jsx useState 

Rodape.jsx 

O App.jsx final fica mais ou menos assim, e **não deve ter mais nada além disso**: 

// importe aqui os sete componentes de seção 

function App() { 

return ( 

\<\> 

{/\* Cabecalho \*/} 

\<main\> 

{/\* Hero, Sobre, Programacao, Atracoes, Inscricao \*/} 

\</main\> 

{/\* Rodape \*/} 

\</\> 

) 

} 

export default App  
**Ordem sugerida de trabalho** 

Faça um commit ao fim de cada etapa. 

**Etapa 1 — Projeto no ar.** Crie o projeto, instale o Tailwind, defina as cores do evento no @theme e faça um título aparecer estilizado. *(Guia, seções 1 e 2\)* 

**Etapa 2 — Esqueleto.** Crie os sete componentes, cada um retornando por enquanto só um \<section\> com um \<h2\> e o nome da seção. Importe todos no App.jsx . A página deve mostrar os sete títulos, um embaixo do outro. *(Guia, seção 3\)* 

**Etapa 3 — Seções estáticas.** Cabeçalho, Hero e Rodapé com o conteúdo real e estilizados. *(Guia, seções 8 e 9\)* 

**Etapa 4 — Dados e listas.** Crie o data/evento.js com os arrays do seu briefing. Monte Sobre, Programação e Atrações com map , e o CartaoAtracao com props. *(Guia, seções 4, 5 e 6\)* 

**Etapa 5 — Inscrição.** Formulário controlado com mensagem de confirmação. *(Guia, seção 7\)* 

**Etapa 6 — Revisão no celular.** Abra no modo responsivo (F12) ou no Mobile Simulator, em 360px. Nada pode estourar a largura da tela. Passe pelo checklist de acessibilidade do guia (seção 10). Commit final e push . 

**Checklist de entrega** 

Projeto criado com Vite \+ React, com Tailwind CSS v4 funcionando 

Cores do evento definidas com @theme e usadas nas classes 

Sete seções, cada uma em um componente próprio, importadas no App.jsx Dados em data/evento.js ; nenhuma lista escrita "na mão", item por item, no JSX CartaoAtracao recebendo props 

Formulário controlado mostrando a mensagem de confirmação com nome e ingresso Menu do cabeçalho levando até as seções 

Página legível e sem rolagem horizontal em 360px 

Checklist de acessibilidade do guia conferido 

Repositório lp-evento-seunome no **seu** GitHub, com o último commit enviado  
**Terminou antes? Desafios extras** 

Escolha um ou mais: 

1\. **Menu para celular.** Em telas pequenas, esconda os links e mostre um botão "Menu" que abre e fecha a lista com useState . 

2\. **Perguntas frequentes.** Crie uma seção com as perguntas do briefing. Cada pergunta é um botão; ao clicar, a resposta aparece ou some. 

3\. **Validação.** Antes de mostrar a confirmação, verifique se o nome tem pelo menos 3 letras e mostre uma mensagem de erro se não tiver. 

4\. **Total do pedido.** Acrescente um campo de quantidade e mostre o valor total do ingresso escolhido na mensagem de confirmação. 

**Ticket de saída (individual, no fim da aula)** 

Responda em uma frase cada: 

1\. Qual é a diferença entre um componente que recebe **props** e um que usa **useState** ? Dê um exemplo da sua página para cada um. 

2\. Se amanhã o evento ganhar uma quinta atração, quais arquivos você precisa mudar?