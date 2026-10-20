export const evento = {
  nome: "Festival Sabores da Alta Paulista",
  slogan: "Três dias para provar o melhor da cozinha da região.",
  data: "4 a 6 de junho de 2027 · das 11h às 22h",
  local: "Recinto de Exposições — Osvaldo Cruz/SP",
  coresSugeridas: {
    vermelhoTomate: "#dc2626",
    verdeFolha: "#16a34a",
    creme: "#fefce8",
  },
  sobre:
    "Vinte barracas de restaurantes, produtores rurais e cozinheiros da região, com aulas-show e uma competição de pratos feitos com ingredientes locais. A entrada é gratuita; os ingressos são só para as aulas-show com degustação.",
  numeros: [
    { valor: "20", rotulo: "barracas" },
    { valor: "9", rotulo: "aulas-show" },
    { valor: "3", rotulo: "dias" },
  ],
  programacao: [
    { dia: "Sex", horario: "18h", atividade: "Abertura com música ao vivo" },
    {
      dia: "Sáb",
      horario: "11h",
      atividade: "Aula-show: pamonha e curau de milho verde",
    },
    {
      dia: "Sáb",
      horario: "15h",
      atividade: "Aula-show: doces de leite e de abóbora",
    },
    {
      dia: "Sáb",
      horario: "19h",
      atividade: "Competição de pratos com ingredientes locais",
    },
    { dia: "Dom", horario: "12h", atividade: "Almoço caipira coletivo" },
    { dia: "Dom", horario: "17h", atividade: "Premiação e encerramento" },
  ],
  atracoes: [
    {
      nome: "Dona Cida",
      especialidade: "Cozinha caipira",
      descricao: "Cozinheira há 40 anos, famosa pelo frango com quiabo.",
    },
    {
      nome: "Chef Marcos Lima",
      especialidade: "Churrasco",
      descricao: "Especialista em cortes e assados no fogo de chão.",
    },
    {
      nome: "Júlia Tanaka",
      especialidade: "Confeitaria",
      descricao: "Doces que misturam receitas japonesas e caipiras.",
    },
    {
      nome: "Sítio Boa Vista",
      especialidade: "Produtor rural",
      descricao: "Queijos e doces artesanais feitos pela família.",
    },
  ],
  ingressos: [
    { nome: "Entrada", preco: "Gratuita" },
    { nome: "Aula-show com degustação", preco: "R$ 25" },
    { nome: "Passaporte de aulas-show", preco: "R$ 90" },
  ],
  perguntasFrequentes: [
    {
      pergunta: "Aceita cartão?",
      resposta: "Sim, todas as barracas aceitam cartão e Pix.",
    },
    {
      pergunta: "Tem opção vegetariana?",
      resposta: "Sim, pelo menos cinco barracas têm pratos sem carne.",
    },
    {
      pergunta: "Posso levar meu cachorro?",
      resposta: "Pode, desde que na coleira.",
    },
  ],
};
