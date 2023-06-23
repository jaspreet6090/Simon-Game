// Array of button colors
var buttonColours = ["red", "blue", "green", "yellow"];

// Arrays to store the game pattern and user clicked pattern
var gamePattern = [];
var userClickedPattern = [];

// Variables for game state
var started = false;
var level = 0;

// Event listener for keydown event on the document
$(document).keydown(function () {
  if (!started) {
    // Update level title and start the game
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// Event listener for click event on buttons with class "btn"
$(".btn").click(function () {
  // Get the ID of the clicked button
  var userChosenColour = $(this).attr("id");

  // Add the clicked color to the user's pattern
  userClickedPattern.push(userChosenColour);

  // Play sound and animate the clicked button
  playSound(userChosenColour);
  animatePress(userChosenColour);

  // Check the user's answer
  checkAnswer(userClickedPattern.length - 1);
});

// Function to check the user's answer
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // Check if the user has completed the pattern
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence(); // Proceed to the next level
      }, 1000);
    }
  } else {
    // User's answer is wrong
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver(); // Reset the game
  }
}

// Function to generate the next sequence
function nextSequence() {
  // Reset the user's clicked pattern and increase the level
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  // Generate a random color and add it to the game pattern
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Show animation and play sound for the chosen color
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

// Function to animate a button press
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// Function to play a sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Function to start over the game
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
