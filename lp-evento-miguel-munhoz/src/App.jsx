import Cabecalho from './components/Cabecalho.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Programacao from './components/Programacao.jsx'
import Atracoes from './components/Atracoes.jsx'
import Inscricao from './components/Inscricao.jsx'
import Rodape from './components/Rodape.jsx'
import PerguntasFrequentes from './components/PerguntasFrequentes.jsx'
import Grafico from './components/Grafico.jsx'

function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-50 rounded bg-white px-4 py-3 font-bold text-stone-900 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <Cabecalho />
      <main id="conteudo" tabIndex="-1">
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <PerguntasFrequentes />
        <Grafico />
        <Inscricao />
      </main>
      <Rodape />
    </>
  )
}

export default App

