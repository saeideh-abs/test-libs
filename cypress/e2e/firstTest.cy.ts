describe("template spec", () => {
  beforeEach(() => {
    // cy.visit("http://localhost:3000");
    cy.visit(Cypress.config("baseUrl") as string);
  });

  it("passes", () => {
    cy.get('[data-testid="title"]').should("exist");
    // .should("have.text", "Count:");
  });

  it.only("test login input", () => {
    cy.get(".my-input[placeholder='username']")
      .type("username")
      .should("have.value", "username");
  });

  it.only("submit login form", () => {
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/users/1", {
      statusCode: 200,
      body: {
        id: 1,
        name: "saeideh",
      },
    });

    cy.get(".my-input[placeholder='username']").type("username");
    cy.get(".my-input[placeholder='password']").type("password");
    cy.get("button[type='submit']").click();
    cy.get("[data-testid='welcome-msg']").should("contain", "saeideh");
  });

  context("form submission", () => {});
});
