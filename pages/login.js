exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        this.adminusername_textbox = getByPlaceholder('Username')
        this.adminpassword_textbox = getByPlaceholder('Password')
        this.clientemail_textbox = getByPlaceholder('Client\'s e-mail address')
        this.submit_button = getByLabel('Submit')
    }

    async gotoLoginpage() {
        await this.page.goto('https://prefcentre-admin.marketing-uat.tio.systems/admin');
    }

    async login(username,password,clientemail) {
        await this.adminusername_textbox.fill(username)
        await this.adminpassword_textbox.fill(password)
        await this.clientemail_textbox.fill(clientemail)
        await this.submit_button.click()
    }
}