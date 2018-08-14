// Proto

const Proto = document.querySelector("#Proto");
const protoWrap = document.querySelector(".proto-wrap");
const proto_ = document.querySelector(".protoio-embed-prototype");
const typography = document.querySelector(".typography");
const phoneImage = document.querySelector(".typography__img");

window.onload = function() {
  proto_.style.display = "none";
  proto_.style.opacity = "1";

  preloader_();

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    Proto.addEventListener("click", handleMobile);
  } else {
    Proto.addEventListener("click", handleDesk);
  }
};

function handleDesk(e) {
  e.preventDefault();

  if (document.documentElement.clientWidth < 768) {
    proto_.style.top = "-12%";
  } else if (document.documentElement.clientWidth < 992) {
    protoWrap.style.marginBottom = "-200px";
  } else if (document.documentElement.clientWidth < 1200) {
    protoWrap.style.marginBottom = "-101px";
  }

  typography.style.padding = "0";
  phoneImage.style.display = "none";
  proto_.style.display = "block";
}

function handleMobile(e) {
  e.preventDefault();
  console.log("mobile");

  proto_.style.display = "block";
  proto_.classList.add("phones");
  proto_.style.height = "auto";
  proto_.style.top = "0";
}

// Preloader

let images = document.images,
  images_total_count = images.length,
  images_loaded_count = 0,
  preloader = document.getElementById("page-preloader"),
  perc_display = document.getElementById("load_perc");

for (var i = 0; i < images_total_count; i++) {
  var image_clone = new Image();
  image_clone.onload = image_loaded;
  image_clone.onerror = image_loaded;
  image_clone.src = images[i].src;
}
function image_loaded() {
  images_loaded_count++;
  perc_display.innerHTML =
    (((100 / images_total_count) * images_loaded_count) << 0) + "%";
}
function preloader_() {
  if (images_loaded_count >= images_total_count) {
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done");
      document.body.classList.remove("fixed");
    }
  }
}
