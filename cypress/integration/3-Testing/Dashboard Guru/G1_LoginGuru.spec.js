describe('Dashboard Guru',()=>{
    
it('Login Guru', () => {
    cy.fixture("guru").then(function(guru){
        this.guru = guru;
        cy.visit("/login");
        cy.url().should('include','/login');
        cy.get("#email").type(this.guru.email);
        cy.get("#password", {timeout:10000}).type(this.guru.password);
        cy.get("#btn-login").click();
        cy.contains("Dashboard").should("be.visible");
        // cy.get("#btnGroupDrop1").click();
        // cy.get("body > div > nav > ul.navbar-nav.ml-auto > li > div > div > a:nth-child(2)").click();
        // cy.contains("Login Authentication").should("be.visible");

    });
    
});

});
