import BaseRequest from './BaseRequest';
import Apis from './Apis';
import DataCenterLog from './DataCenterLog';
import ApiDomain from './ApiDomain';
import ewxLoginSDK from '@qtt/ewx-login-sdk';
import Auth from '../common/js/Auth'
class QuRequest extends BaseRequest {
    constructor () {
        super();
        this.Apis = Apis;
        this.apiDomain = new ApiDomain();
    }

    getUrl (api) {
        return this.apiDomain.getUrl(api);
    }

    nativeSend (api, data = {}) {
        // data = Object.assign(
        //     {
        //         token: Auth.getToken(),
        //         dtu: 200
        //     },
        //     data
        // );
        // if (api.project === 'perm') {
        //     data.project = 'perm';
        // }

        return super
            .send(
                {
                    url: api.url,
                    type: api.type,
                    timeout: api.timeout,
                    headers: api.headers
                    // headers: {'Cookie':123}
                    // headers: {'aa':123}
                },
                data
            )
            .then((response) => this.responseInterceptor(response, api), error => this.errorInterceptor(error));
    }

    send (api, data = {}) {
        let url = this.apiDomain.getUrl(api);
        return this.nativeSend(
            {
                url: url,
                type: api.type,
                timeout: api.timeout,
                headers: api.headers,
                author: api._author || '',
                project: api.project
            },
            data
        );
    }
    responseInterceptor (response, api) {
        let res = response.data;
        // TODO
        if (res.code == -999 || res.code == -126) {
            // 清除登录状态，避免登录状态失效后死循环问题
            Auth.delToken();
            setTimeout(() => {
                location.href='/login'
            }, 2000);
            throw new Error('登陆状态失效, 请登陆');
        }
        const rules = {
            '0': res => {
                return res;
            },
            '-2101': () => {
                return res;
            },
            '-126': () => {
                // location.href='/login'
                // return res
            },
        };
        
        if (rules[res.code]) {
            return rules[res.code](res);
        }
        // not define code throw error
        DataCenterLog.send({
            item: 2001,
            path: api.url,
            author: api.author,
            code: res.code,
            message: res.message
        });
        /* eslint-disable no-throw-literal */

        throw {
            message: `请求失败code: ${res.code}, message: ${res.message || '未知原因'}，接口开发者：${api.author}`,
            stack: new Error().stack,
            code: res.code
        };
        /* eslint-enable no-throw-literal */
    }
    errorInterceptor (error) {
        let status = 0;
        if (error.response) {
            status = error.response.status;
        } else if (error.request) {
            status = error.request.status;
        }
        throw new Error(`网络错误 [ ${status} ] ${error.message} `);
    }
    getProject () {
        return this.apiDomain.getProject();
    }

    getBranch () {
        return this.apiDomain.getBranchMap();
    }

    isProduct () {
        return this.apiDomain.isProduct();
    }

    getProjectTitle () {
        return this.apiDomain.getProjectTitle();
    }
}

export default QuRequest;
