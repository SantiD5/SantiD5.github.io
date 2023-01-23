window.onload = function () {
  const navToggle = document.getElementById("btn");
  const primaryNav = document.querySelector(".primary-navigation");

  navToggle.addEventListener("click", (e) => {
    const visibility = primaryNav.getAttribute("data-visible");
    console.log(visibility);
    if (visibility == "false") {
      primaryNav.setAttribute("data-visible", "true");
      navToggle.setAttribute("aria-expanded", "true");
    } else if (visibility == "true") {
      primaryNav.setAttribute("data-visible", "false");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
};
