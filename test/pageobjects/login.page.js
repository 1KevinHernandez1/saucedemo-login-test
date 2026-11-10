class LoginPage {
    users = ['standard_user', 'problem_user', 'error_user', 'visual_user'];
    password = 'secret_sauce';

    // Getters for element selectors
    get usernameInput () { return $('#user-name'); }
    get passwordInput () { return $('#password'); }
    get loginButton () { return $('#login-button'); }
    get headerTitle () { return $('.title'); }

    async open() {
        return browser.url('https://www.saucedemo.com/');
    }

    // REMOVE parentheses from this.usernameInput, this.passwordInput, and this.loginButton
    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

export default new LoginPage();