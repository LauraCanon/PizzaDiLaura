describe("my first test", () => {
  it("Navigate", () => {
    cy.visit("http://localhost:3000/");
  });

  it("Pizza Di Laura can be open", () => {
    cy.contains("Pizza Di Laura");
    cy.wait(3000);
  });
  it("Customize can be clicked", () => {
    cy.contains("Create").click();
    cy.get('[type="checkbox"]').check("Original");
    cy.get('[type="checkbox"]').check("Marinara Sauce");
    cy.get('[type="checkbox"]').check("Mozzarella");
    cy.get('[type="checkbox"]').check("Pepperoni");
    cy.get('[type="checkbox"]').check("Tomato");
    cy.get('[placeholder="Name"]').type("Laura");
    cy.get('[placeholder="Last Name"]').type("Canon");
    cy.get('[placeholder="Phone"]').type("3002272623");
    cy.wait(4000);
    cy.contains("Add Order").click();
  });
});
describe("Navigate to Orders Historial", () => {
  it("Orders Historial", () => {
    cy.visit("http://localhost:3000/historial");
  });

  it("Order Detail", () => {
    cy.contains("Laura Canon");
    cy.wait(4000);
  });
  it("Order Detail can be clicked and deleted", () => {
    cy.contains("Laura Canon").click();
    cy.wait(4000);
    cy.contains("Delete").click();
  });
});
