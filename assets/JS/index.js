// scroll to top btn
{
  const scroll_btn = document.getElementById("scroll_btn");
  window.addEventListener("scroll", () => {
    if (window.scrollY < 200) {
      scroll_btn.style.visibility = "hidden";
    } else {
      scroll_btn.style.visibility = "visible";
    }
  });

  scroll_btn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
}

// active nav
{
  const nav_item = document.querySelectorAll(".nav_item");
  const windowPath = window.location.href;

  for (i = 0; i < nav_item.length; i++) {
    if (nav_item[i].href === windowPath) {
      nav_item[i].classList = "active_class";
    }
  }
}

{
  // footer copyright date
  const d = new Date();
  let year = d.getFullYear();
  let copYear = document.getElementById("copYear");
  copYear.innerText = year;
}

// mobile menu
{
  const humburgurBtn = document.querySelector(".hamburgur_btn");
  const mobileNav = document.querySelector(".mobile_nav");
  const closeBtn = document.querySelector(".mobile_close");

  humburgurBtn.addEventListener("click", function () {
    closeBtn.style.visibility = "visible";
    humburgurBtn.style.visibility = "hidden";
    console.log("visible");
    mobileNav.classList.toggle("mobile_active_menu");
  });
  closeBtn.addEventListener("click", function () {
    humburgurBtn.style.visibility = "visible";
    closeBtn.style.visibility = "hidden";
    mobileNav.classList.toggle("mobile_active_menu");
  });

  // mobile sub menu
  const mobileSubBtn = document.querySelector(".mobile_sub_btn");
  const mobileSubMenu = document.querySelector(".mobile_main_sub_container");
  mobileSubBtn.addEventListener("click", function () {
    mobileSubMenu.classList.toggle("mobile_active_submenu");
  });
}

// counter on scroll
{
  let counter = document.getElementById("counter");
  if (counter != null) {
    var a = 0;
    $(window).scroll(function () {
      var oTop = $("#counter").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter-value").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 2000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
                //alert('finished');
              },
            }
          );
        });
        a = 1;
      }
    });
  }
}

// contact form
{
  const firstName = document.getElementById("first_name");
  const lastName = document.getElementById("last_name");
  const emailInput = document.getElementById("email_input");
  const phoneNumber = document.getElementById("phone_number");
  const countrySelect = document.getElementById("cuntry_select");
  const selectService = document.getElementById("service_select");
  const textAreaInput = document.getElementById("textarea_input");
  const formInput = document.getElementById("form_input");
  const firstNameError = document.getElementById("first_name_error");
  const lastNameError = document.getElementById("last_name_error");
  const phoneNumberError = document.getElementById("phone_number_error");
  const selectCountryError = document.getElementById("select_country_error");
  const selectServiceError = document.getElementById("select_service_error");
  const textAreaError = document.getElementById("textarea_error");

  const emailError = document.getElementById("email_input_error");
  if (formInput != null) {
    formInput.addEventListener("submit", function (e) {
      e.preventDefault();

      if (firstName.value === "") {
        firstNameError.innerHTML = "Please Write Your Firstname";
        return false;
      } else if (emailInput.value === "") {
        emailError.innerHTML = "Please Write Your Email";
        return false;
      } else if (phoneNumber.value === "") {
        phoneNumberError.innerHTML = "please Write Your Phone Number";
        return false;
      } else if (countrySelect.value === "") {
        selectCountryError.innerHTML = "please Select Your Country";
        return false;
      } else if (selectService.value === "") {
        selectServiceError.innerHTML = "please Select Your Country";
        return false;
      } else if (textAreaInput.value === "") {
        textAreaError.innerHTML = "please Write massage";
        return false;
      }
      firstName.value = "";
      lastName.value = "";
      emailInput.value = "";
      phoneNumber.value = "";
      countrySelect.value = "";
      selectService.value = "";
      textAreaInput.value = "";
      firstNameError.innerHTML = "";
      lastNameError.innerHTML = "";
      emailError.innerHTML = "";
      phoneNumberError.innerHTML = "";
      selectCountryError.innerHTML = "";
      selectServiceError.innerHTML = "";
      textAreaError.innerHTML = "";
      swal("Thank you!", "We will get answer soon!", "success");
    });
  }
}

// home page slider
{
  let mySwiper = document.querySelector(".mySwiper");
  if (mySwiper != null) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });
  }
}
