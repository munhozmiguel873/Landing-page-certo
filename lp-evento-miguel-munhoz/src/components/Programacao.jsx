import { evento } from '../data/evento.js'

function Programacao() {
  return (
    <section id="programacao" className="bg-fundo px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-primaria">Programação</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {evento.programacao.map((item) => (
            <li key={`${item.dia}-${item.horario}-${item.atividade}`} className="rounded-xl bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-destaque">
                {item.dia} · {item.horario}
              </p>
              <p className="mt-2 font-medium text-stone-800">{item.atividade}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Programacao
