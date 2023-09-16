class Estabelecimento {
    nome; 
    cnpj;   
    endereco;
    funcionamento;   

    constructor(nome,  cnpj, endereco, funcionamento) {
        this.nome = nome;
        this.cnpj =  cnpj;;      
        this.endereco = endereco;
        this.funcionamento = funcionamento;     
    }
    
      validaCnpj() {
        if (typeof this.cnpj !== 'number') {
            const errorMessage = 'Digite um número válido.';
            //console.log(errorMessage);
            throw new Error(errorMessage);
        } else {
            return this.cnpj;
        }
    }
    
} 

module.exports = { Estabelecimento };
