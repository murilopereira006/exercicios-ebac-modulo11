/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

const name = faker.internet.userName()
const email = faker.internet.email(name)

describe('Login na plataforma da lojaebac', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
  })

  it('Acessar pagina de Login com sucesso', () => {
    cy.get('.icon-user-unfollow').click()
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
  })

  it('Acessar pagina de Login sem email cadastrado', () => {
    cy.get('.icon-user-unfollow').click()
    cy.get('#username').type(email)
    cy.get('#password').type('123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('exist')
  })
})
