import { Fornecedor } from "./Fornecedor";
import { Estoque } from "./Estoque";
import { Produto } from "./Produto";

let fornecedor1 = new Fornecedor(1, 'Strawplast', "02.591.442/0001-85", "(48) 3657-8000", "Rodovia SC 108 Km 324, nº3000 - Santo Antônio, São Ludgero - SC");
console.log(fornecedor1);

let produto1 = new Produto(167, 'Colher longa', fornecedor1, 20.90);
console.log(produto1);
let estoque1 = new Estoque(45, produto1, 80);
console.log(estoque1);
estoque1.ValorDoProdutoEmEstoque();

//Provando que a validação do valor do produto funciona
let produto2 = new Produto(167, 'Colher longa', fornecedor1, 210.90);
console.log(produto2);

//Prova que a validação funciona
let estoque2 = new Estoque(45, produto2, -80);
console.log(estoque2);
estoque2.ValorDoProdutoEmEstoque();






