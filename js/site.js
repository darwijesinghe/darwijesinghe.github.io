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

// window scroll event
window.addEventListener("scroll", scrollActive);

// copyright year
document.querySelector(
  ".copy_right"
).innerHTML = `${new Date().getFullYear()} ${"&copy;"} Darshana Wijesinghe`;

// image model popup
const ImageShow = {
  show(src, alt) {
    try {
      const html = `<div class="img_model" id="img-model">
                      <div class="img_window">
                          <div class="img_body">
                              <img src="${src}" id="img-holder" height="439" width="800" alt="${alt}">
                          </div>
                      </div>
                    </div>`;
      const template = document.createElement("template");
      template.innerHTML = html;

      // events
      const backDrop = template.content.getElementById("img-model");

      backDrop.addEventListener("click", (e) => {
        if (e.target === backDrop) {
          this.hide(backDrop);
        }
      });

      document.body.appendChild(template.content);
    } catch (error) {
      console.log(error);
    }
  },
  // hide image model
  hide(element) {
    try {
      document.body.removeChild(element);
    } catch (error) {
      console.log(error);
    }
  },
};

// images
const webApp = document.getElementById("assigna-web");
const webApi = document.getElementById("assigna-api");
const conApp = document.getElementById("assigna-con");
const eStore = document.getElementById("e-store");
const assess = document.getElementById("assess");

// assigna web app
webApp.onclick = function () {
  try {
    ImageShow.show(this.src, this.alt);
  } catch (error) {
    console.log(error);
  }
};

// assigna web api
webApi.onclick = function () {
  try {
    ImageShow.show(this.src, this.alt);
  } catch (error) {
    console.log(error);
  }
};

// assigna console app
conApp.onclick = function () {
  try {
    ImageShow.show(this.src, this.alt);
  } catch (error) {
    console.log(error);
  }
};

// e store
eStore.onclick = function () {
  try {
    ImageShow.show(this.src, this.alt);
  } catch (error) {
    console.log(error);
  }
};

// assessment
assess.onclick = function () {
  try {
    ImageShow.show(this.src, this.alt);
  } catch (error) {
    console.log(error);
  }
};
