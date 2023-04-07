"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Fornecedor_1 = require("./Fornecedor");
const Estoque_1 = require("./Estoque");
const Produto_1 = require("./Produto");
let fornecedor1 = new Fornecedor_1.Fornecedor(1, 'Strawplast', "02.591.442/0001-85", "(48) 3657-8000", "Rodovia SC 108 Km 324, nº3000 - Santo Antônio, São Ludgero - SC");
console.log(fornecedor1);
let produto1 = new Produto_1.Produto(167, 'Colher longa', fornecedor1, 20.90);
console.log(produto1);
let estoque1 = new Estoque_1.Estoque(45, produto1, 80);
console.log(estoque1);
estoque1.ValorDoProdutoEmEstoque();
//Provando que a validação do valor do produto funciona
let produto2 = new Produto_1.Produto(167, 'Colher longa', fornecedor1, 210.90);
console.log(produto2);
//Prova que a validação funciona
let estoque2 = new Estoque_1.Estoque(45, produto2, -80);
console.log(estoque2);
estoque2.ValorDoProdutoEmEstoque();
