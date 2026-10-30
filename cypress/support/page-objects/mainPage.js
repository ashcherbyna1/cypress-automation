class MainPage {
  logo() {
    return cy.get('a.header_logo svg[width="135"]');
  }

  homeButton() {
    return cy.get('header a.header-link[href="/"]');
  }

  aboutButton() {
    return cy.get('header button[appscrollto="aboutSection"]');
  }

  contactsButton() {
    return cy.get('header button[appscrollto="contactsSection"]');
  }

  guestLoginButton() {
    return cy.get('header button.header-link.-guest');
  }

  signInButton() {
    return cy.get('header button.header_signin');
  }
}

export default new MainPage();