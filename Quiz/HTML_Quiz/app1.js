/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What does the abbreviation HTML stand for?",
    "options": [
    {
    "a": "HighText Machine Language",
    "b": "HyperText and links Markup Language",
    "c": "HyperText Markup Language",
    "d": "None of these"
    }
    ],
    "answer": "HyperText Markup Language",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "The correct sequence of HTML tags for starting a webpage is",
    "options": [
    {
    "a": "Head, Title, HTML, body",
    "b": " HTML, Body, Title, Head",
    "c": "HTML, Head, Body",
    "d": "HTML, Head, Title, Body"
    }
    ],
    "answer": "HTML, Head, Title, Body",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Which of the following element is responsible for making the text bold in HTML?",
    "options": [
    {
    "a": "<pre>",
    "b": "<a>",
    "c": "<b>",
    "d": "<br>"
    }
    ],
    "answer": "<b>",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which of the following tag is used for inserting the largest heading in HTML?",
    "options": [
    {
    "a": "<h3>",
    "b": "<h1>",
    "c": "<h2>",
    "d": "<h4>"
    }
    ],
    "answer": "<h1>",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Which of the following tag is used to insert a line-break in HTML?",
    "options": [
    {
    "a": "<br>",
    "b": "<a>",
    "c": "<pre>",
    "d": " <b>",
    }
    ],
    "answer": "<br>",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "How to create an unordered list (a list with the list items in bullets) in HTML?",
    "options": [
    {
    "a": "<ul>",
    "b": "<ol>",
    "c": "<li>",
    }
    ],
    "answer": "<ul>",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "Which character is used to represent the closing of a tag in HTML?",
    "options": [
    {
    "a": "/",
    "b": ".",
    "c": "\\",
    }
    ],
    "answer": "\\",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "How to create a hyperlink in HTML?",
    "options": [
    {
    "a": "<a href = \"www.javatpoint.com\"> javaTpoint.com </a>",
    "b": "<a url = \"www.javatpoint.com\" javaTpoint.com /a></a>",
    "c": "<a link = \"www.javatpoint.com\"> javaTpoint.com </a>",
    "d": " <a> www.javatpoint.com <javaTpoint.com /a>",
    }
    ],
    "answer": "<a href = \"www.javatpoint.com\"> javaTpoint.com </a>",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "How to create an ordered list (a list with the list items in numbers) in HTML?",
    "options": [
    {
    "a": "<ul>",
    "b": "<ol>",
    "c": "<li>",
    "d": "<i>"
    }
    ],
    "answer": "<ol>",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Which of the following element is responsible for making the text italic in HTML?",
    "options": [
    {
    "a": "<i>",
    "b": "<li>",
    "c": "<italic>",
    "d": "<ui>",
    }
    ],
    "answer": "<i>",
    "score": 0,
    "status": ""
    },
]
    }
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });