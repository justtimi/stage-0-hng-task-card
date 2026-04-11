const time = document.querySelector("time");
const timeRemaining = document.querySelector(".time-remaining");
const editButton = document.querySelector(".edit-button");
const deleteButton = document.querySelector(".delete-button");
const checkbox = document.querySelector("#complete-toggle");
const heading = document.querySelector("h2");
const statusPill = document.querySelector("#status");

const updateTimeRemaining = () => {
  if (!time || !timeRemaining) return;
  const dueDateString = time.getAttribute("datetime");

  const dueDate = new Date(dueDateString);
  const now = new Date();
  const difference = dueDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(difference / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(difference / (1000 * 60)) % 60;

  if (checkbox && checkbox.checked) {
    timeRemaining.textContent = "Done";
    return;
  }

  if (difference <= 0) {
    timeRemaining.textContent = "Overdue";
    timeRemaining.classList.add("overdue");
    return;
  } else {
    timeRemaining.classList.remove("overdue");
  }

  if (days >= 1) {
    timeRemaining.textContent = `Due in ${days} days, ${hours} hours, and ${minutes} minutes`;
  } else {
    timeRemaining.textContent = `Due in ${hours} hours, and ${minutes} minutes`;
  }
};

editButton.addEventListener("click", () => {
  alert("Button Clicked");
});

deleteButton.addEventListener("click", () => {
  console.log("Item deleted");
});

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    statusPill.classList.remove("status-inprogress");
    statusPill.classList.add("status-done");
    heading.classList.add("completed");
    statusPill.textContent = "Done";
  } else {
    statusPill.classList.add("status-inprogress");
    statusPill.classList.remove("status-done");
    heading.classList.remove("completed");
    statusPill.textContent = "In Progress";
    updateTimeRemaining();
  }
});

updateTimeRemaining();
setInterval(updateTimeRemaining, 60000);
