import ApiInfo from './ApiInfo.js';

class QukanApiInfo extends ApiInfo { // 声明接口类
    constructor({
                    path,
                    type = 'get',
                    timeout = 5000,
                    headers,
                    project = 'qukan',
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
    config: {
        getConfigList: new QukanApiInfo({ // 声明接口对象
            path: '/admin/config/getConfigList',
            type: 'get',
            author: '刘彪'
        }),
        list: new QukanApiInfo({
            path: "/admin/config/getConfigList",
            type: 'get',
            author: '刘彪'
        }),
        modify: new QukanApiInfo({
            path: "/admin/config/modify",
            type: 'post',
            author: '刘彪'
        }),
        getConfigLog: new QukanApiInfo({
            path: "/admin/config/getConfigLog",
            type: 'get',
            author: '刘彪'
        }),
        getGlobalConfig: new QukanApiInfo({
            description: '获取全局配置',
            path: '/admin/config/getGlobalConfig',
            type: 'get',
            author: '郭选峰'
        })
    },
    version: {
        getList: new QukanApiInfo({
            path: '/admin/appversion/getList',
            type: 'get',
            author: '刘彪'
        }),
        delete: new QukanApiInfo({
            path: '/admin/appversion/delete',
            type: 'post',
            author: '刘彪'
        }),
        getPkgList: new QukanApiInfo({
            path: '/admin/appversion/getPkgList',
            type: 'get',
            author: '刘彪'
        }),
        modify: new QukanApiInfo({
            path: '/admin/appversion/modify',
            type: 'post',
            author: '刘彪'
        }),
        add: new QukanApiInfo({
            path: '/admin/appversion/add',
            type: 'post',
            author: '刘彪'
        })
    },
    package: {
        getList: new QukanApiInfo({
            path: '/admin/appversion/getPkgList',
            type: 'get',
            author: '刘彪'
        }),
        deletePkg: new QukanApiInfo({
            path: '/admin/appversion/deletePkg',
            type: 'post',
            author: '刘彪'
        }),
        addPkg: new QukanApiInfo({
            path: '/admin/appversion/addPkg',
            type: 'post',
            author: '刘彪'
        }),
        modify: new QukanApiInfo({
            path: '/admin/appversion/modify',
            type: 'post',
            author: '刘彪'
        }),
        add: new QukanApiInfo({
            path: '/admin/appversion/add',
            type: 'post',
            author: '刘彪'
        })
    },
    domain: {
        getList: new QukanApiInfo({
            path: '/admin/domain/index',
            type: 'get',
            author: '刘彪'
        }),
        delete: new QukanApiInfo({
            path: '/admin/domain/deleteDomain',
            type: 'post',
            author: '刘彪'
        }),
        modify: new QukanApiInfo({
            path: '/admin/domain/modifyDomain',
            type: 'post',
            author: '刘彪'
        }),
        add: new QukanApiInfo({
            path: '/admin/domain/addDomain',
            type: 'post',
            author: '刘彪'
        }),
        replaceDomain: new QukanApiInfo({
            path: '/admin/domain/replaceDomain',
            type: 'post',
            author: '刘彪'
        }),
        domainImport: new QukanApiInfo({
            path: '/admin/domain/domainImport',
            type: 'post',
            author: '刘彪'
        }),
        batch: new QukanApiInfo({
            path: '/admin/domain/batch',
            type: 'get',
            author: '刘彪'
        }),
        batchModify: new QukanApiInfo({
            path: '/admin/domain/batchModify',
            type: 'get',
            author: '刘彪'
        }),
        exportUrl: new QukanApiInfo({
            path: '/admin/domain/exportUrl',
            type: 'get',
            author: '刘彪'
        })
    },
    push: {
        list: new QukanApiInfo({
            path: '/admin/push/getPushLogList',
            type: 'post'
        }),
        getPushDetail: new QukanApiInfo({
            path: '/admin/push/getPushDetail',
            type: 'post'
        }),
        pushMessage: new QukanApiInfo({
            path: '/admin/push/pushMessage',
            type: 'post'
        }),
        delete: new QukanApiInfo({
            path: '/admin/push/removePushLog',
            type: 'post'
        }),
    },
    content: {
        getAdminContentList: new QukanApiInfo({
            path: '/admin/content/getAdminContentList',
            type: 'post',
            author: '刘彪'
        }),
        modifyContentStatus: new QukanApiInfo({
            path: '/admin/content/modifyContentStatus',
            type: 'post',
            author: '刘彪'
        }),
        modifyContent: new QukanApiInfo({
            path: '/admin/content/modifyContent',
            type: 'post',
            author: '刘彪'
        }),
        getDefaultChannelList: new QukanApiInfo({
            path: '/admin/content/getDefaultChannelList',
            type: 'get',
            author: '刘彪'
        }),
        setTop: new QukanApiInfo({
            path: '/admin/content/setTop',
            type: 'post',
            author: '刘彪'
        }),
        setHot: new QukanApiInfo({
            path: '/admin/content/setHot',
            type: 'post',
            author: '刘彪'
        }),
        refreshCND: new QukanApiInfo({
            path: '/admin/content/refreshCDN',
            type: 'post',
            author: '刘彪'
        }),
        setTips: new QukanApiInfo({
            path: '/admin/content/setTips',
            type: 'post',
            author: '刘彪'
        }),
        addContent: new QukanApiInfo({
            path: '/admin/content/addContent',
            type: 'post',
            author: '刘彪'
        }),
        getAdminContentDetail: new QukanApiInfo({
            path: '/admin/content/getAdminContentDetail',
            type: 'post',
            author: '刘彪'
        }),
        viewSimilarity: new QukanApiInfo({
            path: '/admin/content/viewSimilarity',
            type: 'post',
            author: '刘彪'
        }),
        getCategoryList: new QukanApiInfo({
            path: '/admin/content/getCategoryList',
            type: 'get',
            author: '郭选峰'
        })
    },
    sensitiveword: {
        list: new QukanApiInfo({
            path: '/admin/sensitiveword/index',
            type: 'get',
            author: '郭选锋'
        }),
        getListByType: new QukanApiInfo({
            path: '/admin/sensitivewords/getListByType',
            type: 'get',
            author: '郭选锋'}),
        getGroupList: new QukanApiInfo({
            path: "/admin/sensitiveword/getGroupList",
            type: 'get',
            author: '郭选锋'
        })
    },
    complaint: {
        list: new QukanApiInfo({
            path: '/admin/complaint/listMember',
            type: 'get',
            author: '刘彪'
        })
    },
    upload: {
        uploadFile: new QukanApiInfo({
            path: '/admin/upload/uploadFile',
            type: 'post',
            author: '刘彪'
        })
    },
    contentTop: {
        save: new QukanApiInfo({
            path: "/admin/contenttop/save",
            type: 'post',
            author: '罗磊'
        }),
        del: new QukanApiInfo({
            path: "/admin/contenttop/del",
            type: 'post',
            author: '罗磊'
        }),
        enable: new QukanApiInfo({
            path: "/admin/contenttop/enable",
            type: 'post',
            author: '罗磊'
        }),
        disEnable: new QukanApiInfo({
            path: "/admin/contenttop/disEnable",
            type: 'post',
            author: '罗磊'
        }),
        getInfo: new QukanApiInfo({
            path: "/admin/contenttop/getInfo",
            type: 'post',
            author: '罗磊'
        }),
        getList: new QukanApiInfo({
            path: "/admin/contenttop/getList",
            type: 'post',
            author: '罗磊'
        }),
        getLogList: new QukanApiInfo({
            path: "/admin/contenttop/getLogList",
            type: 'post',
            author: '罗磊'
        })
    },
    comment: {
        index: new QukanApiInfo({
            path: "/admin/comment/index",
            type: 'get',
            author: '刘彪'
        })
    },
    collect: {
        getSourceTypeList: new QukanApiInfo({
            path: "/admin/collect/getSourceTypeList",
            type: 'get',
            author: '刘彪'
        }),
        grabImage: new QukanApiInfo({
            path: "/admin/collect/grabImage",
            type: 'get',
            author: '刘彪'
        }),
    },
    contentclassification: {
        audit: new QukanApiInfo({
            path: "/admin/contentclassification/audit",
            type: 'post',
            author: '刘彪'
        }),
        view: new QukanApiInfo({
            path: "/admin/contentclassification/view",
            type: 'get',
            author: '刘彪'
        }),
        search: new QukanApiInfo({
            path: "/admin/contentclassification/search",
            type: 'get',
            author: '刘彪'
        }),
        statistic: new QukanApiInfo({
            path: "/admin/contentclassification/statistic",
            type: 'get',
            author: '刘彪'
        }),
        getOfflineChannel: new QukanApiInfo({
            path: "/admin/contentclassification/getOfflineChannel",
            type: 'get',
            author: '刘彪'
        }),
        setOfflineChannel: new QukanApiInfo({
            path: "/admin/contentclassification/setOfflineChannel",
            type: 'get',
            author: '刘彪'
        })
    },
    commentAudit: {
        search: new QukanApiInfo({
            path: "/admin/commentAudit/search",
            type: 'get',
            author: '刘彪'
        }),
        operateGreyList: new QukanApiInfo({
            path: "/admin/commentAudit/operateGreyList",
            type: 'get',
            author: '刘彪'
        }),
        audit: new QukanApiInfo({
            path: "/admin/contentAudit/audit",
            type: 'post',
            author: '刘彪'
        }),
        list: new QukanApiInfo({
            path: "/admin/contentAudit/list",
            type: 'get',
            author: '刘彪'
        }),
        statistics: new QukanApiInfo({
            path: "/admin/contentAudit/statistics",
            type: 'get',
            author: '刘彪'
        }),
        view: new QukanApiInfo({
            path: "/admin/contentAudit/view",
            type: 'get',
            author: '刘彪'
        }),
        exitView: new QukanApiInfo({
            path: "/admin/contentAudit/exitView",
            type: 'get',
            author: '刘彪'
        })
    },
    image: {
        crop: new QukanApiInfo({
            path: '/admin/image/crop',
            type: 'post',
            author: '刘彪'
        })
    },
    pushContent: {
        cancelPushContent: new QukanApiInfo({
            path: '/admin/pushcontent/cancelPushContent',
            type: 'get',
            author: '郭选峰'
        }),
        getPushList: new QukanApiInfo({
            path: '/admin/pushcontent/getPushList',
            type: 'post',
            author: '郭选峰'
        }),
        getLogList: new QukanApiInfo({
            path: '/admin/pushcontent/getLogList',
            type: 'get',
            author: '郭选峰'
        }),
        pushContent: new QukanApiInfo({
            path: '/admin/pushcontent/pushContent',
            type: 'post',
            author: '郭选峰'
        }),
        recallPush: new QukanApiInfo({
            path: '/admin/pushcontent/recallPush',
            type: 'get',
            author: '郭选峰'
        }),
        confirmPush: new QukanApiInfo({
            path: '/admin/pushcontent/confirmPush',
            type: 'get',
            author: '郭选峰'
        }),
        modify: new QukanApiInfo({
            path: '/admin/pushcontent/modify',
            type: 'post',
            author: '郭选峰'
        }),
        getPushDetail: new QukanApiInfo({
            path: '/admin/pushcontent/getPushDetail',
            type: 'get',
            author: '郭选峰'
        }),
        getPushDocument: new QukanApiInfo({
            path: '/admin/pushcontent/getPushDocument',
            type: 'get',
            author: '郭选峰'
        })
    },
    member: {
        extendInfo: new QukanApiInfo({
            path: '/admin/member/extendInfo',
            type: 'get',
            author: '刘彪'
        }),
        bindWxLog: new QukanApiInfo({
            path: '/admin/member/bindWxLog',
            type: 'post',
            author: '刘彪'
        }),
        getMemberList: new QukanApiInfo({
            path: '/admin/member/getList',
            type: 'get',
            author: '刘彪'
        }),
        modifyPassword: new QukanApiInfo({
            path: '/admin/member/modifyPassword',
            type: 'post',
            author: '刘彪'
        }),
        setSmsCaptcha: new QukanApiInfo({
            path: '/admin/member/setSmsCaptcha',
            type: 'get',
            author: '刘彪'
        }),
        unBindWx: new QukanApiInfo({
            path: '/admin/member/unBindWx',
            type: 'get',
            author: '刘彪'
        }),
        getMemberCoinLogList: new QukanApiInfo({
            path: '/admin/member/getMemberCoinLogList',
            type: 'post',
            author: '刘彪'
        }),
        getLatestFreezeInfo: new QukanApiInfo({
            path: '/admin/member/getLatestFreezeInfo',
            type: 'get',
            author: '刘彪'
        }),
        freezeMember: new QukanApiInfo({
            path: '/admin/member/freezeMember',
            type: 'post',
            author: '刘彪'
        }),
        unFreezeMember: new QukanApiInfo({
            path: '/admin/member/unFreezeMember',
            type: 'post',
            author: '刘彪'
        }),
        markMember: new QukanApiInfo({
            path: '/admin/member/markMember',
            type: 'post',
            author: '刘彪'
        }),
        changeBalance: new QukanApiInfo({
            path: '/admin/member/changeBalance',
            type: 'post',
            author: '刘彪'
        }),
        login: new QukanApiInfo({
            path: '/admin/member/login',
            type: 'post',
            author: '刘彪'
        }),
        getAdminMember: new QukanApiInfo({
            path: '/admin/member/getAdminMember',
            type: 'get',
            author: '刘彪'
        }),
        getCategoryList: new QukanApiInfo({// 用户领域分类
            path: '/member/getCategoryList',
            type: 'post',
            author: '郭选锋'
        }),
        getInviteCodeList: new QukanApiInfo({
            path: '/admin/member/getInviteCodeList',
            type: 'get',
            author: '郭选锋'
        }),
        getInviteCode: new QukanApiInfo({
            path: '/admin/member/getInviteCode',
            type: 'get',
            author: '郭选锋'
        }),
        getConvertList: new QukanApiInfo({
            path: '/admin/member/getConvertList',
            type: 'get',
            author: '郭选锋'
        }),
    },
    cheat: {
        getCheatInfo: new QukanApiInfo({
            path: '/admin/cheat/getCheatInfo',
            type: 'get',
            author: '刘彪'
        }),
        cheatRewardTeacher: new QukanApiInfo({
            path: '/admin/cheat/cheatRewardTeacher',
            type: 'get',
            author: '刘彪'
        }),
    },
    convert: {
        setFocus: new QukanApiInfo({
            path: '/admin/convert/setFocus',
            type: 'post',
            author: '刘彪'
        }),
        applyList: new QukanApiInfo({
            path: '/admin/convert/applyList',
            type: 'get',
            author: '刘彪'
        }),
        allowApply: new QukanApiInfo({
            path: '/admin/convert/allowApply',
            type: 'post',
            author: '刘彪'
        }),
        denyApply: new QukanApiInfo({
            path: '/admin/convert/denyApply',
            type: 'post',
            author: '刘彪'
        }),
        confirmApply: new QukanApiInfo({
            path: '/admin/convert/confirmApply',
            type: 'post',
            author: '刘彪'
        }),
        refreshJuheApply: new QukanApiInfo({
            path: '/admin/convert/refreshJuheApply',
            type: 'post',
            author: '刘彪'
        }),
        batchAllowApplyByDate: new QukanApiInfo({
            path: '/admin/convert/batchAllowApplyByDate',
            type: 'post',
            author: '刘彪'
        }),
        deny: new QukanApiInfo({
            path: '/admin/convert/denyApply',
            type: 'post',
        }),
    },
    exchange: {
        getYesterdayGather: new QukanApiInfo({
            path: '/admin/exchange/getYesterdayGather',
            type: 'get',
            author: '刘彪'
        }),
        setExchangeByDate: new QukanApiInfo({
            path: '/admin/exchange/setExchangeByDate',
            type: 'post',
            author: '刘彪'
        }),
    },
    message: {
        pushList: new QukanApiInfo({
            path: '/admin/push/getList',
            type: 'get',
            author: '刘彪'
        }),
        notPush: new QukanApiInfo({
            path: '/admin/push/getCronList',
            type: 'get',
            author: '刘彪'
        }),
        save: new QukanApiInfo({
            path: '/admin/push/push',
            type: 'get',
            author: '刘彪'
        }),
        pubOp: new QukanApiInfo({
            path: '/admin/message/pubOp',
            type: 'post',
            author: '刘彪'
        }),
        delLog: new QukanApiInfo({
            path: '/admin/push/delLog',
            type: 'post',
            author: '刘彪'
        }),
        delCron: new QukanApiInfo({
            path: '/admin/push/delCron',
            type: 'post',
            author: '刘彪'
        }),
        sendMemberMsg: new QukanApiInfo({
            path: '/admin/message/sendMemberMsg',
            type: 'get',
            author: '刘彪'
        }),
    },
    cdn: {
        getCdnList: new QukanApiInfo({
            path: '/admin/cdn/getCdnList',
            type: 'get',
            author: '刘彪'
        }),
        modifyCdnDomain: new QukanApiInfo({
            path: '/admin/cdn/modifyCdnDomain',
            type: 'post',
            author: '刘彪'
        }),
        deleteCdnDomain: new QukanApiInfo({
            path: '/admin/cdn/deleteCdnDomain',
            type: 'post',
            author: '刘彪'
        }),
        addCdnDomain: new QukanApiInfo({
            path: '/admin/cdn/addCdnDomain',
            type: 'post',
            author: '刘彪'
        }),
    },
    audit: {
        detail: new QukanApiInfo({
            path: '/admin/audit/detail',
            type: 'post',
            author: '郭选峰'
        }),
        incomeAuditList: new QukanApiInfo({
            path: '/admin/audit/incomeAuditList',
            type: 'get',
            author: '郭选峰'
        }),
        allow: new QukanApiInfo({
            path: '/admin/audit/allow',
            type: 'post',
            author: '郭选峰'
        }),
        deny: new QukanApiInfo({
            path: '/admin/audit/deny',
            type: 'post',
            author: '郭选峰'
        }),
        getReason: new QukanApiInfo({
            path: '/admin/audit/getReason',
            type: 'get',
            author: '郭选峰'
        })
    },
    permission: {
        list: new QukanApiInfo({
            path: '/admin/permission/applyList',
            type: 'get',
            author: '郭选峰'
        }),
        allowApply: new QukanApiInfo({
            path: '/admin/permission/allowApply',
            type: 'post',
            author: '郭选峰'
        }),
        denyApply: new QukanApiInfo({
            path: '/admin/permission/denyApply',
            type: 'post',
            author: '郭选峰'
        }),
        getBlackMemberList: new QukanApiInfo({
            path: '/admin/permission/getBlackMemberList',
            type: 'get',
            author: '郭选峰'
        })
    },
    contentAudit: {
        list: new QukanApiInfo({
            path: "/admin/contentAudit/list",
            type: 'get',
            author: '刘彪'
        }),
        statistics: new QukanApiInfo({
            path: "/admin/contentAudit/statistics",
            type: 'get',
            author: '刘彪'
        }),
        getReason: new QukanApiInfo({
            path: "/admin/contentAudit/getReason",
            type: 'get',
            author: '刘彪'
        }),
        audit: new QukanApiInfo({
            type: 'post',
            path: "/admin/contentAudit/audit",
            author: '刘彪'
        }),
        view: new QukanApiInfo({
            type: 'get',
            path: "/admin/contentAudit/view",
            author: '刘彪'
        }),
        exitView: new QukanApiInfo({
            type: 'get',
            path: "/admin/contentAudit/exitView",
            author: '刘彪'
        }),
        getReasonV2: new QukanApiInfo({
            type: 'get',
            path: "/admin/contentAudit/getReasonV2",
            author: '刘彪'
        }),
        getCpmFactorList: new QukanApiInfo({
            type: 'get',
            path: "/admin/contentAudit/getCpmFactorList",
            author: '刘彪'
        }),
        viewSimilarity: new QukanApiInfo({
            type: 'get',
            path: "/admin/contentAudit/viewSimilarity",
            author: '刘彪'
        }),
        checkSensitiveWord: new QukanApiInfo({
            type: 'post',
            path: "/admin/content/checkSensitiveWord",
            author: '刘彪'
        })
    },
    video: {
        list: new QukanApiInfo({
            path: "/admin/video/auditList",
            type: 'get',
            author: '吴雄介'
        }),
        statistics: new QukanApiInfo({
            path: "/admin/video/auditSituation",
            type: 'get',
            author: '吴雄介'
        }),
        classification: new QukanApiInfo({
            path: "/admin/video/classification",
            type: 'get',
            author: '郭选峰'
        })
    },
    contentReview: {
        list: new QukanApiInfo({
            path: "/admin/contentReview/list",
            type: 'get',
            author: '刘彪'
        }),
        statistics: new QukanApiInfo({
            path: "/admin/contentReview/statistics",
            type: 'get',
            author: '刘彪'
        })
    },
    announcement: {
        list: new QukanApiInfo({
            path: '/admin/announcement/list',
            type: 'get',
            author: '刘彪'
        }),
        delete: new QukanApiInfo({
            path: '/admin/announcement/delete',
            type: 'post',
            author: '刘彪'
        })
    },
    auditLog: {
        statistics: new QukanApiInfo({
            path: "/admin/auditLog/getAuditStatistic",
            type: 'get',
            author: '刘彪'
        }),
        list: new QukanApiInfo({
            path: "/admin/auditLog/getAuditRecord",
            type: 'get',
            author: '刘彪'
        }),
        getAuditRecordPerUser: new QukanApiInfo({
            path: '/admin/auditLog/getAuditRecordPerUser',
            type: 'get',
            author: '郭选峰'
        }),
    },
    adminMember: {
        list: new QukanApiInfo({
            path: "/admin/adminMember/auditReport",
            type: 'get',
            author: '刘彪'
        }),
        editorList: new QukanApiInfo({
            path: "/admin/adminMember/editorList",
            type: 'get',
            author: '刘彪'
        })
    }
}

