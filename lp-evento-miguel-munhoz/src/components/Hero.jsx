import { evento } from "../data/evento.js";
import BotaoLembrete from "./BotaoLembrete.jsx";

function Hero() {
  return (
    <section className="bg-fundo px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-primaria sm:text-5xl">
          {evento.nome}
        </h1>
        <p className="mt-4 text-lg font-medium text-stone-700">
          {evento.slogan}
        </p>
        <p className="mt-2 font-semibold text-stone-800">{evento.data}</p>
        <p className="mt-1 text-stone-700">{evento.local}</p>
        <a
          href="#inscricao"
          className="mt-8 inline-block min-h-11 content-center rounded-lg bg-primaria px-8 py-3 font-bold text-white hover:bg-red-700"
        >
          Quero participar
        </a>
        <BotaoLembrete />
      </div>
    </section>
  );
}

export default Hero;
