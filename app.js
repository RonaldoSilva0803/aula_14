const contasBanco = require('./modulos');
const modulos = require('./modulos');
//console.log(modulos)

let banco = {
    clientes : contasBanco 
}
//console.log(banco)

function consultarClientes (nome){
    return nome.titular === 'Jarret Lafuente'
}
console.log(contasBanco.find(consultarClientes));