//Heart Counter

const counts = document.querySelectorAll(".heart");
for (const count of counts) {
  count.addEventListener("click", function () {
    const heartCountElement = document.getElementById("heart-count");
    const heartCount = parseInt(heartCountElement.innerText);
    let finalCount = heartCount + 1;
    heartCountElement.innerText = finalCount;
  });
}

//Emergency Call
const emergencyCall = document.querySelectorAll(".call");
for (const call of emergencyCall) {
  call.addEventListener("click", function () {
    const coinCountElement = document.getElementById("coin");
    const coinCount = parseInt(coinCountElement.innerText);
    if (coinCount < 20) {
      alert("Insufficient balance to make a call 🥲");
      return
    }
    let finalCoinCount = coinCount - 20;
    coinCountElement.innerText = finalCoinCount;
    alert("Calling ........");
  });
}
