emailjs.init({
  publicKey: "I5fGiJYF5iD8WzMJl",
});

window.onload = function () {
  document
    .getElementById("memoryForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("service_hqggznf", "template_e75d2qj", this).then(
        () => {
          console.log("SUCCESS!");
          // Show success message
          const successMessage = document.createElement("p");
          successMessage.textContent = "Form submitted successfully!";
          memoryForm.reset();
          const button = document.getElementById("subBtn");
          button.disabled = true;
          button.classList.add("disabledBtn");
          memoryForm.parentNode.insertBefore(
            successMessage,
            memoryForm.nextSibling,
          );
        },
        (error) => {
          console.log("FAILED...", error);
        },
      );
    });
};
