const Gameboard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    const resetBoard = function() {
        for(let i=0; i<8; i++){
            board[i]='';
        }
    };
    const placeMark = function(index, mark) {
        if (board[index] === '') {
            board[index] = mark;
        }
    };
    const getBoard = () => board;
    return { resetBoard, placeMark, getBoard };
})();
const GameController = (() => {
    let player1, player2;
    let currentPlayer;
    const Player = (name, mark) => ({ name, mark });
    const changePlayer = () => {currentPlayer = currentPlayer === player1 ? player2 : player1};
    const startGame = (name1, name2) => {
        Gameboard.resetBoard();
        player1 = Player(name1, 'X');
        player2 = Player(name2, 'O');
        currentPlayer = player1;
    };
    const resetGame = () => {
        Gameboard.resetBoard();
        player1 = null;
        player2 = null;
        currentPlayer = null;
    }
    const winnerMessage = (player) => {
        alert(`${player.name} wins! Congratulations! ${player.mark} rules the day :D`);
    }
    const drawMessage = () => {
        alert(`It's a draw! Both ${player1.mark} and ${player2.mark} rule the day :P`)
    }
    const turnMessage = () => {
        alert(`It's ${currentPlayer.name}'s turn, ${currentPlayer.name}'s mark is ${currentPlayer.mark}`);
    }
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const checkWinConditions = () => {
        const board = Gameboard.getBoard();
        if (currentPlayer === player1) {
            for (let i = 0; i < winConditions.length; i++) {
                const combination = winConditions[i];
                if (combination.every(index => board[index] === 'X')) {
                    winnerMessage(player1);
                    break;
                }
            }
        }
        else if (currentPlayer === player2) {
            for (let i = 0; i < winConditions.length; i++) {
                const combination = winConditions[i];
                if (combination.every(index => board[index] === 'O')) {
                    winnerMessage(player2);
                    break;
                }
            }
        }
        else if (board.every(cell => cell !== '')) {
            drawMessage();
        }
    };
    const playTurn = (index) => {
        if (currentPlayer === player1) {
            turnMessage();
            Gameboard.placeMark(index, player1.mark)
        }
        else if (currentPlayer === player2) {
            turnMessage();
            Gameboard.placeMark(index, player2.mark)
        }
        checkWinConditions();
        changePlayer();
    };
    return { startGame, resetGame, playTurn };
})();
const DisplayController = (() => {

})();

GameController.startGame('Henry', 'Julie');
GameController.playTurn(0);
console.log(Gameboard.getBoard());
GameController.playTurn(4);
console.log(Gameboard.getBoard());
GameController.playTurn(1);
console.log(Gameboard.getBoard());
GameController.playTurn(5);
console.log(Gameboard.getBoard());
GameController.playTurn(2);
console.log(Gameboard.getBoard());
GameController.resetGame();
console.log(Gameboard.getBoard());
