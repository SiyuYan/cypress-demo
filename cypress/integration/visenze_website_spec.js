describe('visenze website test', function () {
    beforeEach(() => {
        cy
            .visit('https://www.visenze.com/')
            .title().should('include', 'Home')
    });
    it('Home page', function () {
        cy
            .contains('Contact Us')
            .contains('Contact Us').click()
            .wait(1000)
            .get('input[name="firstname"]')
            .type('fake name')
            .should('have.value', 'fake name')
    });
    it('Go to Visual Commerce Platform tab', function () {
        cy
            .get('div[aria-label="Navigation Menu"]')
            .contains('Visual Commerce Platform')
            .contains('Visual Commerce Platform').click()
            .url().should('include', '/visual-commerce-platform')
    });
});