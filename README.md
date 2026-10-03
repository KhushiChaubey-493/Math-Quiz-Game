# 🧮 Math Quiz Game

A simple and interactive **Math Quiz Game** built with **HTML, CSS, and JavaScript**.

The application generates random arithmetic questions and allows users to test their calculation skills. It includes score tracking, persistent statistics using **Local Storage**, and visual feedback through **Toastify notifications**.

## 🌐 Live Demo

**[View Live Demo](https://khushichaubey-493.github.io/Math-Quiz-Game/)**

> Make sure GitHub Pages is enabled for the repository before using this link.

## 📸 Project Preview

*Add a screenshot of the application here.*

```markdown
![Math Quiz Game Preview](images/quiz-preview.png)
```

## ✨ Features

* 🧮 Randomly generated math questions
* ➕ Addition questions
* ➖ Subtraction questions
* ✖️ Multiplication questions
* ➗ Division questions
* 🎯 Real-time score tracking
* 💾 Score persistence using Local Storage
* 📊 Correct and wrong answer statistics
* 🔄 Automatically generates a new question after each submission
* ✅ Visual feedback for correct answers
* ❌ Displays the correct answer for incorrect responses
* 🔔 Toast notifications using Toastify
* 📱 Responsive interface
* ⌨️ Number-based answer input

## 🛠️ Technologies Used

| Technology            | Purpose                                    |
| --------------------- | ------------------------------------------ |
| **HTML5**             | Structure of the quiz interface            |
| **CSS3**              | Styling, layout, and responsive design     |
| **JavaScript (ES6+)** | Quiz logic and dynamic question generation |
| **Local Storage API** | Persisting score and answer statistics     |
| **Toastify JS**       | Success and error notifications            |
| **Google Fonts**      | Poppins typography                         |

## 🎮 How the Game Works

### 1. Generate a Question

When the application loads, JavaScript generates a random arithmetic question.

The numbers are randomly selected between **1 and 20**, and one of four operations is selected:

* Addition
* Subtraction
* Multiplication
* Division

For subtraction, the larger number is used first to keep the result non-negative. For division, the generated expression is constructed so that the answer is an integer.

### 2. Enter Your Answer

The user enters the numerical answer into the input field.

### 3. Submit the Answer

When the form is submitted, JavaScript compares the user's answer with the generated correct answer.

### 4. Update the Score

* Correct answer → **+1 point**
* Incorrect answer → **-1 point**, with the score prevented from going below zero

The application also keeps separate counts of correct and incorrect answers.

### 5. Generate the Next Question

After checking the answer, the current form is reset and a new random question is displayed automatically.

## 💾 Local Storage

The application uses the browser's **Local Storage API** to persist:

```text
score
correct
wrong
```

This means the current score and answer statistics can remain available even after refreshing the page.

## 🔔 User Feedback

The application uses **Toastify JS** to provide immediate feedback.

### Correct Answer

A success notification displays the updated score.

### Incorrect Answer

An error notification displays the correct answer and the updated score.

Toastify is loaded through a CDN in the HTML file.

## 🔄 Application Flow

```text
             Start Game
                  │
                  ▼
        Generate Random Question
                  │
                  ▼
          User Enters Answer
                  │
                  ▼
           Submit Answer
                  │
           ┌──────┴──────┐
           │             │
        Correct        Incorrect
           │             │
           ▼             ▼
        Score +1       Score -1
           │             │
           └──────┬──────┘
                  ▼
          Save Statistics
          to Local Storage
                  │
                  ▼
        Generate New Question
```

## 🧠 JavaScript Concepts Practiced

This project helped strengthen several important JavaScript concepts:

* DOM manipulation
* Event listeners
* Form submission handling
* `preventDefault()`
* Functions
* Arrow functions
* Conditional statements
* `switch` statements
* Random number generation
* Template literals
* `Math.random()`
* `Math.floor()`
* `Math.max()`
* `Math.min()`
* `localStorage`
* `Number()`
* FormData
* Dynamic content updates

## 📂 Project Structure

```text
Math-Quiz-Game/
│
├── images/
│   └── background.jpg
│
├── index.html
├── index.js
├── style.css
└── README.md
```

The current project uses `index.js` as its JavaScript entry file and `style.css` for the interface styling. The HTML also references the background image from the `images` directory.

## 🚀 Getting Started

### Prerequisites

You only need:

* A modern web browser
* A code editor such as VS Code

No build tools or package installation are required.

### 1. Clone the Repository

```bash
git clone https://github.com/KhushiChaubey-493/Math-Quiz-Game.git
```

### 2. Navigate to the Project

```bash
cd Math-Quiz-Game
```

### 3. Run the Application

Open `index.html` in your browser.

For development, you can also use the **Live Server** extension in VS Code.

## 📱 User Experience

The game is designed around a simple interaction loop:

1. Open the application.
2. Read the generated math question.
3. Enter the answer.
4. Submit the answer.
5. Receive immediate feedback.
6. Check the updated score.
7. Continue with the next question.

The interface uses a centered quiz card with a background image, rounded corners, and a blurred translucent panel for the main quiz area.

## 📚 Learning Objectives

The main goals of this project were to practice:

* Generating dynamic content with JavaScript
* Creating random arithmetic problems
* Handling user input
* Comparing user input with calculated answers
* Managing application state
* Persisting data with Local Storage
* Providing immediate UI feedback
* Working with third-party JavaScript libraries

## 🔮 Future Improvements

Possible improvements for future versions include:

* Add difficulty levels such as Easy, Medium, and Hard
* Add a countdown timer
* Add a fixed number of questions per quiz
* Add a final results screen
* Display correct and incorrect answer statistics in the UI
* Add a reset-score button
* Add a high-score system
* Add different question categories
* Add keyboard shortcuts
* Add sound effects
* Add a progress indicator
* Improve accessibility
* Add a mobile-first responsive layout

## 📌 Project Status

**Completed — Frontend JavaScript Practice Project**

This project was created to practice **JavaScript logic, DOM manipulation, random question generation, browser storage, and interactive UI development**.

## 👩‍💻 Author

**Khushi Chaubey**

* GitHub: [KhushiChaubey-493](https://github.com/KhushiChaubey-493)

## 📄 License

This project was created for **learning and educational purposes**.
