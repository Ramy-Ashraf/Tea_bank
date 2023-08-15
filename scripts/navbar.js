$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
})
///////////////////////////////////////////////////////////////////////////////////////
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