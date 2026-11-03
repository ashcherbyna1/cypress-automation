import mainPage from '../../support/page-objects/mainPage';

describe('Footer links', () => {
	beforeEach(() => {
		cy.visitHomePage();
	});

	it('shows the Facebook link', () => {
		mainPage.facebookLink()
			.scrollIntoView()
			.should('exist')
			.and('be.visible')
			.and('have.attr', 'href', 'https://www.facebook.com/Hillel.IT.School');
	});

	it('shows the Telegram link', () => {
		mainPage.telegramLink()
			.scrollIntoView()
			.should('exist')
			.and('be.visible')
			.and('have.attr', 'href', 'https://t.me/ithillel_kyiv');
	});

	it('shows the YouTube link', () => {
		mainPage.youtubeLink()
			.scrollIntoView()
			.should('exist')
			.and('be.visible')
			.and('have.attr', 'href')
			.and('include', 'youtube.com/user/HillelITSchool');
	});

	it('shows the Instagram link', () => {
		mainPage.instagramLink()
			.scrollIntoView()
			.should('exist')
			.and('be.visible')
			.and('have.attr', 'href', 'https://www.instagram.com/hillel_itschool/');
	});

	it('shows the LinkedIn link', () => {
		mainPage.linkedinLink()
			.scrollIntoView()
			.should('exist')
			.and('be.visible')
			.and('have.attr', 'href', 'https://www.linkedin.com/school/ithillel/');
	});

	it('shows the Hillel website link', () => {
		mainPage.hillelWebsiteLink()
			.scrollIntoView()
			.should('exist')
			.and('be.visible')
			.and('have.attr', 'href', 'https://ithillel.ua')
			.and('contain.text', 'ithillel.ua');
	});

	it('shows the support email link', () => {
		mainPage.supportEmailLink()
			.scrollIntoView()
			.should('exist')
			.and('be.visible')
			.and('have.attr', 'href', 'mailto:developer@ithillel.ua')
			.and('contain.text', 'support@ithillel.ua');
	});
});
