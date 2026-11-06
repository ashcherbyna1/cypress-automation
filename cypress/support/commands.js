import { visitHomePage } from './helpers/loginHelper.cy';

Cypress.Commands.add('visitHomePage', visitHomePage);

Cypress.Commands.add('login', (email, password) => {
	cy.visitHomePage();
	cy.get('.header_signin').click();
	cy.get('#signinEmail').type(email);
	cy.get('#signinPassword').type(password, { sensitive: true });
	cy.contains('button', 'Login').click();
});

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
	if (options && options.sensitive) {
		options.log = false;
		Cypress.log({
			$el: element,
			name: 'type',
			message: '*'.repeat(text.length),
		});
	}

	return originalFn(element, text, options);
});