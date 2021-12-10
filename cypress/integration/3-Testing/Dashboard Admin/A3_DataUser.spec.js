describe("Login Admin", function () {
    beforeEach(function () {
    cy.fixture("admin").then(function (admin) {
        this.admin = admin;
        cy.visit("/login");
        cy.url().should('include','/login');
        cy.get("#email").type(this.admin.email);
        cy.get("#password").type(this.admin.password);
        cy.get("#btn-login").click();
        cy.contains("Dashboard").should("be.visible");
        cy.contains("Admin").should("be.visible");
    });
});

it("Tambah Data User", function () {
    cy.url().should('include','/');

    cy.get("#liMasterData").click();
    cy.get('#DataUser').click();
    cy.url().should('include','/user');
    cy.contains("Data User").should("be.visible");
    cy.get("body > div > div.content-wrapper > section > div > div > div.col-md-12 > div > div.card-header > h3 > button").click()
    cy.get('#email').type('devi@gmail.com')
    cy.get('button')
    cy.get('.col-md-12 > :nth-child(2)')
    cy.get('#select2-role-container').click().get('#role').select('Guru',{force: true})
    cy.get('button')
    cy.get('#nomer').type('00001')
    cy.get('#password').type('12345678')
    cy.get('#password-confirm').type('12345678')
    
    cy.get("body > div.wrapper > div.content-wrapper > section > div > div > div.modal.fade.bd-example-modal-md.tambah-user.show > div > div > div.modal-footer.justify-content-between > button.btn.btn-primary").click()

   
});

});