const gameBoard = ( () => {

    const board = ['', '','', '', '', '', '', '', ''];

    const updateBoard = (index, player) => {
        if (board[index] === '' && (player === 'X' || player === 'O')){
            board[index] = player;

            updateUI(); // Add in function later
            console.log(board)
        }
    };

    const updateUI = () => {
        console.log(board)
    }
    
    return { 
        board,
        updateBoard,
    };
})();

const playerX = ( () => {

    const symbol = 'X';

    return { symbol };
})();

const playerO = ( () => {

    const symbol = 'O';

    return { symbol };
})();

const gameLogic = ( () => {

    const board = ['', '','', '', '', '', '', '', ''];

    const getSymbol = () => {
        // Alternates X to O
        const filledCellCount = board.filter(cell => cell !== '').length
        const isEvenTurn = filledCellCount % 2 === 0;

        if (isEvenTurn) {
            return playerX.symbol;
        } else {
            return playerO.symbol;
        }
    };

    const setBoard = (index) => {
        const symbol = getSymbol();
        if (board[index] === '') {
            board[index] = symbol;
            console.log(`Set board[${index}] to ${symbol}`);
        } else {
            console.log(`Cell ${index} is occupied`)
        }
    }

    const winConditions = [
        [0, 1, 2], // rows
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], // columns
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], // diagonals
        [2, 4, 6],
    ];

    const checkWinner = () => {
        for (const condition of winConditions) {
            const [a, b, c] = condition;
            if (board[a] && board[a] === board[b] && board[b] === board[c]){
                console.log(`The winner is ${board[a]}`);
                return board[a];
            }
        }
        console.log('no winner yet')
        return null;
    }

    return { 
        setBoard,
        board,
        checkWinner,
    };
})();

// Creating the grid
const createBoard = () => {

    const grid = document.querySelector('.grid');

    for (let i = 0; i < 9; i++){
        let cell = document.createElement('div');
        cell.setAttribute('id', `cell${i}`);
        cell.className = 'cell';
        grid.insertAdjacentElement('beforeend', cell)
    };
};

createBoard();

const cell0 = document.querySelector('#cell0')
const cell1 = document.querySelector('#cell1')
const cell2 = document.querySelector('#cell2')
const cell3 = document.querySelector('#cell3')
const cell4 = document.querySelector('#cell4')
const cell5 = document.querySelector('#cell5')
const cell6 = document.querySelector('#cell6')
const cell7 = document.querySelector('#cell7')
const cell8 = document.querySelector('#cell8')

cell0.addEventListener('click', () => {
    gameLogic.setBoard(0);
    gameLogic.checkWinner();
})
cell1.addEventListener('click', () => {
    gameLogic.setBoard(1);
    gameLogic.checkWinner();
})
cell2.addEventListener('click', () => {
    gameLogic.setBoard(2);
    gameLogic.checkWinner();
})
cell3.addEventListener('click', () => {
    gameLogic.setBoard(3);
    gameLogic.checkWinner();
})
cell4.addEventListener('click', () => {
    gameLogic.setBoard(4);
    gameLogic.checkWinner();
})
cell5.addEventListener('click', () => {
    gameLogic.setBoard(5);
    gameLogic.checkWinner();
})
cell6.addEventListener('click', () => {
    gameLogic.setBoard(6);
    gameLogic.checkWinner();
})
cell7.addEventListener('click', () => {
    gameLogic.setBoard(7);
    gameLogic.checkWinner();
})
cell8.addEventListener('click', () => {
    gameLogic.setBoard(8);
    gameLogic.checkWinner();
})