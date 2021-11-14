//----Mobile menu from previous project Start----
let menuOpen = false;
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".mobile-menu");
const links = document.getElementsByClassName("mobile-link");
const documentBody = document.body;

//Popup message for when a message has been sent
function sendFormInfo() {
  alert("Your message has been sent!");
}

//Menu button with a toggle
function toggleMenu() {
  //if loop to check when the menu button gets pressed on it will show, and if not nothing will happen
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
//Event listener which is targeter towards the click & load
window.addEventListener("load", function () {
  menuBtn.addEventListener("click", function () {
    toggleMenu();
  });
  //First time the loop runs i = 1, second time i = 2, but not endlessly 
  for (let i = 0; i < links.length; i++) {
    //links[i] represent a specific event for the respective iteration with an added event listener, "click", that opens the specified link in the menu
    links[i].addEventListener("click", function () {
      toggleMenu();
    });
  }
});
//----Mobile menu from previous project End----

//----------Service-modal code start----------Lovisa's part starts

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
    name: "Micheal Myers",
    content: "Stalk meter 100%",
    picture: "micheal2.jpg",
  },
];

//Arrow function to gather style property
const closeServiceModal = () => {
  document.getElementById("service-modal-wrapper").style.display = "none";
};

//Click event on every element, function to open module & for loop module to check the content
//Arrow function
const openServiceModal = () => {
  //Targets every "cards" element with a specific class name, "Service-card"
  const cards = document.getElementsByClassName("service-card");
  //For loop to run as many amount of items there is in the array. let i = 0; will match every elements index in the card array
  //First time the loop runs i = 1, second time i = 2, but not endlessly 
  for (let i = 0; i < cards.length; i++) {
    //Event lsitener with an arrow function once the card is being clicked on
    //Cards[i] represent a specific card for the respective iteration with an added event listener, "click", that opens the service module cards (service-modal-wrapper), displays it to flex
    cards[i].addEventListener("click", () => {
      document.getElementById("service-modal-wrapper").style.display = "flex";
      //For loop to open the module and fill each card with content and loop the matching card that gets clicked on
      //When a specific card gets clicked on, the for loop will loop and target specified card and see if the index match the loop, if it does, the content will be matched
      //If the J index is lower than ex. 3, the loop will continue to run
      for (let j = 0; j < services.length; j++) {
        //If i is equal to j, the service module will be matched to specificed card. The loop only runs per iteration
        if (i === j) {
          //Content for "service-modal-content", if i equals to j, the respective objects per iteration will be filled with content that is targetet in a string with variable data
          document.getElementById(
            "service-modal-content"
          ).innerHTML = `<h2>${services[j].name}</h2><p>${services[j].content}</p><img src="../media/${services[j].picture}">`;
        }
      }
    });
  }
};

// Makes sure that the function above only runs when the window has loaded properly
window.addEventListener("load", openServiceModal);

//----------Service-modal code End----------Lovisa's part ends

// Gallery start

// Variables
const fullImgBox = document.getElementById("fullImgBox")
const fullImg = document.getElementById("fullImg")

// Function that displays the fullimgBox, switches flex property from none to flex.
function openFullImg(pic,){
    fullImgBox.style.display = "flex";
    //Updates img.src to current click
    fullImg.src = pic;  
}

// Switches "fullImgBox" div to display "none" to close the gallery
function closeFullImg(){
    fullImgBox.style.display = "none";
}

// Selects document elements called "helvete"
const setBorder = (id) => {
 const killerThumbnails = document.querySelectorAll(".helvete");
 // Runs foreach method to set border if img.src matches
 killerThumbnails.forEach(img => {
   if (img.src === fullImg.src) {
     img.style.border = "2px solid hotpink"
   } else {
     img.style.border = "0"
   }
 }) 
}

