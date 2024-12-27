// 倒數目標日期
const targetDate = new Date("2025-05-17T00:00:00");

// 更新倒數計時
function updateCountdown() {
  const now = new Date();
  const timeRemaining = targetDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // 更新數字
  document.getElementById("days-remaining").textContent = days + 1;
  document.getElementById("days-number").textContent = days;
  document.getElementById("hours-number").textContent = hours;
  document.getElementById("minutes-number").textContent = minutes;
  document.getElementById("seconds-number").textContent = seconds;

  // 更新進度條
  const totalHours = 24;
  const totalMinutes = 60;
  const totalSeconds = 60;

  document.getElementById("days").style.setProperty("--progress", `${(days / 365) * 100}%`);
  document.getElementById("hours").style.setProperty("--progress", `${(hours / totalHours) * 100}%`);
  document.getElementById("minutes").style.setProperty("--progress", `${(minutes / totalMinutes) * 100}%`);
  document.getElementById("seconds").style.setProperty("--progress", `${(seconds / totalSeconds) * 100}%`);
}

// 每秒更新
setInterval(updateCountdown, 1000);
