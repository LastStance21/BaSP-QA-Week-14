class sauceAddToCart {
    get checkOutButtn () {
        return $('#checkout');
    }
    get removeFromCartBikeBttn () {
        return $('#remove-sauce-labs-bike-light');
    }
    get removeFromCartBackPackBttn () {
        return $('#remove-sauce-labs-backpack');
    }
    get removeFromCartTshirt () {
        return $('#remove-sauce-labs-bolt-t-shirt');
    }
    get goBackBtton () {
        return $('#continue-shopping');
    }
    get firstNameInput () {
        return $('#first-name');
    }
    get lastNameInput () {
        return $('#last-name');
    }
    get zipCodeInput () {
        return $('#postal-code');
    }
    get continueFinishBtton () {
        return $('#continue');
    }
    get cancelBttonFinish () {
        return $('#cancel');
    }

    get removeFromCartJacket () {
        return $('#remove-sauce-labs-fleece-jacket')
    }
}

export default new sauceAddToCart();