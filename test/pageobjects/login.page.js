class LoginPage {
    // Credentials object containing the required users array and password
    credentials = {
        users: ['problem_user', 'error_user', 'visual_user', 'standard_user'],
        password: 'secret_sauce'
    };

    // Selectors are individual arrow functions
    usernameInput = () => $(`#user-name`);
    passwordInput = () => $(`#password`);
    loginButton = () => $(`#login-button`);

    // Method to open the login page
    open = () => {
        browser.url('https://www.saucedemo.com/');
    };

    // Method to initiate login
    login = (username, password) => {
        this.usernameInput().setValue(username);
        this.passwordInput().setValue(password);
        this.loginButton().click();
    };
}

export default new LoginPage();