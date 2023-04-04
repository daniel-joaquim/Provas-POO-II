"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fornecedor = void 0;
class Fornecedor {
    constructor(id, nome, cpf, telefone, endereco) {
        this._ID = id;
        this._Nome_RazaoSocial = nome;
        this._CPF_CNPJ = cpf;
        this._Telefone = telefone;
        this._Endereco = endereco;
    }
    get id() {
        return this._ID;
    }
    set id(value) {
        this._ID = value;
    }
    get nome() {
        return this._Nome_RazaoSocial;
    }
    set nome(value) {
        this._Nome_RazaoSocial = value;
    }
    get cpf() {
        return this._CPF_CNPJ;
    }
    set cpf(value) {
        this._CPF_CNPJ = value;
    }
    get telefone() {
        return this._Telefone;
    }
    set telefone(value) {
        this._Telefone = value;
    }
    get endereco() {
        return this._Endereco;
    }
    set endereco(value) {
        this._Endereco = value;
    }
}
exports.Fornecedor = Fornecedor;
let fornecedor1 = new Fornecedor(1, 'Strawplast', "02.591.442/0001-85", "(48) 3657-8000", "Rua Augusto Becker, 1132");
console.log(fornecedor1);
