let tg = new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");
let  dz = new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");
let sx = new Array("鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪");
let w = new Array("木", "火", "土", "金", "水");
let  f = new Array("东", "南", "中", "西", "北");
let sz = new Array("一", "二", "三", "四", "五", "六", "七", "八", "九", "十",
    "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
    "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十");
    let m0 = new Array(
    0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1,//1901
    0, 1, 0, 1, 2, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0,
    1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 3, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1,
    0, 4, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 3632)
    let m1 = new Array(
    1, 0, 1, 0, 0, 4, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1,//1911
    1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 3, 0, 1, 0, 0, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0,
    1, 2, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1,
    0, 1, 0, 0, 1, 0, 3, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 7294)
    let m2 = new Array(
    1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 2, 1, 0, 0, 1, 0, 1, 1,//1921
    0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0,
    1, 0, 1, 3, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0,
    1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 4, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1,
    0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 4, 0, 1, 0, 1, 1, 0, 10955);
    let m3 = new Array(
    1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1,//1931
    0, 1, 1, 0, 5, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1,
    0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 3, 0, 0, 1, 1, 0, 1, 1, 1, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 3, 0, 1, 1, 0, 1,
    1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 14587);
    let m4 = new Array(
    1, 1, 0, 1, 1, 3, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1,//1941
    0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 3, 0, 1, 0, 1, 1, 0, 1, 1,
    0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1,
    1, 4, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 2, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 18249);
    let m5 = new Array(
    1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 3, 0, 1, 1, 0, 1, 0, 1,//1951
    0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1,
    0, 1, 3, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1,
    1, 0, 1, 0, 1, 0, 0, 4, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1,
    0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 4, 1, 0, 1, 0, 1, 0, 21911);
    let  m6 = new Array(
    1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0,//1961
    1, 0, 1, 2, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1,
    0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 4, 1, 0, 0, 1, 0, 0, 1, 1, 0,
    1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 4, 1, 0, 1, 0, 1,
    0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 25544);
    let m7 = new Array(
    0, 1, 0, 0, 4, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1,//1971
    1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 4, 0, 1, 0, 0, 1, 1, 0, 1,
    1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 4, 0, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0,
    1, 0, 0, 1, 0, 5, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 29206);
    let m8 = new Array(
    0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 2, 1, 0, 0, 1, 0, 1, 1, 1,//1981
    1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 4, 1, 1,
    0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0,
    1, 0, 1, 0, 1, 4, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0,
    1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 4, 0, 1, 0, 1, 1, 1, 1, 32868);
    let m9 = new Array(
    0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1,//1991
    0, 1, 4, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1,
    0, 1, 1, 0, 1, 0, 1, 4, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0,
    1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 2, 1, 1, 0, 1, 1, 0, 1,
    1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 36499);
    let  m10 = new Array(
    1, 1, 0, 4, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0,//2001
    1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 4, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 4, 1, 1, 0, 1, 1,
    0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1,
    1, 1, 0, 0, 4, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 40161);
    let m11 = new Array(
    1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 4, 1, 0, 1, 0, 1, 0, 1, 0,//2011
    1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 4, 1, 0, 1,
    0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1,
    0, 1, 0, 1, 0, 3, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1,
    1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 4, 1, 0, 0, 1, 0, 1, 0, 1, 43823);
    let  m12 = new Array(
    0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1,//2021
    0, 4, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0,
    1, 0, 1, 0, 0, 4, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0,
    1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 4, 0, 1, 0, 0, 1, 1, 0,
    1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 47455)
    let  m13 = new Array(
    0, 1, 4, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1,//2031
    0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 4, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1,
    1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 3, 0, 0, 1, 0, 1, 1,
    1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0,
    1, 1, 0, 1, 4, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 51117)
    let m14 = new Array(
    0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 4, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1,//2041
    0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 2, 1, 0, 1, 1, 1,
    1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1,
    1, 0, 1, 1, 3, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0,
    1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 3, 0, 1, 0, 1, 1, 0, 1, 1, 0, 54779)
    let ms = new Array(m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14);
    let  ly = new Array(29, 30, 58, 59, 59, 60);
    let  tw = new Array(0, 0, 1, 1, 2, 2, 3, 3, 4, 4);
    let  dw = new Array(4, 2, 0, 0, 2, 1, 1, 2, 3, 3, 2, 4);

    let inq=function(y=1988,m=4,d=12,h=9) {
    // y = 1988;
    // m = 4;
    // d = 12;
    // h = 9

    let gl0 = (Date.UTC(y, 0, 1) - Date.UTC(1901, 1, 19)) / 86400000;
    let dy = y - 1901;
    let i = Math.floor(dy / 10);
    let nl0 = (i == 0) ? 0 : ms[i - 1][120];
    let n = i * 120;
    for (let j = 0; j < 120; j++) {
      n++;
      if (n > dy * 12) break;
      nl0 += ly[ms[i][j]];
    }
    let cjr = (nl0 - gl0) % 31 + 1;
    let cjy = (nl0 - gl0 > 30) ? 2 : 1;
    let jq = tg[(dy + 6) % 10] + dz[dy % 12];
    let  jh = tg[(dy + 7) % 10] + dz[(dy + 1) % 12];
    let  s1 = "<p align=center><table width='100%'><tr><td align=center><font style='font-size:14px; font-family:Tahoma,Arial,sans-serif'>公历：" + y + "年";
    let s2 = "<br><br>春节：" + cjy + "月" + cjr + "日<br>节前：" + jq + "年<br>节后：" + jh + "年<br><br>";
    let s3 = "查询生辰八字，请输入时。";
    let  s4 = "</font></td></tr></table></p>";

    
    if (m == "" || d == "") {
      document.write(s1, s2, "<br>", "进一步查询，请输入月和日。<br>", s3, s4);
      document.close();
    }
    else if (m > 12 || m < 1)
      alert("月应在1与12之间。" + re);
    else if (d > 31 || d < 1)
      alert("日应在1与31之间。" + re);
    else if ((m == 4 || m == 6 || m == 9 || m == 11) && d > 30)
      alert(m + "月只有30天。" + re);
    else if (y % 4 != 0 && m == 2 && d > 28)
      alert(y + "年是平年，2月只有28天。" + re);
    else if (m == 2 && d > 29)
      alert(y + "年是闰年，2月只有29天。" + re);
    else if (h > 23 || h < 0)
      alert("时应在0与23之间。" + re);
    else {
      if (h == "") h = 0;
      var  sum = (Date.UTC(y, m - 1, d, h) - Date.UTC(1901, 1, 18, 23)) / 1000;
      var  sumd = Math.floor(sum / 86400);
      var day = (Math.floor((sum - 1800) / 86400) + 51) % 7;
      var  xq = (day == 0) ? "日" : sz[day - 1];
      var  tgr = (sumd + 54) % 10;
      var  dzr = (sumd + 52) % 12;
      var  gzr = tg[tgr] + dz[dzr];
      var  dzs = Math.floor((h * 1 + 1) / 2) % 12;
      var tgs = ((tgr % 5) * 2 + dzs) % 10;
      var gzs = tg[tgs] + dz[dzs];
      for (let i = 0; ms[i][120] <= sumd; i++);
      let k = (i == 0) ? 0 : ms[i - 1][120];
      let p = i * 120;
      for (var j = 0; j < 120; j++) {
        k += ly[ms[i][j]];
        p++;
        if (k > sumd) break;
      }
      if (sumd + 30 < 0) {
        ri = 59 + sumd;
        p = -1;
      }
      else if (sumd < 0) {
        ri = 30 + sumd;
        p = 0;
      }
      else
        ri = sumd + ly[ms[i][j]] - k;
     var yue = ((p + 11) % 12 == 0) ? "正" : sz[(p + 11) % 12];
     var mij = ms[i][j];
      if ((mij == 2 || mij == 3) && ri > 28) {
        ri -= 29;
        yue = "闰" + yue;
      }
      else if ((mij == 4 || mij == 5) && ri > 29) {
        ri -= 30;
        yue = "闰" + yue;
      }
      var  ri = ((ri < 10) ? "初" : "") + sz[ri];
      var tgn = Math.floor((p - 1) / 12 + 7) % 10;
      var  dzn = Math.floor((p - 1) / 12 + 1) % 12;
      var  gzn = tg[tgn] + dz[dzn];
      var tgy = (p + 5) % 10;
      var  dzy = (p + 1) % 12;
      var gzy = tg[tgy] + dz[dzy];
      var  tn = tw[tgn];
      var  dn = dw[dzn];
      var ty = tw[tgy];
      let dy = dw[dzy];
      var tr = tw[tgr];
      var dr = dw[dzr];
      var ts = tw[tgs];
      var  ds = dw[dzs];
      var  s5 = m + "月" + d + "日（星期" + xq + "）";
      var  s6 = "农历：" + gzn + "年" + yue + "月" + ri + "日";
      var  s7 = "生肖：" + sx[dzn]
      console.log(s6);//农历
      console.log(s7);//生肖
      console.log('春节'+cjy+'-'+cjr);//
      console.log('节前'+jq);//
      console.log('节后'+jh);//

      console.log('八字'+gzn, "　", gzy, "　", gzr, "　", gzs);
      console.log(w[tn], w[dn], "　", w[ty], w[dy], "　", w[tr], w[dr], "　", w[ts], w[ds]);
      return {
          nongli:s6,
          shengxiao:s7,
          chunjie:cjy+'-'+cjr,
          jieqian:jq,
          jiehou:jh,
          bazi:gzn +"　"+ gzy+ "　"+ gzr+ "　"+ gzs,
          wuxing:w[tn]+w[dn]+ "　"+ w[ty]+ w[dy]+ "　"+ w[tr]+ w[dr]+ "　"+ w[ts]+ w[ds]

      }


    //   if (h == "")
    //     document.write(s1, s5, s6, s2, "干支：", gzn, "年", gzy, "月", gzr, "日<br>", s7, s3, s4);
    //   else
    //     document.write(s1, s5, h, "点", s6, dz[dzs], "时", s2, "<font color=red>八字</font>：<font color=#cc6600>", gzn, "　", gzy, "　", gzr, "　", gzs, "</font><br><br>", "五行：", w[tn], w[dn], "　", w[ty], w[dy], "　", w[tr], w[dr], "　", w[ts], w[ds], "<br>", "方位：", f[tn], f[dn], "　", f[ty], f[dy], "　", f[tr], f[dr], "　", f[ts], f[ds], "<br>", s7, s4);
    //   document.close();
    }
  }
//   inq();
let aaa =function (){
console.log('aaa');
}
export {aaa,inq}