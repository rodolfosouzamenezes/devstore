describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to navigate to the product page and add it to the cart', () => {
    // Vista o pagina de algum produto
    cy.get('a[href^="/product"]').first().click()
    cy.url().should('include', '/product')

    // Adiciona ao carrinho
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart (1)').should('exist')
  })

  it('should not count duplicated products on cart', () => {
    // Vista o pagina de algum produto
    cy.get('a[href^="/product"]').first().click()
    cy.url().should('include', '/product')

    // Adiciona ao carrinho e virifica se não duplicou
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart (1)').should('exist')
  })

  it('should be able to search for a product and add it to the cart', () => {
    // Pesquisa e visita a página de produto
    cy.get('input[name=q]').type('moletom').parent('form').submit()
    cy.get('a[href^="/product"]').first().click()
    cy.url().should('include', '/product')

    // Adiciona ao carrinho e virifica se não duplicou
    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Cart (1)').should('exist')
  })
})
