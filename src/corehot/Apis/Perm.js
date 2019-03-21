import ApiInfo from './ApiInfo.js';

class QuKanPermApiInfo extends ApiInfo {
    constructor({
                    path,
                    type = 'get',
                    timeout = 5000,
                    headers,
                    project = 'perm', // || qukan,
                    author = '未定义'
                }) {
        super({
            path,
            type,
            timeout,
            headers,
            project,
            author
        });
    }
}

export default {
    member: {
        list: new QuKanPermApiInfo({
            path: '/member/list',
            type: 'get',
            author: '刘彪'
        }),
        getMember: new QuKanPermApiInfo({
            path: '/member/getMember',
            type: 'get',
            author: '刘彪'
        }),
        allowLogin: new QuKanPermApiInfo({
            path: '/member/allowLogin',
            type: 'post',
            author: '刘彪'
        }),
        login: new QuKanPermApiInfo({
            path: '/member/login',
            type: 'get',
            author: '刘彪'
        }),
        loginByPwd: new QuKanPermApiInfo({
            path: '/member/loginByPwd',
            type: 'get',
            author: '刘彪'
        }),
        checkPerm: new QuKanPermApiInfo({
            path: '/member/checkPerm',
            type: 'post',
            author: '刘彪'
        })
    },
    perm: {
        list: new QuKanPermApiInfo({
            path: '/perm/getPermGroupList',
            type: 'post',
            author: '刘彪'
        })

    },


}