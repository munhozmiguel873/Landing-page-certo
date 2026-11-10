import { evento } from '../data/evento.js'

function Cabecalho() {
  return (
    <header className="bg-primaria text-white">
      <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3">
        <p className="text-lg font-bold">{evento.nome}</p>
        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap gap-4 text-sm font-semibold">
            <li><a className="inline-block min-h-11 content-center hover:underline" href="#sobre">Sobre</a></li>
            <li><a className="inline-block min-h-11 content-center hover:underline" href="#programacao">Programação</a></li>
            <li><a className="inline-block min-h-11 content-center hover:underline" href="#atracoes">Atrações</a></li>
            <li><a className="inline-block min-h-11 content-center hover:underline" href="#duvidas">Dúvidas</a></li>
            <li><a className="inline-block min-h-11 content-center hover:underline" href="#inscricao">Inscrição</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Cabecalho
