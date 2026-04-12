const time = document.querySelector("time");
const timeRemaining = document.querySelector(".time-remaining");
const editButton = document.querySelector(".edit-button");
const deleteButton = document.querySelector(".delete-button");
const checkbox = document.querySelector("#complete-toggle");
const heading = document.querySelector("h2");
const statusPill = document.querySelector("#status");

const STATUS_CONFIG = {
  done: {
    text: "Done",
    class: "status-done",
    headingClass: "completed",
  },
  overdue: {
    text: "Overdue",
    class: "status-overdue",
    headingClass: "",
  },
  inprogress: {
    text: "In Progress",
    class: "status-inprogress",
    headingClass: "",
  },
};

const STATUS_CLASSES = ["status-overdue", "status-inprogress", "status-done"];

const updateTimeRemaining = () => {
  if (!time || !timeRemaining) return;
  const dueDateString = time.getAttribute("datetime");
  const dueDate = new Date(dueDateString);
  const now = new Date();
  const difference = dueDate - now;

  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (checkbox.checked) {
    setStatus({ type: "done", timeText: "Done" });
    return;
  }

  if (difference <= 0) {
    const absDifference = Math.abs(difference);

    const overdueDays = Math.floor(absDifference / (1000 * 60 * 60 * 24));
    const overdueHours = Math.floor(absDifference / (1000 * 60 * 60)) % 24;
    const overdueMinutes = Math.floor(absDifference / (1000 * 60)) % 60;

    let overdueText;
    if (overdueHours < 1 && overdueDays < 1) {
      overdueText = `Overdue by ${overdueMinutes} minutes`;
    } else if (overdueDays < 1) {
      overdueText = `Overdue by ${overdueHours} hours and ${overdueMinutes} minutes`;
    } else {
      overdueText = `Overdue by ${overdueDays} days, ${overdueHours} hours, and ${overdueMinutes} minutes`;
    }
    setStatus({ type: "overdue", timeText: overdueText });
    return;
  }
  let timetext;
  if (difference < 60000) {
    timetext = "Due now";
  } else if (difference < 3600000) {
    timetext = `Due in ${minutes} minutes`;
  } else if (days === 1) {
    timetext = "Due tomorrow";
  } else if (days > 1) {
    timetext = `Due in ${days} days, ${hours} hours, and ${minutes} minutes`;
  } else if (days < 1) {
    timetext = `Due in ${hours} hours, and ${minutes} minutes`;
  }
  setStatus({ type: "inprogress", timeText: timetext });
};

const setStatus = ({ timeText, type }) => {
  const config = STATUS_CONFIG[type];
  if (!config) return;

  if (timeText) {
    timeRemaining.textContent = timeText;
  }
  statusPill.classList.remove(...STATUS_CLASSES);

  statusPill.textContent = config.text;

  statusPill.classList.add(config.class);

  if (config.headingClass) {
    heading.classList.add(config.headingClass);
  } else {
    heading.classList.remove("completed");
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
