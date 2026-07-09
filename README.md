# Cypress Web Automation

Projeto de automação de testes para aplicações Web utilizando
**Cypress**.

## Pré-requisitos

-   Node.js (versão 18 ou superior)
-   npm

## Instalação

``` bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
npm install
```

## Executando os testes

### Modo interativo

``` bash
npx cypress open
```

### Modo headless

``` bash
npx cypress run
```

### Executar um teste específico

``` bash
npx cypress run --spec "cypress/e2e/nome-do-teste.cy.js"
```

## Estrutura do projeto

``` text
cypress/
├── e2e/
├── fixtures/
├── support/
└── downloads/

cypress.config.js
package.json
README.md
```

## Tecnologias utilizadas

-   Cypress
-   JavaScript
-   Node.js
