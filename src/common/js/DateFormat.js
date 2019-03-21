function addZero(num) {
  return (num > 9 ? "" : "0") + num;
}

function toFormat(time) {
   let d = time.getFullYear() + "-" + addZero(time.getMonth() + 1) + "-" + addZero(time.getDate()) + " " +addZero(time.getHours())+ ":" + addZero(time.getMinutes())+":"+addZero(time.getSeconds());
   return d
}

let oneDay = 24 * 60 * 60 * 1000;




function dateFormat(offset) {

  let nowDate = new Date();
  if (typeof offset === "number") {
	let offsetDate = new Date(nowDate.getTime() + offset * oneDay);
    return toFormat(offsetDate);
  } else if (offset instanceof Date) {
    return toFormat(offset);
  } else {
    return toFormat(nowDate);
  }
}
export { addZero, toFormat, dateFormat};
