"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tiposDeVeiculo_1 = require("./tiposDeVeiculo");
const tiposDeVeiculo_2 = require("./tiposDeVeiculo");
const ordemCombustivel_1 = require("./ordemCombustivel");
const controleOrdemCombustivel_1 = require("./controleOrdemCombustivel");
// criando instâncias de veículos
const carro1 = new tiposDeVeiculo_1.Carro('ABC-1234', 'Fiat', 'Uno', 'Gasolina Comum');
const carro2 = new tiposDeVeiculo_1.Carro('DEF-5678', 'Chevrolet', 'Onix', 'Gasolina Aditivada');
const caminhao1 = new tiposDeVeiculo_2.Caminhao('GHI-9012', 'Scania', 'R450', 'Diesel');
const caminhao2 = new tiposDeVeiculo_2.Caminhao('JKL-3456', 'Volvo', 'FH16', 'Diesel');
// criando instâncias de ordens de combustível
const ordem1 = new ordemCombustivel_1.OrdemCombustivel(carro1, 0, new Date(), 1);
const ordem2 = new ordemCombustivel_1.OrdemCombustivel(carro2, 90, new Date(), 2);
const ordem3 = new ordemCombustivel_1.OrdemCombustivel(caminhao1, 100, new Date(), 3);
const ordem4 = new ordemCombustivel_1.OrdemCombustivel(caminhao2, 440, new Date(), 4);
// criando instância do controle de ordens de combustível
const controle = new controleOrdemCombustivel_1.ControleOrdemCombustivel();
// adicionando as ordens ao controle
controle.adicionarOrdemCombustivel(ordem1);
controle.adicionarOrdemCombustivel(ordem2);
controle.adicionarOrdemCombustivel(ordem3);
controle.adicionarOrdemCombustivel(ordem4);
// listando as ordens de combustível
controle.listarOrdensCombustivel();
// obtendo a quantidade total de litros abastecidos
const totalLitros = controle.obterTotalLitrosAbastecidos();
console.log(`Total de litros abastecidos: ${totalLitros}`);
