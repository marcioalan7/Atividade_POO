import Politico from "./Politico.js";
export default class Governador extends Politico {
    quantidadeSecretarios;
    nomeEstado;
    constructor(nome, partido, esfera, poder, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, listaProjetos, quantidadeSecretarios, nomeEstado) {
        super(nome, partido, esfera, poder, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, listaProjetos);
        this.quantidadeSecretarios = quantidadeSecretarios;
        this.nomeEstado = nomeEstado;
    }
    getQuantidadeSecretarios() {
        return this.quantidadeSecretarios;
    }
    setQuantidadeSecretarios(quantidadeSecretarios) {
        this.quantidadeSecretarios = quantidadeSecretarios;
    }
    getNomeEstado() {
        return this.nomeEstado;
    }
    setNomeEstado(nomeEstado) {
        this.nomeEstado = nomeEstado;
    }
    ImprimeInfo() {
        console.log(`Nome: ${this.getNome()} - Partido: ${this.getPartido()}
            - Esfera: ${this.getEsfera()} - Poder: ${this.getPoder()}
            - Nome do Local de Trabalho: ${this.getNomeLocalTrabalho()}
            - Endereço do Local de Trabalho: ${this.getEnderecoLocalTrabalho()}
            - Remuneração: ${this.getRemuneracao()} 
            - Lista de Projetos: ${this.getListaProjetos()}`);
        console.log(`Quantidade de Secretários: ${this.getQuantidadeSecretarios()}
        - Nome do Estado que Representa: ${this.getNomeEstado()}`);
    }
}
