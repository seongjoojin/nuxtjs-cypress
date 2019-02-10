describe("loading test", () => {
  it("visit home ", () => {
    cy.visit("/")
    cy.get("h2").contains("Vue Todo")
  })
})
