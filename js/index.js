const btn = document.getElementById("button");

document.getElementById("myform").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "service_y997r2a";
  const templateID = "template_ybp0ll9";

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