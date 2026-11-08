class ExpensesPage {
  open() {
    cy.contains("a", "Fuel expenses").click();
  }

  mileageInput() {
    return cy.get("#addExpenseMileage");
  }

  litersInput() {
    return cy.get("#addExpenseLiters");
  }

  totalCostInput() {
    return cy.get("#addExpenseTotalCost");
  }

  addButton() {
    return cy.get(".modal").last().contains("button", /^Add$/);
  }

  emptyState() {
    return cy.contains("fuel expenses filed in");
  }
}

export default new ExpensesPage();
