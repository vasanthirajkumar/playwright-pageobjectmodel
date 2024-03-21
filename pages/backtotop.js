export class BackToTopPage {
    constructor(page) {
        this.page = page;
        
        this.backToTopButton = 'button.back-to-top'; // Replace with the actual selector for the back to top button
    }

    async clickBackToTopButton() {
        await this.page.click(this.backToTopButton);
    }
}

