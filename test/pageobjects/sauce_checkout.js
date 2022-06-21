import sauceCart from './sauce_cart';
class sauceCheckout {
    get finishCheckOutBttn () {
        return $('#finish');
    }
    get cancelTheCheckoutBttn () {
        return $('#cancel');
    }

    async setFirstName(firstName) {
        await this.sauceCart.firstNameInput.setValue(firstName);
    }

    async setLastName(lastName) {
        await this.sauceCart.lastNameInput.setValue(lastName);
    }

    async setZip(zip) {
        await this.sauceCart.zipCodeInput.setValue(zip);
    }

    async completeForm () {
        await this.setFirstName(firstName);
        await this.setLastName(lastName);
        await this.setZip(zip);
    }
}

export default new sauceCheckout;