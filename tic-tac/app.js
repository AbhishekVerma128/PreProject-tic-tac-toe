const grid = document.querySelector('.grid');
const cells = Array.from(document.querySelectorAll('.cell'))
const chngTurn = document.getElementById("turn")
const btn = document.getElementById("reset")
let turn = "x";
const changeTurn = () => {
    console.log("hello");
    return (turn === "x" ? "0" : "x")

}

const checkWin = () => {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (
            cells[a].innerText === cells[b].innerText &&
            cells[a].innerText === cells[c].innerText &&
            cells[a].innerText !== ''
        ) {
            chngTurn.innerText = `${cells[a].innerText} wins!`;
            return;
        }
    }
     if( cells.every(cell =>
        cell.innerText !=="")
    ){
        chngTurn.innerText = "it's a draw"
     }
    

}
cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        if (cell.innerText === "") {
            cell.innerText = turn;
            turn = changeTurn();
            chngTurn.innerText = `${turn} player's turn`;
            checkWin()
        }

    })
})

btn.addEventListener("click",()=>{
    cells.forEach(cell=>
        cell.innerText="",
        chngTurn.innerText =""
        )
})
