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
    return {resetBoard,placeMark,getBoard};
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
    const finishGame = (player) => {
        alert(`${player.name} wins! Congratulations! ${player.mark} rules the day :D`);
        Gameboard.resetBoard();
        player1 = null;
        player2 = null;
        currentPlayer = null;
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
                    finishGame(player1);
                    break;
                }
            }
        }
        else if (currentPlayer === player2) {
            for (let i = 0; i < winConditions.length; i++) {
                const combination = winConditions[i];
                if (combination.every(index => board[index] === 'O')) {
                    finishGame(player2);
                    break;
                }
            }
        }
    };
    const playTurn = (index) => {
        if (currentPlayer === player1) {
            Gameboard.placeMark(index, 'X')
        }
        else if (currentPlayer === player2) {
            Gameboard.placeMark(index, 'O')
        }
        checkWinConditions();
        changePlayer();
    };
    return { startGame, playTurn};
})();

GameController.startGame('Henry', 'Julie');
GameController.playTurn(0);
GameController.playTurn(4);
GameController.playTurn(1);
GameController.playTurn(5);
GameController.playTurn(2);
console.log(Gameboard.getBoard());
const DisplayController = (() => {})();