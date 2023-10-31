let expanded = document.getElementById("add-expanded");

function expand() {
  expanded.classList.toggle("add-topic-expanded-open");
}

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "pathirny@googlemail.com",
    Password: "password",
    To: "pathirny@googlemail.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
