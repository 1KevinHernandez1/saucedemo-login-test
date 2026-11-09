class LoginPage {
    // Credentials object containing the required users array and password
    credentials = {
        users: ['standard_user', 'problem_user', 'error_user', 'visual_user'],
        password: 'secret_sauce'
    };

    // Selectors defined inside the Page Object
    usernameInput = () => $('#user-name');
    passwordInput = () => $('#password');
    loginButton = () => $('#login-button');
    
    // Add the element selector for your test assertion here
    // Replace '.title' with whichever selector is in use for verifying successful login
    headerTitle = () => $('.title'); 

    // How to open the login page
    open = () => {
        browser.url('https://www.saucedemo.com/');
    };

    // How to initiate login
    login = (username, password) => {
        this.usernameInput().setValue(username);
        this.passwordInput().setValue(password);
        this.loginButton().click();
    };
}

export default new LoginPage();