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

  it('Validate the Learning Activities table', () => {
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

  it('Validate the Vocabulary table', () => {
    cy.get('[class="shogun-heading-component"]').contains('Vocabulary').scrollIntoView({ duration: 1000 })

    // "Number" tab validation
    cy.get('[class="shogun-tab-title"]').contains('Number').click()

    cy.get('[class*="shogun-tab-content"]').first().within(() => {
      cy.get('[class*="wordList"]')
        .find('p')
        .its('length')
        .should('be.eq', 5)

      cy.get('[class*="wordList"]').contains('50')
      cy.get('[class*="wordList"]').contains('equal')
      cy.get('[class*="wordList"]').contains('fraction')
      cy.get('[class*="wordList"]').contains('number')
      cy.get('[class*="wordList"]').contains('sharing')
    })

    // "Algebra" tab validation
    cy.get('[class="shogun-tab-title"]').contains('Algebra').click()

    cy.get('[class*="shogun-tab-content"]').eq(1).within(() => {
      cy.get('[class*="wordList"]')
        .find('p')
        .its('length')
        .should('be.eq', 8)
    })

    cy.get('[class*="wordList"]').contains('algebra')
    cy.get('[class*="wordList"]').contains('code')
    cy.get('[class*="wordList"]').contains('number sentence')
    cy.get('[class*="wordList"]').contains('2+2=4')
    cy.get('[class*="wordList"]').contains('order')
    cy.get('[class*="wordList"]').contains('pattern')
    cy.get('[class*="wordList"]').contains('prediction')
    cy.get('[class*="wordList"]').contains('sequence')

    // "Data" tab validation
    cy.get('[class="shogun-tab-title"]').contains('Data').click()

    cy.get('[class*="shogun-tab-content"]').eq(2).within(() => {
      cy.get('[class*="wordList"]')
        .find('p')
        .its('length')
        .should('be.eq', 8)
    })

    cy.get('[class*="wordList"]').contains('categories')
    cy.get('[class*="wordList"]').contains('certain')
    cy.get('[class*="wordList"]').contains('conclusion')
    cy.get('[class*="wordList"]').contains('data')
    cy.get('[class*="wordList"]').contains('impossible')
    cy.get('[class*="wordList"]').contains('pictograph')
    cy.get('[class*="wordList"]').contains('possible')
    cy.get('[class*="wordList"]').contains('question')

    // "Spatial" tab validation
    cy.get('[class="shogun-tab-title"]').contains('Spatial').click()

    cy.get('[class*="shogun-tab-content"]').eq(3).within(() => {
      cy.get('[class*="wordList"]')
        .find('p')
        .its('length')
        .should('be.eq', 9)
    })

    cy.get('[class*="wordList"]').contains('area')
    cy.get('[class*="wordList"]').contains('calendar')
    cy.get('[class*="wordList"]').contains('capacity')
    cy.get('[class*="wordList"]').contains('length')
    cy.get('[class*="wordList"]').contains('mass')
    cy.get('[class*="wordList"]').contains('shapes')
    cy.get('[class*="wordList"]').contains('spatial sense')
    cy.get('[class*="wordList"]').contains('three-dimensional')
    cy.get('[class*="wordList"]').contains('two-dimensional')

    // "Financial Literacy" tab validation
    cy.get('[class="shogun-tab-title"]').contains('Financial Literacy').click()

    cy.get('[class*="shogun-tab-content"]').eq(4).within(() => {
      cy.get('[class*="wordList"]')
        .find('p')
        .its('length')
        .should('be.eq', 10)
    })

    cy.get('[class*="wordList"]').contains('bill')
    cy.get('[class*="wordList"]').contains('coin')
    cy.get('[class*="wordList"]').contains('dime')
    cy.get('[class*="wordList"]').contains('dollar')
    cy.get('[class*="wordList"]').contains('financial literacy')
    cy.get('[class*="wordList"]').contains('loonie')
    cy.get('[class*="wordList"]').contains('nickel')
    cy.get('[class*="wordList"]').contains('quarter')
    cy.get('[class*="wordList"]').contains('toonie')
    cy.get('[class*="wordList"]').contains('value')
  })

  it('Validate user can subscribe to the TVO Learn Newsletter with a valid email', () => {
    cy.get('[class="signup-inner"]').contains('Stay Connected').scrollIntoView({ duration: 1000 })

    cy.get('[class*="email"]').type('testmairaj16@gmail.com{enter}')

    cy.get('[class="response"]')
      .should('be.visible')
      .contains('Almost finished... We need to confirm your email address. To complete the subscription process, please click the link in the email we just sent you.')
  })

  it('Validate user cannot subscribe to the TVO Learn Newsletter with an invalid email', () => {
    cy.get('[class="signup-inner"]').contains('Stay Connected').scrollIntoView({ duration: 1000 })

    cy.get('[class*="email"]').type('test@gmail.com{enter}')

    cy.get('[class="response"]')
      .should('be.visible')
      .contains('This email cannot be added to this list. Please enter a different email address.')
  })

  it('Validate user cannot subscribe to the TVO Learn Newsletter without entering an invalid email', () => {
    cy.get('[class="signup-inner"]').contains('Stay Connected').scrollIntoView({ duration: 1000 })

    cy.get('[class*="email"]').type('{enter}')

    cy.get('[class="mce_inline_error"]')
      .should('be.visible')
      .contains('This field is required.')
  })

  it('Validate user cannot subscribe to the TVO Learn Newsletter when entering invalid characters', () => {
    cy.get('[class="signup-inner"]').contains('Stay Connected').scrollIntoView({ duration: 1000 })

    cy.get('[class*="email"]').type('@#0)*%&#%#@{enter}')

    cy.get('[class="mce_inline_error"]')
      .should('be.visible')
      .contains('Please enter a valid email address.')
  })
})