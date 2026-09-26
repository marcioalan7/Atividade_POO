export default class Politico {
    nome;
    partido;
    esfera;
    poder;
    nomeLocalTrabalho;
    enderecoLocalTrabalho;
    remuneracao;
    listaProjetos;
    constructor(nome, partido, esfera, poder, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao, listaProjetos) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.nomeLocalTrabalho = nomeLocalTrabalho;
        this.enderecoLocalTrabalho = enderecoLocalTrabalho;
        this.remuneracao = remuneracao;
        this.listaProjetos = listaProjetos;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getPartido() {
        return this.partido;
    }
    setPartido(partido) {
        this.partido = partido;
    }
    getEsfera() {
        return this.esfera;
    }
    setEsfera(esfera) {
        this.esfera = esfera;
    }
    getPoder() {
        return this.poder;
    }
    setPoder(poder) {
        this.poder = poder;
    }
    getNomeLocalTrabalho() {
        return this.nomeLocalTrabalho;
    }
    setNomeLocalTrabalho(nomeLocalTrabalho) {
        this.nomeLocalTrabalho = nomeLocalTrabalho;
    }
    getEnderecoLocalTrabalho() {
        return this.enderecoLocalTrabalho;
    }
    setEnderecoLocalTrabalho(enderecoLocalTrabalho) {
        this.enderecoLocalTrabalho = enderecoLocalTrabalho;
    }
    getRemuneracao() {
        return this.remuneracao;
    }
    setRemuneracao(remuneracao) {
        this.remuneracao = remuneracao;
    }
    getListaProjetos() {
        return this.listaProjetos;
    }
    setListaProjetos(listaProjetos) {
        this.listaProjetos = listaProjetos;
    }
}
