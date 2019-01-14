import './main.scss';

let Test = (() => {
	const url = "/dist/qa.js";
	let score = 0;
	let questionIndex = 1;

	const loadContent = () => {
		let xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function () {
			if (this.readyState === 4 && this.status === 200) {
				let questions = JSON.parse(this.responseText);
				render(questions);
				bindUIActions(questions);
			}
		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}

	const render = (questions) => {
		let source = document.getElementById("entry-template").innerHTML;
		let template = Handlebars.compile(source);
		let compiled = template(questions);
		document.getElementById("content").innerHTML = compiled;
	}

	const evaluateSelection = (questions, currentQuestion, answerSelection, displayResult) => {
		if (answerSelection === questions["questions"][currentQuestion]["c"]) {
			displayResult.innerText = "Correct";
			score++;
		} else {
			displayResult.innerText = "Wrong";
		}
	}

	const nextQuestion = (questionCollection, idx) => {
		questionCollection.forEach(question => {
			question.classList.remove("reveal");
		});
		questionCollection[idx].classList.add("reveal");
	}

	const bindUIActions = (questions) => {
		let questionCollection = document.querySelectorAll("[data-question]");
		let answerSelection = document.querySelectorAll("[data-answer]");
		let submitButton = document.querySelector(".button");
		let displayResult = document.getElementById("display");

		answerSelection.forEach(answer => {
			answer.addEventListener("click", function () {
				submitButton.disabled = false;
				evaluateSelection(questions, this.parentNode.getAttribute("data-question"), 
					this.textContent, displayResult);
			});
		});

		nextQuestion(questionCollection, 0);
		submitButton.addEventListener("click", function () {
			if (questionIndex !== questions["questions"].length) {
				nextQuestion(questionCollection, questionIndex++);
				displayResult.innerText = "";
				submitButton.disabled = true;
			} else {
				displayResult.innerText = "Percentage correct: " + Math.floor((score / questions["questions"].length) * 100) + "%";
			}
		});
	}

	let init = () => loadContent();

	return { init };
})();

Test.init();