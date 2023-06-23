# Simon Game

This is a web-based implementation of the Simon game. The Simon game is a classic memory game where players need to remember and repeat a sequence of colors.

## How to Play

1. Open the Simon Game in a web browser.
2. Press any key on the keyboard to start the game.
3. The game will display a sequence of colors by lighting up the buttons.
4. Remember the sequence of colors.
5. Click the buttons in the same order as the sequence.
6. If you click the correct sequence, the game will proceed to the next level with an extended sequence.
7. If you make a mistake, the game will end, and you can restart by pressing any key.
8. The game gets progressively harder as you advance to higher levels.

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery

## Files and Directory Structure

- `index.html`: The main HTML file that displays the game interface and includes necessary JavaScript and CSS files.
- `style.css`: CSS file that defines the game's styles and visual effects.
- `script.js`: JavaScript file that contains the game logic and functionality.
- `sounds/`: Directory that stores the audio files for the game's sounds.

## Game Logic

The game logic is implemented using JavaScript and jQuery. Here's a high-level overview of the key components and their functionality:

- `buttonColours`: An array of colors representing the available buttons in the game.
- `gamePattern`: An array that stores the randomly generated sequence of colors for each level.
- `userClickedPattern`: An array that stores the colors clicked by the user.
- `nextSequence()`: Generates the next sequence, adds it to the game pattern, and triggers animations and sounds.
- `checkAnswer()`: Compares the user's clicked pattern with the game pattern to determine if it is correct.
- `playSound()`: Plays the corresponding sound when a button is clicked or for game events.
- `animatePress()`: Applies visual effects to buttons when clicked or during animations.
- `startOver()`: Resets the game variables to restart the game.

## Development

If you want to modify or enhance the game, you can follow these steps to set up a development environment:

1. Clone or download the repository.
2. Make changes to the HTML, CSS, or JavaScript files as needed.
3. Test the game in a web browser to ensure the changes are working correctly.
4. Deploy the updated files to a web server or hosting platform to make the changes live.

Feel free to customize the game's appearance, add new features, or optimize the code to suit your needs.

## Credits

This game implementation is inspired by the Simon game, a popular electronic game invented by Ralph H. Baer and Howard J. Morrison in the 1970s.

The sounds used in the game are sourced from various audio libraries and are royalty-free.

Developed By Jaspreet Singh.

## License

This project is licensed under the [MIT License](LICENSE).
