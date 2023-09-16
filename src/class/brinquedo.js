class Brinquedo {
    brinquedos = [];

    constructor() {
        this.brinquedos = [];
    }

    selecionarBrinquedos() {
        if(this.brinquedos === 'novo') {
            return 'Boa! Vai para as crianças!'
        } else {
            return 'Brinquedo será descartado'
        }
    }

    encaminharBrinquedos() {
        const instituicoesSemBrinquedos = this.selecionarBrinquedos();

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
