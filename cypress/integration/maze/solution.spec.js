const { login, createSurveyProject } = require("./helper");
beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

describe("Login to the maze app", () => {
  it("should be able to login to the maze app", () => {
    login();
    cy.url().should("include", "/projects");
  });
});

describe("Create Project", () => {
  beforeEach(() => {
    login();
  });

  it("should be able to login to the maze app", () => {
    cy.url().should("include", "/projects");
    createSurveyProject();
  });
});
