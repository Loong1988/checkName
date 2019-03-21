import Cookie from 'js-cookie';

const TOKEN_KEY = 'token';

class Auth {
    constructor() {
        
    }

    static getToken () {
        return Cookie.get(TOKEN_KEY);
    }

    static setToken (v) {
        //cookie保存7天
       return Cookie.set(TOKEN_KEY, v, {
           expires: 7
       })
    }
    static delToken (){
        Cookie.remove(TOKEN_KEY)
    }
}

export default Auth;
