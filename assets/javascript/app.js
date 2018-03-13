$(document).ready(function () {
    var timeCount = 20;
    var questionArray = ["Which Of These Is Not One Of The Four Founders Of Hogwarts?",
                        "What Beast Did Salazar Conceal Within The Chamber Of Secrets",
                        "Which Of These Is The Address Of The Order Of The Pheonix's HQ?",
                        "What Is Dumbledore's First Name?", "What Is The Name Of Harry's Owl?"];
    var answerArray0 = ["Salazar Slytherin", "Helen HufflePuff", "Godric Gryfinndor", "Rowena Ravenclaw"];
    var answerArray1 = ["Evil Monkey", "Bassilisk", "Dragon", "Donald Trump"];
    var answerArray2 = ["12 Grimmauld Place, Borough of Islington, London", "1600 Pennsylvania Avenue, Washington, DC",
                        "Delorme 60 Avenue Maine, Paris France", "2199 S University Blvd, Denver, CO"];
    var answerArray3 =  ["Albus", "Richard", "John", "Tofu"];
    var answerArray4 = ["Hedgwig", "Meowth", "PBR", "Kitty"];
    var gifArray = [];
    var correctAnswers = ["Helen HufflePuff", "Bassilisk", "12 Grimmauld Place, Borough of Islington, London", "Albus", "Hedgwig"]
    var questionCounter = 0;
    var selectedAnswer = [];
    var clock;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var winImage = ('src="assets/images/youwin.gif"');
    var loseImage = ('src="assets/images/youlose.gif"');
  

    $(document).on("click", "#start-button", function (event) {
        event.preventDefault();
        $("#questionBox").text(questionArray[0]);
        $("#choiceA").html(answerArray0[0] + '<button id="buttonA"data-choice="A" class="btn btn-primary selectButton">Select A</button>');
        $("#choiceB").html(answerArray0[1] + '<button id="buttonB"data-choice="B" class="btn btn-primary selectButton">Select B</button>');
        $("#choiceC").html(answerArray0[2] + '<button id="buttonC"data-choice="C" class="btn btn-primary selectButton">Select C</button>');
        $("#choiceD").html(answerArray0[3] + '<button id="buttonD"data-choice="D" class="btn btn-primary selectButton">Select D</button>');
        reset();

    });
    $(document).on("click", ".selectButton", function (event) {
        console.log($(this).attr('data-choice'));
        selectedAnswer.push($(this).attr('data-choice'));
        console.log(selectedAnswer);
        if (selectedAnswer[0] == correctAnswers[0]) {
            correctAnswers++;
            $("#questionBox").text(questionArray[1]);
            $("#choiceA").html(answerArray1[0] + '<button id="buttonA"data-choice="A" class="btn btn-primary selectButton1">Select A</button>');
            $("#choiceB").html(answerArray1[1] + '<button id="buttonB"data-choice="B" class="btn btn-primary selectButton1">Select B</button>');
            $("#choiceC").html(answerArray1[2] + '<button id="buttonC"data-choice="C" class="btn btn-primary selectButton1">Select C</button>');
            $("#choiceD").html(answerArray1[3] + '<button id="buttonD"data-choice="D" class="btn btn-primary selectButton1">Select D</button>');
        } else {
            incorrectAnswers++
            $("#questionBox").text(questionArray[1]);
            $("#choiceA").html(answerArray1[0] + '<button id="buttonA"data-choice="A" class="btn btn-primary selectButton1">Select A</button>');
            $("#choiceB").html(answerArray1[1] + '<button id="buttonB"data-choice="B" class="btn btn-primary selectButton1">Select B</button>');
            $("#choiceC").html(answerArray1[2] + '<button id="buttonC"data-choice="C" class="btn btn-primary selectButton1">Select C</button>');
            $("#choiceD").html(answerArray1[3] + '<button id="buttonD"data-choice="D" class="btn btn-primary selectButton1">Select D</button>');
        }
    });
    $(document).on("click", ".selectButton1", function (event) {
        console.log($(this).attr('data-choice'));
        selectedAnswer.push($(this).attr('data-choice'));
        console.log(selectedAnswer);
        if (selectedAnswer[1] == correctAnswers[1]) {
            correctAnswers++;
            $("#questionBox").text(questionArray[2]);
            $("#choiceA").html(answerArray2[0] + '<button id="buttonA"data-choice="A" class="btn btn-primary selectButton2">Select A</button>');
            $("#choiceB").html(answerArray2[1] + '<button id="buttonB"data-choice="B" class="btn btn-primary selectButton2">Select B</button>');
            $("#choiceC").html(answerArray2[2] + '<button id="buttonC"data-choice="C" class="btn btn-primary selectButton2">Select C</button>');
            $("#choiceD").html(answerArray2[3] + '<button id="buttonD"data-choice="D" class="btn btn-primary selectButton2">Select D</button>');
        } else {
            incorrectAnswers++
            $("#questionBox").text(questionArray[2]);
            $("#choiceA").html(answerArray2[0] + '<button id="buttonA"data-choice="A" class="btn btn-primary selectButton2">Select A</button>');
            $("#choiceB").html(answerArray2[1] + '<button id="buttonB"data-choice="B" class="btn btn-primary selectButton2">Select B</button>');
            $("#choiceC").html(answerArray2[2] + '<button id="buttonC"data-choice="C" class="btn btn-primary selectButton2">Select C</button>');
            $("#choiceD").html(answerArray2[3] + '<button id="buttonD"data-choice="D" class="btn btn-primary selectButton2">Select D</button>');
        }
    });
    $(document).on("click", ".selectButton2", function (event) {
        console.log($(this).attr('data-choice'));
        selectedAnswer.push($(this).attr('data-choice'));
        console.log(selectedAnswer);
        if (selectedAnswer[2] == correctAnswers[2]) {
            correctAnswers++;
            $("#questionBox").text(questionArray[3]);
            $("#choiceA").html(answerArray3[0] + '<button id="buttonA"data-choice="A" class="btn btn-primary selectButton3">Select A</button>');
            $("#choiceB").html(answerArray3[1] + '<button id="buttonB"data-choice="B" class="btn btn-primary selectButton3">Select B</button>');
            $("#choiceC").html(answerArray3[2] + '<button id="buttonC"data-choice="C" class="btn btn-primary selectButton3">Select C</button>');
            $("#choiceD").html(answerArray3[3] + '<button id="buttonD"data-choice="D" class="btn btn-primary selectButton3">Select D</button>');
        } else {
            incorrectAnswers++
            $("#questionBox").text(questionArray[3]);
            $("#choiceA").html(answerArray3[0] + '<button id="buttonA"data-choice="A" class="btn btn-primary selectButton3">Select A</button>');
            $("#choiceB").html(answerArray3[1] + '<button id="buttonB"data-choice="B" class="btn btn-primary selectButton3">Select B</button>');
            $("#choiceC").html(answerArray3[2] + '<button id="buttonC"data-choice="C" class="btn btn-primary selectButton3">Select C</button>');
            $("#choiceD").html(answerArray3[3] + '<button id="buttonD"data-choice="D" class="btn btn-primary selectButton3">Select D</button>');
        }
    });
    $(document).on("click", ".selectButton3", function (event) {
        console.log($(this).attr('data-choice'));
        selectedAnswer.push($(this).attr('data-choice'));
        console.log(selectedAnswer);
        if (selectedAnswer[3] == correctAnswers[3]) {
            correctAnswers++;
            $("#questionBox").text(questionArray[4]);
            $("#choiceA").html(answerArray4[0] + '<button id="buttonA"data-choice="A" class="btn btn-primary selectButton4">Select A</button>');
            $("#choiceB").html(answerArray4[1] + '<button id="buttonB"data-choice="B" class="btn btn-primary selectButton4">Select B</button>');
            $("#choiceC").html(answerArray4[2] + '<button id="buttonC"data-choice="C" class="btn btn-primary selectButton4">Select C</button>');
            $("#choiceD").html(answerArray4[3] + '<button id="buttonD"data-choice="D" class="btn btn-primary selectButton4">Select D</button>');
        } else {
            incorrectAnswers++
            $("#questionBox").text(questionArray[4]);
            $("#choiceA").html(answerArray4[0] + '<button id="buttonA"data-choice="A" class="btn btn-primary selectButton4">Select A</button>');
            $("#choiceB").html(answerArray4[1] + '<button id="buttonB"data-choice="B" class="btn btn-primary selectButton4">Select B</button>');
            $("#choiceC").html(answerArray4[2] + '<button id="buttonC"data-choice="C" class="btn btn-primary selectButton4">Select C</button>');
            $("#choiceD").html(answerArray4[3] + '<button id="buttonD"data-choice="D" class="btn btn-primary selectButton4">Select D</button>');
        }
    });
    $(document).on("click", ".selectButton4", function (event) {
        console.log($(this).attr('data-choice'));
        selectedAnswer.push($(this).attr('data-choice'));
        console.log(selectedAnswer);
        if (selectedAnswer[4] == correctAnswers[4]) {
            correctAnswers++;
            $("#questionBox").html("<p>Correct answers: " + correctAnswers + " Incorrect Answers: " + incorrectAnswers + "</p>");
            $("#timer-count").empty();
            // $("#questionBox").text(questionArray[5]);
            // $("#choiceA").html(answerArray5[0] + '<button id="buttonA"data-choice="A" class="btn btn-primary selectButton5">Select A</button>');
            // $("#choiceB").html(answerArray5[1] + '<button id="buttonB"data-choice="B" class="btn btn-primary selectButton5">Select B</button>');
            // $("#choiceC").html(answerArray5[2] + '<button id="buttonC"data-choice="C" class="btn btn-primary selectButton5">Select C</button>');
            // $("#choiceD").html(answerArray5[3] + '<button id="buttonD"data-choice="D" class="btn btn-primary selectButton5">Select D</button>');
        } else {
            incorrectAnswers++
            $("#questionBox").html("<p>Correct answers: " + correctAnswers + " Incorrect Answers: " + incorrectAnswers + "</p>");
            $("#timer-count").clear();
            
        }
    });
    // $(document).on("click", ".selectButton5", function (event) {
    //     console.log($(this).attr('data-choice'));
    //     selectedAnswer.push($(this).attr('data-choice'));
    //     console.log(selectedAnswer);
    //     if (selectedAnswer[5] == correctAnswers[5]) {
    //         correctAnswers++;

    //     } else {
    //         incorrectAnswers++
    //     }
    // });

    function reset() {
        questionCounter = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
        unanswered = 0;
        timeCount = 20;
        timerFunc();
    }

    function timerFunc() {
        $("#timerCount").html("<p>20</p>");
        clock = setInterval(thirtySeconds, 1000);
        thirtySeconds();
    }
    function thirtySeconds() {
        $("#timerCount").html("<p>" + timeCount + "</p>");
        if (timeCount > 0) {
            timeCount--;
        } else {
        $("#timerCount").empty();
        if (correctAnswers > incorrectAnswers) {
            $("#questionBox").html("<p>Correct answers: " + correctAnswers + " Incorrect Answers: " + incorrectAnswers + "</p>");
            $("screenChange").html("<img" + winImage + ">")

        } else {
            $("#questionBox").html("<p>Correct answers: " + correctAnswers + " Incorrect Answers: " + incorrectAnswers + "</p>");
            $("screenChange").html("<img" + loseImage + ">")
        }
        }
    }
});