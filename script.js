//gameboard module with methods to manipulate the board
const Gameboard = (function() {

    //the structure of the gameboard
    const matrix = ["", "", "","", "", "","", "", ""];

    //a method to reset the game board
    const resetBoard = function() {
        for(let i=0;i<8;i++){
            matrix[i]='';
        }
    };

    //a method to place x or o on th board
    const placeMark = function(index, mark) {

    };
    //a method to get the state of the bard matrix
    const getBoard = function() {
        ;
    }

    return {resetBoard,placeMark,getBoard};
    
})();

//player factory 
const Player = function (name, mark) {
    return { name, mark };
};

//game controller module
//handle turns
//handle winning combinations
const Game = (()=>{})();

//display controller module with methods to render and handle eventlisteners
const DisplayController = (()=>{})();