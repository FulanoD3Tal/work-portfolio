describe('This is a example test of cypress', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should show all the elements', () => {
    /**
     * For propuse of easy development we are using Cypress Testing Library
     *
     * a library that give us a get* query* and find* commands to use in the test
     */
    // cy.findByRole('heading', { name: /nextjs template/i }).should('be.visible');
  });
});
