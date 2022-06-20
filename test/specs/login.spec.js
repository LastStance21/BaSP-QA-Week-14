import LoginSauce from  '../pageobjects/sauce_login';
// import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginSauce.open();
        await LoginSauce.login('standard_user', 'secret_sauce');
    });
    it('should fail to login with invalid credentials', async () => {
        await LoginSauce.open();
        await LoginSauce.login('locked_out_user', 'secret_sauce');
        await expect(LoginSauce.errorContainer).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });
    it('should login with some problems in the process', async () => {
        await LoginSauce.open();
        await LoginSauce.login('problem_user', 'secret_sauce');
    });
    it('should require values on the inputs to login', async () => {
        await LoginSauce.open();
        await LoginSauce.login('', 'secret_sauce');
        await expect(LoginSauce.errorContainer).toHaveText('Epic sadface: Username is required');
    });
    it('should require valid inputs to login', async () => {
        await LoginSauce.open();
        await LoginSauce.login('dany', '12386');
        await expect(LoginSauce.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });
    it('should login with some issues at perfomance', async () => {
        await LoginSauce.open();
        await LoginSauce.login('performance_glitch_user', 'secret_sauce');
    });
});


