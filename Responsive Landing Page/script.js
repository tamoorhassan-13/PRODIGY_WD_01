document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("navbar");
  const links = nav.querySelectorAll("a");

  // Change navbar style on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // Add 'active' class to the current section link
  const sections = document.querySelectorAll("section");

  function changeActiveLink() {
    let index = sections.length;
    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    links.forEach((link) => link.classList.remove("active"));
    links[index].classList.add("active");
  }

  changeActiveLink();
  window.addEventListener("scroll", changeActiveLink);
});
