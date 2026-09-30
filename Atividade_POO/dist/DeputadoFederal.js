import Politico from './Politico.js';
export default class DeputadoFederal extends Politico {
    bancada;
    constructor(nome, partido, esfera, poder, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, listaProjetos, bancada) {
        super(nome, partido, esfera, poder, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, listaProjetos);
        this.bancada = bancada;
    }
    getBancada() {
        return this.bancada;
    }
    setBancada(bancada) {
        this.bancada = bancada;
    }
    mandato() {
        console.log('Legislar sobre o código penal, sobre o código tributário, sobre as leis trabalhistas e fiscalizar o Presidente da República.');
    }
    VotarPecs() {
        return 'Votar Projeto de Emenda à Constituição Federal';
    }
    CriarCPI() {
        return 'Criar a CPI nacional';
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
    ProporLeisComp() {
        return 'Propor leis complementares';
    }
    ImprimeInfo() {
        console.log(`Nome: ${this.getNome()} - Partido: ${this.getPartido()}
            - Esfera: ${this.getEsfera()} - Poder: ${this.getPoder()}
            - Nome do Local de Trabalho: ${this.getNomeLocalTrabalho()}
            - Endereço do Local de Trabalho: ${this.getEnderecoLocalTrabalho()}
            - Remuneração: ${this.getRemuneracao()} 
            - Lista de Projetos: ${this.getListaProjetos()}`);
        console.log(`Bancada: ${this.getBancada()}`);
    }
}
