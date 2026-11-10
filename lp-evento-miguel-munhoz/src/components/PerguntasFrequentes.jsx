import { useState } from 'react'
import { evento } from '../data/evento.js'

function PerguntasFrequentes() {
  const [perguntaAberta, setPerguntaAberta] = useState(null)

  return (
    <section id="duvidas" className="bg-white px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-primaria">Perguntas frequentes</h2>
        <div className="mt-6 divide-y divide-stone-200">
          {evento.perguntasFrequentes.map((item, index) => {
            const respostaId = `resposta-faq-${index}`
            const estaAberta = perguntaAberta === index

            return (
              <article key={item.pergunta} className="py-4">
                <h3 className="text-lg font-semibold text-stone-900">
                  <button
                    type="button"
                    aria-expanded={estaAberta}
                    aria-controls={respostaId}
                    onClick={() => setPerguntaAberta(estaAberta ? null : index)}
                    className="min-h-11 w-full text-left"
                  >
                    {item.pergunta}
                  </button>
                </h3>
                <div id={respostaId} hidden={!estaAberta} className="pt-2 leading-relaxed text-stone-700">
                  {item.resposta}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PerguntasFrequentes
