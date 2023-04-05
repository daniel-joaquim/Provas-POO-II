"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Fornecedor_1 = require("./Fornecedor");
const Estoque_1 = require("./Estoque");
const Produto_1 = require("./Produto");
let fornecedor1 = new Fornecedor_1.Fornecedor(1, 'Strawplast', "02.591.442/0001-85", "(48) 3657-8000", "Rua Augusto Becker, 1132");
console.log(fornecedor1);
let produto1 = new Produto_1.Produto(167, 'Colher longa', fornecedor1, 20.90);
console.log(produto1);
//Provando que a validação do valor do produto funciona
let produto2 = new Produto_1.Produto(167, 'Colher longa', fornecedor1, -20.90);
console.log(produto2);
let estoque1 = new Estoque_1.Estoque(45, produto1, 80);
console.log(estoque1);
// prova que a validação funciona
let estoque2 = new Estoque_1.Estoque(45, produto1, -80);
console.log(estoque2);
estoque1.ValorDoProdutoEmEstoque();
