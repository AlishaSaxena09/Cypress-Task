const time = Date.now();

describe("My First Test", () => {
  it("Visits the AceInVoice", () => {
    cy.visit("https://www.aceinvoice.com/");
    cy.wait(1000);
    cy.contains("Sign up for FREE").click();
    cy.get(".form-control").type(
      `alishasaxena09-march-24-2021-${time}@example.com`
    );
    cy.get(".form-buttons").click();
    cy.contains("Password").get(".form-control").type("welcome1234!");
    cy.contains("Continue").click();
    cy.get("input[data-test-id=introduction-first-name]").type("Oliver");
    cy.get("input[data-test-id=introduction-last-name]").type("Smith");
    cy.get("select[data-test-id=introduction-timezone]").select("New Delhi");
    cy.get(".p-2").eq(1).click();
    cy.get("div[data-test-id=introduction-terms-service-input]").click();
    cy.get(
      "div[data-test-id=introduction-marketing-email-consent-input]"
    ).click();
    cy.contains("Continue").click();
    cy.get("input[data-test-id=organization-name]").type(
      "alishasaxena09 Private Limited"
    );
    cy.contains("Continue").click();
    cy.contains("Skip this step").click();
    cy.contains("Congratulations, you're all set!");
    cy.contains("Continue").click();
    cy.get("html").should("contain", "Verification email sent to");
    cy.contains("Client").click();
    cy.get("a[data-test-id=client-add-new]").click();
    cy.get("input[data-test-id=client-name]").type("Trix Inc");
    cy.get("input[data-test-id=client-submit]").click();
    cy.contains("Add New Project");
    cy.get("input[data-test-id=project-name]").type("Trix Web Development");
    cy.get("select[data-test-id=project-billing-method]").select(
      "Hourly project rate"
    );
    cy.get("input[data-test-id=project-rate]").type("{selectall}20");
    cy.contains("Submit").click({ force: true });
    cy.contains("Trix Web Development");
    cy.contains("Hourly Project Rate");
    cy.contains("No rounding");
    cy.contains("Oliver Smith");
  });
});
