import LoginPage from '../pageobjects/login.page.js';

('SauceDemo Login Test - Array Loop', () => {
    it('should log in successfully for all users in the array', async () => {
        // Loop over each username string in the LoginPage.users array
        for (const username of LoginPage.users) {
            // 1. Open function / Navigate to site
            await browser.url('https://www.saucedemo.com/');

            // 2. Login function using the current user from the loop
            await LoginPage.performLogin(username);

            // 3. Assertions to verify successful login
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            await expect($('.title')).toHaveText('Products');
        }
    });
});