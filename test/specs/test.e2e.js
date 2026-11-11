import LoginPage from '../pageobjects/login.page.js';
import Products from '../pageobjects/products.page.js';

describe('SauceDemo Login Tests', () => {

    it('should attempt login for all users in the credentials object', async () => {

        // 1. Loop through all users
        for (const username of LoginPage.users) {
            await LoginPage.open();
            await LoginPage.login(username, LoginPage.password);
        }

        // 2. Log in with a valid user to reach the products/inventory page
        await LoginPage.open();
        await LoginPage.login('standard_user', LoginPage.password);

        // 3. Now the button exists on screen and can be clicked
        await Products.addToCart('sauce-labs-backpack');

        // 4. Assert cart badge updates
        await expect(Products.cartBadge).toHaveText('1');

    });

});