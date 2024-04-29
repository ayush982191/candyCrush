

import { useEffect } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { updateBoard } from './store'
import { createBoard } from './utils/createBoard'
import Board from './components/Board'
import { isColummOfFour, isColummOfThree } from './utils/moveCheckLogin'
import { formulaForColumnOfFour,formulaForColumnOfThree } from './utils/formulas'

function App() {
    const board = useAppSelector(({candyCrush : {board}})=>board)
    const boardSize = useAppSelector(({candyCrush:{boardSize}})=>boardSize)
    const dispatch = useAppDispatch()

    useEffect(()=>{
      dispatch(updateBoard(createBoard(boardSize)))
      // createBoard(boardSize);
      // console.log(createBoard(boardSize));
    },[boardSize,dispatch])
    useEffect(()=>{
      const timeOut = setTimeout(()=>{
          const newBoard = [...board];
          (isColummOfFour(newBoard,boardSize,formulaForColumnOfFour(boardSize)));
          (isColummOfThree(newBoard,boardSize,formulaForColumnOfThree(boardSize)));

              dispatch(updateBoard(newBoard))
          
      },150)
      return ()=>clearTimeout(timeOut);  
  },[board,boardSize,dispatch])
  
  return (
     <div className='flex items-center justify-center h-sc' >
      
      <Board/>
     </div>
  )
}

export default App
