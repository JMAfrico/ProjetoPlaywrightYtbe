import { expect } from '@playwright/test';

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.username_textbox = page.getByLabel('Username');
        this.password_textbox = page.getByLabel('Password');
        this.login_button = page.getByRole('button', { name: 'Login' });
        this.msgsucesso = page.locator("//*[contains(text(),'You logged into a secure area!')]");
    }

    async enterPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }


    async enterUserName(username) {
        await this.username_textbox.fill(username);
    }

    async enterPassword(password) {
        await this.password_textbox.fill(password)
    }

    async clickButtonLogin() {
        await this.login_button.click();
    }

    async validateLoginSucess() {
        await expect(this.msgsucesso).toBeVisible();
    }
}