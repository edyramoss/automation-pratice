export function acessaLogin() {
    cy.visit('https://automationpratice.com.br/login')
}

export function preencheEmail(email) {
    cy.get('#user').type(email)
}

export function preencheSenha(senha) {
    cy.get('#password').type(senha)
}

export function clicaLogin() {
    cy.get('#btnLogin').click()
}

export function verificaLogin() {
    cy.get('#swal2-title').should('be.visible').and('have.text', 'Login realizado')
}

export function verificaEmail() {
    cy.get('.invalid_input').should('be.visible').and('have.text', 'E-mail inválido.')
}

export function verificaSenha() {
    cy.get('.invalid_input').should('be.visible').and('have.text', 'Senha inválida.')
}

export function loginSucesso(email, senha) {
    acessaLogin()
    preencheEmail(email)
    preencheSenha(senha)
    clicaLogin()
    verificaLogin()
}