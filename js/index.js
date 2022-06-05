//Check file connection
console.log("%cFile is connected!", "color: green; font-size: 20px;");

//--==========================--
//Scroll
window.addEventListener("scroll", () => {
  if (this.scrollY > 20) {
    document.querySelector(".navbar").classList.add("sticky");
  } else {
    document.querySelector(".navbar").classList.remove("sticky");
  }
});

//Toggle navbar button
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".navbar .menu").classList.toggle("active");
  document.querySelector(".menu-btn i").classList.toggle("active");
});
