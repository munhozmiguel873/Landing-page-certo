import { evento } from '../data/evento.js'
import CartaoAtracao from './CartaoAtracao.jsx'

function Atracoes() {
  return (
    <section id="atracoes" className="bg-white px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-primaria">Cozinheiros e produtores</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {evento.atracoes.map((atracao) => (
            <CartaoAtracao
              key={atracao.nome}
              nome={atracao.nome}
              especialidade={atracao.especialidade}
              descricao={atracao.descricao}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Atracoes
