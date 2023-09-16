const { Doador } = require('../class/doador')
describe('verifica class Doador', () => {
    test('Deve criar um doador válido', () => {
        const nome = 'Ciane';
        const telefone = '31987654321';
        const email = 'ciane@example.com';

        const doador = new Doador(nome, telefone, email);

        expect(doador.nome).toBe(nome);
        expect(doador.telefone).toBe(telefone);
        expect(doador.email).toBe(email);
    });

    test('Deve lançar uma exceção ao criar um doador com dados inválidos', () => {
        const nome = 'Maria';
        const telefone = '31987654321';
        const email = 'ciane#example.com';

        expect(() => {
            new Doador(nome, telefone, email);
        }).toThrow('Dados inválidos.');
    });

    test('Deve agradecer ao doador', () => {
        const nome = 'Ana';
        const telefone = '11987654321';
        const email = 'ana@example.com';
        const doador = new Doador(nome, telefone, email);

        const mensagemAgradecimento = doador.getAgradecer();

        expect(mensagemAgradecimento).toBe(`${nome} muito obrigado por sua doação!`);
    });
});
