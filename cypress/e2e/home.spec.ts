describe('Maintenance Request Submission', () => {
    beforeEach(() => {
        cy.visit('/'); // Visit the home page
    });
  
    it('should submit maintenance request', () => {
        // Fill the form
        cy.get('input[formControlName="unitNumber"]').type('101');
        cy.get('input[formControlName="name"]').type('John Doe');
        cy.get('input[formControlName="email"]').type('john@example.com');
        cy.get('mat-select[formControlName="serviceType"]').click();
        cy.get('mat-option').contains('Plumbing').click(); // Choose a service type
        cy.get('input[formControlName="summary"]').type('Leaky faucet');
        cy.get('textarea[formControlName="details"]').type('There is a leak under the kitchen sink.');

        // Submit the form
        cy.get('form').submit();

        // Verify successful submission
        cy.get('.snackbar').should('contain', 'Maintenance request submitted successfully.');
    });
});