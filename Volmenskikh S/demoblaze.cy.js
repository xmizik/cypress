describe('demoblaze', () => {
  beforeEach('passes', () => {
    cy.visit('https://www.demoblaze.com/')
  })

  it('Проверка возможна ли покупка с пустой корзиной', () => {
    cy.get('#cartur').click()
    cy.contains('Place Order').click()
  
    cy.get('#name').type('John Doe')
    cy.get('#country').type('United States')
    cy.get('#city').type('New York')
    cy.get('#card').type('1234567890')
    cy.get('#month').type('01')
    cy.get('#year').type('2023')
    cy.contains('Purchase').click()
    cy.contains('OK').click()


  
  })


  it('Проверка Категорий', () => {
    cy.contains('Phones').click()
    cy.contains('Laptops').click()
    cy.contains('Monitors').click()
  })

  it('Проверка страницs', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('.page-item').find('#next2.page-link').click()   
    cy.get('.page-item').find('#prev2.page-link').click()  
   
  })

  

  it('Проверка корзины (3+ и 3-)', () => {
    cy.contains('Samsung galaxy s6').click()
    cy.contains('Add to cart').click()
    cy.contains('Home ').click()
    cy.contains('Nokia lumia 1520').click()
    cy.contains('Add to cart').click()
    cy.contains('Home ').click()
    cy.contains('Sony vaio i5').click()
    cy.contains('Add to cart').click()
    cy.get('#cartur').click()
    cy.contains('Samsung galaxy s6').should('be.visible')
    cy.contains('Nokia lumia 1520').should('be.visible')
    cy.contains('Sony vaio i5').should('be.visible')
    cy.contains('Samsung galaxy s6').parent().contains('Delete').click()
    cy.contains('Nokia lumia 1520').parent().contains('Delete').click()
    cy.contains('Samsung galaxy s6').should('not.exist')
    cy.contains('Nokia lumia 1520').should('not.exist')
    cy.contains('Sony vaio i5').should('be.visible')
  })

  it('Проверка покупки', () => {
    cy.contains('Laptop').click()
    cy.contains('Sony vaio i5').click()
    cy.contains('Add to cart').click()
    cy.get('#cartur').click()
    cy.contains('Place Order').click()
    cy.get('#name').type('John Doe')
    cy.get('#country').type('United States')
    cy.get('#city').type('New York')
    cy.get('#card').type('1234567890')
    cy.get('#month').type('01')
    cy.get('#year').type('2023')
    cy.contains('Purchase').click()
    cy.contains('OK').click()

})




})


///it('should register a new user and log in on the DemoBlaze website', () => {
//  // Переход на сайт
  //cy.visit('https://www.demoblaze.com/')

  // Регистрация нового пользователя
 // cy.contains('Sign up').click()
//  //cy.get('.ml-auto').click(67.69, 40 ,{force: true})
//  cy.get('#sign-username').type('testuser')
 // cy.get('#sign-password').type('testpassword')
  //cy.contains('Sign up').click()

  // Проверка успешной регистрации
 // cy.on('window:alert', (str) => {
  //  expect(str).to.equal('Sign up successful.')
 // })

  // Вход на сайт с использованием созданных учетных данных
  //cy.contains('Log in').click()
 // cy.get('#loginusername').type('testuser')
 // cy.get('#loginpassword').type('testpassword')
//  cy.contains('Log in').click()

  // Проверка успешного входа на сайт
 // cy.contains('Welcome testuser').should('be.visible')
//})

//it('Проверка вкладки контакты', () => {
  //cy.get('.ml-auto').click(71.48, 40 ,{force: true})
  //cy.get('#recipient-email').type('example@example.com')
 // cy.get('#recipient-name').type('John Doe')
  //cy.get('#message-text').type('<<<<<<3333333')
  //cy.contains('Send message').click()
 // cy.on('window:alert', (str) => {
  //  expect(str).to.equal('Thanks for the message!!')
  //})
//}
