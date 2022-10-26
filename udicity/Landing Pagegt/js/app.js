/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const navbarList = document.getElementById("navbar__list");
const newButton = document.getElementsByClassName('newBuuton')

// function create nav elemetns dynamically
function creatingNav() {
  sections.forEach(function (section) {
    //creatElement method
    const newLi = document.createElement("li");
    const newA = document.createElement("a");
    // Adding even Listener
    newA.addEventListener("click", function () {
      window.scroll({
        top: section.offsetTop,
        behavior: "smooth",
      });
      //   section.scrollIntoView();
    });
    console.log(newA);

    // // get a button to scroll back to top of the page
    // //https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
    // // When the user scrolls down 20px from the top of the document, show the button
    // var newbutton = document.getElementById("myBtn");

    // // When the user scrolls down 20px from the top of the document, show the button
    // window.onscroll = function () {
    //   scrollFunction()
    // };

    // function scrollFunction() {
    //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //     newbutton.style.display = "block";
    //   } else {
    //     newbutton.style.display = "none";
    //   }
    // }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }


    newA.classList.add("menu__link");
    newA.textContent = section.dataset.nav;
    newLi.appendChild(newA);
    navbarList.appendChild(newLi);

  });
  //add tag to the inner htmls

}
console.log(creatingNav());
//active section function
function activeSection() {
  const activeList = document.getElementsByClassName("menu__link");
  sections.forEach((section, i) => {
    //Get the boundingrect for each section
    const sectionBond = section.getBoundingClientRect();

    //section in viewport accourding to top and bottom boundings
    if (sectionBond.top <= 150 && sectionBond.bottom >= 150) {

      //add 'your-active-class' class to the specific section
      section.classList.add("your-active-class");
      //add 'active_button' class to the specific nav button according to section ID
      activeList[i].classList.add("active_button");
    } else {
      //Remove both section and navButton active classes when section is off sight
      section.classList.remove("your-active-class");
      activeList[i].classList.remove("active_button");
    }
  });
}
// Scroll to top of the Landing Page using scrollTO event
window.addEventListener("scroll", (event) => {
  activeSection();
});
//End of the Scroll Event to execute the functions of activeSection 