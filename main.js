const cards = document.querySelectorAll(".card");

cards.forEach((el) => {
  el.addEventListener("click", () => {
    cards.forEach((el) => {
      //la zone d'info
      el.classList.remove("active");
      if (el.children[2].className != "undisplay") {
        el.children[2].classList.add("undisplay");
      }
      //le hashtag

      el.children[0].classList.remove("undisplay");
    });
    el.classList.add("active");
    el.children[2].classList.remove("undisplay");
    //le hashtag

    el.children[0].classList.add("undisplay");
    ///// mouseOverEffect
    const active = document.querySelector(".active");
    active.addEventListener("mousemove", (e) => {
      active.style.transition = "0.3s linear";
      const Y = (e.offsetY / active.clientHeight) * 100 - 50;
      const X = (e.offsetX / active.clientWidth) * 100 - 50;
      active.style.transform = `rotateY(${X}deg) `;
    });
    active.addEventListener("mouseleave", () => {
      active.style.transform = `rotateY(0deg)`;
    });
  });
});
const active = document.querySelector(".active");
active.addEventListener("mousemove", (e) => {
  active.style.transition = "0.3s linear";
  const Y = (e.offsetY / active.clientHeight) * 100 - 50;
  const X = (e.offsetX / active.clientWidth) * 100 - 50;
  console.log(X);
  active.style.transform = `rotateY(${X}deg)`;
});
active.addEventListener("mouseleave", () => {
  active.style.transform = `rotateY(0deg)`;
});

const adobe = document.querySelector(".adobe-jauge");
adobe.addEventListener("mouseover", () => {
  adobe.childNodes[1].classList.add("adobe");
});

const figma = document.querySelector(".figma-jauge");
figma.addEventListener("mouseover", () => {
  figma.childNodes[1].classList.add("figma");
});
const photoshop = document.querySelector(".photoshop-jauge");
photoshop.addEventListener("mouseover", () => {
  photoshop.childNodes[1].classList.add("photoshop");
});
const html = document.querySelector(".html-jauge");
html.addEventListener("mouseover", () => {
  html.childNodes[1].classList.add("html");
});
const css = document.querySelector(".css-jauge");
css.addEventListener("mouseover", () => {
  css.childNodes[1].classList.add("css");
});
const javascript = document.querySelector(".javascript-jauge");
javascript.addEventListener("mouseover", () => {
  javascript.childNodes[1].classList.add("javascript");
});
const php = document.querySelector(".php-jauge");
php.addEventListener("mouseover", () => {
  php.childNodes[1].classList.add("php");
});

////logo qui tourne héhé

const text = document.querySelector(".text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `
    <span style="transform:rotate(${i * 9.5}deg)">${char}</span>
    `
  )
  .join("");

//petite boule

const petiteBoule = document.querySelector(".petite-boule");
window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);
  petiteBoule.style.transform = `translate(${
    window.scrollY / 2 + 200
  }px, -50%)`;
});

// effet d'apparation au chargement

const marge = document.querySelector(".marge");
setTimeout(() => {
  marge.style.transform = "rotate(180deg) translateX(0px)";
}, 1000);

const absolute = document.querySelector(".absolute");
setTimeout(() => {
  absolute.classList.add("reveal");
}, 1600);
