it('works', () => {
  cy.mount(() => (<div>Hello world!</div>)).contains('Hello world!')
})
