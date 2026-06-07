//Heart Counter

const callHistoryData = [];

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
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে!");
      return;
    }
    let finalCoinCount = coinCount - 20;
    coinCountElement.innerText = finalCoinCount;

    const number = this.dataset.number;
    const card = this.closest(".p-8");
    const englishTitle = card.querySelector(".sub-title").innerText;
    const title = card.querySelector(".title").innerText;
    const time = new Date().toLocaleDateString();
    alert(`Calling ${englishTitle} ${number} ........`);

    //Save History
    const historyItem = {
      title,
      number,
      time,
    };
    callHistoryData.push(historyItem);
    renderHistory();
  });
}

function renderHistory() {
  const container = document.getElementById("call-history-list");
  container.innerHTML = "";
    const clearAll = document
    .getElementById("clear")
    .addEventListener("click", function () {
        callHistoryData.length = 0;
        container.innerHTML = ""
    });

  for (const item of callHistoryData) {
    const div = document.createElement("div");

    div.className = " py-2 text-sm";

    div.innerHTML = `
    <div class="flex justify-between items-center bg-[#eae7e7] p-2 rounded-xl">
        <div>
            <p class="font-semibold">${item.title}</p>
            <p class="text-gray-500">${item.number}</p>
        </div>
        <p class="text-gray-400 text-xs">${item.time}</p>
    </div>
    `;

    container.appendChild(div);
  }

}

//Copy Text Count
const copyCounts = document.querySelectorAll(".copy");
for (copy of copyCounts) {
  copy.addEventListener("click", function () {
    const copyCountElement = document.getElementById("copy-count");
    const copyCount = parseInt(copyCountElement.innerText);
    const finalCopyCount = copyCount + 1;
    copyCountElement.innerText = finalCopyCount;
  });
}

//Call History
