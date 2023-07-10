# TVO E2E Validation

This repository contains end-to-end (E2E) validation tests for TVO (Television Ontario) application. These tests ensure the functionality and user experience of TVO's features, helping to maintain the quality and reliability of the application.

The E2E tests are implemented using the Cypress testing framework. Cypress provides a powerful and intuitive way to write and execute tests in a browser environment.

## Getting Started

To get started with running the E2E validation tests locally, follow the instructions below.

### Prerequisites

- Node.js (version X.X.X or higher)
- NPM (version X.X.X or higher)

### Installation

1. Clone the repository:

```shell
git clone https://github.com/yowebraj/TVO-E2E-Validation.git
```

2. Change to the project directory:

```shell
cd TVO-E2E-Validation
```

3. Install the dependencies:

```shell
npm install
```

### Running the Tests

To run the E2E validation tests on the Cypress Playground, use the following command:

```shell
npx cypress open
```

To run the E2E validation tests headless, use the following command:

```shell
npx cypress run
```

## Summary Test Approach

The TVO E2E Validation test suite aims to validate the functionality and user experience of the TVO application. The approach includes the following key aspects:

- **Scope**: The test suite covers end-to-end validation tests for user workflows of the TVO application.

- **Test Automation**: Tests are implemented using Cypress, a powerful JavaScript-based testing framework, to provide reliable and repeatable test execution.

## Test Cases Covered

The test suite covers the following critical areas of the TVO application:

1. **Text Functionality Validation**
   - Validate the Grade 1 Mathematics Header.
   - Validate the Grade 1 Mathematics Curriculum Strands.

2. **Link/Routing Functionality Validation**
   - Validate some links are working as expected.
        - A few links throughout the webpage were used for this validation.

3. **Table Validation**
   - Validate the Learning Activities table and its contents.
   - Validate the Vocabulary table.

4. **TVO Learn Newsletter Subscription Validation**
   - Validate user can subscribe to the TVO Learn Newsletter with a valid email
   - Validate user cannot subscribe to the TVO Learn Newsletter with an invalid email.
   - Validate user cannot subscribe to the TVO Learn Newsletter without entering an invalid email.
   - Validate user cannot subscribe to the TVO Learn Newsletter when entering invalid characters

## Assumptions

During the development and execution of the test suite, the following assumptions were made:

1. **Test Environment**: The tests were executed in an environment similar to the production environment, ensuring accurate validation of TVO's functionality and user experience.
2. **Stable Application**: The tests assume that the TVO application is stable and functioning correctly during test execution. Any application instability or intermittent issues may affect the test results.



