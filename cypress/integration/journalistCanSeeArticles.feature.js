describe('Journalist can see list of their articles', () => {
  before(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: "fixture:articles_index.json",
    });
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth/sign_in",
      response: "fixture:login_response.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/auth/**",
      response: "fixture:login_response.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles/1",
      response: "fixture:show_article_response.json",
    });
    cy.visit("/");
    cy.get("#login-form").within(() => {
      cy.get("#email").type("journalist@mail.com");
      cy.get("#password").type("password");
      cy.get("#login-button").click();
    });
  });

  it("Journalist can see article one", () => {
    cy.get('#article-2').within(() => {
      cy.get('#title').should('contain', "World of Finance")
      cy.get('#lead').should('contain', "Covid19 is having a massive impact globally")
    });
    cy.get('#article-3').within(() => {
      cy.get('#title').should('contain', "Football Back in Action")
      cy.get('#lead').should('contain', "Really after months of no games")
    })
    cy.get('#article-1').within(() => {
      cy.get('#title').should('contain', "Happy Journalist")
      cy.get('#lead').should('contain', "Happier than the world")
      cy.get('#view-article').click()
      cy.get('#content').should('contain', "The life of a journalist involves creating lots of articles")
      cy.get('#category').should('contain', "Lifestyle")
      cy.get("img").should("exist");
    })
  });
})