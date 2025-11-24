//gameboard module with methods to manipulate the board
const Gameboard = (function() {

    //the array that holds the gameboard state
    const board = ["", "", "", "", "", "", "", "", ""];

    //a method to reset the game board array
    const resetBoard = function() {
        for(let i=0; i<8; i++){
            board[i]='';
        }
    };

    //a method to place a mark in the board array
    const placeMark = function(i, mark) {
        if (board[i] === '') {
            board[i] = mark;
            return true; //mark placed
        }
        else {return false;} //mark not placed
    };
    //a method to get the state of the board array
    const getBoard = () => board;

    return {resetBoard,placeMark,getBoard};
    
})();

//player factory 
const Player = function (name, mark) {
    return { name, mark };
};

//game controller module
//handle turns
//handle winning combinations
const GameController = (() => {
    
})();


//display controller module with methods to render and handle eventlisteners
const DisplayController = (()=>{})();