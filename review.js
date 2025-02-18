const submitBtn = document.querySelector(".submit-btn");
const review = document.querySelector(".review");
const starBtn = document.querySelectorAll(".star-btn");
document.quer;
const listReview = document.querySelector(".list-review");
const reviewerName = document.querySelector(".name");
let count = 0;
let star = 0;

starBtn.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element.innerText);
    star = parseInt(element.innerText);
  });
});

submitBtn.addEventListener("click", () => {
  if (review && star !== 0) {
    const li = document.createElement("li");
    const counter = document.createElement("span");
    const starr = document.createElement("span");
    const str = " ".padEnd(star, "⭐");
    const name = reviewerName.value;
    counter.innerText = `${++count}. `;
    starr.innerText = `   ${str}
    Reviewed By: (${name})`;
    li.textContent = review.value;
    li.prepend(counter);
    li.appendChild(starr);
    listReview.prepend(li);

    review.value = "";
    star = 0;
  }
});
