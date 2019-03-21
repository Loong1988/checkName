const ONE_DAY = 24 * 60 * 60 * 1000;

function addZero(num) {
	return (num > 9 ? '' : '0') + num
}

class MyMoment {
    constructor(date = new Date()) {
        let _date = null;
        if(/^\d+$/.test(date)) {
            date = parseInt(date);
        }
        if (['string', 'number'].indexOf(typeof date) !== -1) {
            _date = new Date(date)
        } else {
            _date = date
        }
        if (!(_date.getFullYear && _date.getFullYear())) {
            throw new Error('MyMoment: 不被接受的日期')
        }
        this._date = _date;
        return this;
    }

    toFormat(formatter) {
        let { _date } = this
        let [Y, M, D, h, m, s] = [
            _date.getFullYear(),
            _date.getMonth() + 1,
            _date.getDate(),
            _date.getHours(),
            _date.getMinutes(),
            _date.getSeconds()
        ];
        let date = [Y, addZero(M), addZero(D)]
        let time = [addZero(h), addZero(m), addZero(s)]
        return date.join('/') + " " + time.join(':');
    }
}

export default (date) => {
    return new MyMoment(date)
}
