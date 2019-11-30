import React, { useMemo, useRef, useReducer, useEffect, useState } from 'react'
import Card from './Card'
import { getRandomInts } from '../helpers'
import gameReducer, { initialState } from './gameReducer'
import './game.css'


const App = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState)
  const [shown, setShown] = useState(true)
  var arr = useMemo(() => getRandomInts(30), [])
  const timer = useRef()
  useEffect(() => {
    setTimeout(() => {
      setShown(false)
    }, 5000)
  }, [])

  const handleFirstClick = ({ item, index }) => {
    clearTimeout(timer.current)
    dispatch({ type: 'SET_FLIPPED', payload: [index] })
    dispatch({ type: 'SET_CLICKED', payload: { item, index } })
  }

  const handleMatchCard = ({ index }) => {
    dispatch({ type: 'ADD_MATCHED', payload: [state.clicked.index, index] })
    dispatch({ type: 'CLEAR_FLIPPED' })
    dispatch({ type: 'CLEAR_CLICKED' })
  }

  const handleErrorCard = ({ index }) => {
    dispatch({ type: 'ADD_FLIPPED', payload: index })
    dispatch({ type: 'CLEAR_CLICKED' })
    timer.current = setTimeout(() => {
      dispatch({ type: 'CLEAR_FLIPPED' })
    }, 2000)
  }

  const handleClick = ({ item, index }) => {
    if(!state.clicked) {
      handleFirstClick({ item, index })
      return
    }
    if (state.clicked.item === item && state.clicked.index !== index) {
      handleMatchCard({ index })
    } else {
      handleErrorCard({ item, index })
    }
  }

  return (
    <React.Fragment>
      <h1>Mahjong-like game</h1>
      <div className="container">
        {arr.map((item, index) =>
          <Card
            key={index}
            visible={!(state.matched.indexOf(index) === -1)}
            flipped={state.flipped.indexOf(index) !== -1}
            onClick={() => (shown || !(state.matched.indexOf(index) === -1)) ? null : handleClick({ item, index })}
            value={item}
            shown={shown}
          />
        )}
      </div>
    </React.Fragment>
  )
}
export default App