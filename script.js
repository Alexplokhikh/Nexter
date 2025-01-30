(function () {
  const triggers = document.getElementsByClassName("js-toggle-nav");
  for (var i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener("click", function () {
      document
        .getElementsByClassName("navigation__container")[0]
        .classList.toggle("navigation__container--active");
    });
  }
})();

const likeButtons = document.getElementsByClassName("js-toggle-like");
for (let i = 0; i < likeButtons.length; i++) {
  document.querySelectorAll(".home__like")[i].addEventListener("click", () => {
    document
      .querySelectorAll(".home__like")
      [i].classList.toggle("home__like--active");
  });
}
