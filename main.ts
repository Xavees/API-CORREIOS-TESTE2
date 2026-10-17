async function buscarCEP(cep: string): Promise<void> {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        const data = await response.json();
        if (data.erro) {
            throw new Error(`CEP não encontrado: ${cep}`);
        }
        console.log(`CEP: ${data.cep}`);
        console.log(`Logradouro: ${data.logradouro}`);
        console.log(`Complemento: ${data.complemento}`);
        console.log(`Bairro: ${data.bairro}`);
        console.log(`Localidade: ${data.localidade}`);
        console.log(`UF: ${data.uf}`);
    } catch (e:any) {
        console.error('Erro na Busca da API', e);
    }
}

// Exemplo de Uso: 
const cep = '05572070';
buscarCEP(cep);