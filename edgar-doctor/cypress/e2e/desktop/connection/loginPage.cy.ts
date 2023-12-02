const url = Cypress.env('url');
const appUrl = Cypress.env('appUrl');
const loginEmail = Cypress.env('loginTestEmail');
const loginPassword = Cypress.env('loginTestPassword');

describe('Good number of elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/login`);
	});

	it('Good number of buttons', () => {
		cy.get('button[id^=edgar-loginPage]').should('have.length', 1);
	});

	it('Good number of texts', () => {
		cy.get('p[id^=edgar-loginPage]').should('have.length', 2);
	});

	it('Good number of labels', () => {
		cy.get('label[id^=edgar-loginPage]').should('have.length', 2);
	});

	it('Good number of images', () => {
		cy.get('img').should('have.length', 2);
	});

	it('Good number of inputs', () => {
		cy.get('input[id^=edgar-loginPage]').should('have.length', 2);
	});
});

describe('Good content on elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/login`);
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-loginPage-form-button').should('contain.text', 'Se connecter');
	});

	it('Good content for texts', () => {
		cy.get('#edgar-loginPage-EdgarCard-title-text').should('contain.text', 'Bienvenue sur la plateforme edgar');
		cy.get('#edgar-loginPage-title-text').should(
			'contain.text',
			'Connectez-vous avec votre compte pour accéder à votre espace patient, gérer vos rendez-vous et bien plus',
		);
		cy.get('#edgar-loginPage-formEmail-text').should('contain.text', 'Adresse mail');
		cy.get('#edgar-loginPage-formPassword-text').should('contain.text', 'Mot de passe');
	});
});

describe('Visible elements - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/login`);
	});

	it('Good content for buttons', () => {
		cy.get('#edgar-loginPage-form-button').should('be.visible');
	});

	it('Good content for texts', () => {
		cy.get('#edgar-loginPage-EdgarCard-title-text').should('be.visible');
		cy.get('#edgar-loginPage-title-text').should('be.visible');
		cy.get('#edgar-loginPage-formEmail-text').should('be.visible');
		cy.get('#edgar-loginPage-formPassword-text').should('be.visible');
	});
});

describe('Working page - Desktop', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(`${url}/login`);
		cy.wait(1000);
	});

	it('No email address', () => {
		cy.get('#edgar-loginPage-form-button').click();
		cy.get('#edgar-loginPage-formEmailError-text').should('be.visible');
		cy.get('#edgar-loginPage-formEmailError-text').should('contain.text', 'Adresse mail invalide');
	});

	it('No password', () => {
		cy.get('#edgar-loginPage-formEmail-input').click().type('prenom.nom@test.fr');
		cy.get('#edgar-loginPage-form-button').click();
		cy.get('#edgar-loginPage-formPasswordError-text').should('be.visible');
		cy.get('#edgar-loginPage-formPasswordError-text').should('contain.text', 'Mot de passe invalide');
	});

	it('Not real email address', () => {
		cy.get('#edgar-loginPage-formEmail-input').click().type('prenom.nomtest.fr');
		cy.get('#edgar-loginPage-formEmail-input').click().type('testtest');
		cy.get('#edgar-loginPage-form-button').click();
		cy.get('#edgar-loginPage-formEmailError-text').should('be.visible');
		cy.get('#edgar-loginPage-formEmailError-text').should('contain.text', 'Adresse mail invalide');
	});

	it('Too short password', () => {
		cy.get('#edgar-loginPage-formEmail-input').click().type('prenom.nom@test.fr');
		cy.get('#edgar-loginPage-formPassword-input').click().type('2short');
		cy.get('#edgar-loginPage-form-button').click();
		cy.get('#edgar-loginPage-formPasswordError-text').should('be.visible');
		cy.get('#edgar-loginPage-formPasswordError-text').should('contain.text', 'Mot de passe invalide');
	});

	it('Good credentials', () => {
		cy.get('#edgar-loginPage-formEmail-input').click().type(loginEmail);
		cy.get('#edgar-loginPage-formPassword-input').click().type(loginPassword);
		cy.get('#edgar-loginPage-form-button').click().wait(1000).url().should('eq', `${url}/dashboard`);
	});
});
