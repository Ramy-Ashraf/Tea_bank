$(function () {
    $(document).scroll(function () {
      var $nav = $("#mainNavbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  })
  
  
  
  
  
  
  const form = document.querySelector('form.login');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const login = document.querySelector('#login');
  const logout = document.querySelector('#logout');
  const account = document.querySelector('#account');
  const card = document.querySelector('.card');
  const cardWelcome = document.querySelector('#welcome');
  const support = document.querySelector('#support')
  const showPassword = document.querySelector('#showPassword');
  const faEye = document.querySelector('.fa-eye');
  const faEyeSlash = document.querySelector('.fa-eye-slash');
  const smallSizeTxt=document.querySelector('.txt');
  const serviceImageLinkOfflineArray=document.querySelectorAll('.serviceImageLinkOffline')
  let successFlagP = false;
  let successFlagE = false;
  // validation
  const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  
  
  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
  
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
  }
  const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
  
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
  }
  const validateEmail=()=>{
    const emailValue = email.value.trim();
    if (emailValue === '') {
      setError(email, 'Email is required.');
    } else if (!isValidEmail(emailValue)) {
      setError(email, 'Please enter a valid email.');
    } else {
      setSuccess(email);
      successFlagE = true;
    }
  }
  const validatePassword= ()=>{
    const passwordValue=password.value.trim();
    if (passwordValue === '') {
      setError(password, 'Password is required.');
      faEye.style.bottom = '37%'
    } else if (passwordValue.length < 8) {
      setError(password, 'Password must be at least 8 characters.');
      faEye.style.bottom = '37%'
    } else {
      setSuccess(password);
      successFlagP = true;
    }
  }
  const validateInputs = () => {
    validateEmail();
    validatePassword();
  
    if (successFlagP && successFlagE) {
      window.location.href = "TEA-BANK.html"
    }
  }
  // validation end
  
  // password encryption
  showPassword.addEventListener('click', function (e) {
    this.classList.toggle("fa-eye");
    this.classList.toggle('fa-eye-slash');
    if (password.getAttribute('type') === 'password') {
      password.setAttribute('type', 'text');
    }
    else {
      password.setAttribute('type', 'password');
    }
  })
  
  // password encryption end
  
  // is logged in?
  
  if (localStorage.getItem('isLoggedIn') === 'true') {
    login.classList.toggle('d-none');
    logout.classList.toggle('d-none');
    account.classList.toggle('d-none');
    card.classList.toggle('d-none');
    cardWelcome.classList.toggle('d-none')
    infoArray=JSON.parse(localStorage.getItem('user'));
    const welcomeMsg = 'Welcome back, '+infoArray[0]+'!';
    cardWelcome.querySelector('.card-title').innerText=welcomeMsg;
    smallSizeTxt.innerText=welcomeMsg;
    for(link of serviceImageLinkOfflineArray){
    }
  } else {
    for(link of serviceImageLinkOfflineArray){
      link.href='Login/login.html'
    }
  }
  
  logout.addEventListener('click', function (e) {
    localStorage.clear();
  })
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    validateInputs();
  })
  
  
  // carousel script
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      nav: true, // Enable navigation arrows
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'], // Custom navigation icons using Font Awesome
      autoplay: true, // Enable auto-switching
      autoplayTimeout: 3000, // Set the auto-switching interval (in milliseconds)
      responsive:{
        0:{
          items:1
        },
        768:{
          items:2
        },
        992:{
          items:4
        }
      }
    });
  });
  