import registrationPage from "../../support/page-objects/registrationPage";

const invalidBorderColor = "rgb(220, 53, 69)";
const validPassword = "Password123";
const passwordError =
  "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter";

describe("Registration form", () => {
  beforeEach(() => {
    cy.visitHomePage();
    registrationPage.open();
  });

  it("should open Registration form with disabled Register button", () => {
    registrationPage.title().should("be.visible");
    registrationPage.registerButton().should("be.disabled");
  });

  it("should validate Name field", () => {
    registrationPage.nameInput().focus().blur();
    cy.contains("Name required").should("be.visible");
    registrationPage
      .nameInput()
      .should("have.class", "is-invalid")
      .and("have.css", "border-color", invalidBorderColor);

    registrationPage.nameInput().type("John123").blur();
    cy.contains("Name is invalid").should("be.visible");
    registrationPage
      .nameInput()
      .should("have.class", "is-invalid")
      .and("have.css", "border-color", invalidBorderColor);

    registrationPage.nameInput().clear().type("A").blur();
    cy.contains("Name has to be from 2 to 20 characters long").should(
      "be.visible",
    );

    registrationPage.nameInput().clear().type("A".repeat(21)).blur();
    cy.contains("Name has to be from 2 to 20 characters long").should(
      "be.visible",
    );

    registrationPage.nameInput().clear().type("Al").blur();
    registrationPage.nameInput().should("not.have.class", "is-invalid");
    registrationPage.nameInput().clear().type("A".repeat(20)).blur();
    registrationPage.nameInput().should("not.have.class", "is-invalid");

    registrationPage.nameInput().clear().type("  Alice  ").blur();
    cy.contains("Name is invalid").should("be.visible");
    registrationPage.nameInput().should("have.value", "  Alice  ");
    registrationPage
      .nameInput()
      .should("have.class", "is-invalid")
      .and("have.css", "border-color", invalidBorderColor);

    registrationPage.nameInput().clear().type("    ").blur();
    cy.contains("Name is invalid").should("be.visible");
    registrationPage.nameInput().should("have.value", "    ");
    registrationPage
      .nameInput()
      .should("have.class", "is-invalid")
      .and("have.css", "border-color", invalidBorderColor);
    registrationPage.registerButton().should("be.disabled");
  });

  it("should validate Last name field", () => {
    registrationPage.lastNameInput().focus().blur();
    cy.contains("Last name required").should("be.visible");
    registrationPage
      .lastNameInput()
      .should("have.class", "is-invalid")
      .and("have.css", "border-color", invalidBorderColor);

    registrationPage.lastNameInput().type("Taylor123").blur();
    cy.contains("Last name is invalid").should("be.visible");
    registrationPage
      .lastNameInput()
      .should("have.css", "border-color", invalidBorderColor);

    registrationPage.lastNameInput().clear().type("T").blur();
    cy.contains("Last name has to be from 2 to 20 characters long").should(
      "be.visible",
    );

    registrationPage.lastNameInput().clear().type("T".repeat(21)).blur();
    cy.contains("Last name has to be from 2 to 20 characters long").should(
      "be.visible",
    );

    registrationPage.lastNameInput().clear().type("Ta").blur();
    registrationPage.lastNameInput().should("not.have.class", "is-invalid");
    registrationPage.lastNameInput().clear().type("T".repeat(20)).blur();
    registrationPage.lastNameInput().should("not.have.class", "is-invalid");

    registrationPage.lastNameInput().clear().type("  Taylor  ").blur();
    cy.contains("Last name is invalid").should("be.visible");
    registrationPage.lastNameInput().should("have.value", "  Taylor  ");

    registrationPage.lastNameInput().clear().type("    ").blur();
    cy.contains("Last name is invalid").should("be.visible");
    registrationPage.lastNameInput().should("have.value", "    ");
    registrationPage
      .lastNameInput()
      .should("have.class", "is-invalid")
      .and("have.css", "border-color", invalidBorderColor);
    registrationPage.registerButton().should("be.disabled");
  });

  it("should validate Email field", () => {
    registrationPage.emailInput().focus().blur();
    cy.contains("Email required").should("be.visible");

    registrationPage.emailInput().type("invalid-email").blur();
    cy.contains("Email is incorrect").should("be.visible");
    registrationPage
      .emailInput()
      .should("have.class", "is-invalid")
      .and("have.css", "border-color", invalidBorderColor);

    registrationPage.emailInput().clear().type("alice@example.com").blur();
    registrationPage.emailInput().should("not.have.class", "is-invalid");
  });

  it("should validate Password field", () => {
    registrationPage.passwordInput().focus().blur();
    cy.contains("Password required").should("be.visible");
    registrationPage
      .passwordInput()
      .should("have.class", "is-invalid")
      .and("have.css", "border-color", invalidBorderColor);

    registrationPage
      .passwordInput()
      .type("Aa12345", { sensitive: true })
      .blur();
    cy.contains(passwordError).should("be.visible");
    registrationPage
      .passwordInput()
      .should("have.class", "is-invalid")
      .and("have.css", "border-color", invalidBorderColor);

    registrationPage
      .passwordInput()
      .clear()
      .type("password1", { sensitive: true })
      .blur();
    cy.contains(passwordError).should("be.visible");

    registrationPage
      .passwordInput()
      .clear()
      .type("PASSWORD1", { sensitive: true })
      .blur();
    cy.contains(passwordError).should("be.visible");

    registrationPage
      .passwordInput()
      .clear()
      .type("Password", { sensitive: true })
      .blur();
    cy.contains(passwordError).should("be.visible");

    registrationPage
      .passwordInput()
      .clear()
      .type("Password123456789", { sensitive: true })
      .blur();
    cy.contains(passwordError).should("be.visible");

    registrationPage
      .passwordInput()
      .clear()
      .type(validPassword, { sensitive: true })
      .blur();
    registrationPage.passwordInput().should("not.have.class", "is-invalid");

    registrationPage
      .passwordInput()
      .clear()
      .type("Aa123456", { sensitive: true })
      .blur();
    registrationPage.passwordInput().should("not.have.class", "is-invalid");
    registrationPage
      .passwordInput()
      .clear()
      .type("Aa1234567890123", { sensitive: true })
      .blur();
    registrationPage.passwordInput().should("not.have.class", "is-invalid");
  });

  it("should validate Re-enter password field", () => {
    registrationPage.repeatPasswordInput().focus().blur();
    cy.contains("Re-enter password required").should("be.visible");
    registrationPage
      .repeatPasswordInput()
      .should("have.class", "is-invalid")
      .and("have.css", "border-color", invalidBorderColor);

    registrationPage.passwordInput().type(validPassword, { sensitive: true });
    registrationPage
      .repeatPasswordInput()
      .type("Password124", { sensitive: true })
      .blur();

    cy.contains("Passwords do not match").should("be.visible");
    registrationPage
      .repeatPasswordInput()
      .should("have.class", "is-invalid")
      .and("have.css", "border-color", invalidBorderColor);

    registrationPage
      .repeatPasswordInput()
      .clear()
      .type(validPassword, { sensitive: true })
      .blur();
    registrationPage
      .repeatPasswordInput()
      .should("not.have.class", "is-invalid");
  });

  it("should enable Register button only when form is valid", () => {
    registrationPage.nameInput().type("Alice");
    registrationPage.lastNameInput().type("Taylor");
    registrationPage.emailInput().type("invalid-email");
    registrationPage.passwordInput().type(validPassword, { sensitive: true });
    registrationPage
      .repeatPasswordInput()
      .type(validPassword, { sensitive: true });
    registrationPage.registerButton().should("be.disabled");

    registrationPage.emailInput().clear().type("alice@example.com").blur();
    registrationPage.registerButton().should("be.enabled");

    registrationPage
      .repeatPasswordInput()
      .clear()
      .type("Password124", { sensitive: true })
      .blur();
    registrationPage.registerButton().should("be.disabled");
  });

  it("should register new user and allow login", () => {
    const email = `qa.registration.${Date.now()}@example.com`;

    registrationPage.nameInput().type("Alice");
    registrationPage.lastNameInput().type("Taylor");
    registrationPage.emailInput().type(email);
    registrationPage.passwordInput().type(validPassword, { sensitive: true });
    registrationPage
      .repeatPasswordInput()
      .type(validPassword, { sensitive: true });

    registrationPage.registerButton().should("be.enabled").click();

    cy.get(".modal").should("not.exist");
    cy.contains("Log out").should("be.visible").click();

    cy.get(".header_signin").should("be.visible");
    cy.login(email, validPassword);

    cy.location("pathname").should("include", "/panel/garage");
  });
});
