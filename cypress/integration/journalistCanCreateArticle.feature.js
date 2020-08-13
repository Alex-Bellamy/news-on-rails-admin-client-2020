describe("Journalist can create article", () => {
  context("successfully", () => {
    beforeEach(() => {
      cy.server();
      cy.visit("/");
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/articles",
        response: '{"message": "Your article was successfully created"}',
      });
    });
    it("journalist can create an article successfully", () => {
      cy.get("button").contains("Create Article").click();
      cy.get("#article-form").within(() => {
        cy.get("#title").type("Title");
        cy.get("#lead").type("Lead");
        cy.get("#category").click();
        cy.get("div[role='option']").contains("Lifestyle").click();
        cy.get("#content").type("This is content");
        cy.file_upload("img.jpeg", "#image-upload", "image/jpeg");
        cy.get("button").contains("Save Article").click();
      });
      cy.get("p#response-message").should("contain", "Your article was successfully created")
    });
  });

  context("unsuccessfully", () => {
    beforeEach(() => {
      cy.server();
      cy.visit("/");
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/articles",
        response: {"message": "Title can't be blank"},
      });
    });
    it("unsuccessfully without title", () => {
      cy.get("button").contains("Create Article").click();
      cy.get("#article-form").within(() => {
        cy.get("#lead").type("Lead");
        cy.get("#category").click();
        cy.get("div[role='option']").contains("Lifestyle").click();
        cy.get("#content").type("This is content");
        cy.file_upload("img.jpeg", "#image-upload", "image/jpeg");
        cy.get("button").contains("Save Article").click();
      });
      cy.get("p#response-message").should("contain", "Title can't be blank")
    });
  });
});