describe('sauce', () => {
  beforeEach(() => { 
const wrong = 'vitya_god'
const good = 'standard_user'
    cy.visit('https://www.saucedemo.com/v1/')
  
  })
  it('Проверка неправильного входа', () => {
    cy.get('[data-test="username"]').type(`${wrong}`)
    cy.get('[data-test="password"]').type(`secret_sauce{enter}`)
  })
  it('Проверка входа', () => {
    cy.get('[data-test="username"]').type(`${good}`)
    cy.get('[data-test="password"]').type(`secret_sauce{enter}`)
  })
  
  it('Изменение фильтра', () => {
    cy.get('[class="product_sort_container"]').select('Price (high to low)')
    cy.get('.inventory_item_price').then($prices => {
    })
  })


    it('Проверка добавления товара в корзину', () => {
      cy.get('.inventory_item:first-child .btn_primary').click()
      cy.get('.shopping_cart_badge').should('have.text', '1')
    })

  
    it('Добавление и Удаление трех разных товаров из корзины', () => {
      cy.get('.inventory_item_name').eq(0).invoke('text').as('firstProductName')
      cy.get('.inventory_item').eq(0).find('.btn_primary').click()
      cy.get('.shopping_cart_badge').should('contain', '1')
  
      cy.get('.inventory_item_name').eq(1).invoke('text').as('secondProductName')
      cy.get('.inventory_item').eq(1).find('.btn_primary').click()
      cy.get('.shopping_cart_badge').should('contain', '2')
  
      cy.get('.inventory_item_name').eq(2).invoke('text').as('thirdProductName')
      cy.get('.inventory_item').eq(2).find('.btn_primary').click()
      cy.get('.shopping_cart_badge').should('contain', '3')
  
      cy.get('.shopping_cart_link').click()
  
      cy.get('.cart_list .cart_item').eq(0).find('.cart_button').click()
      cy.get('.cart_list .cart_item').eq(0).find('.cart_button').click()
      cy.get('.cart_list .cart_item').eq(0).find('.cart_button').click()
  
      cy.get('.shopping_cart_badge').should('not.exist')
    })
 
    it('Добавление товара, нажатие на кнопку "Checkout" и заполнение полей', () => {
      cy.get('.inventory_item_name').eq(0).invoke('text').as('productName')
      cy.get('.inventory_item').eq(0).find('.btn_primary').click()
      cy.get('.shopping_cart_badge').should('contain', '1')
      cy.get('.shopping_cart_link').click()
      cy.get('.cart_footer').eq(0).find('.btn_action').click()
      cy.get('[data-test=firstName]').type('John')
      cy.get('[data-test=lastName]').type('Doe')
      cy.get('[data-test=postalCode]').type('12345')
      cy.get('.checkout_buttons').find('.btn_primary').click()
    })
  }) 
