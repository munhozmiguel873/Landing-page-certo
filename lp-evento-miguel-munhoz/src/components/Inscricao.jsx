import { useState } from 'react'
import { evento } from '../data/evento.js'

function Inscricao() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [ingresso, setIngresso] = useState(evento.ingressos[0].nome)
  const [enviado, setEnviado] = useState(false)

  function enviar(e) {
    e.preventDefault()
    setEnviado(true)
  }

  if (enviado) {
    return (
      <section id="inscricao" className="bg-fundo px-4 py-14">
        <div className="mx-auto max-w-xl rounded-xl bg-white p-8 text-center shadow-sm">
          <h2 className="text-3xl font-bold text-primaria">Inscrição confirmada</h2>
          <p role="status" className="mt-4 text-lg text-stone-700">
            Valeu, {nome}! Garantimos seu ingresso <strong>{ingresso}</strong>. Enviamos os detalhes para {email}.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="inscricao" className="bg-fundo px-4 py-14">
      <div className="mx-auto max-w-xl">
        <h2 className="text-3xl font-bold text-primaria">Garanta seu ingresso</h2>
        <form onSubmit={enviar} className="mt-6 rounded-xl bg-white p-6 shadow-sm">
          <label className="block font-semibold text-stone-800">
            Nome
            <input
              type="text"
              autoComplete="name"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome completo"
              className="mt-2 block min-h-11 w-full rounded-lg border border-stone-300 px-3 py-2 font-normal"
            />
          </label>
          <label className="mt-4 block font-semibold text-stone-800">
            E-mail
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="voce@exemplo.com"
              className="mt-2 block min-h-11 w-full rounded-lg border border-stone-300 px-3 py-2 font-normal"
            />
          </label>
          <label className="mt-4 block font-semibold text-stone-800">
            Tipo de ingresso
            <select
              value={ingresso}
              onChange={(e) => setIngresso(e.target.value)}
              className="mt-2 block min-h-11 w-full rounded-lg border border-stone-300 bg-white px-3 py-2 font-normal"
            >
              {evento.ingressos.map((item) => (
                <option key={item.nome} value={item.nome}>
                  {item.nome} — {item.preco}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="mt-6 inline-block min-h-11 w-full rounded-lg bg-primaria px-6 py-3 font-bold text-white hover:bg-red-700"
          >
            Confirmar inscrição
          </button>
        </form>
      </div>
    </section>
  )
}

export default Inscricao
