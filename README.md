# stage-0-hng-task-card

# 🧠 Stage 0 - Todo Card (Frontend Wizards)

A clean, responsive, and interactive Todo / Task Card built with **HTML, CSS, and Vanilla JavaScript** as part of the HNG Stage 0 Frontend task.

---

## 🚀 Live Demo

[Add your deployed link here]

```

[https://your-deployment-link.com](https://your-deployment-link.com)

```

---

## 📸 Preview

![Todo Card Preview](./preview.png)

---

## 🛠️ Built With

- HTML5 (Semantic markup)
- CSS3 (Flexbox, responsive design, variables)
- Vanilla JavaScript (DOM manipulation, state handling)

---

## 🎯 Features

- ⏳ Dynamic time remaining calculation
- 📅 Smart due date formatting
- ☑️ Interactive checkbox to mark task as complete
- 🟢 Status updates (In Progress → Done)
- 🔴 Overdue detection
- ✏️ Edit button (dummy interaction)
- 🗑️ Delete button (dummy interaction)
- 📱 Fully responsive layout (320px – 1200px)

---

## 🧠 Key Functionalities

### ⏰ Time Remaining

The app calculates and updates remaining time based on the task due date:

- Due in X days/hours/minutes
- Due tomorrow
- Due now!
- Overdue by X time

Updates automatically every 60 seconds.

---

### ☑️ Task Completion

When the checkbox is toggled:

- Task title gets strikethrough
- Status changes to "Done"
- UI updates instantly

---

### 🔄 State Handling

The UI dynamically updates based on:

- Task completion status
- Current time vs due date
- User interactions

---

## 📂 Project Structure

```

project-folder/
│
├── index.html
├── style.css
├── script.js
└── README.md

```

---

## ⚙️ How to Run Locally

1. Clone the repository:

```

git clone [https://github.com/your-username/todo-card.git](https://github.com/your-username/todo-card.git)

```

2. Open the project folder:

```

cd todo-card

```

3. Open `index.html` in your browser.

---

## 📌 Data Attributes (Important for Testing)

This project uses required `data-testid` attributes for automated testing:

- `test-todo-card`
- `test-todo-title`
- `test-todo-description`
- `test-todo-priority`
- `test-todo-status`
- `test-todo-due-date`
- `test-todo-time-remaining`
- `test-todo-complete-toggle`
- `test-todo-tags`
- `test-todo-edit-button`
- `test-todo-delete-button`

---

## 💡 What I Learned

- DOM manipulation in vanilla JavaScript
- Date/time calculations in JS
- UI state management without frameworks
- Accessibility basics (aria-labels, semantic HTML)
- Building testable UI components
