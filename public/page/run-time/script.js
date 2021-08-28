console.clear();

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const progress = document.querySelector(".progress-bar");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const toasts = document.getElementsByClassName("toast");

var interval;

[...toasts].forEach((toast) => {
  toast.addEventListener("click", hideToast);
});

function hideToast(e) {
  const target = e.target;

  if (target.tagName.toUpperCase() === "SPAN") {
    target.parentNode.classList.remove("show");
  }
}

function getCurrentTime() {
  const d = new Date();
  let h = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  h = h < 10 ? "0" + h : h;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  hour.textContent = h;
  minute.textContent = min;
  second.textContent = sec;

  progress.style.width = (+sec / 60) * 100 + "%";
}

function clearClass(className) {
  for (let i = 0; i < toasts.length; i++) {
    toasts[i].classList.remove(className);
  }
}

pause.addEventListener("click", () => {
  clearInterval(interval);
  clearClass("show");
  document.querySelector('div[data-type="pause"]').classList.add("show");
});

reset.addEventListener("click", () => {
  interval = setInterval(getCurrentTime, 1000);
  clearClass("show");
  document.querySelector('div[data-type="live"]').classList.add("show");
});

interval = setInterval(getCurrentTime, 1000);
