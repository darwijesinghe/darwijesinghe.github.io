// show navigation
const navMenu = document.getElementById("page-menu");
document.getElementById("header-toggle").addEventListener("click", (e) => {
  navMenu.classList.toggle("menu_active");
});

// focus
// Let the document know when the mouse is being used
document.body.addEventListener("mousedown", function () {
  document.body.classList.add("used-mouse");
});

// Re-enable focus styling when Tab is pressed
document.body.addEventListener("keydown", function (event) {
  if (event.keyCode === 9) {
    document.body.classList.remove("used-mouse");
  }
});

// scroll active link
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  try {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 200;
      let sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".pg_links a[href*=" + sectionId + "]")
          .classList.add("active");
      } else {
        document
          .querySelector(".page_menu a[href*=" + sectionId + "]")
          .classList.remove("active");
      }
    });
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener("scroll", scrollActive);

// copyright year
document.querySelector(
  ".copy_right"
).innerHTML = `${new Date().getFullYear()} ${"&copy;"} Darshana Wijesinghe`;
