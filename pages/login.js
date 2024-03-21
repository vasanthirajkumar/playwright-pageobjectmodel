export class LoginPage {

    constructor(page) {
        this.page = page;
        this.page.adminusername_textbox = page.getByPlaceholder('Username');
        this.page.adminpassword_textbox = page.getByPlaceholder('Password');
        this.page.clientemail_textbox = page.getByPlaceholder('Client\'s e-mail address');
        //this.clientemail_textbox = getByID('clients-email') 
        //this.clientemail_textbox = getByXpath('/html/body/div/div/div/form/div[3]/input')
        this.page.submit_button = page.getByLabel('Submit');
    }

    async gotoLoginpage() {
        await this.page.goto('https://prefcentre-admin.marketing-uat.tio.systems/admin');
    }

    async login(username,password,clientemail) {
        await this.page.adminusername_textbox.fill(username)
        await this.page.adminpassword_textbox.fill(password)
        await this.page.clientemail_textbox.fill(clientemail)
        await this.page.submit_button.click()
    }
}