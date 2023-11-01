let expanded = document.getElementById("add-expanded");

function expand() {
  expanded.classList.toggle("add-topic-expanded-open");
}

function sendEmail() {
  const params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_98tmbmj", "template_6ak93zm", params)
    .then(function (res) {
      alert("success" + res.status);
    }),
    function (error) {
      console.log("FAILED" + error);
    };
}
