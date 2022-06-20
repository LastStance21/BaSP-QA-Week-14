import sauceLogin from '../pageobjects/sauce_login';
import sauceInventory from '../pageobjects/sauce_inventory';

beforeAll('should open the webpage', () => {
    sauceLogin.open();
    sauceLogin.login('standard_user', 'secret_sauce');
});

describe('this test checks all the buttons for the inventory page', () => {
    it('it should check the button is clickable', async () =>{
        await expect(sauceInventory.addToCartbtnBackPack).toBeDisplayed();
        await expect(sauceInventory.addToCartbtnBackPack).toBeClickable();
        await sauceInventory.addToCartbtnBackPack.click();

    });
});
