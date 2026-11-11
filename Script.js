function goToCourses() {
    document.getElementById("courses").scrollIntoView({
        behavior: "smooth"
    });
}

function showCourse(course) {
    alert("Welcome to " + course + " learning!");
}

const questions = [
    {
        q: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language"
        ],
        answer: 0
    },
    {
        q: "Which language is used for styling?",
        options: ["HTML", "CSS", "C"],
        answer: 1
    },
    {
        q: "Which language makes websites interactive?",
        options: ["JavaScript", "HTML", "SQL"],
        answer: 0
    }
];

let current = 0;
let score = 0;
let answered = false;

function loadQuestion() {
    answered = false;

    let q = questions[current];

    document.getElementById("question").innerText = q.q;
    document.getElementById("result").innerText = "";

    let options = document.getElementById("options");
    options.innerHTML = "";

    q.options.forEach((option, index) => {
        let button = document.createElement("button");
        button.innerText = option;

        button.onclick = function() {
            if (answered) return;

            answered = true;

            if (index === q.answer) {
                score++;
                document.getElementById("result").innerText =
                    "Correct Answer! 🎉";
            } else {
                document.getElementById("result").innerText =
                    "Wrong Answer! Correct: " + q.options[q.answer];
            }
        };

        options.appendChild(button);
    });
}

function nextQuestion() {
    if (!answered) {
        alert("Please select an answer!");
        return;
    }

    current++;

    if (current < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText =
            "Quiz Completed! 🏆";

        document.getElementById("options").innerHTML = "";

        document.getElementById("result").innerText =
            "Your Score: " + score + " / " + questions.length;

        current = 0;
        score = 0;
    }
}

loadQuestion();
