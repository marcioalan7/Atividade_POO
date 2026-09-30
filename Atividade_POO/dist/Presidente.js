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
