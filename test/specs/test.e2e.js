import LoginPage from '../pageobjects/login.page.js';

describe('SauceDemo Login Tests', () => {

    it('should attempt login for all users in the credentials object', async () => {

        for (const username of LoginPage.users) {
            await LoginPage.open();
            await LoginPage.login(username, LoginPage.password);
            
            // Getter for POM 
            await expect(LoginPage.headerTitle).toBeDisplayed();
            
            await browser.reloadSession();
        }

    });

});