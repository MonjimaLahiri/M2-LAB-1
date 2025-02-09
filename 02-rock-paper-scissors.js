// Function to play Rock, Paper, Scissors
function playGame() {
    // Prompt user for their choice
    let userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();

    // Validate user input
    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return;
    }

    // Generate computer's choice (0 = rock, 1 = paper, 2 = scissors)
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = ["rock", "paper", "scissors"][randomNum];

    // Display choices
    alert(`You chose: ${userChoice}\nComputer chose: ${computerChoice}`);

    // Determine the winner
    if (userChoice === computerChoice) {
        alert("It's a tie!");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        alert("You win! 🎉");
    } else {
        alert("Computer wins! 😢");
    }
}

// Run the game
playGame();
