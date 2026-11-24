import { useState } from "react";
import { evento } from "../data/evento.js";

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState("");

  async function ativarLembrete() {
    // 1. Se o navegador não tiver 'Notification' em window,
    //    mostre a mensagem "Este navegador não aceita notificações." e pare (return)
    if (!("Notification" in window)) {
      setMensagem("Este navegador não aceita notificações.");
      return;
    }

    // 2. Peça a permissão e guarde a resposta numa constante
    const permissao = await Notification.requestPermission();

    // 3. Se a resposta for diferente de 'granted',
    //    mostre "Você não permitiu as notificações." e pare
    if (permissao !== "granted") {
      setMensagem("Você não permitiu as notificações.");
      return;
    }

    // 4. Espere o Service Worker ficar pronto e guarde em 'registro'
    const registro = await navigator.serviceWorker.ready;

    // 5. Mostre a notificação com registro.showNotification(...)
    await registro.showNotification(evento.nome, {
      body: "Lembrete: o festival começa em 4 de junho de 2027. Não perca!",
      icon: "/icone-192.png",
    });

    // 6. Mostre na tela a mensagem "Lembrete ativado!"
    setMensagem("Lembrete ativado!");
  }

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={ativarLembrete}
        className="inline-block min-h-11 rounded-lg bg-destaque px-6 py-3 font-bold text-white hover:bg-green-800"
      >
        Me lembre do evento
      </button>
      {mensagem && (
        <p role="status" className="mt-2 text-stone-700">
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default BotaoLembrete;
