describe('Test Scenario - Curriculum Card Validation', () => {
  beforeEach(() => {
    // Go to https://tvolearn.com/
    cy.visit('https://tvolearn.com/')

    // From the header, navigate to Elementary (K-8) dropdown
    cy.get('[class="site-nav__label"]')
      .contains('Elementary (K - 8) ')
      .click()

    // Select and navigate to Grade 1
    cy.get('[class="site-nav__label"]')
      .contains('Grade 1')
      .click()

    // Scroll down to the “Learn Forward in the Curriculum” section
    cy.get('[class="shogun-heading-component"]')
      .contains('Learn Forward in the Curriculum')
      .scrollIntoView({ duration: 1000 })

    // Click on any one of the cards (subjects in that section)
    cy.get('[class="button-subject-name"]')
      .contains('Mathematics')
      .click()
  })

  it('Validate the Grade 1 Mathematics Header', () => {
    cy.get('[class="shogun-heading-component"]').contains('Grade 1')
    cy.get('[class="shogun-heading-component"]').contains('Mathematics')
  })

  it('Validate the Grade 1 Mathematics Curriculum Strands', () => {
    cy.get('[class="shogun-heading-component"]')
      .contains('How to Use These Resources')
      .scrollIntoView({ duration: 1000 })

    cy.get('[class="shg-box-content"]')
      .contains('The mathematics curriculum is divided into six strands:')

    cy.get('[class="bullet-list"]').contains('Social-Emotional Learning (SEL) Skills in Mathematics and the Mathematical Processes')
    cy.get('[class="bullet-list"]').contains('Number')
    cy.get('[class="bullet-list"]').contains('Algebra')
    cy.get('[class="bullet-list"]').contains('Data')
    cy.get('[class="bullet-list"]').contains('Spatial Sense')
    cy.get('[class="bullet-list"]').contains('Financial Literacy')
  })

  it('Validate links are working as expected', () => {
    // 1st "helpful tips" link
    cy.get('a')
      .contains('helpful tips')
      .should('be.visible')
      .should('have.attr', 'href')
      .should('include', 'https://tvolearn.com/pages/helpful-tips')

    cy.get('a')
      .contains('helpful tips')
      .click()

    cy.location('pathname').should('eq', '/pages/helpful-tips')
    cy.go('back')

    // The 2nd "helpful tips" link doesn't have the same link as the first one (Still might be using the default shopify one)
    // cy.get('a')
    //   .contains('helpful tips')
    //   .should('be.visible')
    //   .should('have.attr', 'href')
    //   .should('include', 'https://tvo-learn.myshopify.com/pages/helpful-tips#learningactivities')
    
  })
})