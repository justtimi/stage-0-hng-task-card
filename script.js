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

  if (checkbox.checked) {
    timeRemaining.textContent = "Done";
    timeRemaining.classList.remove("overdue");
    statusPill.textContent = "Done";
    statusPill.classList.remove("status-inprogress", "status-overdue");
    statusPill.classList.add("status-done");
    heading.classList.add("completed");
    return;
  }

  heading.classList.remove("completed");

  if (difference <= 0) {
    const absDifference = Math.abs(difference);

    const overdueDays = Math.floor(absDifference / (1000 * 60 * 60 * 24));
    const overdueHours = Math.floor(absDifference / (1000 * 60 * 60)) % 24;
    const overdueMinutes = Math.floor(absDifference / (1000 * 60)) % 60;

    if (overdueHours < 1 && overdueDays < 1) {
      timeRemaining.textContent = `Overdue by ${overdueMinutes} minutes`;
    } else if (overdueDays < 1) {
      timeRemaining.textContent = `Overdue by ${overdueHours} hours and ${overdueMinutes} minutes`;
    } else {
      timeRemaining.textContent = `Overdue by ${overdueDays} days, ${overdueHours} hours, and ${overdueMinutes} minutes`;
    }

    timeRemaining.classList.add("overdue");
    statusPill.textContent = "Overdue";
    statusPill.classList.remove("status-inprogress", "status-done");
    statusPill.classList.add("status-overdue");
    return;
  }
  timeRemaining.classList.remove("overdue");
  statusPill.classList.add("status-inprogress");
  statusPill.classList.remove("status-overdue", "status-done");
  statusPill.textContent = "In Progress";

  if (difference < 60000) {
    timeRemaining.textContent = "Due now";
  } else if (difference < 3600000) {
    timeRemaining.textContent = `Due in ${minutes} minutes`;
  } else if (days === 1) {
    timeRemaining.textContent = "Due tomorrow";
  } else if (days > 1) {
    timeRemaining.textContent = `Due in ${days} days, ${hours} hours, and ${minutes} minutes`;
  } else if (days < 1) {
    timeRemaining.textContent = `Due in ${hours} hours, and ${minutes} minutes`;
  }
};

if (editButton) {
  editButton.addEventListener("click", () => {
    alert("Button Clicked");
  });
}

if (deleteButton) {
  deleteButton.addEventListener("click", () => {
    console.log("Item deleted");
  });
}

checkbox.addEventListener("change", updateTimeRemaining);

updateTimeRemaining();
setInterval(updateTimeRemaining, 60000);
