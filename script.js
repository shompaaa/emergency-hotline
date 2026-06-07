//Heart Counter

const counts = document.querySelectorAll(".heart");
for (const count of counts) {
  count.addEventListener("click", function () {
    const heartCountElement = document.getElementById("heart-count");
    const heartCount = parseInt(heartCountElement.innerText)
    let finalCount = heartCount + 1;
    heartCountElement.innerText = finalCount;
  });
}
