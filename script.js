document.addEventListener("DOMContentLoaded", function() {

    //Gameboard controlling module
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
    //Game flow controlling module
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
        const winnerMessage = (player) => {
            alert(`${player.name} wins! Congratulations! ${player.mark} rules the day :D`);
        }
        const drawMessage = () => {
            alert(`It's a draw! Both ${player1.mark} and ${player2.mark} rule the day :P`)
        }
        const currentPlayerMessage = () => {
            alert(`It's ${currentPlayer.name}'s turn! Their mark is ${currentPlayer.mark}.`)
        }
        const askPLayerNames = () => { 
            name1 = prompt('Enter the name of Player 1');
            name2 = prompt('Enter the name of player 2');
            startGame(name1, name2);
            alert(`${name1}'s mark is X, ${name2}'s mark is O.`);
        };
        const resetGame = () => {
            Gameboard.resetBoard();
            player1 = null;
            player2 = null;
            currentPlayer = null;
            location.reload();
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
                    if (combination.every(index => board[index] === player1.mark)) {
                        winnerMessage(player1);
                        resetGame();
                    }
                }
            }
            else if (currentPlayer === player2) {
                for (let i = 0; i < winConditions.length; i++) {
                    const combination = winConditions[i];
                    if (combination.every(index => board[index] === player2.mark)) {
                        winnerMessage(player2);
                        resetGame();
                    }
                }
            }
            else if (board.every(cell => cell !== '')) {
                drawMessage();
                resetGame();
            }
        };
        const playTurn = (index) => {
            if (currentPlayer === player1) {
                Gameboard.placeMark(index, player1.mark)
            }
            else if (currentPlayer === player2) {
                Gameboard.placeMark(index, player2.mark)
            }
        };
        return { resetGame, playTurn, changePlayer, checkWinConditions, askPLayerNames, currentPlayerMessage };
    })();
    //Display rendering module
    const DisplayController = (() => {
        const updateButton = () => {
            for (let i=0; i <=8; i++){
                const board = Gameboard.getBoard();
                document.getElementById(`button${i}`).innerText = `${board[i]}`;
            }
        }
        const createGameBoard = () => {
            const gameBoardUL = document.getElementById('gameBoardUl');
            const gameBoardDiv = document.getElementById('gameBoardDiv');
            const board = Gameboard.getBoard();
            const resetButton = document.createElement('button');
            resetButton.id = 'resetButton';
            resetButton.textContent = 'Reset';
            gameBoardDiv.appendChild(resetButton);
            resetButton.addEventListener('click', () => {
                    GameController.resetGame();
                })
            for (let i = 0; i <= 8; i++) {
                const gameBoardUlLi = document.createElement('li');
                const gameBoardUlLiButton = document.createElement('button');
                gameBoardUlLi.id = `li${i}`;
                gameBoardUlLiButton.id = `button${i}`;
                gameBoardUlLiButton.textContent = '';
                gameBoardUlLi.appendChild(gameBoardUlLiButton);
                gameBoardUL.appendChild(gameBoardUlLi);
                gameBoardUlLiButton.addEventListener('click', () => {
                    GameController.playTurn(i);
                    updateButton();
                    setTimeout(() => {
                        GameController.checkWinConditions();
                        GameController.changePlayer();
                        GameController.currentPlayerMessage();
                    }, 0);
                })
            }
        };
        return { createGameBoard };
    })();

    DisplayController.createGameBoard();
    GameController.askPLayerNames();
    GameController.currentPlayerMessage();


});