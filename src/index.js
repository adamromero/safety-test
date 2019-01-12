let Test = (() => {
	const url = "/dist/qa.js";

	const loadContent = () => {
		let xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
		  if (this.readyState === 4 && this.status === 200) {
		    let questions = JSON.parse(this.responseText);
		    render(questions);
		    bindUIActions(questions);
		  }
		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}

	let render = (questions) => {
		let source   = document.getElementById("entry-template").innerHTML;
		let template = Handlebars.compile(source);
		let compiled = template(questions);
		document.getElementById("content").innerHTML = compiled;
	}

	const evaluateSelection = (questions, currentQuestion, answerSelection) => {
		if (answerSelection === questions["questions"][currentQuestion]["c"]) {
			console.log("correct");
		} else {
			console.log("wrooong!");
		}
	}

	const bindUIActions = (questions) => {
		let answerSelection = document.querySelectorAll("[data-answer]");
		answerSelection.forEach(answer => {
			answer.addEventListener("click", function () {
				evaluateSelection(questions, this.parentNode.getAttribute("data-question"), this.textContent);
			});
		});
	}

	let init = () => loadContent();
	
	return { init };
})();

Test.init();