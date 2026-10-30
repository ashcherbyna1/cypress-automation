import mainPage from '../../support/page-objects/mainPage';

describe('Public header', () => {
  beforeEach(() => {
    cy.visitHomePage();
  });

  it('shows the logo', () => {
    mainPage.logo()
      .should('exist')
      .and('be.visible')
      .closest('a')
      .should('have.attr', 'href', '/');
  });

  it('shows the Home button', () => {
    mainPage.homeButton()
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'href', '/')
      .and('contain.text', 'Home');
  });

  it('shows the About button', () => {
    mainPage.aboutButton()
      .should('exist')
      .and('be.visible')
      .and('contain.text', 'About');
  });

  it('shows the Contacts button', () => {
    mainPage.contactsButton()
      .should('exist')
      .and('be.visible')
      .and('contain.text', 'Contacts');
  });

  it('shows the Guest log in button', () => {
    mainPage.guestLoginButton()
      .should('exist')
      .and('be.visible')
      .and('contain.text', 'Guest log in');
  });

  it('shows the Sign In button', () => {
    mainPage.signInButton()
      .should('exist')
      .and('be.visible')
      .and('contain.text', 'Sign In');
  });
});
