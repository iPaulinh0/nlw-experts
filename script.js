// Estrutura de Dados com todas as perguntas e resposta do Quiz.
const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de programação",
      "Um navegador da web",
      "Um tipo de café",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
    respostas: ["var", "let", "const"],
    correta: 2,
  },
  {
    pergunta:
      "Qual função é usada para imprimir algo no console em JavaScript?",
    respostas: ["print()", "log()", "display()"],
    correta: 1,
  },
  {
    pergunta:
      "Qual operador é usado para comparação de igualdade em JavaScript?",
    respostas: ["==", "===", "!="],
    correta: 1,
  },
  {
    pergunta:
      "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
    respostas: ["push()", "add()", "append()"],
    correta: 0,
  },
  {
    pergunta: "Qual declaração é usada para criar uma função em JavaScript?",
    respostas: ["func()", "function()", "create()"],
    correta: 1,
  },
  {
    pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
    respostas: ["//", "/* */", "<!-- -->"],
    correta: 0,
  },
  {
    pergunta:
      "Qual é o método usado para remover o último elemento de um array em JavaScript?",
    respostas: ["removeLast()", "pop()", "deleteLast()"],
    correta: 1,
  },
  {
    pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
    respostas: [
      "for (i <= 5; i++)",
      "for (i = 0; i <= 5; i++)",
      "for (i = 0; i <= 5)",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Qual função é usada para converter uma string em um número em JavaScript?",
    respostas: ["toInt()", "parseInteger()", "parseInt()"],
    correta: 2,
  },
]

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")
const corrects = new Set()
const totalQuestions = perguntas.length
const showTotal = document.querySelector("#acertos span")

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector("h3").textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    )
    dt.querySelector("input").value = item.respostas.indexOf(resposta)
    dt.querySelector("input").onchange = (event) => {
      const isCorrect = event.target.value == item.correta

      corrects.delete(item)
      if (isCorrect) {
        corrects.add(item)
      }
      showTotal.textContent = corrects.size + " de " + totalQuestions
    }
    quizItem.querySelector("dl").appendChild(dt)
  }
  quizItem.querySelector("dl dt").remove()

  quiz.appendChild(quizItem)
}
