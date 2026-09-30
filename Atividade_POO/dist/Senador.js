import Politico from './Politico.js';
export default class Senador extends Politico {
    nomeEstado;
    anoEleito;
    constructor(nome, partido, esfera, poder, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, listaProjetos, nomeEstado, anoEleito) {
        super(nome, partido, esfera, poder, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, listaProjetos);
        this.nomeEstado = nomeEstado;
        this.anoEleito = anoEleito;
    }
    getNomeEstado() {
        return this.nomeEstado;
    }
    setNomeEstado(nomeEstado) {
        this.nomeEstado = nomeEstado;
    }
    getAnoEleito() {
        return this.anoEleito;
    }
    setAnoEleito(anoEleito) {
        this.anoEleito = anoEleito;
    }
    mandato() {
        console.log('Sabatina e aprova ministros do STF, procurador-geral da república e presidentes do banco central, legisla sobre leis federais e autoriza operações financeiras extremas.');
    }
    AprovarAutoridades() {
        return 'Aprova autoridades de alto escalão.';
    }
    JulgarCrimes() {
        return 'Julga crimes de responsabilidade.';
    }
    RepresentarEstado() {
        return 'Representa os interesses do estado.';
    }
    ImprimeInfo() {
        console.log(`Nome: ${this.getNome()} - Partido: ${this.getPartido()}
            - Esfera: ${this.getEsfera()} - Poder: ${this.getPoder()}
            - Nome do Local de Trabalho: ${this.getNomeLocalTrabalho()}
            - Endereço do Local de Trabalho: ${this.getEnderecoLocalTrabalho()}
            - Remuneração: ${this.getRemuneracao()} 
            - Lista de Projetos: ${this.getListaProjetos()}`);
        console.log(`Nome do Estado que Representa: ${this.getNomeEstado()}
            - Ano que foi Eleito: ${this.getAnoEleito()}`);
    }
}
