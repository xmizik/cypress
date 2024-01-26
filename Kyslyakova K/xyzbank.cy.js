describe('XYZBANK', () => {
  beforeEach(() => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
  })

  it('Проверка Работоспособности сайта', () => {
    const newItem = 'standard_user'

    cy.get('button[ng-click="manager()"]').should('be.visible')
    cy.get('button[ng-click="customer()"]').should('be.visible')
  })

  it('Проверка Функционала выбора аккаунта ', () => {
    cy.get('button[ng-click="customer()"]').click()
    cy.get('select').select('Harry Potter')
  })

  it('Проверка Функционала Входа, выхода и смены аккаунта', () => {
    cy.get('button[ng-click="customer()"]').click()
    cy.get('select').select('Harry Potter')
    cy.contains('Login').click()
    cy.contains('Logout').click()
    cy.get('select').select('Hermoine Granger')
    cy.contains('Login').click()
  })
  

  it('Проверка Функционала депозита средств', () => {
    cy.get('button[ng-click="customer()"]').click()
    cy.get('select').select('Harry Potter')
    cy.get('.btn.btn-default').click()
    cy.contains('Deposit').click()
    cy.get('input[ng-model="amount"]').type('1337228322')
    cy.get('.btn.btn-default').click()
    
})

it('Проверка функционала вывода средств', () => {
  cy.get('button[ng-click="customer()"]').click()
  cy.get('select').select('Harry Potter')
  cy.contains('Login').click()
  cy.contains('Deposit').click()
  cy.get('input[ng-model="amount"]').type('1337228322')
  cy.get('.btn.btn-default').click()
  cy.contains('Withdraw').click()
  cy.get('input[ng-model="amount"]').type('1007')
  cy.get('.btn.btn-default').click()
  cy.get('input[ng-model="amount"]').type('1007')
  cy.get('.btn.btn-default').click()
})


it('Проверка функционала менеджера банка на добавление, открытие и удаление счёта', () => {
  cy.get('button[ng-click="manager()"]').click()
  cy.contains('Add Customer').click()
  cy.get('input[ng-model="fName"]').type('John')
  cy.get('input[ng-model="lName"]').type('Doe')
  cy.get('input[ng-model="postCd"]').type('12345')
  cy.get('button[type="submit"]').click()
  cy.contains('Open Account').click()
  cy.get('select[ng-model="custId"]').select('John Doe')
  cy.get('select[ng-model="currency"]').select('Dollar')
  cy.contains('Process').click()
  cy.contains('Customers').click()
  cy.get('button[ng-click="deleteCust(cust)"]').last().click()
  cy.contains('John Doe').should('not.exist')
})

})
