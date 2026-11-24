import { useEffect, useRef } from "react";

const dados = [
  { rotulo: "Barracas", valor: 20 },
  { rotulo: "Aulas-show", valor: 9 },
  { rotulo: "Dias", valor: 3 },
];

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const maior = Math.max(...dados.map((d) => d.valor));

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 220; // a maior barra tem 220px
      const y = 20 + i * 50; // cada barra 50px abaixo da anterior

      // 1. escolha a cor da barra (use a cor do seu evento)
      ctx.fillStyle = "#dc2626";
      // 2. desenhe a barra com fillRect, começando em x = 110
      ctx.fillRect(110, y, largura, 24);

      // 3. troque a cor para escuro e escreva o rótulo em x = 10
      ctx.fillStyle = "#1c1917";
      ctx.font = "14px sans-serif";
      ctx.fillText(item.rotulo, 10, y + 16);

      // 4. escreva o valor logo depois do fim da barra
      ctx.fillText(item.valor, 110 + largura + 8, y + 16);
    });
  }, []);

  return (
    <section className="px-4 py-16">
      <h2 className="text-3xl font-bold text-primaria">Números do festival</h2>
      <canvas
        ref={canvasRef}
        width={380}
        height={170}
        role="img"
        aria-label="Gráfico de barras com os números do festival: 20 barracas, 9 aulas-show e 3 dias de evento."
        className="mt-6 max-w-full"
      />
    </section>
  );
}

export default Grafico;
