//logic for controlling the gameboard state
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

//logic for controlling the game state
const GameController = (() => {
    
    const Player = (name, mark) => ({ name, mark });
    let player1, player2;
    let currentPlayer;

    const startGame = (name1, name2) => {
        Gameboard.resetBoard();
        player1 = Player(name1, 'X');
        player2 = Player(name2, 'O');
        currentPlayer = player1;
    };

    const changePlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const checkWinConditions = (currentPlayer) => {
        if (currentPlayer === player1) {
            
        }

        else if (currentPlayer === player2) {

        }
    };

    const playTurn = () => {};

    return { startGame, playTurn};
})();

//logic for controlling the screen render state
const DisplayController = (() => {})();