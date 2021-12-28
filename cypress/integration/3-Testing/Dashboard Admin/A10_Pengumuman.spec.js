describe("Pengumuman", function () {
    beforeEach(function () {
    cy.fixture("admin").then(function (admin) {
        this.admin = admin;
        cy.visit("/login");
        cy.url().should('include','/login');
        cy.get("#email").type("admin@gmail.com");
        cy.get("#password").type("12345678");
        cy.get("#btn-login").click();
    });
  });

  it("Pengumuman", function () {
    cy.contains("Pengumuman").click();
    cy.get('.note-editable').clear()
    cy.get('.note-editable').type('Libur Semester Ganjil 2020/2021')
    cy.get('.note-editable').type('{enter}Libur Semester Genap 2020/2021 ')
    cy.get('.btn-outline-primary').click({force :true})
    cy.contains('Dashboard').click()
    cy.visit("http://127.0.0.1:8000/")
  })
})