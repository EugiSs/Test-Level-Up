$(document).ready(function () {
  // Плавная прокрутка страницы при клике на кнопку
  $(".order-link").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      1000
    );
  });

  // Swiper
  const swiper = new Swiper(".swiper", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    grabCursor: true,
  });

  // Timer
  $(".timer").startTimer({
    loop: false,
    loopInterval: 1,
    onComplete: function (element) {
      element.css("display", "none");
      alert("Время вышло.");
    },
    classNames: {
      hours: "hours",
      minutes: "minutes",
      seconds: "seconds",
      clearDiv: "clearDiv",
      timeout: "timeout",
    },
  });
});
