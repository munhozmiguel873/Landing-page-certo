import { evento } from '../data/evento.js'

function Rodape() {
  return (
    <footer className="bg-primaria px-4 py-8 text-white">
      <div className="mx-auto max-w-6xl text-center sm:text-left">
        <p className="text-lg font-bold">{evento.nome}</p>
        <p className="mt-1">{evento.local}</p>
      </div>
    </footer>
  )
}

export default Rodape
