import ApiInfo from './ApiInfo.js';

class QuKanPermApiInfo extends ApiInfo {
    constructor({
                    path,
                    type = 'get',
                    timeout = 5000,
                    headers,
                    project = 'hot', // || qukan,
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
    keywords: {
        list: new QuKanPermApiInfo({
            description:'获取关键词列表',
            path: '/monitor/keywords/list',
            type: 'get',
            author: '王兆鹏'
        }),
        add: new QuKanPermApiInfo({
            description:'增加关键词列表',
            path: '/monitor/keywords/add',
            type: 'post',
            author: '王兆鹏'
        }),
        update: new QuKanPermApiInfo({
            description:'修改关键词列表',
            path: '/monitor/keywords/update',
            type: 'post',
            author: '王兆鹏'
        }),
        delete: new QuKanPermApiInfo({
            description:'删除关键词列表',
            path: '/monitor/keywords/delete',
            type: 'post',
            author: '王兆鹏'
        }),
    },
    appPush: {
        latest: new QuKanPermApiInfo({
            description:'获取最新数据ID',
            path: '/monitor/app/push/latest',
            type: 'get',
            author: '王兆鹏'
        }),
        push: new QuKanPermApiInfo({
            description:'获取最push新数据',
            path: '/monitor/app/push',
            type: 'get',
            author: '王兆鹏'
        }),
        sources: new QuKanPermApiInfo({
            description:'APP Push 数据源类别',
            path: '/monitor/app/push/sources',
            type: 'get',
            author: '王兆鹏'
        }),
       
    },
    weibo: {
        latest: new QuKanPermApiInfo({
            description:'获取最新数据ID',
            path: '/monitor/author/data/latest',
            type: 'get',
            author: '王兆鹏'
        }),
        data: new QuKanPermApiInfo({
            description:'获取最weibo新数据',
            path: '/monitor/author/data',
            type: 'get',
            author: '王兆鹏'
        }),
        group: new QuKanPermApiInfo({
            description:'weibo分组',
            path: '/monitor/author/group',
            type: 'get',
            author: '王兆鹏'
        }),
    },
    meberInfo: {
        info: new QuKanPermApiInfo({
            description:'用户信息',
            path: '/monitor/member/info',
            type: 'get',
            author: '王兆鹏'
        }),
    },




}