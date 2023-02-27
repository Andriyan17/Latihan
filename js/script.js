const navBarList = document.querySelector(".nav-list");
//ketika humbergur menu di klik cari element yang nama idnya//
document.querySelector("#humburger").onclick = () => {
  navBarList.classList.toggle("active");
};
