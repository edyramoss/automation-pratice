export function acessaCadastro() {
    cy.visit('https://automationpratice.com.br/register')
}

export function preencheNome(nome) {
    cy.get('#user').type(nome)
}

export function preencheEmail(email) {
    cy.get('#email').type(email)
}

export function preencheSenha(senha) {
    cy.get('#password').type(senha)
}

export function clicaCadastrar() {
    cy.get('#btnRegister').click()
}

export function verifiicaCadastro() {
    cy.get('#swal2-title').should('be.visible').and('have.text', 'Cadastro realizado!') 
}

export function verificaNome() {
    cy.get('#errorMessageFirstName').should('be.visible').and('have.text', 'O campo nome deve ser prenchido')
}

export function verificaEmail() {
    cy.get('#errorMessageFirstName').should('be.visible').and('have.text', 'O campo e-mail deve ser prenchido corretamente')
}

export function verificaSenha() {
    cy.get('#errorMessageFirstName').should('be.visible').and('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
}