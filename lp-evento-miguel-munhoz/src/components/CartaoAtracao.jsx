function CartaoAtracao({ nome, especialidade, descricao }) {
  return (
    <article className="rounded-xl bg-white p-5 shadow-sm">
      <h3 className="text-xl font-bold text-stone-900">{nome}</h3>
      <p className="mt-1 text-sm font-bold text-destaque">{especialidade}</p>
      <p className="mt-2 text-stone-700">{descricao}</p>
    </article>
  )
}

export default CartaoAtracao
