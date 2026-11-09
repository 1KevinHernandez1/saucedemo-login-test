import LoginPage from './login.page';

describe('SauceDemo Login Tests', () => {

    it('should attempt login for all users in the credentials object', async () => {

        // Loop through each username stored in the credentials object
        for (const username of LoginPage.credentials.users) {

            // 1. Open the Saucedemo website
            await LoginPage.open();

            // 2. Perform the login using the current username and the shared password object property
            await LoginPage.login(username, LoginPage.credentials.password);
            
            // 3. Add an assertion to check if the login was successful by verifying the presence of a specific element on the page after login
            await expect(LoginPage.headerTitle()).toBeDisplayed();

            // 4. Add expect and assertion to check if login was successfull(check for URL, page title or any other element that indicates successful login)
            await browser.reloadSession()

        }

    });

});