describe('Ask question', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    it('When signed in and ask a valid question, the question should successfully save', () => {
    cy.contains('Q & A');
    cy.contains('Unanswered Questions');
    // cy.contains('Sign In').click();
    // cy.url().should('include', 'auth0');
    // cy.findByLabelText('Email')
    // .type('your username')
    // .should('have.value', 'your username');

    // cy.findByLabelText('Password')
    // .type('your password')
    // .should('have.value', 'your password');
    // cy.get('form').submit();
    cy.contains('Ask a question').click();

    var title = 'title test';
    var content = 'Lots and lots and lots and lots and lots of content test';
    cy.findByLabelText('Title')
    .type(title)
    .should('have.value', title);
    cy.findByLabelText('Content')
    .type(content)
    .should('have.value', content);

    cy.contains('Submit Your Question').click();
    cy.contains('Your question was successfully submitted');
        });
  });

  describe('Answer a Question', () => {
      beforeEach(() => {
        cy.visit('/');
      });
      it('Go to answer question and submite a question that is to short and should not be allow to.', () => {
        cy.contains('Which state management tool should I use?').click();

        var answer = 'I really?';
        cy.findByLabelText('Your Answer')
        .type(answer)
        .should('have.value', answer);

        cy.contains('Submit Your Answer').click();
        cy.contains('This must be at least 50 characters');
      });
      it('Go to answer question and sumbite a question it should then say answer submitted successfull.', () => {
        cy.contains('Q & A');
        cy.contains('Which state management tool should I use?').click();

        var answer = 'I really hope that Jonathan likes this and gives me an A. Oh did I just type that out loud?';
        cy.findByLabelText('Your Answer')
        .type(answer)
        .should('have.value', answer);

        cy.contains('Submit Your Answer').click();
        cy.contains('Your answer was successfully submitted');
    });
  });