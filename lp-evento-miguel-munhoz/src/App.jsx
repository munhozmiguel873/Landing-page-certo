import Cabecalho from './components/Cabecalho.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Programacao from './components/Programacao.jsx'
import Atracoes from './components/Atracoes.jsx'
import Inscricao from './components/Inscricao.jsx'
import Rodape from './components/Rodape.jsx'

function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <Inscricao />
      </main>
      <Rodape />
    </>
  )
}

export default App

