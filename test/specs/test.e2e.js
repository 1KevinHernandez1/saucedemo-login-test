import LoginPage from './login.page';

describe('SauceDemo Login Tests', () => {

    it('should attempt login for all users in the credentials object', () => {

        // Loop through each username stored in the credentials object
        for (const username of LoginPage.credentials.users) {

            // 1. Open the Saucedemo website
            LoginPage.open();

            // 2. Perform the login using the current username and the shared password object property
            LoginPage.initiateLogin(username, LoginPage.credentials.password);

            // Add expect and assertion to check if login was successfull(check for URL, page title or any other element that indicates successful login)
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');

        }

    });

});