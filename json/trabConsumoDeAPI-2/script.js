async function consultarPorCEP() {
  const cep = document.getElementById("cepInput").value;

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    exibirResultado(data);
  } catch (error) {
    console.error("Erro ao consultar por CEP:", error);
  }
}

async function consultarPorEndereco() {
  const endereco = document.getElementById("enderecoInput").value;

  const url = `https://viacep.com.br/ws/${endereco}/json/`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    exibirResultado(data);
  } catch (error) {
    console.error("Erro ao consultar por Endereço:", error);
  }
}

function exibirResultado(data) {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  for (const prop in data) {
    resultadoDiv.innerHTML += `<p><strong>${prop}:</strong> ${data[prop]}</p>`;
  }
}
