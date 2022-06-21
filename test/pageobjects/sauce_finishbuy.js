class sauceFlowFinished {
    get successMessage () {
        return $('#checkout_complete_container');
    }
    get backHomeBttn () {
        return $('#back-to-products');
    }
}

export default new sauceFlowFinished;