# QA Assignment

## Exercise

- Write a script to login to https://app.maze.co
- Write a script to create a new survey project
- Write a script to add blocks to the project
- How to avoid hard coding the URL in the tests?
- How to set and access the environment variables?

## Test credentials to use

Username: cypresser@harakirimail.com
Password: aQ[JyY;ph^4J

## Expectations:

- Script `cypress open` to test thru UI or `cypress run` to test thru CLI to be added by the candidate
- Create re-usable methods like `login`, `createProject` etc.
- Using hooks for set up and cleaning up of data
- Example solution for first 2 are added in the `cypress/integration/maze` folder
- Make sure that at least login test is working fine
- The url can be set in `cypress.json` with property `baseUrl`

```
{
  "baseUrl": "http://localhost:3030"
}
```

- Environment variables can be accessed via `Cypress.env('ENV_VAR')` and can be set in `cypress.json`

````{
  "env": {
    "PASSWORD": "abcX@12Z"
  }
}```
````
