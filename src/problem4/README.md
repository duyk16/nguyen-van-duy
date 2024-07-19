# Problem 4 Solution

## Overview

This project implements three different methods to calculate the sum of numbers from 1 to `n`. The methods are implemented in TypeScript and are located in the file `src/threeWaysToSum.ts` 

## How to run tests

To run this project, you will need **Node.js** and **Yarn** installed on your machine. After cloning the repository, navigate to the project directory and install the dependencies:

```sh
yarn install
```

This project uses Mocha and Chai for testing. Tests are located in the test/ directory, specifically in the test/threeWaysToSum.spec.ts file, which contains unit tests for the three methods.

To run the tests, execute the following command:

```sh
yarn test
```


For coverage reports, this project utilizes Istanbul's nyc. To generate and view a coverage report, run:

```sh
yarn test:coverage
```


This command will run the tests with coverage enabled and generate a report in the .test_report/ directory. You can view the coverage report by opening .test_report/lcov-report/index.html in your web browser.
