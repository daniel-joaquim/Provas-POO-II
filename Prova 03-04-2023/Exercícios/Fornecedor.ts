export class Fornecedor {

    private _ID: number;
    private _Nome_RazaoSocial: string;
    private _CPF_CNPJ: string;
    private _Telefone: string;
    private _Endereco: string;


    constructor(id: number, nome: string, cpf: string, telefone: string, endereco: string) {
        this._ID = id;
        this._Nome_RazaoSocial = nome;
        this._CPF_CNPJ = cpf;
        this._Telefone = telefone;
        this._Endereco = endereco;
    }

    get id(): number {
        return this._ID;
    }

    set id(id: number) {
        this._ID = id;
    }

    get nome(): string {
        return this._Nome_RazaoSocial;
    }

    set nome(nome: string) {
        this._Nome_RazaoSocial = nome;
    }

    get cpf(): string {
        return this._CPF_CNPJ;
    }

    set cpf(cpf: string) {
        this._CPF_CNPJ = cpf;
    }

    get telefone(): string {
        return this._Telefone;
    }

    set telefone(telefone: string) {
        this._Telefone = telefone;
    }

    get endereco(): string {
        return this._Endereco;
    }

    set endereco(endereco: string) {
        this._Endereco = endereco;
    }
}
