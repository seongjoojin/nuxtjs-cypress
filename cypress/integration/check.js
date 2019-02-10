describe("check test", () => {
  it("check item ", () => {
    cy.visit("/")
    cy.get(".todo-list > li .taskCheckbox input")
      .eq(0)
      .check()
  })
})
