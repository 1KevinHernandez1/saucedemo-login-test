import LoginPage from '../pageobjects/login.page.js';

('SauceDemo Login Test', () => {
    it('should log in successfully using stored class variables', async () => {
        // Navigate to sauce demo
        await browser.url('https://www.saucedemo.com/');

        // Call the login method from the page object
        await LoginPage.performLogin();

        // Step 4: Make an assertion (expect) to verify successful login
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect($('.title')).toHaveText('Products');
    });
});