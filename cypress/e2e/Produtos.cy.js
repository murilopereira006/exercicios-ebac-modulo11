/// <reference types="cypress" />

describe('Adicionar produto ao carrinho', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
  })

  it('Adicionando Rolex na Promoção no carrinho', () => {
    cy.get('[class="product-block grid"]').eq(3).click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 1)
  })
})
