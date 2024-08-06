const homeScreens = require("../screens/home.screens");
const loginScreens = require("../screens/login.screens");
const myStoreScreens = require("../screens/myStore.screens");

const users = require('../../mobileData/dados.json')

describe('Acessar painel de administração', () =>{
    it('Deve logar com credenciais válidas', async () => {
        await homeScreens.goToLogin()
        await loginScreens.setStoreAddress(users.url)
        await loginScreens.continueBtn()
        await loginScreens.continueWithStoreCredentials()
        await loginScreens.login(users.user, users.password)
        await loginScreens.twoFactorAuth()
        await loginScreens.twoFactorLogin(users.password)

        expect (await myStoreScreens.getStoreName()).toEqual('EBAC - Shop')
    });
    
})