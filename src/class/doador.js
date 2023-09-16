class Doador {
    nome;
    telefone;
    email;
  
    constructor(nome, telefone, email) {
        if(this.validarEmail(email) && this.validarCelular(telefone)) {            
        this.nome = nome;    
        this.telefone = telefone; 
        this.email = email;
        
        } else {
            const errorMessage = 'Dados inválidos.';            
            throw new Error(errorMessage);
        }       
    }

    validarEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return regex.test(email);     
      }      

      validarCelular(numero) {
         const numeroFone = numero.replace(/\D/g, '');
        if (numeroFone.length !== 11) {
            return false;
        }

        const ddd = numeroFone.substring(0, 2);
        const dddsValidos = ['11', '12', '13', '14', '15', '16', '17', '18', '19', '21', '22', '24', '27', '28', '31', '32', '33', '34', '35', '37', '38', '41', '42', '43', '44', '45', '46', '47', '48', '49', '51', '53', '54', '55', '61', '62', '63', '64', '65', '66', '67', '68', '69', '71', '73', '74', '75', '77', '79', '81', '82', '83', '84', '85', '86', '87', '88', '89', '91', '92', '93', '94', '95', '96', '97', '98', '99'];
    
        if (!dddsValidos.includes(ddd)) {
            return false;
        }
        return true;
    }

    getAgradecer() {
        return `${this.nome} muito obrigado por sua doação!`;
      }
    
}

module.exports = { Doador };