document.addEventListener("DOMContentLoaded", async function () {
  const listaMunicipios = document.getElementById("municipios-list");

  const resposta = await fetch(
    'https://servicodados.ibge.gov.br/api/v2/cnae/classes'
  );

  const dados = await resposta.json();

  dados.forEach(function (municipio) {
    const li = document.createElement("li");
    li.textContent = `${municipio.nome}/${municipio.microrregiao.mesorregiao.UF.sigla}`;
    // li.textContent = municipio.nome+'/'+'UF';
    listaMunicipios.appendChild(li);
  });
});
