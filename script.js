let lastScrollY = window.scrollY; // Store the last scroll position

window.addEventListener('scroll', () => {
  const header = document.getElementById('header'); // Get the header element

  if (window.scrollY > lastScrollY) {
    // Scrolling down
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'; // Set to default color
  } else {
    // Scrolling up
    header.style.backgroundColor = 'white'; // Change background to white
  }

  lastScrollY = window.scrollY; // Update the last scroll position
});



const searchPopup = document.getElementById('search-pop-up');

function showSearchBar() {
  searchPopup.style.top = '0';
  input.focus(); // Set focus back to the input

}
function hideSearchBar() {
  searchPopup.style.top = '-100%';
}


const sideNavbar = document.getElementById('side-nav-bar');
function showNavBar() {
  sideNavbar.style.left = '0';
  //alert('Navigation bar is now visible');
}

function hideNavBar() {
  sideNavbar.style.left = '-100%';
}


//  -----------------------------------------------------------------

const input = document.getElementById('search-input');
const clearBox = document.getElementById('clear-box');

function clearSearchInput() {
  input.value = ''; // Clear the input value
  input.focus(); // Set focus back to the input
  //clearBox.style.opacity = '0';
}

/*



function checkSearchWindow() {
  while (true) {
    if (input.value == '') {
      clearBox.style.opacity = '1';
    }

  }
}
*/


//  -----------------------------------------------------------------





//  --------------------- ESCAPE ----------------------------------

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { // Check if the Escape key was pressed
    if (searchPopup) {
      searchPopup.style.top = '-100%'; // Hide the popup
    }
    if (sideNavbar) {
      sideNavbar.style.left = '-100%'; // Hide the popup
    }

  }
});




function scrollContent1(direction) {
  const content = document.querySelector('#content-pics1');
  const scrollAmount = 200; // Amount to scroll in pixels

  if (direction === 'left') {
      content.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else if (direction === 'right') {
      content.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

function scrollContent2(direction) {
  const content = document.querySelector('#content-pics2');
  const scrollAmount = 200; // Amount to scroll in pixels

  if (direction === 'left') {
      content.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else if (direction === 'right') {
      content.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

function scrollContent3(direction) {
  const content = document.querySelector('#content-pics3');
  const scrollAmount = 200; // Amount to scroll in pixels

  if (direction === 'left') {
      content.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  } else if (direction === 'right') {
      content.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}