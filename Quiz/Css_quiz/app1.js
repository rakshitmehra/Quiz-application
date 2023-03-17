<<<<<<< HEAD
/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "CSS stands for",
    "options": [
    {
    "a": "Cascade style sheets",
    "b": "Color and style sheets",
    "c": "Cascading style sheets",
    "d": "None of the above"
    }
    ],
    "answer": "Cascade style sheets",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Which of the following property is used as the shorthand property for the padding properties?",
    "options": [
    {
    "a": "padding-left",
    "b": "padding-right",
    "c": "padding"
    }
    ],
    "answer": "padding",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "The property in CSS used to change the background color of an element is -",
    "options": [
    {
    "a": "bgcolor",
    "b": "color",
    "c": "background-color"
    }
    ],
    "answer": "background-color",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "The external JavaScript file must contain the &lt;script&gt; tag.",
    "options": [
    {
    "a": "True",
    "b": "False"
    }
    ],
    "answer": "False",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "How do you write &quot;Hello World&quot; in an alert box?",
    "options": [
    {
    "a": "alertBox(&quot;Hello World&quot;);",
    "b": "msg(&quot;Hello World&quot;);",
    "c": "alert(&quot;Hello World&quot;);",
    "d": "msgBox(&quot;Hello World&quot;);",
    }
    ],
    "answer": "alert(&quot;Hello World&quot;);",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "How do you create a function in JavaScript?",
    "options": [
    {
    "a": "function myFunction()",
    "b": "function:myFunction()",
    "c": "function = myFunction()",
    }
    ],
    "answer": "function myFunction()",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "How do you call a function named &quot;myFunction&quot;?",
    "options": [
    {
    "a": "call function myFunction()",
    "b": "call myFunction()",
    "c": "myFunction()",
    }
    ],
    "answer": "myFunction()",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "How to write an IF statement in JavaScript?",
    "options": [
    {
    "a": "if i = 5 then",
    "b": "if i == 5 then",
    "c": "if (i == 5)",
    "d": " if i = 5",
    }
    ],
    "answer": "if (i == 5)",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Which of the following is a disadvantage of using JavaScript?",
    "options": [
    {
    "a": "Client-side JavaScript does not allow the reading or writing of files.",
    "b": "JavaScript can not be used for Networking applications because there is no such support available.",
    "c": "JavaScript doesn't have any multithreading or multiprocess capabilities.",
    "d": "All of the above."
    }
    ],
    "answer": "All of the above.",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "How to write an IF statement for executing some code if &quot;i&quot; is NOT equal to 5?",
    "options": [
    {
    "a": "if (i <> 5)",
    "b": "if i <> 5",
    "c": "if (i != 5)",
    "d": "if i =! 5 then",
    }
    ],
    "answer": "if (i != 5)",
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
=======
/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "CSS stands for",
    "options": [
    {
    "a": "Cascade style sheets",
    "b": "Color and style sheets",
    "c": "Cascading style sheets",
    "d": "None of the above"
    }
    ],
    "answer": "Cascade style sheets",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Which of the following is the correct syntax for referring the external style sheet?",
    "options": [
    {
    "a": "<style src = example.css>",
    "b": " <style src = \"example.css\" ",
    "c": "<link rel=\"stylesheet\" type=\"text/css\" href=\"example.css\">"
    }
    ],
    "answer": "<link rel=\"stylesheet\" type=\"text/css\" href=\"example.css\">",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "The property in CSS used to change the background color of an element is -",
    "options": [
    {
    "a": "bgcolor",
    "b": "color",
    "c": "background-color"
    }
    ],
    "answer": "background-color",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "The external JavaScript file must contain the &lt;script&gt; tag.",
    "options": [
    {
    "a": "True",
    "b": "False"
    }
    ],
    "answer": "False",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "How do you write &quot;Hello World&quot; in an alert box?",
    "options": [
    {
    "a": "alertBox(&quot;Hello World&quot;);",
    "b": "msg(&quot;Hello World&quot;);",
    "c": "alert(&quot;Hello World&quot;);",
    "d": "msgBox(&quot;Hello World&quot;);",
    }
    ],
    "answer": "alert(&quot;Hello World&quot;);",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "How do you create a function in JavaScript?",
    "options": [
    {
    "a": "function myFunction()",
    "b": "function:myFunction()",
    "c": "function = myFunction()",
    }
    ],
    "answer": "function myFunction()",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "How do you call a function named &quot;myFunction&quot;?",
    "options": [
    {
    "a": "call function myFunction()",
    "b": "call myFunction()",
    "c": "myFunction()",
    }
    ],
    "answer": "myFunction()",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "How to write an IF statement in JavaScript?",
    "options": [
    {
    "a": "if i = 5 then",
    "b": "if i == 5 then",
    "c": "if (i == 5)",
    "d": " if i = 5",
    }
    ],
    "answer": "if (i == 5)",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Which of the following is a disadvantage of using JavaScript?",
    "options": [
    {
    "a": "Client-side JavaScript does not allow the reading or writing of files.",
    "b": "JavaScript can not be used for Networking applications because there is no such support available.",
    "c": "JavaScript doesn't have any multithreading or multiprocess capabilities.",
    "d": "All of the above."
    }
    ],
    "answer": "All of the above.",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "How to write an IF statement for executing some code if &quot;i&quot; is NOT equal to 5?",
    "options": [
    {
    "a": "if (i <> 5)",
    "b": "if i <> 5",
    "c": "if (i != 5)",
    "d": "if i =! 5 then",
    }
    ],
    "answer": "if (i != 5)",
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
>>>>>>> 376f8e675e9597e48ed367b554fa7be5cd7c8362
    });