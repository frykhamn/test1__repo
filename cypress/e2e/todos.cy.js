/// <reference types="cypress"/>

describe('Interacting with Todo', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Has one h2 header, with text "Todos 3000!"', () => {
    cy.visit('/')
    cy.get('h2').should('have.text', "Todos 3000!")
  })

  it('Can add new todos through the input field and add button, latest on top', () => {

    const testSentence1 = "Diska disken"
    const testSentence2 = "Städa köket"

    cy.get("#input-field").type(testSentence1)
    cy.get("#add-btn").click()

    cy.get("#todos")
      .find(".todo")
      .should('have.length', 1)
      .and('contain.text', testSentence1)

    cy.get("#input-field").type(testSentence2)
    cy.get("#add-btn").click()

    cy.get("#todos")
      .find(".todo")
      .should('have.length', 2)

    cy.get("#todos")
      .find(".todo")
      .last()
      .should('contain.text', testSentence2)

  })

  it('Can remove a todo', () => {

    const testSentence = "Diska disken"

    cy.get("#input-field").type(testSentence)
    cy.get("#add-btn").click()
    cy.get("#todos").find(".todo").should('have.length', 1)

    cy.get(".remove-btn").click()
    cy.get("#todos").find(".todo").should("not.exist")

  })

})