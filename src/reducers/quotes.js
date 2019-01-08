function quotesReducer(state = [], action) {
  const idx = state.indexOf(state.find(quote => quote.id === action.quoteId));
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
      break;
    case "UPVOTE_QUOTE":
      console.log(state);
      let quotes = state;
      let quote = state[idx];
      quote.votes++;
      return [...state.slice(0, idx), quote, ...state.slice(idx + 1)];
      break;

    case "DOWNVOTE_QUOTE":
      if (state[idx].votes > 0) {
        let quotes = state;
        let quote = state[idx];
        quote.votes--;
        return [...state.slice(0, idx), quote, ...state.slice(idx + 1)];
        break;
      } else {
        return state;
      }

      break;

    case "REMOVE_QUOTE":
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
      break;
  }
  return state;
}
export default quotesReducer;
