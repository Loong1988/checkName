class DataCenterLog {
    constructor() { }
    
    static send({
        cmd = 9010,
        item = '',
        action = '',
        page_id = '',
        pos = '',
        uid = ''
    }) {
        let path = 'http://log.1sapp.com/a.gif?';
        let query = [];
        let arg = arguments[0] || {};
        let option = {
            cmd, item, action, page_id, pos, uid, ...arg
        };
        for (let key in option) {
            query.push(`${key}=${option[key]}`);
        }
        // new Image().src = path + query.join('&');
    }
}

export default DataCenterLog;
