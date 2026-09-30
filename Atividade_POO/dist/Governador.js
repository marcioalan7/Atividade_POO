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
    mandato() {
        console.log("O governador sanciona leis estaduais, veta leis estaduais, " +
            "decreta estado de calamidade e envia PEC à Assembleia Legislativa.");
    }
    gerirPoliciaMilitar() {
        return "Gerir a Polícia Militar do Estado.";
    }
    administrarRodoviasEstaduais() {
        return "Administrar as rodovias estaduais.";
    }
    coordenarEducacaoESaude() {
        return "Coordenar a educação e a saúde do Estado.";
    }
    elaborarPPA() {
        return "Elaborar e enviar o PPA estadual à Assembleia Legislativa.";
    }
    elaborarLDO() {
        return "Elaborar e enviar a LDO estadual à Assembleia Legislativa.";
    }
    elaborarLOA() {
        return "Elaborar e enviar a LOA estadual à Assembleia Legislativa.";
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
