import Page from './page.js';


class ProductsPage extends Page {
   // define selectors using getter functions
   get cartIcon() {
       return $('#shopping_cart_container');
   }

   get cartBadge() {
       return $('.shopping_cart_badge');
   }

   // dynamic selector helping to find the "Add to Cart" button for a specific item
   itemCartButton(sauceLabsCandy) {
       return $(`#add-to-cart-${sauceLabsCandy}`);
   }


   // Describe the addToCart function
   async addToCart(sauceLabsCandy) {
       // Click on the "Add to Cart" button for the specified item
       await this.itemCartButton(sauceLabsCandy).click();
   }
}


export default new ProductsPage();
