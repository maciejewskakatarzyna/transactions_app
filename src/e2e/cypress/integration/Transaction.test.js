describe('Transaction', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Allows to add a new transaction and delete it', () => {
    cy.findByPlaceholderText(/title of transaction/i)
      .click()
      .type('cypress title');
    cy.findByLabelText(/amount \(in eur\)/i)
      .click()
      .type('100');
    cy.findByTestId('conversionRateInput').clear().type('2');
    cy.findByRole('button', { name: /add/i }).click();
    cy.findByTestId('transactionTitle').contains('cypress title');
    cy.findAllByText(/100/i).should('exist');
    cy.findAllByText(/50/i).should('exist');
    cy.findByRole('button', { name: /delete/i }).click();
    cy.findByText('cypress title').should('not.exist');
  });
});
