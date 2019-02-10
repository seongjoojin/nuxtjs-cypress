describe("add test", () => {
  it("add item ", () => {
    cy.visit("/")
    cy.get(".input-text")
      .type("Hello, world!")
      .click()
  })
})
