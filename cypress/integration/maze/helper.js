const login = () => {
  cy.visit("https://app.maze.co/");
  cy.get("[data-e2e='login_email_input']").type("cypresser@harakirimail.com");
  cy.get("[data-e2e='login_password_input']").type("aQ[JyY;ph^4J");
  cy.get("[data-e2e='login_submit_button']").click();
};

const createSurveyProject = () => {
  cy.get("[name='cross']").first().click();
  cy.contains("Create a new project").click();
  cy.get("[data-e2e='create-project-project-name']").type("Test");
  cy.get("[data-e2e='create-project-collect-insights']").click();
  cy.get("[data-e2e='create-project-submit']").click();
};

module.exports = {
  login,
  createSurveyProject,
};
