class sauceInventory {

    get addToCartbtnBackPack () {
        return $('#add-to-cart-sauce-labs-backpack');
    }
    get addToCartBikeLight () {
        return $('#remove-sauce-labs-bike-light');
    }
    get addToCartShirt () {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
    }
    get addToCartJacket () {
        return $('#add-to-cart-sauce-labs-fleece-jacket');
    }
    get cartBtton () {
        return $('#shopping_cart_container');
    }

    async buyItems () {
    await this.addToCartbtnBackPack.click();
    await this.addToCartBikeLight.click();
    await this.addToCartShirt.click();
    await this.addToCartJacket.click();
    await this.cartBtton.click();
}

    async addItemsToCart () {
    await this.addToCartbtnBackPack.click();
    await this.addToCartBikeLight.click();
    await this.addToCartShirt.click();
    await this.addToCartJacket.click();
    }
}

export default new sauceInventory();
