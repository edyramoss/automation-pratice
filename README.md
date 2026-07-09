Cypress Web Automation

Projeto de automação de testes para aplicações Web utilizando Cypress.

Pré-requisitos

Antes de começar, é necessário ter instalado:

Node.js (versão 18 ou superior)
npm (instalado juntamente com o Node.js)
Instalação

Clone o repositório:

git clone <URL_DO_REPOSITORIO>

Acesse a pasta do projeto:

cd <NOME_DO_PROJETO>

Instale as dependências:

npm install
Executando os testes
Abrir o Cypress (modo interativo)
npx cypress open
Executar todos os testes (modo headless)
npx cypress run
Executar um teste específico
npx cypress run --spec "cypress/e2e/nome-do-teste.cy.js"
Estrutura do projeto
cypress/
├── e2e/            # Casos de teste
├── fixtures/       # Massa de dados
├── support/        # Comandos customizados e configurações
└── downloads/      # Arquivos baixados durante os testes (quando utilizado)

cypress.config.js
package.json
README.md
Scripts úteis

Caso existam scripts configurados no package.json, eles podem ser executados da seguinte forma:

npm test

ou

npm run cypress:open
npm run cypress:run
Tecnologias utilizadas
Cypress
JavaScript
Node.js
Autor

Desenvolvido para automação de testes Web utilizando Cypress.
