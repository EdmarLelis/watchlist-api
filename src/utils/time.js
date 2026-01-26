const millisecondsInSecond = 1000;
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;

export const convertDaysToMilliseconds = (days) => {
  return (
    millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay * days
  );
};
