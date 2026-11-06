class RegistrationPage {
  open() {
    cy.get('.hero-descriptor_btn').click();
  }

  title() {
    return cy.contains('h4', 'Registration');
  }

  nameInput() {
    return cy.get('#signupName');
  }

  lastNameInput() {
    return cy.get('#signupLastName');
  }

  emailInput() {
    return cy.get('#signupEmail');
  }

  passwordInput() {
    return cy.get('#signupPassword');
  }

  repeatPasswordInput() {
    return cy.get('#signupRepeatPassword');
  }

  registerButton() {
    return cy.contains('button', 'Register');
  }
}

export default new RegistrationPage();