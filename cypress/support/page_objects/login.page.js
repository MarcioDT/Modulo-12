class loginPage{
    
    userLogin(usuario, senha){
        cy.get('#username').type(usuario)
        cy.get('#password').type(senha)    
        cy.get('.woocommerce-button').click()
    }
} 

export default new loginPage()