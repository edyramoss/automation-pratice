export function fechaPopup() {
    cy.get('.swal2-confirm').click()
}

export function acessaCarrinho() {
    cy.get(':nth-child(3) > .offcanvas-toggle > .fa').click()
}

export function acessaCheckout() {
    cy.get('.offcanvas-cart-action-button > :nth-child(2) > .theme-btn-one').click()
}

export function verificaPageCheckout() {
    cy.get('.checkout-area-bg > .check-heading > h3').should('be.visible').and('have.text', 'Billings Information')
}

export function preencheNome(nome) {
    cy.get('#fname').type(nome)
}

export function preencheSobrenome(sobrenome) {
    cy.get('#lname').type(sobrenome)
}

export function preencheCompany(company) {
    cy.get('#cname').type(company)
}

export function preencheEmail(email) {
    cy.get('#email').type(email)
}

export function preenchePais(pais) {
    cy.get('#country').select(pais)
}

export function preencheCidade(cidade) {
    cy.get('#city').select(cidade)
}

export function preencheCep(cep) {
    cy.get('#zip').type(cep)
}

export function preencheEndereco(endereco) {
    cy.get('#faddress').type(endereco)
}

export function preencheObservacoes(observacoes) {
    cy.get('#messages').type(observacoes)
}

export function checkSaveInfo() {
    cy.get('#materialUnchecked').check()
}

export function clicaSave() {
    cy.get('.checkout-area-bg > .theme-btn-one').click()
}

export function confirmaDados() {
    cy.get('#checkout_one').should('contain', 'Billings Information registred with success!')
}

export function confirmaErroDados() {
    cy.get('#checkout_one').should('not.contain', 'Billings Information registred with success!')
}

export function selecionaPagamento() {
    cy.get('#headingTwo > .collapsed > [name="payment"]').check()
}

export function confirmaPagamento() {
    cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()
}

export function verificaSuccess() {
    cy.get('.offer_modal_left > h3').should('be.visible').and('have.text', 'Congrats! Your order was created with sucess!')
}

export function verificaErro() {
    cy.get('.offer_modal_left > h3').should('not.be.visible')
}

export function erroNome() {
    cy.get('#errorMessageFirstName').should('be.visible').and('have.text', 'O campo First Name deve ser prenchido')
}

export function erroSobrenome() {
    cy.get('#errorMessageFirstName').should('be.visible').and('have.text', 'O campo Last Name deve ser prenchido')
}

export function erroCmpany() {
    cy.get('#errorMessageFirstName').should('be.visible').and('have.text', 'O campo Company deve ser prenchido')
}

export function erroEmail() {
    cy.get('#errorMessageFirstName').should('be.visible').and('have.text', 'O campo E-mail deve ser prenchido ou é inválido')
}

export function erroPais() {
    cy.get('#errorMessageFirstName').should('be.visible').and('have.text', 'O campo Country deve ser prenchido')
}

export function erroCidade() {
    cy.get('#errorMessageFirstName').should('be.visible').and('have.text', 'O campo City deve ser prenchido')
}

export function erroCep() {
    cy.get('#errorMessageFirstName').should('be.visible').and('have.text', 'O campo Zip Code deve ser prenchido')
}

export function erroEndereco() {
    cy.get('#errorMessageFirstName').should('be.visible').and('have.text', 'O campo Address deve ser prenchido')
}

export function erroObservacoes() {
    cy.get('#errorMessageFirstName').should('be.visible').and('have.text', 'O campo Additional Notes deve ser prenchido')
}