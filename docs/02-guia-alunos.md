**Guia — Landing page em React** 

**PEND — Programação Front-End · Encontro 12 · 20/10/2026** 

Este guia é para consulta durante a atividade. Os exemplos usam uma **Feira do Livro** de mentira, que não está entre os temas da atividade. A ideia é mostrar o jeito de fazer, não entregar o código do seu tema. 

**1\. Criar o projeto** 

No terminal, dentro da pasta onde vocês guardam os projetos: 

npm create vite@latest lp-evento-seunome \-- \--template react 

cd lp-evento-seunome 

npm install 

npm run dev 

Abra o endereço que aparecer (normalmente http\://localhost:5173 ). Se a página do Vite carregou, o projeto está funcionando. 

Se o instalador perguntar "Install with npm and start now?", pode responder **No** e seguir os comandos acima. 

**Limpar o que veio de exemplo** 

Apague: 

src/App.css 

tudo dentro de src/assets/ 

E deixe o src/App.jsx assim, por enquanto:  
function App() { 

return \<h1\>Minha landing page\</h1\> 

} 

export default App 

No index.html , troque lang="en" por lang="pt-BR" e coloque o nome do seu evento no \<title\> . 

**2\. Instalar o Tailwind CSS v4** 

npm install tailwindcss @tailwindcss/vite 

São **três lugares** para mexer, e só três. 

**vite.config.js** — registrar o plugin: 

import { defineConfig } from 'vite' 

import react from '@vitejs/plugin-react' 

import tailwindcss from '@tailwindcss/vite' 

export default defineConfig({ 

plugins: \[react(), tailwindcss()\], 

}) 

**src/index.css** — apague tudo o que estiver lá e deixe só: 

@import "tailwindcss"; 

**src/main.jsx** — confira se ele importa o index.css (o Vite já faz isso): import './index.css' 

**Testando** 

Troque o \<h1\> do App.jsx por:  
\<h1 className\="text-4xl font-bold text-red-600"\>Minha landing page\</h1\> 

Ficou grande, em negrito e vermelho? O Tailwind está funcionando. Se não mudou nada, pare o servidor ( Ctrl \+ C ) e rode npm run dev de novo. 

Não existe tailwind.config.js na versão 4\. Se um tutorial da internet mandar criar esse arquivo, ele é da versão 3\. 

**As cores do seu evento com @theme** 

Em vez de decorar códigos de cor, dê nomes a elas no index.css : 

@import "tailwindcss"; 

@theme { 

\--color-primaria: \#1d4ed8; 

\--color-destaque: \#f59e0b; 

\--color-fundo: \#f8fafc; 

} 

A partir daí o Tailwind cria as classes sozinho: bg-primaria , text-destaque , border-primaria , bg-fundo ... O nome depois de \--color- vira o nome da cor. 

**3\. Uma seção \= um componente** 

Uma landing page é uma pilha de seções. Em vez de escrever tudo dentro do App.jsx , cada seção vira um **arquivo próprio** dentro de src/components/ . 

src/ 

components/ 

Cabecalho.jsx 

Hero.jsx 

... 

App.jsx  
**Criando um componente** 

src/components/Hero.jsx : 

function Hero() { 

return ( 

\<section className\="bg-primaria px-4 py-20 text-white"\> 

\<h1 className\="text-4xl font-extrabold"\>Feira do Livro de Osvaldo Cruz\</h1\> \<p className\="mt-4"\>De 10 a 12 de setembro, na praça central.\</p\> 

\</section\> 

) 

} 

export default Hero 

Três regras: 

1\. O nome da função começa com **letra maiúscula** ( Hero , não hero ). 

2\. Ela **retorna JSX**: um único elemento "pai" (aqui, o \<section\> ). 

3\. No final, export default para que outros arquivos consigam usar. 

**Usando o componente no App.jsx** 

import Hero from './components/Hero' 

function App() { 

return ( 

\<main\> 

\<Hero /\> 

\</main\> 

) 

} 

export default App 

Quando houver mais seções, é só importar e empilhar na ordem em que elas aparecem na página. O App.jsx vira um "índice" da página: olhando para ele, dá para saber tudo que existe nela.  
**4\. Dados em um arquivo separado** 

Textos que se repetem em vários lugares (nome do evento, data, local) e listas (programação, atrações) ficam melhor num arquivo só de dados, como src/data/evento.js : 

export const evento \= { 

nome: 'Feira do Livro de Osvaldo Cruz', 

data: '10 a 12 de setembro', 

} 

export const autores \= \[ 

{ nome: 'Clara Nunes', genero: 'Poesia' }, 

{ nome: 'Pedro Alves', genero: 'Romance' }, 

\] 

E o componente importa só o que precisa: 

import { evento } from '../data/evento' 

function Rodape() { 

return \<footer\>{evento.nome} · {evento.data}\</footer\> 

} 

Repare no ../ : o componente está dentro de components/ , então precisa "subir uma pasta" para achar data/ . 

**5\. Listas com map** 

Para não repetir o mesmo HTML quatro vezes, guarde os itens num array e use map :  
import { autores } from '../data/evento' 

function Autores() { 

return ( 

\<ul\> 

{autores.map((autor) \=\> ( 

\<li key\={autor.nome}\> 

{autor.nome} — {autor.genero} 

\</li\> 

))} 

\</ul\> 

) 

} 

O map percorre o array e devolve um \<li\> para cada item. 

O key precisa ser **único** em cada item. Use algo que não se repete, como o nome. Esqueceu o key ? A página funciona, mas aparece um aviso vermelho no console (F12). 

**6\. Componentes com props** 

Quando um pedaço da tela se repete com **conteúdos diferentes** (um cartão para cada autor, por exemplo), ele vira um componente que recebe **props**: 

src/components/CartaoAutor.jsx : 

function CartaoAutor({ nome, genero }) { 

return ( 

\<article className\="rounded-xl bg-white p-6 shadow"\> 

\<h3 className\="text-xl font-bold"\>{nome}\</h3\> 

\<p\>{genero}\</p\> 

\</article\> 

) 

} 

export default CartaoAutor 

E quem usa passa os valores como atributos:  
{autores.map((autor) \=\> ( 

\<CartaoAutor key\={autor.nome} nome\={autor.nome} genero\={autor.genero} /\> ))} 

O cartão não sabe de onde vêm os dados. Ele só mostra o que recebe. Isso é o que permite usar o mesmo componente para qualquer autor. 

**7\. Formulário controlado** 

No formulário, o React precisa "saber" o que está escrito em cada campo. Para isso, cada campo tem seu useState :  
import { useState } from 'react' 

function Newsletter() { 

const \[email, setEmail\] \= useState('') 

const \[enviado, setEnviado\] \= useState(false) 

function enviar(e) { 

e.preventDefault() // impede a página de recarregar 

setEnviado(true) 

} 

if (enviado) { 

return \<p role\="status"\>Pronto\! Vamos avisar {email} sobre a próxima feira.\</p\> } 

return ( 

\<form onSubmit\={enviar}\> 

\<label\> 

E-mail 

\<input 

type\="email" 

required 

value\={email} 

onChange\={(e) \=\> setEmail(e.target.value)} 

/\> 

\</label\> 

\<button type\="submit"\>Quero receber\</button\> 

\</form\> 

) 

} 

value \+ onChange \= campo **controlado**: o que aparece na tela é sempre o valor do estado. e.preventDefault() impede o comportamento padrão do formulário, que é recarregar a página. 

Depois do envio, o componente mostra outra coisa só trocando o estado enviado . Um \<select\> funciona igual: value \+ onChange , e as opções podem vir de um array com map .  
**8\. Responsivo com Tailwind (mobile-first)** 

As classes sem prefixo valem para **todas as telas**. Os prefixos sm: , md: , lg: valem **a partir** daquela largura: 

\<div className\="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"\> 

No celular: uma coluna. A partir de 640px: duas. A partir de 1024px: quatro. É a mesma lógica mobile-first do encontro 2, só que escrita na própria classe. 

| Prefixo  | A partir de |
| ----- | ----- |
| (nenhum)  | 0px |
| sm:  | 640px |
| md:  | 768px |
| lg:  | 1024px |

**9\. Navegação por âncoras** 

Para o menu levar até uma seção da mesma página, dê um id à seção e use \# no link: 

\<section id\="autores"\>...\</section\> 

\<a href\="\#autores"\>Autores\</a\> 

Para a rolagem ficar suave, acrescente no index.css : 

html { 

scroll-behavior: smooth; 

}  
**10\. Checklist de acessibilidade (desde o começo)** 

Na próxima aula vamos **auditar** a landing page de vocês com o Lighthouse. O que já começar certo hoje não vai virar correção depois: 

lang="pt-BR" no index.html 

Um único \<h1\> na página (no Hero); seções usam \<h2\> ; cartões usam \<h3\> Tags com significado: \<header\> , \<nav\> , \<main\> , \<section\> , \<footer\> (e não só \<div\> ) Toda imagem com alt descrevendo o que ela mostra (ou alt="" se for só decoração) Todo campo do formulário dentro de um \<label\> com texto 

Texto com contraste suficiente com o fundo (cinza-claro sobre branco não vale) Botões e links com área de toque confortável (pelo menos 44px de altura) 

**11\. Salvar no GitHub** 

Os notebooks são compartilhados. Por isso, configure seu nome **só neste repositório** (sem \--global ): 

git init 

git config user.name "Seu Nome" 

git config user.email "seu-email@exemplo.com" 

git add . 

git commit \-m "Primeira versão da landing page" 

Crie um repositório **vazio** na sua conta do GitHub com o nome lp-evento-seunome e siga os comandos que o GitHub mostrar para enviar ( git remote add origin ... e git push ). 

A pasta node\_modules não vai para o GitHub. O Vite já cria o .gitignore que cuida disso.