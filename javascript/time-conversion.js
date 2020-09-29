function timeConversion(time) {
  let timeComponents = parseTime(time);
  const convertedTime = convertTime(timeComponents);
  return `${convertedTime[0]}:${convertedTime[1]}:${convertedTime[2]}`;
}

function parseTime(time) {
  let timeComponents = time.split(":");
  let secondsAndPeriod = timeComponents.pop();
  timeComponents.push(secondsAndPeriod.substring(0,2));
  timeComponents.push(secondsAndPeriod.substring(2));
  return timeComponents;
}

function convertTime(timeComponents) {
  let [hours, minutes, seconds, period] = timeComponents;
  if (hours === "12" && period === "AM") {
      hours = "00";
  }else if (period === "PM" && parseInt(hours) < 12) {
      hours = `${12 + parseInt(hours)}`;
  }
  return [hours, minutes, seconds]
}
