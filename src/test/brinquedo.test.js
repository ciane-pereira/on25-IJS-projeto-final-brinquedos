const { Brinquedo } = require('../class/brinquedo');

describe('Brinquedo', () => {
    
  
    beforeEach(() => {
        let brinquedo;
      const estabelecimento = {
        brinquedo: [
          { condicao: 'novo', instituicao: 'Instituicao1' },
          { condicao: 'novo', instituicao: 'Instituicao2' },
        ],
        instituicoesRecebimento: ['Instituicao1', 'Instituicao2', 'Instituicao3'],
      };
      brinquedo = new Brinquedo(estabelecimento);
    });
  
    test('deve selecionar brinquedos novos', () => {
      brinquedo.selecionarBrinquedos();
      expect(brinquedo.brinquedosNovos).toHaveLength(20);
    });
  
   test('deve criar lista de instituições sem brinquedos', () => {
      const instituicoesSemBrinquedos = brinquedo.criarListaInstituicoesSemBrinquedos();
      expect(instituicoesSemBrinquedos).toContain('Instituicao3');
      expect(instituicoesSemBrinquedos).not.toContain('Instituicao1');
      expect(instituicoesSemBrinquedos).not.toContain('Instituicao2');
    });
  
    test('deve encaminhar brinquedos corretamente', () => {
      brinquedo.encaminharBrinquedos();
    
    });
  });
  