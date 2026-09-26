import Politico from "./Politico.js";

export default class Governador extends Politico {
    private quantidadeSecretarios: number
    private nomeEstado: string

    constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        nomeLocalTrabalho: string,
        enderecoLocalTrabalho: string,
        remuneracao: number,
        listaProjetos: string[],
        quantidadeSecretarios: number,
        nomeEstado: string
    ) {
        super(
            nome,
            partido,
            esfera,
            poder,
            nomeLocalTrabalho,
            enderecoLocalTrabalho,
            remuneracao,
            listaProjetos
        )

        this.quantidadeSecretarios = quantidadeSecretarios
        this.nomeEstado = nomeEstado
    }

    getQuantidadeSecretarios(): number {
        return this.quantidadeSecretarios
    }

    setQuantidadeSecretarios(quantidadeSecretarios: number): void {
        this.quantidadeSecretarios = quantidadeSecretarios
    }

    getNomeEstado(): string {
        return this.nomeEstado
    }

    setNomeEstado(nomeEstado: string): void {
        this.nomeEstado = nomeEstado
    } 

    ImprimeInfo():void{
        console.log(
            `Nome: ${this.getNome()} - Partido: ${this.getPartido()}
            - Esfera: ${this.getEsfera()} - Poder: ${this.getPoder()}
            - Nome do Local de Trabalho: ${this.getNomeLocalTrabalho()}
            - Endereço do Local de Trabalho: ${this.getEnderecoLocalTrabalho()}
            - Remuneração: ${this.getRemuneracao()} 
            - Lista de Projetos: ${this.getListaProjetos()}`)
        
         console.log(
        `Quantidade de Secretários: ${this.getQuantidadeSecretarios()}
        - Nome do Estado que Representa: ${this.getNomeEstado()}`
    )
    }

}
