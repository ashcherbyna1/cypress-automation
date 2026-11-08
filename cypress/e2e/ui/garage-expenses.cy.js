import expensesPage from "../../support/page-objects/expensesPage";
import garagePage from "../../support/page-objects/garagePage";

describe("Garage and fuel expenses", () => {
  beforeEach(() => {
    cy.env(["userEmail", "userPassword"]).then((user) => {
      cy.login(user.userEmail, user.userPassword);
      cy.location("pathname").should("include", "/panel/garage");
    });
  });

  it("adds a car and records fuel expenses for it", () => {
    const carName = "Audi R8";

    garagePage.addCar("Audi", "R8", 100);
    garagePage.carCard(carName).should("be.visible");
    garagePage.addFuelExpenseButton(carName).click();

    expensesPage
      .mileageInput()
      .clear()
      .type("150")
      .blur()
      .should("have.value", "150");
    expensesPage.litersInput().type("10");
    expensesPage.totalCostInput().type("50");
    expensesPage.addButton().should("be.enabled").click();

    expensesPage.open();
    expensesPage.emptyState().should("not.exist");
  });
});
