/// <reference types="cypress"/>

import { faker } from '@faker-js/faker'
import { acessaLogin, clicaLogin, loginSucesso, preencheEmail, preencheSenha, verificaEmail, verificaLogin, verificaSenha } from '../support/pages/login_page'

describe('Login', () => {

    beforeEach(() => {
        acessaLogin() 
    })

    it('Sucesso', () => {
        loginSucesso(faker.internet.email(), faker.internet.password())
    })
    it('Email em Branco', () => {
        preencheSenha(faker.internet.password())
        clicaLogin()
        verificaEmail()
    })
    it('Senha em Branco', () => {
        preencheEmail(faker.internet.email())
        clicaLogin()
        verificaSenha()
    })
    it('Email Inválido', () => {
        preencheEmail('teste.com')
        preencheSenha(faker.internet.password())
        clicaLogin()
        verificaEmail()
    })
    it('Senha Inválida', () => {
        preencheEmail(faker.internet.email())
        preencheSenha(faker.string.numeric(4))
        clicaLogin()
        verificaSenha()
    })
})