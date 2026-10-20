import { evento } from '../data/evento.js'

function Sobre() {
  return (
    <section id="sobre" className="bg-white px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-primaria">Sobre o festival</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-stone-700">{evento.sobre}</p>
        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          {evento.numeros.map((item) => (
            <div key={item.rotulo} className="rounded-xl bg-fundo p-6 text-center">
              <dt className="order-2 mt-1 text-sm font-medium text-stone-600">{item.rotulo}</dt>
              <dd className="order-1 text-4xl font-extrabold text-destaque">{item.valor}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default Sobre
