export default {

    filters: {
        // 将时间转成几秒前，几天前的形式
        $getTimes(val) {
          val = new Date().getTime() - new Date(val).getTime();
    
          let days = Math.floor(val / (24 * 3600 * 1000)),
            time,
            leave1 = val % (24 * 3600 * 1000),
            hours = Math.floor(leave1 / (3600 * 1000)),
            leave2 = leave1 % (3600 * 1000),
            minutes = Math.floor(leave2 / (60 * 1000)),
            leave3 = leave2 % (60 * 1000),
            seconds = Math.round(leave3 / 1000);
          if (days) {
            time = days + "天前";
          } else if (hours) {
            time = hours + "小时前";
          } else if (minutes) {
            time = minutes + "分钟前";
          } else if (seconds) {
            // time = seconds + "秒前";
            time = "刚刚";
          }
          return time;
        },
        str(val) {
          if (val.length > 140) {
            return val.substr(0, 140) + "...";
          } else {
            return val;
          }
        }
      },
      
}