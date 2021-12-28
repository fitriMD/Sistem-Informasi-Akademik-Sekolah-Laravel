describe("Refresh Database", ()=>{
    beforeEach(()=>{
        cy.refreshDatabase();
        cy.seed('UsersSeeder');
        cy.seed('RuangSeeder');
        cy.seed('PaketSeeder');
        cy.seed('KehadiranSeeder');
        cy.seed('HariSeeder');
    });

    it('database succesfully refresh', () => {
        
    });


    it('LoginLogout Admin', () => {
        cy.fixture("admin").then(function(admin){
            this.admin = admin;
            cy.visit("/login");
            cy.url().should('include','/login');
            cy.get("#email").type(this.admin.email);
            cy.get("#password", {timeout:10000}).type(this.admin.password);
            cy.get("#btn-login").click();
            cy.contains("Dashboard").should("be.visible");
            cy.get("#btnGroupDrop1").click();
            cy.get("body > div > nav > ul.navbar-nav.ml-auto > li > div > div > a:nth-child(2)").click();
            cy.contains("Login Authentication").should("be.visible");

        });
        
    });

    // it('Logout admin', () => {
    //     cy.fixture("admin").then(function(admin){
    //         this.admin = admin;
    //         cy.visit("/login");
    //         cy.url().should('include','/login');
    //         cy.get("#email").type(this.admin.email);
    //         cy.get("#password").type(this.admin.password);
    //         cy.get("#btn-login").click();
    //         cy.contains("Dashboard").should("be.visible");

    //     });
        
    // });

});