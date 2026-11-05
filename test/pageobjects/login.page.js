class LoginPage {

    usernameVariable = 'standard_user';
    passwordVariable = 'secret_sauce';

    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-button'); }

    async performLogin() {
        await this.usernameInput.setValue(this.usernameVariable);
        await this.passwordInput.setValue(this.passwordVariable);
        await this.loginButton.click();
    }
}

export default new LoginPage();