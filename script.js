// Wait until the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const commentForms = document.querySelectorAll(".comment-form");

  commentForms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = form.querySelector("input");
      const commentInput = form.querySelector("textarea");
      const postId = form.getAttribute("data-post");

      const name = nameInput.value.trim();
      const comment = commentInput.value.trim();

      if (name === "" || comment === "") {
        alert("Please enter your name and comment.");
        return;
      }

      // Create comment element
      const commentElement = document.createElement("p");
      const timestamp = new Date().toLocaleString();
      commentElement.innerHTML = `<strong>${name}</strong> <em>(${timestamp})</em><br/>${comment}`;

      // Append to correct comment section
      document.getElementById(`comments-${postId}`).appendChild(commentElement);

      // Clear form
      nameInput.value = "";
      commentInput.value = "";
    });
  });
});
