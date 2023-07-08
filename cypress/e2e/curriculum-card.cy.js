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

  it('Validate some links are working as expected', () => {
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
    cy.get('[class="shogun-heading-component"]')
      .should('contain', 'Tips for Using TVO Learn')
    cy.go('back')

    // Defect: The 2nd "helpful tips" link doesn't have the same link as the first one (Still might be using the default shopify one)
    // cy.get('a')
    //   .contains('helpful tips')
    //   .should('be.visible')
    //   .should('have.attr', 'href')
    //   .should('include', 'https://tvo-learn.myshopify.com/pages/helpful-tips#learningactivities')

    cy.get('[class="strands-top-box"]').scrollIntoView({ duration: 1000 })

    cy.get('a')
      .contains('Halves and Fourths')
      .should('be.visible')
      .should('have.attr', 'href')
      .should('include', '/pages/grade-1-mathematics-number-learning-activity-7')

    cy.get('a')
      .contains('Halves and Fourths')
      .click()

    cy.location('pathname').should('eq', '/pages/grade-1-mathematics-number-learning-activity-7')
    cy.get('[class="preview-hero"]')
      .contains('Number')
      .contains('Learning Activity')

    cy.go('back')

    cy.get('[class="shogun-heading-component"]').contains('Resources for Learning').scrollIntoView({ duration: 1000 })

    cy.get('a[href*="/coding/secret-code"]')
      .should('be.visible')
      .should('have.attr', 'href')
      .should('include', '/coding/secret-code')

    cy.get('a[href*="/coding/secret-code"]')
      .invoke('removeAttr', 'target')
      .click()

    cy.origin('https://www.tvokids.com', () => {
      cy.get('[class="program-title"]')
        .contains('Coding')
        .should('be.visible')
    })
  })

  it('Validate the Learning Activities table can go through each tab', () => {
    cy.get('[class="head-fancy"]').scrollIntoView({ duration: 1000 })

    // "Number" tab validation
    cy.get('[class="tabb"]').contains('Number').click()

    cy.get('[class="tabp"]').first().within(() => {
      cy.get('[class="tablas"]')
        .find('a')
        .its('length')
        .should('be.eq', 12)
    })
      
    // "Algebra" tab validation
    cy.get('[class="tabb"]').contains('Algebra').click()

    cy.get('[class="tabp"]').first().within(() => {
      cy.get('[class="tablas"]')
        .find('a')
        .its('length')
        .should('be.eq', 12)
    })

    // "Data" tab validation
    cy.get('[class="tabb"]').contains('Data').click()
    
    cy.get('[class="tabp"]').first().within(() => {
      cy.get('[class="tablas"]')
        .find('a')
        .its('length')
        .should('be.eq', 12)
    })

    // "Spatial Sense" tab validation
    cy.get('[class="tabb"]').contains('Spatial Sense').click()

    cy.get('[class="tabp"]').first().within(() => {
      cy.get('[class="tablas"]')
        .find('a')
        .its('length')
        .should('be.eq', 12)
    })

    // "Financial Literacy" tab validation
    cy.get('[class="tabb"]').contains('Financial Literacy').click()

    cy.get('[class="tabp"]').first().within(() => {
      cy.get('[class="tablas"]')
        .find('a')
        .its('length')
        .should('be.eq', 12)
    })

  })
})