Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@exempla.com',
    text: 'test.'
}) => {
    cy.get('#firstName').type (data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.email)
    cy.contains ('button','Enviar').click()
})
