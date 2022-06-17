import LoginSauce from  '../pageobjects/sauce_login';
// import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginSauce.open();
        await LoginSauce.login('standard_user', 'secret_sauce');
    });
});


