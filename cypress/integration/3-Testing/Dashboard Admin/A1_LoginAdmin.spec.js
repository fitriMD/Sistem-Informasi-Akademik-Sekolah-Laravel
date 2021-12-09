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


    it('loginadmin', () => {
        cy.fixture("admin").then(function(admin){
            this.admin = admin;
            cy.visit("/login");
            cy.url().should('include','/login');
            cy.get("#email").type(this.admin.email);
            cy.get("#password").type(this.admin.password);
            cy.get("#btn-login").click();
            cy.contains("Dashboard").should("be.visible");

        });
        
    });
    
});