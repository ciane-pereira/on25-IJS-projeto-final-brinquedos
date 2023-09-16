class Brinquedo {
    constructor(estabelecimento) {
        this.brinquedoEstabelecimento = estabelecimento.brinquedo;
        this.instituicoesRecebimento = estabelecimento.instituicoesRecebimento;
        this.brinquedosNovos = [];
    }

    selecionarBrinquedos() {
        this.brinquedosNovos = this.brinquedoEstabelecimento
            .filter(brinquedo => brinquedo.condicao === 'novo')
            .slice(0, 20);
    }

    criarListaInstituicoesSemBrinquedos() {
        const instituicoesSemBrinquedos = this.instituicoesRecebimento.filter((instituicao) => {
            return !this.brinquedosNovos.some((brinquedo) => brinquedo.instituicao === instituicao);
        });

        return instituicoesSemBrinquedos;
    }

    encaminharBrinquedos() {
        const instituicoesSemBrinquedos = this.criarListaInstituicoesSemBrinquedos();

        instituicoesSemBrinquedos.sort((a, b) => {
            if (a.brinquedosRecebidos.length === 0 && b.brinquedosRecebidos.length > 0) {
                return -1;
            } else if (a.brinquedosRecebidos.length > 0 && b.brinquedosRecebidos.length === 0) {
                return 1;
            } else {
                return 0;
            }
        });
    }
}

module.exports = { Brinquedo };
