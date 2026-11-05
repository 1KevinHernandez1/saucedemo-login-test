class LoginPage {

    users = ['standard_user', 'problem_user', 'error_user'];
    
    passwordVariable = 'secret_sauce';

    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-button'); }

    async performLogin() {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(this.passwordVariable);
        await this.loginButton.click();
    }
}

export default new LoginPage();