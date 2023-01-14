   //===========Slider From Swiper===========
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      //===========Form Data===========
      document.forms[0].addEventListener("submit", function (ev) {
        ev.preventDefault();
        const formData = new FormData(this);
        const entires = formData.entries();

        for (var input of entires) {
            console.log(input[0] + ": " + input[1]);
        }
    });

   //===========Back To Top Button===========
      let mybutton = document.getElementById("topBtn");

            window.onscroll = function () {
                scrollFunction();
            };

            function scrollFunction() {
                if (
                    document.body.scrollTop > 500 ||
                    document.documentElement.scrollTop > 500
                ) {
                    mybutton.style.display = "block";
                } else {
                    mybutton.style.display = "none";
                }
            }

            function topFunction() {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }