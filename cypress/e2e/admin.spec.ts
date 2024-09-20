describe('Admin Dashboard Actions', () => {
    beforeEach(() => {
        cy.visit('/admin'); // Visit the admin login page
    });
  
    it('should log in as admin and close a maintenance request', () => {
        // Log in as admin
        cy.get('input[name="username"]').type('admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();

        // Verify successful login
        cy.url().should('include', '/admin-dashboard');

        // Close a maintenance request
        cy.get('.maintenance-request-card').first().within(() => {
        cy.get('button.close-request').click(); // Assuming there's a button to close the request
        });

        // Confirm the closure
        cy.on('window:confirm', () => true); // Automatically confirm the dialog

        // Verify successful closure
        cy.get('.snackbar').should('contain', 'Maintenance request closed successfully.');
    });
});