export const visitHomePage = () => {
	cy.visit('/', {
		auth: {
			username: 'guest',
			password: 'welcome2qauto',
		},
	});
};
