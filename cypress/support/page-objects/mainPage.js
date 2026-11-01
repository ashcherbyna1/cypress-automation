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

  facebookLink() {
    return cy.get('a[href="https://www.facebook.com/Hillel.IT.School"]');
  }

  telegramLink() {
    return cy.get('a[href="https://t.me/ithillel_kyiv"]');
  }

  youtubeLink() {
    return cy.get('a[href^="https://www.youtube.com/user/HillelITSchool"]');
  }

  instagramLink() {
    return cy.get('a[href="https://www.instagram.com/hillel_itschool/"]');
  }

  linkedinLink() {
    return cy.get('a[href="https://www.linkedin.com/school/ithillel/"]');
  }

  hillelWebsiteLink() {
    return cy.get('a.contacts_link[href="https://ithillel.ua"]');
  }

  supportEmailLink() {
    return cy.get('a.contacts_link[href="mailto:developer@ithillel.ua"]');
  }
}

export default new MainPage();