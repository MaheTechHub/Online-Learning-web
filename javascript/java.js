

        // Toggle FAQ answer display
        document.querySelectorAll('.faq-question').forEach(item => {
            item.addEventListener('click', () => {
                const parent = item.parentElement;
                parent.classList.toggle('open');
            });
        });

// images slider 
// var indexValue = 0;
//     function slideShow() {
//       setTimeout(slideShow, 2500);
//       var x;
//       const img = document.querySelectorAll("img");
//       for (x = 0; x < img.length; x++) {
//         img[x].style.display = "none";
//       }
//       indexValue++;
//       if (indexValue > img.length) { indexValue = 1 }
//       img[indexValue - 1].style.display = "block";
//     }
//     slideShow();

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}


// Subscribe js
  function sub() {
    let Subscribe = document.getElementById("Subscribe").value;

    if (Subscribe) {
      alert("Thank you for subscribing!\nYou will receive updates at: " + Subscribe);
    } else {
      alert("Please enter a valid email address to subscribe.");
    }
  }