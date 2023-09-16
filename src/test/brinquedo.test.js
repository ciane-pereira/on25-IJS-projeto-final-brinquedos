const { default: test } = require('node:test');
const { Brinquedo } = require('../class/brinquedo');

describe('Brinquedo', () => {
  let brinquedo;

  beforeEach(() => {
    brinquedo = new Brinquedo();
  });

  describe('selecionarBrinquedos', () => {
    test('deve retornar "Boa! Vai para as crianças!" quando brinquedos for "novo"', () => {
      brinquedo.brinquedos = 'novo';
      expect(brinquedo.selecionarBrinquedos()).toBe('Boa! Vai para as crianças!');
    });

    test('deve retornar "Brinquedo será descartado" quando brinquedos não for "novo"', () => {
      brinquedo.brinquedos = 'usado';
      expect(brinquedo.selecionarBrinquedos()).toBe('Brinquedo será descartado');
    });
  });

  describe('encaminharBrinquedos', () => {
    test('deve classificar instituições com brinquedos recebidos antes das que não receberam', () => {
      const instituicao1 = { brinquedosRecebidos: [] };
      const instituicao2 = { brinquedosRecebidos: ['brinquedo1'] };
      const instituicao3 = { brinquedosRecebidos: ['brinquedo2'] };

      brinquedo.brinquedos = 'novo';
      const instituicoes = [instituicao1, instituicao2, instituicao3];
      brinquedo.encaminharBrinquedos(instituicoes);

      expect(instituicoes).toEqual([instituicao2, instituicao3, instituicao1]);
    });

    test('deve manter a ordem das instituições se nenhuma tiver recebido brinquedos', () => {
      const instituicao1 = { brinquedosRecebidos: [] };
      const instituicao2 = { brinquedosRecebidos: [] };
      const instituicao3 = { brinquedosRecebidos: [] };

      brinquedo.brinquedos = 'novo';
      const instituicoes = [instituicao1, instituicao2, instituicao3];
      brinquedo.encaminharBrinquedos(instituicoes);

      expect(instituicoes).toEqual([instituicao1, instituicao2, instituicao3]);
    });
  });
});
