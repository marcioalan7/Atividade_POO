export default abstract class Politico{
    private nome: string
    private partido: string
    private esfera: string
    private poder: string
    private nomeLocalTrabalho: string
    private enderecoLocalTrabalho: string
    private remuneracao: number
    private listaProjetos: string[]

    constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        nomeLocalTrabalho: string,
        enderecoLocalTrabalho: string,
        remuneracao: number,
        listaProjetos: string[]
    ){
        this.nome = nome
        this.partido = partido
        this.esfera = esfera
        this.poder = poder
        this.nomeLocalTrabalho = nomeLocalTrabalho
        this.enderecoLocalTrabalho = enderecoLocalTrabalho
        this.remuneracao = remuneracao
        this.listaProjetos = listaProjetos
    }

    getNome():string{
        return this.nome
    }

    setNome(nome:string):void{
        this.nome = nome
    }

    getPartido():string{
        return this.partido
    }

    setPartido(partido:string):void{
        this.partido = partido
    }

    getEsfera():string{
        return this.esfera
    }

    setEsfera(esfera:string):void{
        this.esfera = esfera
    }

    getPoder():string{
        return this.poder
    }

    setPoder(poder:string):void{
        this.poder = poder
    }

    getNomeLocalTrabalho():string{
        return this.nomeLocalTrabalho
    }

    setNomeLocalTrabalho(nomeLocalTrabalho:string):void{
        this.nomeLocalTrabalho = nomeLocalTrabalho
    }

    getEnderecoLocalTrabalho():string{
        return this.enderecoLocalTrabalho
    }

    setEnderecoLocalTrabalho(enderecoLocalTrabalho:string):void{
        this.enderecoLocalTrabalho = enderecoLocalTrabalho
    }

    getRemuneracao():number{
        return this.remuneracao
    }

    setRemuneracao(remuneracao:number):void{
        this.remuneracao = remuneracao
    }

    getListaProjetos():string[]{
        return this.listaProjetos
    }

    setListaProjetos(listaProjetos:string[]):void{
        this.listaProjetos = listaProjetos
    }

    abstract ImprimeInfo():void
}