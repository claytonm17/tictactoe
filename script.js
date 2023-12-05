const gameBoard = ( () => {

    const board = ['', '','', '', '', '', '', '', ''];

    const updateBoard = (index, player) => {
        if (board[index] === '' && (player === 'X' || player === 'O')){
            board[index] = player;

            updateUI(); // Add in function later
            console.log(board)
        }
    };

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
        board,
        updateBoard,
        checkWinner,
    };
})();