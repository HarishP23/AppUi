const stars = document.querySelectorAll(".fa-star");
stars.forEach(function (star) {
  star.addEventListener("click", setRating);
});

function setRating(ev) {
  var span = ev.currentTarget;
  var stars = document.querySelectorAll(".fa-star");
  var match = false;
  stars.forEach(function (star) {
    if (match) {
      star.classList.remove("rated");
    } else {
      star.classList.add("rated");
    }
    if (star === span) {
      match = true;
    }
  });
}
