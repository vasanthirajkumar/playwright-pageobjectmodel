export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = 'input[name="username"]';
        this.passwordInput = 'input[name="password"]';
        this.emailInput = 'input[name="email"]';
        this.submitButton = 'button[type="submit"]';
    }

    async navigateToLoginPage(url) {
        await this.page.goto(url);
    }

    async login(username, password, email) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.fill(this.emailInput, email);
        await this.page.click(this.submitButton);
        await this.page.waitForNavigation();
    }

    async getTokenElementText() {
        return await this.page.textContent('.token-element');
    }
}