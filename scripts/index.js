///////////////////////////////////////////////////////////////////////////////
$(function () {
  $(document).scroll(function () {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
})

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



