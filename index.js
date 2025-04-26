let allQuestion = document.querySelectorAll(".faqitems h3");
      allQuestion.forEach((item, currentIndex) => {
        item.addEventListener("click", () => {
          //hide rest 3 question & answers(means 1 time only 1question & answer will show in page)
          allQuestion.forEach((heading, i) => {
            if (currentIndex != i) {
              heading.lastElementChild.innerHTML = "+";
              heading.nextElementSibling.classList.remove("showanswer");
            }
          });

          //current question hide & show
          if (item.lastElementChild.innerHTML == "+") {
            item.lastElementChild.innerHTML = " - ";
          } else {
            item.lastElementChild.innerHTML = "+";
          }
          //her nextElementSibling means h3 ke next p tag hain so rules will apply
          item.nextElementSibling.classList.toggle("showanswer");
        });
      });