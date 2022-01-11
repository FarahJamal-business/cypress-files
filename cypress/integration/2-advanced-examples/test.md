## ```Waiting for http requests```
**For front end applications that rely on the timing of http requests, cypress offers a command,wait(), for waiting until a http requests finishes.**


```
cy.intercept("GET", Cypress.env("testBaseUrl") + relativePath).as(waitStr);
cy.wait("@waitStr");
```

## ```Reloading a page```

**To ensure your page has communicated with the server before running a test, you can use the reload() command.**

```
cy.reload();
```

## ```Documenting/Workflow```
**Adding logging to your tests can make them easier to understand and debug. To speed up debugging, I use the it.only() test specifier to run one test at a time.**


```
cy.log("** read imported file **"); 
it.only("I am debuging only this test now"); // ( avoids running all tests )
```

## ```Fixtures```

**Fixtures are json files that document the http requests you send to your application. Create fixtures in the cypress/fixtures directory. The example below uses a file called "fixtureFile.json".**


```   
 cy.fixture("fixtureFile").then(fixtureFile=> {
      cy.intercept(“GET”, Cypress.env("testBaseUrl") + relativePath, fixtureFile);
    });

```