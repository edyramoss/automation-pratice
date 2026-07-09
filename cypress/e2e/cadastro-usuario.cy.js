/// <reference types="cypress"/>

import { faker } from '@faker-js/faker'
import { acessaCadastro, clicaCadastrar, preencheEmail, preencheNome, preencheSenha, verificaEmail, verificaNome, verificaSenha, verifiicaCadastro } from '../support/pages/cadastro_pages'

describe('Cadastro de Usuário', () => {
    beforeEach(() => {
        acessaCadastro()
    })
    it('Sucesso', () => {
        preencheNome(faker.person.firstName())
        preencheEmail(faker.internet.email())
        preencheSenha(faker.internet.password())
        clicaCadastrar()
        verifiicaCadastro()
    })
    it('Nome em Branco', () => {
        preencheEmail(faker.internet.email())
        preencheSenha(faker.internet.password())
        clicaCadastrar()
        verificaNome()
    })
    it('Email em Branco', () => {
        preencheNome(faker.person.firstName())
        preencheSenha(faker.internet.password())
        clicaCadastrar()
        verificaEmail()
    })
    it('Senha em Branco', () => {
        preencheNome(faker.person.firstName())
        preencheEmail(faker.internet.email())
        clicaCadastrar()
        verificaSenha()
    })
    it('Email Inválido', () => {
        preencheNome(faker.person.firstName())
        preencheEmail('teste@teste')
        preencheSenha(faker.internet.password())
        clicaCadastrar()
        verificaEmail()
    })
    it('Senha Inválida', () => {
        preencheNome(faker.person.firstName())
        preencheEmail(faker.internet.email())
        preencheSenha(faker.string.numeric(4))
        clicaCadastrar()
        verificaSenha()
    })
})