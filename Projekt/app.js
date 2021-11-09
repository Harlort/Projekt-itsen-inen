let menuOpen = false;
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".mobile-menu");
const links = document.getElementsByClassName("mobile-link");
const documentBody = document.body;

function sendFormInfo() {
  alert("Your message has been sent!");
}

function toggleMenu() {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    menu.style.right = "0%";
    documentBody.style.overflow = "hidden";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    menu.style.right = "-100%";
    documentBody.style.overflow = "auto";
  }
}

window.addEventListener("load", function () {
  menuBtn.addEventListener("click", function () {
    toggleMenu();
  });
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      toggleMenu();
    });
  }
});

//service-modal code start

//Array with content
const services = [
  {
    name: "Jason Voorhees",
    content: "Mommy's boy.",
    picture: "jason2.jpg",
  },
  {
    name: "Pinhead",
    content: "You opened it. We came. Now you must come with us, taste our pleasures.",
    picture: "pinhead2.jpg",
  },
  {
    name: "Leatherface",
    content: "I like wearing peoples skin as my mask.",
    picture: "leatherface2.jpg",
  },
  {
    name: "Ghostface",
    content: "WHAZZAAAAP??",
    picture: "ghostface2.jpg",
  },
  {
    name: "Candyman",
    content: "Want sum candy?",
    picture: "candyman2.jpg",
  },
  {
    name: "Freddy Krueger",
    content: "Kinky scissor boy.",
    picture: "freddy2.jpg",
  },
  {
    name: "Chucky",
    content: "Anger issues.",
    picture: "chucky2.jpg",
  },
  {
    name: "Michael Myers",
    content: "Stalk meter 100%",
    picture: "micheal2.jpg",
  },
];

//Arrow function to gather style property
const closeServiceModal = () => {
  document.getElementById("service-modal-wrapper").style.display = "none";
};

//Click event on every element, function to open & loop module to check the content
const openServiceModal = () => {
  const cards = document.getElementsByClassName("service-card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
      document.getElementById("service-modal-wrapper").style.display = "flex";
      for (let j = 0; j < services.length; j++) {
        if (i === j) {
          document.getElementById(
            "service-modal-content"
          ).innerHTML = `<h2>${services[j].name}</h2><p>${services[j].content}</p><img src="./media/img/${services[j].picture}">`;
        }
      }
    });
  }
};

window.addEventListener("load", openServiceModal);

//Service modal end

//Image-slider code

const images = [
  {
    name: "jason1.jpg",
  },
  {
    name: "chucky1.jpg",
  },
  {
    name: "icandyman1.jpg",
  },
  {
    name: "pinhead1.jpg",
  },
  {
    name: "leatherface1.jpg",
  },
  {
    name: "jason2.jpg",
  },
];

const setMainImage = (src) => {
  document.getElementById("main-image").setAttribute("src", src);
  setActiveThumbNail();
};

const setActiveThumbNail = () => {
  const thumbs = document.getElementsByClassName("thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    if (thumbs[i].src === document.getElementById("main-image").src) {
      thumbs[i].style.border = "2px solid red";
    } else {
      thumbs[i].style.border = "0px";
    }
  }
};

const prevImage = () => {
  const thumbs = document.getElementsByClassName("thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    if (
      thumbs[i].src === document.getElementById("main-image").src &&
      i !== 0
    ) {
      document
        .getElementById("main-image")
        .setAttribute("src", thumbs[(i -= 1)].src);
      setActiveThumbNail();
    }
  }
};

const nextImage = () => {
  const thumbs = document.getElementsByClassName("thumbnail");
  for (let i = 0; i < thumbs.length; i++) {
    if (
      thumbs[i].src === document.getElementById("main-image").src &&
      i !== thumbs.length - 1
    ) {
      document
        .getElementById("main-image")
        .setAttribute("src", thumbs[(i += 1)].src);
      setActiveThumbNail();
    }
  }
};

window.addEventListener("load", () => {
  document
    .getElementById("main-image")
    .setAttribute("src", `./media/img/${images[0].name}`);
  document.getElementById("thumbnails-wrapper").innerHTML = images
    .map(
      (img) =>
        `<img src="./media/img/${img.name}" class="thumbnail" onclick="setMainImage(this.src)">`
    )
    .join("");

  setActiveThumbNail();
  document.getElementById("prev-btn").addEventListener("click", prevImage);
  document.getElementById("next-btn").addEventListener("click", nextImage);
});

const openLightBox = (src) => {
  document.getElementById("lb-thumbnails-wrapper").innerHTML = images
    .map(
      (img) =>
        `<img src="./media/img/${img.name}" class="lb-thumbnail" onclick="setMainLbImage(this.src)">`
    )
    .join("");
  document.getElementById("image-lightbox").style.display = "flex";
  setMainLbImage(src);
};

const closeLightBox = () => {
  document.getElementById("image-lightbox").style.display = "none";
};

const setMainLbImage = (tjohoppsan) => {
  console.log(tjohoppsan);
  document.getElementById("lb-main-image").setAttribute("src", tjohoppsan);
  setActiveLbThumbnail();
};

//function that shows the active thumbnail, by comparing the
//thumbnails src attribute to the main image's src attribute and
//if it's the same sets a red border on the tumbnail
const setActiveLbThumbnail = () => {
  const lbThumbs = document.querySelectorAll(".lb-thumbnail");
  console.log("thumbnail elements: ", lbThumbs);
  lbThumbs.forEach((thumbnail) => {
    console.log("thumbnail: ", thumbnail);
    if (thumbnail.src === document.getElementById("lb-main-image").src) {
      thumbnail.style.border = "2px solid red";
    } else {
      thumbnail.style.border = "0px";
    }
  });
};

const prevLbImage = () => {
  const thumbsList = document.querySelectorAll(".lb-thumbnail");
  //let wasZero = false;
  for (let i = 0; i < thumbsList.length; i++) {
    if (
      thumbsList[i].src === document.querySelector("#lb-main-image").src &&
      i !== 0 //&&
      //wasZero === false
    ) {
      document
        .querySelector("#lb-main-image")
        .setAttribute("src", thumbsList[(i -= 1)].src);
      setActiveLbThumbnail();
    } else if (
      thumbsList[i].src === document.querySelector("#lb-main-image").src &&
      i === 0
    ) {
      document
        .querySelector("#lb-main-image")
        .setAttribute("src", thumbsList[(i += thumbsList.length - 1)].src);
      setActiveLbThumbnail();
      //wasZero = true;
    }
  }
};

const nextLbImage = () => {
  const thumbsList = document.querySelectorAll(".lb-thumbnail");
  for (let i = 0; i < thumbsList.length; i++) {
    if (
      thumbsList[i].src === document.querySelector("#lb-main-image").src &&
      i !== thumbsList.length - 1
    ) {
      document
        .querySelector("#lb-main-image")
        .setAttribute("src", thumbsList[(i += 1)].src);
      setActiveLbThumbnail();
    } else if (
      thumbsList[i].src === document.querySelector("#lb-main-image").src &&
      i === thumbsList.length - 1
    ) {
      document
        .querySelector("#lb-main-image")
        .setAttribute("src", thumbsList[0].src);
      setActiveLbThumbnail();
    }
  }
};