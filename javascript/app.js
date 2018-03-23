$(document).ready(function () {


    $(document).on("click", "#start", function (e) {
        game.start();
    });

    $(document).on("click", "#done", function (e) {
        game.done();
    });

    var questions = [{
        question: "Which big cat cannot fully retract its claws?",
        answers: ["cheetah", "lion", "mountain lion", "tiger", "jaguar"],
        correctAnswer: "cheetah"
    }, {
        question: "Which cat has a trademark tuft at the end of their tail?",
        answers: ["cheetah", "lion", "mountain lion", "tiger", "jaguar"],
        correctAnswer: "mountain lion"
    }, {
        question: "Which big cat does not roar, but purrs and chirps instead?",
        answers: ["cheetah", "lion", "mountain lion", "tiger", "jaguar"],
        correctAnswer: "cheetah"
    }, {
        question: "Which big cat gets to claim title of being the biggest of the big cats?",
        answers: ["cheetah", "lion", "mountain lion", "tiger", "jaguar"],
        correctAnswer: "tiger"
    }, {
        question: "Which big cat has the most powerful bite?",
        answers: ["cheetah", "lion", "mountain lion", "tiger", "jaguar"],
        correctAnswer: "jaguar"
    }, {
        question: "Which big cat has throughout modern history taken a liking to human flesh?",
        answers: ["cheetah", "lion", "mountain lion", "tiger", "jaguar"],
        correctAnswer: "lion"
    }, {
        question: "Which of the following big cats is also the name of a luxury car brand?",
        answers: ["cheetah", "lion", "mountain lion", "tiger", "jaguar"],
        correctAnswer: "jaguar"
    }]
    var quizArea = $("<ol>");
    var form = $("#quiz-area")
    form.append(quizArea);
    var game = {
        correct: 0,
        incorrect: 0,
        counter: 120,

        countdown: function () {
            game.counter--;
            $("#time-left").html(game.counter);

            if (game.counter === 0) {
                console.log('TIME UP');
                game.done();
            }
        },

        start: function () {
            timer = setInterval(game.countdown, 1000);
            $("#game").prepend("<h2>Time Remaining: <span id='time-left'>120</span> Seconds</h2>");
            $("#start").remove();

            for (var i = 0; i < questions.length; i++) {
                quizArea.append("<h3>" + questions[i].question + "</h3>");
                for (var j = 0; j < questions[i].answers.length; j++) {
                    quizArea.append('<li><input type="radio" name ="question' + '-' + i + '"value="' + questions[i].answers[j] + '">' + questions[i].answers[j] + "</li>");
                }
            }
            form.append('<button id="done">Submit</button>');
        },
        done: function () {

            $.each($("input[name='question-0']:checked"), function () {
                if ($(this).val() == questions[0].correctAnswer) {
                    console.log(this);
                    game.correct++;
                } else {
                    game.incorrect++;
                }

            });
            $.each($("input[name='question-1']:checked"), function () {
                if ($(this).val() == questions[1].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }

            });
            $.each($("input[name='question-2']:checked"), function () {
                if ($(this).val() == questions[2].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }

            });
            $.each($("input[name='question-3']:checked"), function () {
                if ($(this).val() == questions[3].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }

            });
            $.each($("input[name='question-4']:checked"), function () {
                if ($(this).val() == questions[4].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }

            });
            $.each($("input[name='question-5']:checked"), function () {
                if ($(this).val() == questions[5].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }

            });
            $.each($("input[name='question-6']:checked"), function () {
                if ($(this).val() == questions[6].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }

            });
            $.each($("input[name='question-7']:checked"), function () {
                if ($(this).val() == questions[7].correctAnswer) {
                    game.correct++;
                } else {
                    game.incorrect++;
                }

            });

            this.results();
        },


        results: function () {
            clearInterval(timer);

            $("#game h2").css("display", "none");
            form.html("<h4>You're Done!</h4>");
            form.append("<h5>Correct Answers: " + this.correct + "</h5>");
            form.append("<h5>Incorrect Answers: " + this.incorrect + "</h5>");
            form.append("<h5>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h5>");

        }
    }

})
var search = "funny cats"

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=S5EtC2wnRVlu7AA596sPIpZU0NffHR8w&limit=5&rating=G"

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        for (var i = 0; i < response.data.length; i++) {
          console.log(response.data[i].images.downsized.url);
          var imgUrl = response.data[i].images.downsized.url;
          $("body").append("<img src=" + imgUrl + ">");
        }
      });    
