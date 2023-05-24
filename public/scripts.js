const likeBtn = document.querySelectorAll(".react").forEach((item) => {
  item.addEventListener("click", (e) => {
    let current = e.target;
    current.classList.add("hide");
    if (current.nextElementSibling) {
      current.nextElementSibling.classList.remove("hide");
    } else {
      current.previousElementSibling.classList.remove("hide");
    }
  });
});
