/// <reference types="cypress" />

import produtosPage from "../support/page_objects/produtos.page";
import loginPage from "../support/page_objects/login.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      //cy.visit('http://lojaebac.ebaconline.art.br/')
      produtosPage.visitarUrl()
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

    cy.fixture('selecaoProduto').then(produtos => {
        //for (let i = 0; i < 4; i++) {

            //produtosPage.buscarProduto(produtos[i].nomeProduto)
            //produtosPage.addProdutoCarriho(produtos[i].tamanho,produtos[i].cor,produtos[i].quantidade)         
            //cy.get('.woocommerce-message').should('contain',produtos[i].nomeProduto) 
       //}    
      Cypress._.each(produtos.slice(0, 4), produto => {
        
        produtosPage.buscarProduto(produto.nomeProduto)
        produtosPage.addProdutoCarriho(produto.tamanho, produto.cor, produto.quantidade)
        cy.get('.woocommerce-message').should('contain', produto.nomeProduto)
      });       

    });  
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()    
    cy.get('.showlogin').click()      
       
    cy.fixture('perfil').then(usuario => {        
        loginPage.userLogin(usuario.usuario,usuario.senha) 
    }) 

    cy.get('.payment_method_cod').find('#payment_method_cod').click()
    cy.get('#terms').click()
    cy.get('[data-value="Finalizar compra"]').click()

    cy.wait(9000)
    cy.get('.woocommerce-notice').should('contain','Obrigado. Seu pedido foi recebido')
    //cy.get('.woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received').should('exist')
  });
})