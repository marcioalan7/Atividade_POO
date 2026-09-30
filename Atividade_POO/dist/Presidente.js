import Politico from "./Politico.js";
export default class Presidente extends Politico {
    quantidadeMinistros;
    constructor(nome, partido, esfera, poder, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, listaProjetos, quantidadeMinistros) {
        super(nome, partido, esfera, poder, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, listaProjetos);
        this.quantidadeMinistros = quantidadeMinistros;
    }
    getQuantidadeMinistros() {
        return this.quantidadeMinistros;
    }
    setQuantidadeMinistros(quantidadeMinistros) {
        this.quantidadeMinistros = quantidadeMinistros;
    }
    mandato() {
        console.log("O presidente sanciona, propõe e veta leis e edita medidas provisórias.");
    }
    nomearMinistro() {
        return "Nomear Ministros de Estado.";
    }
    exonerarMinistro() {
        return "Exonerar Ministros de Estado.";
    }
    comandarForcasArmadas() {
        return "Comandar as Forças Armadas.";
    }
    representarPais() {
        return "Representar o país em eventos internacionais.";
    }
    elaborarPPA() {
        return "Elaborar e enviar ao Congresso Nacional o Plano Plurianual (PPA) nacional.";
    }
    elaborarLDO() {
        return "Elaborar e enviar ao Congresso Nacional a Lei de Diretrizes Orçamentárias (LDO) nacional.";
    }
    elaborarLOA() {
        return "Elaborar e enviar ao Congresso Nacional a proposta de Lei Orçamentária Anual (LOA) nacional.";
    }
    ImprimeInfo() {
        console.log(`Nome: ${this.getNome()} - Partido: ${this.getPartido()}
            - Esfera: ${this.getEsfera()} - Poder: ${this.getPoder()}
            - Nome do Local de Trabalho: ${this.getNomeLocalTrabalho()}
            - Endereço do Local de Trabalho: ${this.getEnderecoLocalTrabalho()}
            - Remuneração: ${this.getRemuneracao()} 
            - Lista de Projetos: ${this.getListaProjetos()}`);
        console.log(`Quantidade de Ministros: ${this.getQuantidadeMinistros()}`);
    }
}
