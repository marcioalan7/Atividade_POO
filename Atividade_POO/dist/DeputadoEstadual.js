import Politico from './Politico.js';
export default class DeputadoEstadual extends Politico {
    nomeEstado;
    listaComissoes;
    constructor(nome, partido, esfera, poder, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, listaProjetos, nomeEstado, listaComissoes) {
        super(nome, partido, esfera, poder, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, listaProjetos);
        this.nomeEstado = nomeEstado;
        this.listaComissoes = listaComissoes;
    }
    getNomeEstado() {
        return this.nomeEstado;
    }
    setNomeEstado(nomeEstado) {
        this.nomeEstado = nomeEstado;
    }
    getListaComissoes() {
        return this.listaComissoes;
    }
    setListaComissoes(listaComissoes) {
        this.listaComissoes = listaComissoes;
    }
    mandato() {
        console.log('Legislar sobre assuntos de interesses do estado.' + 'Fiscalizar o governador');
    }
    VotarPPA() {
        return 'Votar a PPA';
    }
    VotarLOA() {
        return 'Votar a LOA';
    }
    VotarLDO() {
        return 'Votar a LDO';
    }
    ProporEmendas() {
        return 'Propor emendas à constituição estadual.';
    }
    CriarCPI() {
        return 'Criação da CPI estadual.';
    }
    ImprimeInfo() {
        console.log(`Nome: ${this.getNome()} - Partido: ${this.getPartido()}
            - Esfera: ${this.getEsfera()} - Poder: ${this.getPoder()}
            - Nome do Local de Trabalho: ${this.getNomeLocalTrabalho()}
            - Endereço do Local de Trabalho: ${this.getEnderecoLocalTrabalho()}
            - Remuneração: ${this.getRemuneracao()} 
            - Lista de Projetos: ${this.getListaProjetos()}`);
        console.log(`Nome do Estado que Representa: ${this.getNomeEstado()}
            - Lista de Comissões: ${this.getListaComissoes()}`);
    }
}
