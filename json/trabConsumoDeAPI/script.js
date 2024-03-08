function consultarPorCep(event) {
    event.preventDefault();
  
    const cep = document.getElementById('cep').value;
  
    if (!cep) {
      alert('Informe o CEP');
      return;
    }
  
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          alert('CEP não encontrado');
          return;
        }
  
        const resultadoCep = document.getElementById('resultado-cep');
        resultadoCep.innerHTML = `
          <p>Logradouro: ${data.logradouro}</p>
          <p>Complemento: ${data.complemento}</p>
          <p>Bairro: ${data.bairro}</p>
          <p>Localidade: ${data.localidade}</p>
          <p>UF: ${data.uf}</p>
          <p>DDD: ${data.ddd}</p>
        `;
      });
  }

  function consultarPorEndereco(event) {
    event.preventDefault();
  
    const logradouro = document.getElementById('logradouro').value;
    const bairro = document.getElementById('bairro').value;
    const localidade = document.getElementById('localidade').value;
    const uf = document.getElementById('uf').value;
  
    if (!logradouro || !bairro || !localidade || !uf) {
      alert('Preencha todos os campos');
      return;
    }
  
    const url = `https://viacep.com.br/ws/${localidade}/${bairro}/${logradouro}/json/`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          alert('Endereço não encontrado');
          return;
        }
  
        const resultadoEndereco = document.getElementById('resultado-endereco');
        resultadoEndereco.innerHTML = '';
  
        data.forEach(endereco => {
          resultadoEndereco.innerHTML += `
            <div class="resultado-item">
              <p>CEP: ${endereco.cep}</p>
              <p>Logradouro: ${endereco.logradouro}</p>
              <p>Complemento: ${endereco.complemento}</p>
              <p>Bairro: ${endereco.bairro}</p>
              <p>Localidade: ${endereco.localidade}</p>
              <p>UF: ${endereco.uf}</p>
              <p>DDD: ${endereco.ddd}</p>
            </div>
          `;
        });
      });
  }
  