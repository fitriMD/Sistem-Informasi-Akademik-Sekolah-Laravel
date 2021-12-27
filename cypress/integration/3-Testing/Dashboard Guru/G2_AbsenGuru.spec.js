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

    it("Absen Guru", function () {
        cy.url().should('include','/');

        cy.get("#AbsenGuru").click();
        cy.contains("Absen Harian Guru").should("be.visible");
        
        //absen
        cy.get("#id_card").type("00001");
        cy.get("#select2-kehadiran_id-container").click().get("#kehadiran_id").select("Hadir",{force: true});
        cy.get("body > div > div.content-wrapper > section > div > div > div:nth-child(2) > div > form > div.card-footer > button").click();
        
        
    });

});
