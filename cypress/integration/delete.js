describe("delete test", () => {
  it("delete item ", () => {
    cy.visit("/")
    cy.get(".todo-list > li .taskDelete")
      .eq(0)
      .click()
  })
})
