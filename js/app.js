/*
 *Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 */

/* Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 * *************************************************************************/

/* Define Global Variables
 * Using "Array.from" method to store data into an array for much easier control.*/

const mainContainer = Array.from(document.querySelectorAll("section"));
const mainMenu = document.getElementById("navbar__list");

/*
 * Using the ".createDocumentFragment" method for better "Reflow, Repain" process in the browser.
 * Using the " DOMContentLoaded" for more accuracy in running the functions.
 * Using "template literals" for less, easier and readable code.
 * Building each navbar element.
 */

const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", createNavMenu);

for (const mainUnit of mainContainer) {
  const element = document.createElement("li");

  element.innerHTML = `<a href="#${mainUnit.id}" class='menu__link'>${mainUnit.dataset.nav}</a>`;

  // Adding a smooth behavior while moving in the page.

  element.addEventListener("click", (travel) => {
    travel.preventDefault();

    mainUnit.scrollIntoView({ behavior: "smooth" });
  });

  fragment.appendChild(element);
}
function createNavMenu() {
  return mainMenu.appendChild(fragment);
}

/* Activation of every section and section link which in the viewport.
 * Detecting which section being viewed using ".getBoundingClientRect" method.
 * Using the section id to link each active section with the right navbar element.
 */

function activateViewedUnits() {
  for (mainUnit of mainContainer) {
    const unitHead = mainUnit.getBoundingClientRect().top;
    const unitLink = document.querySelector(`a[href="#${mainUnit.id}"]`);

    if (unitHead >= 0 && unitHead < 300) {
      mainUnit.classList.add("your-active-class");
      unitLink.classList.add("active__link");
    } else {
      mainUnit.classList.remove("your-active-class");
      unitLink.classList.remove("active__link");
    }
  }
}

/* End Main Functions */

window.addEventListener("scroll", activateViewedUnits);
