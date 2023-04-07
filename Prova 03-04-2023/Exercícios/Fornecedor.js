"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fornecedor = void 0;
class Fornecedor {
    _ID;
    _Nome_RazaoSocial;
    _CPF_CNPJ;
    _Telefone;
    _Endereco;
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
    set id(id) {
        this._ID = id;
    }
    get nome() {
        return this._Nome_RazaoSocial;
    }
    set nome(nome) {
        this._Nome_RazaoSocial = nome;
    }
    get cpf() {
        return this._CPF_CNPJ;
    }
    set cpf(cpf) {
        this._CPF_CNPJ = cpf;
    }
    get telefone() {
        return this._Telefone;
    }
    set telefone(telefone) {
        this._Telefone = telefone;
    }
    get endereco() {
        return this._Endereco;
    }
    set endereco(endereco) {
        this._Endereco = endereco;
    }
}
exports.Fornecedor = Fornecedor;
