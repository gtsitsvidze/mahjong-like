export const initialState = {
  matched: [],
  clicked: undefined,
  flipped: []
}

const gameReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CLICKED':
      return { ...state, clicked: action.payload }
    case 'CLEAR_CLICKED':
      return {...state, clicked: undefined}
    case 'ADD_FLIPPED':
      return { ...state, flipped: [...state.flipped, action.payload] }
    case 'SET_FLIPPED':
      return { ...state, flipped: action.payload }
    case 'CLEAR_FLIPPED':
      return { ...state, flipped: [] }
    case 'ADD_MATCHED':
      return { ...state, matched: [...state.matched, ...action.payload] }
    default:
      return state
  }
}

export default gameReducer