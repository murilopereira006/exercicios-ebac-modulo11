/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

const name = faker.internet.userName()
const email = faker.internet.email(name)

describe('Registrando usuario na lojaebac', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
  })

  it('Adicionando dados ao pre-cadastro da lojaebac', () => {
    cy.get('.icon-user-unfollow').click()
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type('teste@teste.com')
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
  })
})
