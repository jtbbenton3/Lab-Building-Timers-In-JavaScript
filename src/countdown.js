

function countdownTimer(startTime, interval) {
  let remaining = startTime;
  const timerId = setInterval(() => {
    console.log(remaining);
    remaining--;
    if (remaining < 1) {
      clearInterval(timerId);
    }
  }, interval);
  return timerId;
}

module.exports = { countdownTimer };