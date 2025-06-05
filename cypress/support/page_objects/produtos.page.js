class produtosPage{
    visitarUrl(){
        cy.visit('produtos')
    }
    
    buscarProdutoLista(nomeProduto){
        cy.get('.product-block').contains(nomeProduto).click() 
    }
    
    buscarProduto(nomeProduto){
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }
    
    addProdutoCarriho(tamanho, cor, quantidade){
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        for (let index = 1; index < quantidade; index++) {
            cy.get('.plus').click()
        }        

        cy.get('.single_add_to_cart_button').click()
    }
} 

export default new produtosPage()