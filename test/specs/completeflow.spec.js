import sauce_login from "../pageobjects/sauce_login";
import sauceInventory from "../pageobjects/sauce_inventory";
import sauceCart from '../pageobjects/sauce_cart';
import sauceCheckout from '../pageobjects/sauce_checkout';
import sauceComplete from '../pageobjects/sauce_finishbuy';

describe('complete flow of the standrd user', () => {
    it('standard user must login with valid credentials', async () => {
        await sauce_login.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });
    it('should add items to cart, and go to cart page', async () => {
        await sauceInventory.buyItems();
        await expect(broser).toHaveUrl('https://www.saucedemo.com/cart.html');
    });
    it('go into the checkout page', async () =>{
        await sauceCart.checkOutButtn.click();
    });
    it('fill up the checkoutform', async () => {
        await sauceCheckout.completeForm('Jane', 'Doe', '6666');
    });
})
