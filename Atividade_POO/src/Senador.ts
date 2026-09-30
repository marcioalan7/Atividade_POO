import Politico from './Politico.js'

export default class Senador extends Politico{
    private nomeEstado: string
    private anoEleito: string

    constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        nomeLocalTrabalho: string,
        enderecoLocalTrabalho: string,
        remuneracao: number,
        listaProjetos: string[],
        nomeEstado: string,
        anoEleito: string
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

        this.nomeEstado = nomeEstado
        this.anoEleito = anoEleito
    }

    getNomeEstado():string{
        return this.nomeEstado
    }

    setNomeEstado(nomeEstado:string):void{
        this.nomeEstado = nomeEstado
    }

    getAnoEleito():string{
        return this.anoEleito
    }

    setAnoEleito(anoEleito:string):void{
        this.anoEleito = anoEleito
    }

    mandato():void{
        console.log('Sabatina e aprova ministros do STF, procurador-geral da república e presidentes do banco central, legisla sobre leis federais e autoriza operações financeiras extremas.')
    }

    AprovarAutoridades():string{
        return 'Aprova autoridades de alto escalão.'
    }
    
    JulgarCrimes():string{
        return 'Julga crimes de responsabilidade.'
    }

    RepresentarEstado():string{
        return 'Representa os interesses do estado.'
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
            `Nome do Estado que Representa: ${this.getNomeEstado()}
            - Ano que foi Eleito: ${this.getAnoEleito()}`)
}
}