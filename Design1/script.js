let elems = document.querySelectorAll(".elem");
let elemimage = document.querySelector("#elem1img");

elems.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    elem.childNodes[3].style.opacity = 1;
  });
  elem.addEventListener("mouseleave", () => {
    elem.childNodes[3].style.opacity = 0;
  });
  elem.addEventListener("mousemove", (dets) => {
    elem.childNodes[3].style.left = dets.x + "px";
    // elem.childNodes[3].style.top = dets.y + "px";
  });
});

// elem1.addEventListener("mousemove", (dets) => {
//   elemimage.style.left = dets.x + "px";
//   elemimage.style.top = dets.y + "px";
// });
// elem1.addEventListener("mouseenter", (dets) => {
//   elemimage.style.opacity = 1;
// });
// elem1.addEventListener("mouseleave", (dets) => {
//   elemimage.style.opacity = 0;
// });
