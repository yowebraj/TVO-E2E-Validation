describe('Test Scenario - Curriculum Card Validation', () => {
  beforeEach(() => {
    // Go to https://tvolearn.com/
    cy.visit('https://tvolearn.com/')

    // From the header, navigate to Elementary (K-8) dropdown
    cy.get('[class="site-nav__label"]')
      .contains('Elementary (K - 8) ')
      .click()

    // Select any Grade
    cy.get('[class="site-nav__label"]')
      .contains('Grade 1')
      .click()

    // Scroll down to the “Learn Forward in the Curriculum” section
    cy.get('[class="shogun-heading-component"]')
      .contains('Learn Forward in the Curriculum')
      .scrollIntoView({ duration: 2000 })

    // Click on any one of the cards (subjects in that section)
    cy.get('[class="button-subject-name"]')
      .contains('Mathematics')
      .click()
  })
  
  it('TC0x - Grade 1', () => {
    cy.log('Hello World!')
  })

  it('TC0y - Grade 1', () => {
    cy.log('Hello World!')
  })
})