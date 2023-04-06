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

    set id(value: number) {
        this._ID = value;
    }

    get nome(): string {
        return this._Nome_RazaoSocial;
    }

    set nome(value: string) {
        this._Nome_RazaoSocial = value;
    }

    get cpf(): string {
        return this._CPF_CNPJ;
    }

    set cpf(value: string) {
        this._CPF_CNPJ = value;
    }

    get telefone(): string {
        return this._Telefone;
    }

    set telefone(value: string) {
        this._Telefone = value;
    }

    get endereco(): string {
        return this._Endereco;
    }

    set endereco(value: string) {
        this._Endereco = value;
    }
}
let fornecedor1 = new Fornecedor(1, 'Strawplast', "02.591.442/0001-85", "(48) 3657-8000", "Rua Augusto Becker, 1132");
console.log(fornecedor1);
