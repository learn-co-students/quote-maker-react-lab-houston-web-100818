export default (state = [], action) => {

  let idx;

  const getIndexWithID = (id) => {
    return state.findIndex( quote => {
      quote.id === id
    })
  }

  switch (action.type) {
    case "ADD_QUOTE":
      return [ ...state, action.quote ]
    break;

    case "REMOVE_QUOTE":
      idx = getIndexWithID(action.quoteId);
      // why is idx undefined?
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
      break;
    
    case "UPVOTE_QUOTE":
      idx = getIndexWithID(action.quoteId);
      state[idx] = { ...state[idx], votes: state[idx].votes + 1}

      return [ ...state ]
    break;
    
    case "DOWNVOTE_QUOTE":
      idx = getIndexWithID(action.quoteId);
      state[idx] = { ...state[idx], votes: state[idx].votes - 1 }
     
      return [ ...state ]
    break;
  
    default:
      return state;
    break;
  }
}
