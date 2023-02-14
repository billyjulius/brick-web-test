# Brick Assessment Test

## Requirement

You need following installed for running the test

1. [Node JS](https://nodejs.org/en/)
2. [Chrome Browser](https://www.google.com/chrome/)

## Step

1. Clone this repository
2. Run command <code>npm install</code>
3. Run test with command <code>npm run cypress-run</code>
4. Automated test this project run is composed of UI based test and API Test
5. In this project, there is various action used in interacting with browser such as:
   - Clicking Button
   - Input text in field
   - Asynchronous wait (built in Serenity)
   - Switch tab
   - Alert interaction, etc
6. Validation for api json response using [Json schema](http://json-schema.org/)
7. Configured for running Serenity with essential features. Of course you can configured based what you need.
   Feature enabled such as:
   - Taking a screenshot
   - Ignore fail on scenario
   - Browser restart frequency
   - Implicity timeout, etc
8. Parallel execution. Many people often confused hwo to do parallel execution in Serenity, but in this
   project I configure it by default to run testsuite with 2 parallel (thread) at the same time.
9. Fully compability for running in selenium grid. Required properties configured in file `serenity.properties`.
   You only need to change parameter `webdriver.remote.url` to you selenium grid host.
10. Custom capabilities. Because Serenity wrapped the Selenium java,
    it is often confusing how to use its certain behaviour such as adding custom capabilies.
    I already including extension class for adding custom capabilities in Serenity. Detail can be seen in [Serenity BDD Book](https://serenity-bdd.github.io/theserenitybook/latest/index.html)
11. Cucumber Hooks class available with either step hooks (AfterStep & BeforeStep) and scenario hooks (After & Before).
    You can do some action before or after test step or scenario like example,
    - Reset data in database before every scenario
    - Call backend API for setting configuration
    - Sending test result to external service, etc
