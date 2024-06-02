class ContaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numeroConta = numeroConta;
        this.saldo = 0; // Saldo inicial
    }

    contaPoupanca(valor, meses) {
        const taxa = 1.5; // Taxa em porcentagem
        for (let i = 0; i < meses; i++) {
            this.saldo += this.saldo * (taxa / 100); // Aplica a taxa de 1,5% ao saldo atual
        }
        this.saldo += valor; // Adiciona o valor depositado ao saldo
        return this.saldo;
    }

    contaCorrente(valor, meses) {
        const taxa = 3.6; // Taxa em porcentagem
        for (let i = 0; i < meses; i++) {
            this.saldo += this.saldo * (taxa / 100); // Aplica a taxa de 3,6% ao saldo atual
        }
        this.saldo += valor; // Adiciona o valor depositado ao saldo
        return this.saldo;
    }

    contaEstudante(valor, meses) {
        const taxa = 1.2; // Taxa em porcentagem
        for (let i = 0; i < meses; i++) {
            this.saldo += this.saldo * (taxa / 100); // Aplica a taxa de 1,2% ao saldo atual
        }
        this.saldo += valor; // Adiciona o valor depositado ao saldo
        return this.saldo;
    }
}

// Criar objetos para cada tipo de conta
const contaPoupanca = new ContaBancaria("Lucas", 23, 3000, "Masculino", "1234", "Poupança", "56789");
const contaCorrente = new ContaBancaria("Lucas", 23, 2000, "Masculino", "1234", "Corrente", "56789");
const contaEstudante = new ContaBancaria("Lucas", 23, 1000, "Masculino", "1234", "Estudante", "56789");

// Aplicar taxas e depositar um valor
contaPoupanca.contaPoupanca(1000, 3);
contaCorrente.contaCorrente(1000, 3);
contaEstudante.contaEstudante(1000, 3);

// Imprimir informações do usuário e novos saldos
console.log("Conta Poupança:");
console.log(`Nome: ${contaPoupanca.nome}`);
console.log(`Idade: ${contaPoupanca.idade}`);
console.log(`Salário: ${contaPoupanca.salario}`);
console.log(`Sexo: ${contaPoupanca.sexo}`);
console.log(`Agência: ${contaPoupanca.agencia}`);
console.log(`Conta: ${contaPoupanca.conta}`);
console.log(`Número da Conta: ${contaPoupanca.numeroConta}`);
console.log(`Novo Saldo: ${contaPoupanca.saldo}`);

console.log("\nConta Corrente:");
console.log(`Nome: ${contaCorrente.nome}`);
console.log(`Idade: ${contaCorrente.idade}`);
console.log(`Salário: ${contaCorrente.salario}`);
console.log(`Sexo: ${contaCorrente.sexo}`);
console.log(`Agência: ${contaCorrente.agencia}`);
console.log(`Conta: ${contaCorrente.conta}`);
console.log(`Número da Conta: ${contaCorrente.numeroConta}`);
console.log(`Novo Saldo: ${contaCorrente.saldo}`);

console.log("\nConta Estudante:");
console.log(`Nome: ${contaEstudante.nome}`);
console.log(`Idade: ${contaEstudante.idade}`);
console.log(`Salário: ${contaEstudante.salario}`);
console.log(`Sexo: ${contaEstudante.sexo}`);
console.log(`Agência: ${contaEstudante.agencia}`);
console.log(`Conta: ${contaEstudante.conta}`);
console.log(`Número da Conta: ${contaEstudante.numeroConta}`);
console.log(`Novo Saldo: ${contaEstudante.saldo}`);