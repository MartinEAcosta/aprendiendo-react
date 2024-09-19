import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) =>{
    for(const combo of WINNER_COMBOS){
      const[a,b,c] = combo
      if(boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]){
          return boardToCheck[a]
        }
    }
    //si no hay ganador devolvemos nulo
    return null
  }


export const checkEndGame = (boardToCheck) => {
    //si en todas las posiciones son distintas de nulo no hay mas espacios en el tablero
    return boardToCheck.every((square) => square != null)
  }

