import Politico from './Politico.js'

export default class DeputadoFederal extends Politico{
    private bancada:string

    constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        nomeLocalTrabalho: string,
        enderecoLocalTrabalho: string,
        remuneracao: number,
        listaProjetos: string[],
        bancada:string
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

        this.bancada = bancada
    }

    getBancada():string{
        return this.bancada
    }

    setBancada(bancada:string):void{
        this.bancada = bancada
    }

    mandato():void{
        console.log('Legislar sobre o código penal, sobre o código tributário, sobre as leis trabalhistas e fiscalizar o Presidente da República.')
    }

    VotarPecs():string{
        return 'Votar Projeto de Emenda à Constituição Federal'
    }

    CriarCPI():string{
        return 'Criar a CPI nacional'
    }

    VotarPPA():string{
        return 'Votar a PPA'
    }

    VotarLOA():string{
        return 'Votar a LOA'
    }

    VotarLDO():string{
        return 'Votar a LDO'
    }

    ProporLeisComp():string{
        return 'Propor leis complementares'
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
            `Bancada: ${this.getBancada()}`)
    }
}