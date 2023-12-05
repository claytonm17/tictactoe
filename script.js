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
        getSymbol,
    };
})();

// Creating the grid
const setupDOM = ( () => {
    const createBoard = () => {

        const grid = document.querySelector('.grid');

        for (let i = 0; i < 9; i++){
            let cell = document.createElement('div');
            cell.setAttribute('id', `cell${i}`);
            cell.className = 'cell';
            grid.insertAdjacentElement('beforeend', cell)

            // Simplifying event listener for each cell
            cell.addEventListener('click', () => {
                setupDOM.updateSymbol(i);
                gameLogic.setBoard(i);
                gameLogic.checkWinner();
                setupDOM.checkTurn();
            })
        };
    };
    // Create the actual board
    createBoard();

    // DOM object to display which turn it is
    const turn = document.querySelector('.turn');

    const checkTurn = () => {

        while (turn.firstChild) {
            turn.removeChild(turn.firstChild);
        }

        const currentPlayerSymbol = gameLogic.getSymbol();
        const playerName = (currentPlayerSymbol === 'X') ? "Player X" : "Player O";

        const whichTurn = document.createElement('h2');
        whichTurn.className = 'what-turn';
        whichTurn.textContent = `${playerName}'s turn`;
        turn.appendChild(whichTurn);
    };

    const updateSymbol = (index) => {
        const spot = document.querySelector(`#cell${index}`);
        spot.textContent = gameLogic.getSymbol();
    }

    return { 
        checkTurn, 
        updateSymbol,
    };
})();

setupDOM.checkTurn();