describe("Login Admin", function () {
    beforeEach(function () {
        cy.fixture("admin").then(function (admin) {
            this.admin = admin;
            cy.visit("/login");
            cy.url().should('include', '/login');
            cy.get("#email").type(this.admin.email);
            cy.get("#password", { timeout: 10000 }).type(this.admin.password);
            cy.get("#btn-login").click();
            cy.contains("Dashboard").should("be.visible");
            cy.contains("Admin").should("be.visible");
        });
    });

    it("Tambah Data User Operator", function () {
        cy.url().should('include', '/');

        cy.get("#liMasterData").click();
        cy.get('#DataUser').click();
        cy.url().should('include', '/user');
        cy.contains("Data User").should("be.visible");
        cy.get("body > div > div.content-wrapper > section > div > div > div.col-md-12 > div > div.card-header > h3 > button").click()
        cy.get('#email').type('rizal@gmail.com')
        cy.get('button')
        cy.get('.col-md-12 > :nth-child(2)')
        cy.get('#select2-role-container').click().get('#role').select('Operator', { force: true })
        cy.get('button')
        cy.get('#name').type('Rizal')
        cy.get('#password').type('rizal123')
        cy.get('#password-confirm').type('rizal123')
        cy.get("body > div.wrapper > div.content-wrapper > section > div > div > div.modal.fade.bd-example-modal-md.tambah-user.show > div > div > div.modal-footer.justify-content-between > button.btn.btn-primary").click()
        cy.contains("Berhasil menambahkan user Admin baru!", { timeout: 10000 }).should('be.visible')

        cy.logout();
        cy.url().should('include', '/');;
        cy.wait(3000);

        cy.get('#btnGroupDrop1').click()
        cy.contains('Log Out').click()
        cy.url().should('include', '/');

        cy.url().should('include', '/login');
        cy.get("#email").type('rizal@gmail.com');
        cy.get("#password", { timeout: 10000 }).type('rizal123');
        cy.get("#btn-login").click();
        cy.contains("Dashboard").should("be.visible");

    });

});