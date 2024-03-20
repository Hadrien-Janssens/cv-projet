import cv from "/cv.json";

document.querySelector("#app").innerHTML = `

 <div class="rideau-haut"></div>
    <section>
      <div class="marge">
        <p><span>C</span>urriculum <span>V</span>itae,</p>
      </div>

      <div class="cv">
        <div class="header-container">
          <div class="header">
            <!-- <div class="rideau-haut"></div> -->
            <div class="relative">
              <div id="itsme">c'est moi</div>
              <div class="sun"></div>
              <img class="itsme" src="./Vector 5.svg" alt="" />
              <h2>
                <span class="lettre-hover">H</span
                ><span class="lettre-hover">a</span
                ><span class="lettre-hover">d</span
                ><span class="lettre-hover">r</span
                ><span class="lettre-hover">i</span
                ><span class="lettre-hover">e</span
                ><span class="lettre-hover">n</span
                ><span class="lettre-hover"> </span
                ><span class="lettre-hover">J</span
                ><span class="lettre-hover">a</span
                ><span class="lettre-hover">n</span
                ><span class="lettre-hover">s</span
                ><span class="lettre-hover">s</span
                ><span class="lettre-hover">e</span
                ><span class="lettre-hover">n</span
                ><span class="lettre-hover">s</span>
              </h2>
              <div class="accroche">
                <p class="absolute">
                  ${cv.accroche}
                </p>
              </div>
            </div>
            <figure>
              <img src="./IMG_4809.PNG" width="250px" />
            </figure>
          </div>
          <div class="bg-grey">
            <div class="petite-boule"></div>
          </div>
          <div class="page-blanche"></div>

          <div class="skill">
            <div class="circle">
              <div class="text">
                <p>- curriculum vitae - hadrien janssens</p>
              </div>
            </div>
            <div class="hover-me">
              <p>Survol mes compétences..</p>
            </div>
            <div class="fleche"><img src="./Vector 2.svg" alt="" /></div>
            <div class="skills">
              <!-- <div class="circle">
                <div class="text">
                  <p></p>
                </div>
              </div> -->
              <h2>SKILLS</h2>
              <div class="skill-flex">
                <p>Adobe XD</p>
                <div class="adobe-jauge">
                  <div class="level"></div>
                </div>
              </div>
              <div class="skill-flex">
                <p>Figma</p>
                <div class="figma-jauge">
                  <div class="level"></div>
                </div>
              </div>
              <div class="skill-flex">
                <p>Photoshop</p>
                <div class="photoshop-jauge">
                  <div class="level"></div>
                </div>
              </div>
              <div class="skill-flex">
                <p>HTML</p>
                <div class="html-jauge">
                  <div class="level"></div>
                </div>
              </div>
              <div class="skill-flex">
                <p>CSS / SASS</p>
                <div class="css-jauge">
                  <div class="level"></div>
                </div>
              </div>
              <div class="skill-flex">
                <p>Javascript</p>
                <div class="javascript-jauge">
                  <div class="level"></div>
                </div>
              </div>
              <div class="skill-flex">
                <p>PHP</p>
                <div class="php-jauge">
                  <div class="level"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main>
          <div class="about-me card active">
            <h3 class="undisplay">#01</h3>
            <h2>#Info</h2>
            <div class="">
              <p class="big">INFO</p>
              <p>${cv.dateNaissance}</p>
              <p>${cv.mail}</p>
              <p>${cv.adresse}</p>
            </div>
          </div>
          <div class="diplome card">
            <h3 class="">#02</h3>
            <h2>#Diplome</h2>
            <div class="undisplay">
              <p class="big">DIPLOME</p>
              ${cv.diplome.map((el) => `<p>${el}</p>`).join("")}
            </div>
          </div>
          <div class="valeur card">
            <h3 class="">03</h3>
            <h2>#Valeur</h2>

            <div class="undisplay">
              <p class="big">VALEUR</p>
              ${cv.valeur.map((el) => `<p>${el}</p>`).join("")}
            </div>
          </div>
          <div class="passion card">
            <h3>#04</h3>
            <h2>#Passion</h2>

            <div class="undisplay">
              <p class="big">PASSION</p>
              ${cv.passion.map((el) => `<p>${el}</p>`).join("")}
            </div>
          </div>
        </main>
        <div class="bandeau">
          <p>
            developpeur web developpeur web developpeur web developpeur web
            developpeur web developpeur web developpeur web developpeur web
            developpeur web developpeur web developpeur web developpeur web
            developpeur web developpeur web developpeur web developpeur web
            developpeur web developpeur web developpeur web developpeur web
            developpeur web developpeur web developpeur web developpeur web
            &nbsp;
          </p>
        </div>
      </div>
    </section>

`;

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
