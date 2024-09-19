import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'


//ACTUALIZACIÓN DAR GANADOR A PARTIR DE UN ENUM AL IGUAL QUE LOS TURNS

function App() {

  const [board, setBoard] = useState(
    Array(9).fill(null)
    )
  const [turn, setTurn] = useState(TURNS.X)
  //null no ay ganador, false empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    //si en index posición contiene un valor retorna, haciendo que no sobreescriba nuestra posición
    if(board[index] || winner) return

    //actualizamos el tablero creando uno nuevo
    const newBoard = [...board]
    //damos el valor a la posición en la que se clickeo
    newBoard[index] = turn //se trata del estado
    //actualizamos enviando el nuevo tablero
    setBoard(newBoard)

    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X //evalua el estado
    setTurn(newTurn) //pushea el nuevo valor

    //chequeamos ganador
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      confetti();
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false) //empate
    }
    
  }

  return (
    <main className='board'>
      <h1>Tres en raya</h1>
      <button onClick={resetGame}>Resetear tablero</button>
      <section className='game'>
        {
          board.map((square,index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>

      </section>
      
      <WinnerModal resetGame={resetGame} winner={winner}/>

      

    </main>
  )
}

export default App
