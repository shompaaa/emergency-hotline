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
      return
    }
    let finalCoinCount = coinCount - 20;
    coinCountElement.innerText = finalCoinCount;


    const number = this.dataset.number
    const card = this.closest('.p-8')
    const englishTitle = card.querySelector('.sub-title').innerText
    alert(`Calling ${englishTitle} ${number} ........`);
  });
}

//Copy Text Count
const copyCounts = document.querySelectorAll('.copy')
for(copy of copyCounts){
    copy.addEventListener('click',function(){
        const copyCountElement = document.getElementById('copy-count')
        const copyCount = parseInt(copyCountElement.innerText)
        const finalCopyCount = copyCount + 1
        copyCountElement.innerText = finalCopyCount
    })
}
