const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "service_gn2h4f9";
  const templateID = "template_7r7q62p";

  emailjs
    .sendForm(serviceID, templateID, this)
    .then(
      () => {
        btn.value = "Sent!";
      },

      err => {
        btn.value = "Not Sent!";
        alert(JSON.stringify(err));
      }
    )
    // .then(document.getElementById("form").reset());
});