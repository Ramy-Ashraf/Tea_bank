///////////////////////////////////////////////////////////////////////////////
$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
})

const sessionTimeoutDuration = 300000;
const cardDisplayDelay = 300000;

let sessionTimeout;
let cardTimeout;

function startSessionTimer() {
  sessionTimeout = setTimeout(showSessionTimeoutCard, sessionTimeoutDuration);
}

function resetSessionTimer() {
  clearTimeout(sessionTimeout);
  clearTimeout(cardTimeout);
  startSessionTimer();
  cardTimeout = setTimeout(showSessionTimeoutCard, cardDisplayDelay);
}

function showSessionTimeoutCard() {
  const card = document.getElementById("sessionTimeoutCard");
  card.style.display = "block";
}

function logout() {
  localStorage.setItem('islogin', 'false');
  localStorage.removeItem('firstname');
  localStorage.removeItem('lastname');
  window.location.reload();
}

window.onload = function () {
  if (localStorage.getItem('islogin') === 'true') {
    startSessionTimer();
    cardTimeout = setTimeout(showSessionTimeoutCard, cardDisplayDelay);
    document.addEventListener("mousemove", resetSessionTimer);
    document.addEventListener("mousedown", resetSessionTimer);
    document.addEventListener("keypress", resetSessionTimer);
    document.addEventListener("touchstart", resetSessionTimer);
  }
};

////////////////////////////////////////////////////////////
const isLogin = localStorage.getItem('islogin');
const firstname = localStorage.getItem('firstname');

function closeMenu() {
  const checkbox = document.getElementById("check");
  checkbox.checked = false;
}


if (isLogin === 'true' && firstname) {
  const loginStatusElement = document.getElementById('loginStatus');

  loginStatusElement.innerHTML = `<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="profile.html" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Hi ${firstname}
        </a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item"
                    href="profile.html">Profile</a></li>
            <li><a class="dropdown-item" id="logoutBtn">Log Out</a></li>
        </ul>
    </li>`
  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', () => {
    localStorage.setItem('islogin', 'false');
    localStorage.removeItem('firstname');
    localStorage.removeItem('lastname');
    window.location.reload();
  });
}

if (isLogin !== 'true') {
  const serviceButtonContainer = document.getElementById('serviceButtonContainer');
  if (serviceButtonContainer) {
    serviceButtonContainer.style.display = 'none';
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////

// carousel script
$(document).ready(function () {
  $('.carousel1').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    autoplay: true, // Enable auto-switching
    autoplayTimeout: 3000, // Set the auto-switching interval (in milliseconds)
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
  });
  $('.carousel2').owlCarousel({
    items: 1,
    loop: true,
    nav: true, // Enable navigation arrows
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'], // Custom navigation icons using Font Awesome
    autoplay: true, // Enable auto-switching
    autoplayTimeout: 3000, // Set the auto-switching interval (in milliseconds)
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 4
      }
    }
  });
});

///////////////////////////////////////////////////////////////
// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll and animate the picture
function animatePictureOnScroll() {
  const picture = document.querySelector('.pic');
  if (isElementInViewport(picture)) {
    picture.classList.add('fadeInUp');
  } else {
    picture.classList.remove('fadeInUp'); // Remove animation classes when element is not in view
  }
}

// Attach the scroll event listener to trigger the animation
window.addEventListener('scroll', animatePictureOnScroll);

//////////////////////////////////////////////////////////////

// When the document is ready
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTop");

  // Show the button when the user scrolls down
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopButton.classList.add("active");
    } else {
      scrollToTopButton.classList.remove("active");
    }
  });

  // Scroll smoothly to the top when the button is clicked
  scrollToTopButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Using smooth scrolling behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
////////////////////////////////////////////////////////////////////////////



