describe("Login Admin", function () {
    beforeEach(function () {
        cy.fixture("admin").then(function (admin) {
            this.admin = admin;
            cy.visit("/login");
            cy.url().should('include', '/login');
            cy.get("#email").type(this.admin.email);
            cy.get("#password").type(this.admin.password);
            cy.get("#btn-login").click();
            cy.wait(5000);
            cy.contains("Dashboard").should("be.visible");
            cy.contains("Admin").should("be.visible");
        });
    });

    it("Tambah Data Kelas", function () {
        cy.url().should('include','/');
    
        cy.get("#liMasterData").click();
        cy.get('#DataKelas').click();
        cy.url().should('include','/kelas');
        cy.contains("Data Kelas").should("be.visible");
        cy.get("body > div > div.content-wrapper > section > div > div > div.col-md-12 > div > div.card-header > h3 > button").click()
        cy.get("#nama_kelas").type("Duabelas B")
        cy.get('#paket_id').select('Elektronika Industri', { force: true })
        cy.get("#select2-guru_id-container").click().get('#guru_id').select('Devi', { force: true })
    
        cy.get("#form-kelas > div > div > div.modal-footer.justify-content-between > button.btn.btn-primary").click()
    });

    it.only('Tambah Data Siswa', function() {
        cy.url().should('include','/');

        cy.get("#MasterData").click();
        cy.get("#DataSiswa").click();
        cy.contains("Data Siswa").should("be.visible");

        cy.get("body > div.wrapper > div.content-wrapper > section > div > div > div.col-md-12 > div > div.card-header > h3 > button.btn.btn-default.btn-sm").click();
        cy.wait(400);
        cy.contains("Tambah Data Siswa").should("be.visible");
        cy.get("#no_induk").type("3285");
        cy.get("#nama_siswa").type("Fitri Mutiara Devi");
        cy.get("#select2-jk-container").click().get("#jk").select('Perempuan',{force: true});
        cy.get("#tmp_lahir").type("Gresik");
        cy.get("#nis").type("0007817730");

        cy.get("#select2-kelas_id-container").click().get("#kelas_id").select('DUABELAS A',{force: true});
        cy.get("#tgl_lahir").type("2000-12-27");
        cy.get('#foto').attachFile('Fitri.png');
        cy.get('body > div.wrapper > div.content-wrapper > section > div > div > div.modal.fade.bd-example-modal-lg.show > div > div > div.modal-footer.justify-content-between > button.btn.btn-primary').click();

    });
})