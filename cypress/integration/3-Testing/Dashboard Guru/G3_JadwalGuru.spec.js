describe("Login Guru", function () {
    beforeEach(function () {
    cy.fixture("guru").then(function (guru) {
        this.guru = guru;
        cy.visit("/login");
        cy.url().should('include','/login');
        cy.get("#email").type(this.guru.email);
        cy.get("#password").type(this.guru.password);
        cy.get("#btn-login").click();
        cy.contains("Dashboard").should("be.visible");

        });
    });

    it("Jadwal Guru", function () {
        cy.url().should('include','/');

        cy.get("#JadwalGuru").click();
        cy.contains("Jadwal Guru").should("be.visible");
        
        
    });

});
