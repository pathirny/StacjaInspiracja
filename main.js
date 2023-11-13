let burgerBox = document.getElementById("burgerBox");
let linksBox = document.getElementById("expandedLinks");
// when anywhere on the screen is clicked the popup box will disappear
function expand() {
  document.addEventListener("click", function (event) {
    let isClicked = burgerBox.contains(event.target);

    if (isClicked) {
      linksBox.style.display = "flex";
    } else {
      linksBox.style.display = "none";
    }
  });
}

var form = document.getElementById("form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
  console.log(body.data);
}
form.addEventListener("submit", handleSubmit);
