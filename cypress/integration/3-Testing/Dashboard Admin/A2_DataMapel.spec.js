describe("Login Admin", function(){
    beforeEach(function(){
        cy.fixture("admin").then(function(admin){
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
    
        it('Tambah Data Mapel', function() {
            cy.url().should('include','/');
            
            cy.get("#liMasterData").click();
            cy.get("#DataMapel").click();
            cy.contains("Data Mapel").should("be.visible");

            cy.get("body > div > div.content-wrapper > section > div > div > div.col-md-12 > div > div.card-header > h3 > button").click();
            cy.contains("Tambah Data Mapel").should("be.visible");
            
            cy.get("#nama_mapel").type("Bisnis");
            
            cy.get("#select2-paket_id-container").click().get("#paket_id").select("Bisnis kontruksi dan Properti",{force: true});
            
            cy.get("#select2-kelompok-container").click().get("#kelompok").select("Pelajaran Keahlian",{force: true});

            cy.get("body > div.wrapper > div.content-wrapper > section > div > div > div.modal.fade.bd-example-modal-md.tambah-mapel.show > div > div > div.modal-footer.justify-content-between > button.btn.btn-primary").click();


            //edit
            cy.get("#example1 > tbody > tr > td:nth-child(5) > form > a").click();
            cy.contains("Edit Mapel").should("be.visible");
            cy.get("#nama_mapel").clear();
            cy.get("#nama_mapel").type("Properti");
            cy.get("body > div > div.content-wrapper > section > div > div > div > div > form > div.card-footer > button").click();
            cy.get("#back").click();
            cy.contains("Data Mapel").should("be.visible");

            //hapus
            cy.get("#example1 > tbody > tr > td:nth-child(5) > form > button").click();
        });


});



