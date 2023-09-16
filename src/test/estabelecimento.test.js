const { Estabelecimento } = require('../class/estabelecimento') 

describe('verifica class Estabelecimento', () => {
    test('verificar instância do estabelecimento', () => {
      const estabelecimento1 = new Estabelecimento();
      expect(estabelecimento1 instanceof Estabelecimento).toBe(true);
    });
  
    test('verificar se cadastro é preenchido com todos os dados', () => {
      const estabelecimento1 = new Estabelecimento('Mix Pão', 12345678000191, 'Rua Montese, 95- Santa Branca-BH', '6:00-22:00');
      expect(estabelecimento1.Estabelecimento).toBe();
    });    
  
    test('verifica se preencheu cnpj somente com números', () => {
      const estabelecimento1 = new Estabelecimento('Mix Pão','12345678000191', 'Rua Montese, 95- Santa Branca-BH', '6:00-22:00');
      expect(() => {
        estabelecimento1.validaCnpj();
      }).toThrow('Digite um número válido.');
    });
    /*test('verifica se preencheu cnpj não passa', () => {
      const estabelecimento1 = new Estabelecimento('Mix Pão', 'CNPJInválido', 'Rua Montese, 95- Santa Branca-BH', '6:00-22:00');
      expect(() => {
          estabelecimento1.validaCnpj();
      }).toThrow('Digite um número válido.');
  });*/
  
    
  });
