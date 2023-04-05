import { Fornecedor } from "./Fornecedor";
import { Estoque } from "./Estoque";
import { Produto } from "./Produto";

let fornecedor1 = new Fornecedor(1, 'Strawplast', "02.591.442/0001-85", "(48) 3657-8000", "Rua Augusto Becker, 1132");
console.log(fornecedor1);

let produto1 = new Produto(167, 'Colher longa', fornecedor1, 20.90);
console.log(produto1);

//Provando que a validação do valor do produto funciona
let produto2 = new Produto(167, 'Colher longa', fornecedor1, -20.90);
console.log(produto2);


let estoque1 = new Estoque(45, produto1, 80);
console.log(estoque1);

// prova que a validação funciona
let estoque2 = new Estoque(45, produto1, -80);
console.log(estoque2);

estoque1.ValorDoProdutoEmEstoque();






