import Politico from "./Politico.js";

export default class Presidente extends Politico{
        private quantidadeMinistros: number

    constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        nomeLocalTrabalho: string,
        enderecoLocalTrabalho: string,
        remuneracao: number,
        listaProjetos: string[],
        quantidadeMinistros: number

    ){
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
        
        this.quantidadeMinistros = quantidadeMinistros;
    }
    
    getQuantidadeMinistros():number{
        return this.quantidadeMinistros
    }
    
    setQuantidadeMinistros(quantidadeMinistros: number): void {
        this.quantidadeMinistros = quantidadeMinistros
    } 

    mandato():void {
        console.log(
            "O presidente sanciona, propõe e veta leis e edita medidas provisórias."
        );
    }

    nomearMinistro():string {
        return "Nomear Ministros de Estado.";
    }

    exonerarMinistro():string {
        return "Exonerar Ministros de Estado.";
    }

    comandarForcasArmadas(): string {
        return "Comandar as Forças Armadas.";
    }

    representarPais(): string {
        return "Representar o país em eventos internacionais.";
    }

    elaborarPPA(): string {
        return "Elaborar e enviar ao Congresso Nacional o Plano Plurianual (PPA) nacional.";
    }

    elaborarLDO(): string {
        return "Elaborar e enviar ao Congresso Nacional a Lei de Diretrizes Orçamentárias (LDO) nacional.";
    }

    elaborarLOA(): string {
        return "Elaborar e enviar ao Congresso Nacional a proposta de Lei Orçamentária Anual (LOA) nacional.";
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
            `Quantidade de Ministros: ${this.getQuantidadeMinistros()}`)
    }
}