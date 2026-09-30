import Politico from './Politico.js'

export default class DeputadoEstadual extends Politico{
    private nomeEstado: string
    private listaComissoes: string[]

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
        listaComissoes: string[]
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
        this.listaComissoes = listaComissoes
    }

    getNomeEstado():string{
        return this.nomeEstado
    }

    setNomeEstado(nomeEstado:string):void{
        this.nomeEstado = nomeEstado
    }

    getListaComissoes():string[]{
        return this.listaComissoes
    }

    setListaComissoes(listaComissoes:string[]):void{
        this.listaComissoes = listaComissoes
    }

    mandato():void{
        console.log('Legislar sobre assuntos de interesses do estado.' + 'Fiscalizar o governador')
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

    ProporEmendas():string{
        return 'Propor emendas à constituição estadual.'
    }

    CriarCPI():string{
        return 'Criação da CPI estadual.'
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
            - Lista de Comissões: ${this.getListaComissoes()}`)
    }
}