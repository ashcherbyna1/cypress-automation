class GaragePage {
  addCarButton() {
    return cy.contains("button", "Add car");
  }

  brandSelect() {
    return cy.get("#addCarBrand");
  }

  modelSelect() {
    return cy.get("#addCarModel");
  }

  mileageInput() {
    return cy.get("#addCarMileage");
  }

  addCar(brand, model, mileage) {
    this.addCarButton().click();
    this.brandSelect().select(brand);
    this.modelSelect().select(model);
    this.mileageInput().clear().type(String(mileage));
    cy.get(".modal").last().contains("button", /^Add$/).click();
  }

  carCard(name) {
    return cy.contains("li", name);
  }

  addFuelExpenseButton(carName) {
    return this.carCard(carName).contains("button", "Add fuel expense");
  }
}

export default new GaragePage();
