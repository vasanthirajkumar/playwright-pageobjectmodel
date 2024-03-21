export class NavigationPage {
    constructor(page) {
        this.page = page;
    }

    async navigateToNextPageWithToken(token) {
        const nextPageUrl = `https://example.com/dashboard?token=${token}`;
        await this.page.goto(nextPageUrl);
    }

    async verifyNavigationToPage(nextPageUrl) {
        await expect(this.page).toHaveURL(nextPageUrl);
    }
}