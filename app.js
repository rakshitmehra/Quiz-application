const quizData = [
	{
		question: "Q1 What does HTML stands for?",
		a: "Hypertext Markup Language",
		b: "Hypertext Markdown Language",
		c: "Hyperloop Machine language",
		d: "None",
		correct: "a",
	},
	{
		question: "Q2 Which tag is used to create checkbox?",
		a: "checkbox",
		b: "<input type = checkbox",
		c: "type = checkbox",
		d: "None of above",
		correct: "b",
	},
	{
		question: "Q3 Which of the following is the attribute that is used to set a global identifier for a microdata item?",
		a: "id",
		b: "itemid",
		c: "item",
		d: "key",
		correct: "b",
	},
	{
		question: "Q4Which of the tag is used to creates a number list? ",
		a: "<LO>",
		b: "<Il>",
		c: "<LI> and <OL>",
		d: "Both A and C",
		correct: "c",
	},
	{
		question: "Q5  Datetime attribute is not related with ?",
		a: "<del>",
		b: "<time>",
		c: "<ins>",
		d: "<form>",
		correct: "d",
	},

];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

	deselectAnswers()
	const currentQuizData = quizData[currentQuiz]

	questionEl.innerText = currentQuizData.question
	a_text.innerText = currentQuizData.a
	b_text.innerText = currentQuizData.b
	c_text.innerText = currentQuizData.c
	d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
	answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected(){
	let answer
	answerEls.forEach(answerEl => {
		if(answerEl.checked){
			answer = answerEl.id
		}
	})
	return answer
}

submitBtn.addEventListener('click', ()=>{
	const answer = getSelected()
	if(answer) {
	if(answer===quizData[currentQuiz].correct){
		score++
	}

	currentQuiz++

	if(currentQuiz < quizData.length){
		loadQuiz()
	} else{
		quiz.innerHTML = `
		<h2>You answered ${score}/${quizData.length} questions corretly</h2>

		<button onclick = "location.reload()">Reload </button>
		`
	}
}

})